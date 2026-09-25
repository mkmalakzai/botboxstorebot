/*CMD
  command: admin_review_action
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var x=params.split("|"),r=Bot.getProperty("store_reviews")||[],i=Number(x[0]);if(r[i])r[i].status=x[1];Bot.setProperty("store_reviews",r,"json");Bot.runCommand("admin_reviews");
