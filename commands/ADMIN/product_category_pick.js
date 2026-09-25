/*CMD
  command: product_category_pick
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

var d=User.getProperty("product_draft")||{};d.category_id=params;User.setProperty("product_draft",d,"json");var s=Bot.getProperty("store_settings")||{symbol:"؋"};Bot.sendInlineKeyboard([[{title:"✅ Publish Product",command:"product_publish"}],[{title:"❌ Cancel",command:"admin_products"}]],"👀 *PRODUCT PREVIEW*\n━━━━━━━━━━━━━━\n\n🛍 *"+d.name+"*\n"+d.description+"\n\n💰 "+s.symbol+d.price+"\n📦 Stock: "+d.stock+"\n🏷 SKU: "+d.sku+"\n\nPublish this product?",{parse_mode:"Markdown"});
