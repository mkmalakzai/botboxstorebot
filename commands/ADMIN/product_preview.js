/*CMD
  command: product_preview
  help:
  need_reply: false
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;
for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;
if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}

var d=User.getProperty("product_draft")||{},s=Bot.getProperty("store_settings")||{symbol:"؋"};
if(!d.name){Bot.runCommand("admin_products");return;}

var caption="👀 *PRODUCT PREVIEW*\n━━━━━━━━━━━━━━\n\n🛍 *"+d.name+"*\n"+(d.description||"")+"\n\n💰 "+s.symbol+d.price+(d.sale_price?" → "+s.symbol+d.sale_price:"")+"\n📦 Stock: "+d.stock+"\n🏷 SKU: "+d.sku+"\n🎨 Variants: "+((d.variants||[]).length)+"\n🖼 Photos: "+((d.photos||[]).length);
var kb={inline_keyboard:[
  [{text:"✅ Publish Product",callback_data:"product_publish"}],
  [{text:"❌ Cancel",callback_data:"admin_products"}]
]};

if(d.photos&&d.photos.length){
  Api.sendPhoto({chat_id:user.telegramid,photo:d.photos[0],caption:caption,parse_mode:"Markdown",reply_markup:kb});
}else{
  Bot.sendInlineKeyboard([[{title:"✅ Publish Product",command:"product_publish"}],[{title:"❌ Cancel",command:"admin_products"}]],caption,{parse_mode:"Markdown"});
}