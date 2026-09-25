/*CMD
  command: product_edit_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var id=User.getProperty("edit_product_id"),field=User.getProperty("edit_product_field"),ps=Bot.getProperty("store_products")||[],val=message;for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(id)){if(field=="price"||field=="sale_price"){var n=Number(message);if(isNaN(n)||n<0){Bot.sendMessage("⚠️ Send a valid number.");Bot.runCommand("product_edit_wait");return;}val=(field=="sale_price"&&n===0)?null:n;}ps[i][field]=field=="description"||field=="name"||field=="sku"?String(message).trim():val;break;}Bot.setProperty("store_products",ps,"json");User.setProperty("edit_product_field",null);Bot.runCommand("admin_product_view "+id);
