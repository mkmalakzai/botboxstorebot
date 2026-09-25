/*CMD
  command: product_description_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var d=User.getProperty("product_draft")||{};d.description=(message||"").trim();User.setProperty("product_draft",d,"json");Bot.sendMessage("💰 Step 3/10 — Send regular price.");Bot.runCommand("product_price_wait");
