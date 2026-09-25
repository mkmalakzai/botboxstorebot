import { store } from './store.js';
import { kb,msg } from './ui.js';

export async function showAdmin(bot,chatId,messageId){
  const opts={parse_mode:'Markdown',reply_markup:{inline_keyboard:kb.admin}};
  if(messageId){
    return bot.editMessageText(msg.admin,{chat_id:chatId,message_id:messageId,...opts})
      .catch(()=>bot.sendMessage(chatId,msg.admin,opts));
  }
  return bot.sendMessage(chatId,msg.admin,opts);
}

export function seedOwners(ownerIds=[]){
  ownerIds.forEach(id=>store.addAdmin(id));
}
