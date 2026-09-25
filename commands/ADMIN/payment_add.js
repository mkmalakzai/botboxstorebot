/*CMD
  command: payment_add
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

User.setProperty("payment_draft",{},"json");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_payments"}]],"➕ *NEW PAYMENT METHOD*\n━━━━━━━━━━━━━━\n\nSend the payment method name.\n\nExample: USDT BEP20",{parse_mode:"Markdown"});Bot.runCommand("payment_name_wait");
