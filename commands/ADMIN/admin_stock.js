/*CMD
  command: admin_stock
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

var x=params.split("|"),ps=Bot.getProperty("store_products")||[];for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(x[0])){ps[i].stock=Math.max(0,Number(ps[i].stock||0)+Number(x[1]));break;}Bot.setProperty("store_products",ps,"json");Bot.runCommand("admin_product_view "+x[0]);
