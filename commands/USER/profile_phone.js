/*CMD
  command: profile_phone
  help:
  need_reply: false
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"profile"}]],"📱 *EDIT PHONE*\n\nSend your phone number.",{parse_mode:"Markdown"});Bot.runCommand("profile_phone_wait");
