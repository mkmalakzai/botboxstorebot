/*CMD
  command: product_name_wait
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

if(!message||message.length<2){Bot.sendMessage("⚠️ Send a valid product name.");Bot.runCommand("product_name_wait");return;}User.setProperty("product_draft",{name:message.trim()},"json");Bot.sendMessage("📝 *Step 2/6 — DESCRIPTION*\n\nSend the product description.",{parse_mode:"Markdown"});Bot.runCommand("product_description_wait");
