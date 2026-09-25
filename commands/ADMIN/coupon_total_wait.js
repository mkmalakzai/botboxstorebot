/*CMD
  command: coupon_total_wait
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

var n=Number(message);if(isNaN(n)||n<1){Bot.runCommand("coupon_total_wait");return;}var d=User.getProperty("coupon_draft")||{};d.total_limit=Math.floor(n);User.setProperty("coupon_draft",d,"json");Bot.sendMessage("👤 Send per-user usage limit.");Bot.runCommand("coupon_user_wait");
