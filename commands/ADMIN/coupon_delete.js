/*CMD
  command: coupon_delete
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

var c=Bot.getProperty("store_coupons")||[],i=Number(params);if(c[i])c.splice(i,1);Bot.setProperty("store_coupons",c,"json");Bot.runCommand("admin_coupons");
