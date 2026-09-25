/*CMD
  command: category
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

var s=Bot.getProperty("store_settings")||{symbol:"؋"},ps=Bot.getProperty("store_products")||[],b=[];for(var i=0;i<ps.length;i++)if(String(ps[i].category_id)==String(params)&&ps[i].active!==false)b.push([{title:ps[i].name+" • "+s.symbol+(ps[i].sale_price||ps[i].price),command:"product "+ps[i].id}]);b.push([{title:"⬅️ Categories",command:"shop"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"🗂 *PRODUCTS*\n━━━━━━━━━━━━━━\n\n"+(b.length==1?"No products are available yet.":"Select a product."),{parse_mode:"Markdown"});
