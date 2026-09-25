/*CMD
  command: product
  help:
  need_reply: false
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var ps=Bot.getProperty("store_products")||[],p=null;
for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(params)){p=ps[i];break;}
if(!p){Bot.runCommand("shop");return;}

var s=Bot.getProperty("store_settings")||{symbol:"؋"},stock=Number(p.stock||0);
var t="🛍 *"+p.name+"*\n━━━━━━━━━━━━━━\n\n"+(p.description||"No description.")+"\n\n💰 *Price:* "+s.symbol+(p.sale_price||p.price)+"\n📦 *Stock:* "+stock+"\n🏷 *SKU:* "+(p.sku||"—");
var rows=[];
if(stock>0)rows.push([{text:"➕ Add to Cart",callback_data:"cart_add "+p.id},{text:"❤️ Wishlist",callback_data:"wishlist_add "+p.id}]);
else rows.push([{text:"🔔 Save for Restock",callback_data:"wishlist_add "+p.id}]);
rows.push([{text:"⬅️ Shop",callback_data:"shop"},{text:"🛒 Cart",callback_data:"cart"}]);
var kb={inline_keyboard:rows};

if(p.photos&&p.photos.length){
  Api.sendPhoto({chat_id:user.telegramid,photo:p.photos[0],caption:t,parse_mode:"Markdown",reply_markup:kb});
}else{
  var b=[];
  if(stock>0)b.push([{title:"➕ Add to Cart",command:"cart_add "+p.id},{title:"❤️ Wishlist",command:"wishlist_add "+p.id}]);
  else b.push([{title:"🔔 Save for Restock",command:"wishlist_add "+p.id}]);
  b.push([{title:"⬅️ Shop",command:"shop"},{title:"🛒 Cart",command:"cart"}]);
  Bot.sendInlineKeyboard(b,t,{parse_mode:"Markdown"});
}