/*CMD
  command: admin_category_delete
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

var o=Bot.getProperty("owner_id"),a=Bot.getProperty("store_admins")||[],ok=o==user.telegramid;for(var i=0;i<a.length;i++)if(a[i].user_id==user.telegramid)ok=true;if(!ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var cs=Bot.getProperty("store_categories")||[],out=[];for(var i=0;i<cs.length;i++)if(String(cs[i].id)!=String(params))out.push(cs[i]);Bot.setProperty("store_categories",out,"json");Bot.runCommand("admin_categories");
