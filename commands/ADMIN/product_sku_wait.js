/*CMD
  command: product_sku_wait
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

var d=User.getProperty("product_draft")||{};d.sku=message.trim();User.setProperty("product_draft",d,"json");var cs=Bot.getProperty("store_categories")||[],b=[];for(var i=0;i<cs.length;i++)if(cs[i].active!==false)b.push([{title:"🗂 "+cs[i].name,command:"product_category_pick "+cs[i].id}]);b.push([{title:"❌ Cancel",command:"admin_products"}]);Bot.sendInlineKeyboard(b,"🗂 *Step 6/6 — CATEGORY*\n━━━━━━━━━━━━━━\n\nChoose the product category.",{parse_mode:"Markdown"});
