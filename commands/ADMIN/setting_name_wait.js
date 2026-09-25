/*CMD
  command: setting_name_wait
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

if(!message||message.length<2){Bot.sendMessage("⚠️ Send a valid name.");Bot.runCommand("setting_name_wait");return;}var s=Bot.getProperty("store_settings")||{};s.name=message.trim();Bot.setProperty("store_settings",s,"json");Bot.runCommand("admin_settings");
