/*CMD
  command: shop
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

var s=Bot.getProperty("store_settings")||{symbol:"؋"},cs=Bot.getProperty("store_categories")||[],ps=Bot.getProperty("store_products")||[],b=[];for(var i=0;i<cs.length;i++)if(cs[i].active!==false)b.push([{title:"🗂 "+cs[i].name,command:"category "+cs[i].id}]);if(!b.length)for(var j=0;j<ps.length&&j<20;j++)if(ps[j].active!==false)b.push([{title:(ps[j].featured?"⭐ ":"")+ps[j].name+" • "+s.symbol+(ps[j].sale_price||ps[j].price),command:"product "+ps[j].id}]);b.push([{title:"🛒 Cart",command:"cart"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"🛍 *STORE CATALOG*\n━━━━━━━━━━━━━━\n\nChoose a category or product below.",{parse_mode:"Markdown"});
