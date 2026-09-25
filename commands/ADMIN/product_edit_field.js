/*CMD
  command: product_edit_field
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}User.setProperty("edit_product_field",params,"string");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_product_view "+User.getProperty("edit_product_id")}]],"Send the new value for *"+params+"*.",{parse_mode:"Markdown"});Bot.runCommand("product_edit_wait");
