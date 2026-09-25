/*CMD
  command: admin_product_toggle
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

var ps=Bot.getProperty("store_products")||[];for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(params)){ps[i].active=ps[i].active===false;break;}Bot.setProperty("store_products",ps,"json");Bot.runCommand("admin_product_view "+params);
