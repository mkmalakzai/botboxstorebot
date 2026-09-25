/*CMD
  command: delivery_fixed_start
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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_delivery"}]],"💵 *FIXED DELIVERY FEE*\n\nSend the fee amount.",{parse_mode:"Markdown"});Bot.runCommand("delivery_fixed_wait");
