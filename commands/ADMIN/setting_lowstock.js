/*CMD
  command: setting_lowstock
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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_settings"}]],"📦 *LOW STOCK ALERT*\n\nSend threshold quantity. Example: *5*",{parse_mode:"Markdown"});Bot.runCommand("setting_lowstock_wait");
