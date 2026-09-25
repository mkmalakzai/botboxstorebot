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

Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"📣 *BROADCAST CENTER*\n━━━━━━━━━━━━━━\n\nSend with:\n`broadcast_send Your message`",{parse_mode:"Markdown"});
