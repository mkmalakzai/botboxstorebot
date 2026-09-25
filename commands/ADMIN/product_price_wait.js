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

var n=Number(message);if(isNaN(n)||n<0){Bot.sendMessage("⚠️ Send a valid numeric price.");Bot.runCommand("product_price_wait");return;}var d=User.getProperty("product_draft")||{};d.price=n;User.setProperty("product_draft",d,"json");Bot.sendMessage("📦 *Step 4/6 — STOCK*\n\nSend available stock quantity.",{parse_mode:"Markdown"});Bot.runCommand("product_stock_wait");
