/*CMD
  command: admin_featured
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ps=Bot.getProperty("store_products")||[];for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(params)){ps[i].featured=!ps[i].featured;break;}Bot.setProperty("store_products",ps,"json");Bot.runCommand("admin_product_view "+params);
