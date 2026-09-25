/*CMD
  command: currency_pick
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

var map={AFN:"؋",USD:"$",PKR:"Rs",INR:"₹"},s=Bot.getProperty("store_settings")||{};if(!map[params]){Bot.runCommand("setting_currency");return;}s.currency=params;s.symbol=map[params];Bot.setProperty("store_settings",s,"json");Bot.runCommand("admin_settings");
