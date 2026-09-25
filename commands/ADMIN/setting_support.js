/*CMD
  command: setting_support
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_settings"}]],"💬 *SUPPORT CONTACT*\n\nSend support username, phone or contact text.",{parse_mode:"Markdown"});Bot.runCommand("setting_support_wait");
