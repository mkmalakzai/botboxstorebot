/*CMD
  command: product_publish
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var d=User.getProperty("product_draft");if(!d||!d.name){Bot.runCommand("admin_products");return;}var ps=Bot.getProperty("store_products")||[],id="PRD-"+new Date().getTime();d.id=id;d.featured=false;d.active=true;d.created_at=new Date().toISOString();ps.push(d);Bot.setProperty("store_products",ps,"json");User.setProperty("product_draft",null);Bot.sendInlineKeyboard([[{title:"🛍 Products",command:"admin_products"},{title:"➕ Add Another",command:"admin_product_add"}]],"✅ *PRODUCT PUBLISHED*\n\n*"+d.name+"* is live.",{parse_mode:"Markdown"});
