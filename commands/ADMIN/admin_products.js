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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ps=Bot.getProperty("store_products")||[],b=[[{title:"➕ Add Product",command:"admin_product_add"}]];for(var i=0;i<ps.length&&i<30;i++)b.push([{title:(ps[i].active===false?"🔴 ":"🟢 ")+ps[i].name,command:"admin_product_view "+ps[i].id}]);b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"🛍 *PRODUCT MANAGEMENT*\n━━━━━━━━━━━━━━\n\nProducts: *"+ps.length+"*",{parse_mode:"Markdown"});
