/*CMD
  command: admin_remove
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

if(Bot.getProperty("owner_id")!=user.telegramid)return;var id=Number(params),a=Bot.getProperty("store_admins")||[],n=[];for(var i=0;i<a.length;i++)if(a[i].user_id!=id)n.push(a[i]);Bot.setProperty("store_admins",n,"json");Bot.runCommand("admin_admins");
