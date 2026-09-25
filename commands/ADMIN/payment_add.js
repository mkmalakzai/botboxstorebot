/*CMD
  command: payment_add
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}User.setProperty("payment_draft",{},"json");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_payments"}]],"➕ *NEW PAYMENT METHOD*\n\nSend the payment method name.",{parse_mode:"Markdown"});Bot.runCommand("payment_name_wait");
