/*CMD
  command: admin_product_view
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

var ps=Bot.getProperty("store_products")||[],p=null;for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(params)){p=ps[i];break;}if(!p){Bot.runCommand("admin_products");return;}var s=Bot.getProperty("store_settings")||{symbol:"؋"};Bot.sendInlineKeyboard([[{title:p.active===false?"🟢 Enable":"🔴 Disable",command:"admin_product_toggle "+p.id},{title:"⭐ Featured",command:"admin_featured "+p.id}],[{title:"➕ Stock",command:"admin_stock "+p.id+"|1"},{title:"➖ Stock",command:"admin_stock "+p.id+"|-1"}],[{title:"⬅️ Products",command:"admin_products"}]],"🛍 *"+p.name+"*\n━━━━━━━━━━━━━━\n\n🆔 `"+p.id+"`\n🏷 "+p.sku+"\n💰 "+s.symbol+p.price+"\n📦 Stock: *"+p.stock+"*",{parse_mode:"Markdown"});
