/*CMD
  command: payment_toggle
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ms=Bot.getProperty("payment_methods")||[];for(var i=0;i<ms.length;i++)if(String(ms[i].id)==String(params)){ms[i].enabled=!ms[i].enabled;break;}Bot.setProperty("payment_methods",ms,"json");Bot.runCommand("admin_payments");
