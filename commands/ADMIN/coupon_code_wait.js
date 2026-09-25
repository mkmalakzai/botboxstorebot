/*CMD
  command: coupon_code_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

if(!message){Bot.runCommand("coupon_code_wait");return;}User.setProperty("coupon_draft",{code:message.trim().toUpperCase()},"json");Bot.sendInlineKeyboard([[{title:"📊 Percentage",command:"coupon_type percent"},{title:"💵 Fixed",command:"coupon_type fixed"}],[{title:"🚚 Free Delivery",command:"coupon_type free_delivery"},{title:"❌ Cancel",command:"admin_coupons"}]],"Choose coupon type.");
