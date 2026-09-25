/*CMD
  command: address_add
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

User.setProperty("address_return","profile","string");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"profile"}]],"📍 *ADD NEW ADDRESS*\n━━━━━━━━━━━━━━\n\nFirst, send a short label for this address.\n\nExample: *Home* or *Office*",{parse_mode:"Markdown"});Bot.runCommand("address_label_wait");
