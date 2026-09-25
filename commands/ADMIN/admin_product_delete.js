/*CMD
  command: admin_product_delete
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

var o=Bot.getProperty("owner_id"),a=Bot.getProperty("store_admins")||[],ok=o==user.telegramid;for(var i=0;i<a.length;i++)if(a[i].user_id==user.telegramid)ok=true;if(!ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ps=Bot.getProperty("store_products")||[],out=[];for(var i=0;i<ps.length;i++)if(String(ps[i].id)!=String(params))out.push(ps[i]);Bot.setProperty("store_products",out,"json");Bot.sendInlineKeyboard([[{title:"🛍 Products",command:"admin_products"}]],"✅ Product deleted.");
