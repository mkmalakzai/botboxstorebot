/*CMD
  command: coupon_add
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

User.setProperty("coupon_draft",{},"json");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_coupons"}]],"🎟 *NEW COUPON*\n\nSend coupon code.",{parse_mode:"Markdown"});Bot.runCommand("coupon_code_wait");
