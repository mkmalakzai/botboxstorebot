import TelegramBot from 'node-telegram-bot-api';
import { config,assertConfig } from './config.js';
import { store } from './store.js';
import { kb,msg,money } from './ui.js';
import { showAdmin,seedOwners } from './admin.js';
import { cartTotal } from './services/cart.js';

assertConfig();
seedOwners(config.ownerIds);
store.patchSettings({
  storeName:config.defaults.storeName,
  currency:config.defaults.currency,
  currencySymbol:config.defaults.currencySymbol
});

const bot=new TelegramBot(config.botToken,{polling:true});

async function editOrSend(chatId,messageId,text,keyboard){
  const opts={parse_mode:'Markdown',reply_markup:{inline_keyboard:keyboard}};
  if(messageId){
    return bot.editMessageText(text,{chat_id:chatId,message_id:messageId,...opts})
      .catch(()=>bot.sendMessage(chatId,text,opts));
  }
  return bot.sendMessage(chatId,text,opts);
}

bot.onText(/^\/start(?:\s+(.+))?$/,async m=>{
  const u=store.ensureUser(m.from);
  const s=store.getSettings();
  await bot.sendMessage(
    m.chat.id,
    msg.welcome(u.firstName,s.storeName),
    {parse_mode:'Markdown',reply_markup:{inline_keyboard:kb.main}}
  );
});

bot.onText(/^\/admin$/,async m=>{
  if(!store.isAdmin(m.from.id)){
    return bot.sendMessage(
      m.chat.id,
      '⛔ *ACCESS DENIED*\n\nYou do not have permission to open the admin panel.',
      {parse_mode:'Markdown',reply_markup:{inline_keyboard:kb.backMain}}
    );
  }
  return showAdmin(bot,m.chat.id);
});

bot.on('callback_query',async q=>{
  const chatId=q.message.chat.id;
  const mid=q.message.message_id;
  const data=q.data;
  await bot.answerCallbackQuery(q.id).catch(()=>{});
  const s=store.getSettings();

  if(data==='main'){
    return editOrSend(chatId,mid,msg.welcome(q.from.first_name||'Customer',s.storeName),kb.main);
  }

  if(data==='shop'){
    const products=store.listProducts();
    if(!products.length){
      return editOrSend(
        chatId,
        mid,
        '🛍 *SHOP*\n━━━━━━━━━━━━━━\nNo products are available right now.\n\nPlease check again soon. ✨',
        kb.backMain
      );
    }

    const rows=products.slice(0,20).map(p=>[
      {text:(p.featured?'⭐ ':'')+p.name+' — '+money(p.salePrice??p.price,s.currencySymbol),callback_data:'product:'+p.id}
    ]);
    rows.push(...kb.backMain);
    return editOrSend(chatId,mid,'🛍 *SHOP*\n━━━━━━━━━━━━━━\nChoose a product to view details.',rows);
  }

  if(data==='cart'){
    const cart=store.getCart(q.from.id);
    if(!cart.length){
      return editOrSend(
        chatId,
        mid,
        msg.emptyCart,
        [[{text:'🛍 Browse Products',callback_data:'shop'}],...kb.backMain]
      );
    }
    return editOrSend(
      chatId,
      mid,
      '🛒 *YOUR CART*\n━━━━━━━━━━━━━━\nItems: *'+cart.reduce((a,b)=>a+b.qty,0)+'*\nTotal: *'+money(cartTotal(q.from.id),s.currencySymbol)+'*',
      [[{text:'✅ Checkout',callback_data:'checkout'}],...kb.backMain]
    );
  }

  if(data==='orders') return editOrSend(chatId,mid,'📦 *MY ORDERS*\n━━━━━━━━━━━━━━\nYour order history and live statuses will appear here.',kb.backMain);
  if(data==='wishlist') return editOrSend(chatId,mid,'❤️ *MY WISHLIST*\n━━━━━━━━━━━━━━\nSave products here and receive back-in-stock notifications when enabled.',kb.backMain);
  if(data==='profile') return editOrSend(chatId,mid,'👤 *MY PROFILE*\n━━━━━━━━━━━━━━\nManage your phone number and saved delivery addresses here.',kb.backMain);
  if(data==='help') return editOrSend(chatId,mid,msg.help,kb.backMain);

  if(data.startsWith('admin_')){
    if(!store.isAdmin(q.from.id)){
      return editOrSend(chatId,mid,'⛔ *ACCESS DENIED*',kb.backMain);
    }
    if(data==='admin_dashboard') return showAdmin(bot,chatId,mid);

    const title=data.replace('admin_','').replaceAll('_',' ').toUpperCase();
    return editOrSend(
      chatId,
      mid,
      '🛡 *'+title+'*\n━━━━━━━━━━━━━━\nThis module is connected to the central store architecture and is ready for its management workflow.',
      [[{text:'⬅️ Admin Panel',callback_data:'admin_dashboard'}],[{text:'🏠 Main Menu',callback_data:'main'}]]
    );
  }
});

bot.on('polling_error',err=>console.error('[polling]',err.message));
console.log('TPL-003 Store Bot is running');
