/*CMD
  command: product_price_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var n=Number(message);if(isNaN(n)||n<0){Bot.sendMessage("⚠️ Send a valid price.");Bot.runCommand("product_price_wait");return;}var d=User.getProperty("product_draft")||{};d.price=n;User.setProperty("product_draft",d,"json");Bot.sendMessage("🏷 Step 4/10 — Send discount price or 0 for none.");Bot.runCommand("product_discount_wait");
