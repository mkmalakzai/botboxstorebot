/*CMD
  command: setting_lowstock_wait
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

var n=Number(message);if(isNaN(n)||n<0){Bot.sendMessage("⚠️ Send a valid number.");Bot.runCommand("setting_lowstock_wait");return;}var s=Bot.getProperty("store_settings")||{};s.low_stock=Math.floor(n);Bot.setProperty("store_settings",s,"json");Bot.runCommand("admin_settings");
