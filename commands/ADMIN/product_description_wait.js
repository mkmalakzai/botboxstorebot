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

var d=User.getProperty("product_draft")||{};d.description=message.trim();User.setProperty("product_draft",d,"json");Bot.sendMessage("💰 *Step 3/6 — PRICE*\n\nSend the regular product price as a number.",{parse_mode:"Markdown"});Bot.runCommand("product_price_wait");
