/*CMD
  command: admin_add_wait
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

if(Bot.getProperty("owner_id")!=user.telegramid)return;var id=Number(message);if(!id||id<=0){Bot.sendMessage("⚠️ Send a valid numeric Telegram ID.");Bot.runCommand("admin_add_wait");return;}var a=Bot.getProperty("store_admins")||[],f=false;for(var i=0;i<a.length;i++)if(a[i].user_id==id)f=true;if(!f)a.push({user_id:id,added_at:new Date().toISOString()});Bot.setProperty("store_admins",a,"json");Bot.runCommand("admin_admins");
