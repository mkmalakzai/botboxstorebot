/*CMD
  command: setting_support_wait
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

if(!message){Bot.runCommand("setting_support_wait");return;}var s=Bot.getProperty("store_settings")||{};s.support=message.trim();Bot.setProperty("store_settings",s,"json");Bot.runCommand("admin_settings");
