/*CMD
  command: setting_name
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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_settings"}]],"🏪 *STORE NAME*\n\nSend the new store name.",{parse_mode:"Markdown"});Bot.runCommand("setting_name_wait");
