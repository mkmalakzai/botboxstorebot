/*CMD
  command: admin_coupons
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

var c=Bot.getProperty("store_coupons")||[],t="🎟 *COUPONS & PROMOTIONS*\n━━━━━━━━━━━━━━\n\nActive records: *"+c.length+"*\n\nAdd with:\n`coupon_save CODE | percent/fixed | VALUE | MIN_ORDER | TOTAL_LIMIT | PER_USER_LIMIT`";Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],t,{parse_mode:"Markdown"});
