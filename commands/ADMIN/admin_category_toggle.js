/*CMD
  command: admin_category_toggle
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var cs=Bot.getProperty("store_categories")||[];for(var i=0;i<cs.length;i++)if(String(cs[i].id)==String(params)){cs[i].active=cs[i].active===false;break;}Bot.setProperty("store_categories",cs,"json");Bot.runCommand("admin_categories");
