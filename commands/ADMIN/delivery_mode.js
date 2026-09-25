/*CMD
  command: delivery_mode
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

var s=Bot.getProperty("store_settings")||{};s.delivery=s.delivery||{};s.delivery.mode=params;Bot.setProperty("store_settings",s,"json");Bot.runCommand("admin_delivery");
