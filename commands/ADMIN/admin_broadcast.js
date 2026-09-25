/*CMD
  command: admin_broadcast
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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_panel"}]],"📣 *NEW BROADCAST*\n━━━━━━━━━━━━━━\n\nSend the message you want to broadcast to registered customers.",{parse_mode:"Markdown"});Bot.runCommand("broadcast_wait");
