/*CMD
  command: product_discount_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var n=Number(message),d=User.getProperty("product_draft")||{};if(isNaN(n)||n<0||n>=Number(d.price||0)&&n!==0){Bot.sendMessage("⚠️ Send 0 or a discount price lower than regular price.");Bot.runCommand("product_discount_wait");return;}d.sale_price=n===0?null:n;User.setProperty("product_draft",d,"json");Bot.sendMessage("📦 Step 5/10 — Send total stock quantity.");Bot.runCommand("product_stock_wait");
