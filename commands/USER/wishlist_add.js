/*CMD
  command: wishlist_add
  help:
  need_reply: false
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var w=User.getProperty("wishlist")||[];if(w.indexOf(params)<0)w.push(params);User.setProperty("wishlist",w,"json");var ps=Bot.getProperty("store_products")||[],p=null;for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(params)){p=ps[i];break;}if(p&&Number(p.stock||0)<=0){var key="wishlist_users_"+params,ids=Bot.getProperty(key)||[];if(ids.indexOf(user.telegramid)<0)ids.push(user.telegramid);Bot.setProperty(key,ids,"json");}Bot.runCommand("wishlist");
