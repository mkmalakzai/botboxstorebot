/*CMD
  command: delivery_fixed_wait
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

var n=Number(message);if(isNaN(n)||n<0){Bot.sendMessage("⚠️ Send a valid amount.");Bot.runCommand("delivery_fixed_wait");return;}var s=Bot.getProperty("store_settings")||{};s.delivery=s.delivery||{};s.delivery.mode="fixed";s.delivery.fixed_fee=n;Bot.setProperty("store_settings",s,"json");Bot.runCommand("admin_delivery");
