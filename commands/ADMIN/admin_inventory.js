/*CMD
  command: admin_inventory
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ps=Bot.getProperty("store_products")||[],s=Bot.getProperty("store_settings")||{low_stock:5},b=[],n=0;for(var i=0;i<ps.length;i++){if(Number(ps[i].stock||0)<=Number(s.low_stock||5)){n++;b.push([{title:"⚠️ "+ps[i].name+" • "+ps[i].stock,command:"admin_product_view "+ps[i].id}]);}}b.push([{title:"🛍 All Products",command:"admin_products"},{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"📦 *INVENTORY CENTER*\n━━━━━━━━━━━━━━\n\nLow-stock products: *"+n+"*",{parse_mode:"Markdown"});
