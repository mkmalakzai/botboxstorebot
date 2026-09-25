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

User.setProperty("input_mode","address","string");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"profile"}]],"📍 *ADD DELIVERY ADDRESS*\n━━━━━━━━━━━━━━\n\nSend:\n*Label | Phone | Full Address*\n\nExample: Home | 0700000000 | Street, City",{parse_mode:"Markdown"});
