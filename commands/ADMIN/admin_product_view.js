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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ps=Bot.getProperty("store_products")||[],p=null;for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(params)){p=ps[i];break;}if(!p){Bot.runCommand("admin_products");return;}var s=Bot.getProperty("store_settings")||{symbol:"؋"};Bot.sendInlineKeyboard([[{title:p.active===false?"🟢 Enable":"🔴 Disable",command:"admin_product_toggle "+p.id},{title:p.featured?"☆ Unfeature":"⭐ Featured",command:"admin_featured "+p.id}],[{title:"📦 Set Stock",command:"admin_stock_set "+p.id},{title:"✏️ Edit Product",command:"admin_product_edit "+p.id}],[{title:"⬅️ Products",command:"admin_products"}]],"🛍 *"+p.name+"*\n━━━━━━━━━━━━━━\n\n🆔 "+p.id+"\n🏷 "+(p.sku||"—")+"\n💰 "+s.symbol+p.price+(p.sale_price?" → "+s.symbol+p.sale_price:"")+"\n📦 Stock: *"+p.stock+"*\n🎨 Variants: "+((p.variants||[]).length)+"\n🖼 Photos: "+((p.photos||[]).length),{parse_mode:"Markdown"});
