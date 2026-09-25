/*CMD
  command: setting
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

var x=params.split("|"),k=(x[0]||"").trim(),s=Bot.getProperty("store_settings")||{};if(k=="name")s.name=(x[1]||"").trim();else if(k=="currency"){s.currency=(x[1]||"").trim();s.symbol=(x[2]||"").trim();}else if(k=="support")s.support=(x[1]||"").trim();else if(k=="low_stock")s.low_stock=Number(x[1]);else{Bot.sendMessage("⚠️ Unknown setting.");return;}Bot.setProperty("store_settings",s,"json");Bot.runCommand("admin_settings");
