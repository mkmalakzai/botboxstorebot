/*CMD
  command: admin_stock_set
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}User.setProperty("stock_product_id",params,"string");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_product_view "+params}]],"📦 *SET STOCK*\n\nSend the new stock quantity.",{parse_mode:"Markdown"});Bot.runCommand("admin_stock_set_wait");
