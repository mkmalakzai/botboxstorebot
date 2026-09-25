/*CMD
  command: coupon_toggle
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

var c=Bot.getProperty("store_coupons")||[],i=Number(params);if(c[i])c[i].active=!c[i].active;Bot.setProperty("store_coupons",c,"json");Bot.runCommand("coupon_view "+i);
