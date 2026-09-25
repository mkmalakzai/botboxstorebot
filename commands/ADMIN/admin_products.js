/*CMD
  command: admin_products
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

var ps=Bot.getProperty("store_products")||[],b=[[{title:"➕ Add Product",command:"admin_product_add"}]];for(var i=0;i<ps.length&&i<20;i++)b.push([{title:(ps[i].active===false?"🔴 ":"🟢 ")+ps[i].name,command:"admin_product_view "+ps[i].id}]);b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"🛍 *PRODUCT MANAGEMENT*\n━━━━━━━━━━━━━━\n\nProducts: *"+ps.length+"*",{parse_mode:"Markdown"});
