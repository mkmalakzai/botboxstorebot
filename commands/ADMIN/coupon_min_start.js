/*CMD
  command: coupon_min_start
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

Bot.sendMessage("🛒 Send minimum order amount. Send *0* for none.",{parse_mode:"Markdown"});Bot.runCommand("coupon_min_wait");
