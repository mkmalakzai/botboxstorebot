/*CMD
  command: admin_customers
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

var ids=Bot.getProperty("customer_ids")||[];Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"👥 *CUSTOMERS*\n━━━━━━━━━━━━━━\n\nRegistered customers: *"+ids.length+"*",{parse_mode:"Markdown"});
