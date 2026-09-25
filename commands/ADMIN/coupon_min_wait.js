/*CMD
  command: coupon_min_wait
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

var n=Number(message);if(isNaN(n)||n<0){Bot.runCommand("coupon_min_wait");return;}var d=User.getProperty("coupon_draft")||{};d.min_order=n;User.setProperty("coupon_draft",d,"json");Bot.sendMessage("🔢 Send total usage limit.");Bot.runCommand("coupon_total_wait");
