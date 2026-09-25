/*CMD
  command: admin_stock_set_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var n=Number(message),id=User.getProperty("stock_product_id");if(isNaN(n)||n<0){Bot.sendMessage("⚠️ Send a valid quantity.");Bot.runCommand("admin_stock_set_wait");return;}var ps=Bot.getProperty("store_products")||[];for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(id)){ps[i].stock=Math.floor(n);if(ps[i].stock>0&&ps[i].was_out_of_stock){var wl=Bot.getProperty("wishlist_users_"+id)||[];for(var j=0;j<wl.length;j++)Api.sendMessage({chat_id:wl[j],text:"🔔 "+ps[i].name+" is back in stock."});ps[i].was_out_of_stock=false;}break;}Bot.setProperty("store_products",ps,"json");User.setProperty("stock_product_id",null);Bot.runCommand("admin_product_view "+id);
