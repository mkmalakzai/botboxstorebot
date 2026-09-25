/*CMD
  command: coupon_apply
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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"checkout_review"}]],"🎟 *APPLY COUPON*\n\nSend your coupon code.",{parse_mode:"Markdown"});Bot.runCommand("coupon_apply_wait");
