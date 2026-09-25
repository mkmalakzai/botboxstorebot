/*CMD
  command: product_stock_wait
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

var n=Number(message);if(isNaN(n)||n<0){Bot.sendMessage("⚠️ Send a valid stock quantity.");Bot.runCommand("product_stock_wait");return;}var d=User.getProperty("product_draft")||{};d.stock=Math.floor(n);User.setProperty("product_draft",d,"json");Bot.sendMessage("🏷 *Step 5/6 — SKU*\n\nSend a unique SKU/code for this product.",{parse_mode:"Markdown"});Bot.runCommand("product_sku_wait");
