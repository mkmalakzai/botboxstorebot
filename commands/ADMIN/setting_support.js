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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_settings"}]],"💬 *SUPPORT CONTACT*\n\nSend support username, phone or contact text.",{parse_mode:"Markdown"});Bot.runCommand("setting_support_wait");
