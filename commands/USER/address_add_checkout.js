/*CMD
  command: address_add_checkout
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

User.setProperty("address_return","checkout","string");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"checkout"}]],"📍 *NEW DELIVERY ADDRESS*\n━━━━━━━━━━━━━━\n\nFirst, send a short label.\n\nExample: *Home* or *Office*",{parse_mode:"Markdown"});Bot.runCommand("address_label_wait");
