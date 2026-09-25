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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var d=User.getProperty("product_draft")||{};d.sku=(message||"").trim();User.setProperty("product_draft",d,"json");var cs=Bot.getProperty("store_categories")||[],b=[];for(var i=0;i<cs.length;i++)if(cs[i].active!==false)b.push([{title:"🗂 "+cs[i].name,command:"product_category_pick "+cs[i].id}]);b.push([{title:"❌ Cancel",command:"admin_products"}]);Bot.sendInlineKeyboard(b,"🗂 Step 7/10 — Choose category.");
