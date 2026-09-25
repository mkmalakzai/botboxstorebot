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

var d=User.getProperty("product_draft");if(!d||!d.name){Bot.runCommand("admin_products");return;}var ps=Bot.getProperty("store_products")||[],id="PRD-"+new Date().getTime();d.id=id;d.sale_price=null;d.featured=false;d.active=true;d.variants=[];d.photos=[];d.created_at=new Date().toISOString();ps.push(d);Bot.setProperty("store_products",ps,"json");User.setProperty("product_draft",null);Bot.sendInlineKeyboard([[{title:"🛍 Products",command:"admin_products"},{title:"➕ Add Another",command:"admin_product_add"}]],"✅ *PRODUCT PUBLISHED*\n━━━━━━━━━━━━━━\n\n*"+d.name+"* is now available in your store.",{parse_mode:"Markdown"});
