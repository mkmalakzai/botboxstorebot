/*CMD
  command: admin_product_delete_confirm
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

var o=Bot.getProperty("owner_id"),a=Bot.getProperty("store_admins")||[],ok=o==user.telegramid;for(var i=0;i<a.length;i++)if(a[i].user_id==user.telegramid)ok=true;if(!ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ps=Bot.getProperty("store_products")||[],p=null;for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(params)){p=ps[i];break;}if(!p){Bot.runCommand("admin_products");return;}Bot.sendInlineKeyboard([[{title:"🗑 Yes, Delete",command:"admin_product_delete "+p.id},{title:"❌ Cancel",command:"admin_product_view "+p.id}]],"⚠️ *DELETE PRODUCT?*\n\n"+p.name+"\n\nThis cannot be undone.",{parse_mode:"Markdown"});
