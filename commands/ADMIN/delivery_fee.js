/*CMD
  command: delivery_fee
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

var n=Number(params);if(isNaN(n)||n<0)return;var s=Bot.getProperty("store_settings")||{};s.delivery=s.delivery||{};s.delivery.fixed_fee=n;Bot.setProperty("store_settings",s,"json");Bot.runCommand("admin_delivery");
