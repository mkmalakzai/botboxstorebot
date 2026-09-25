/*CMD
  command: admin_product_add
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

User.setProperty("product_draft",{},"json");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_products"}]],"➕ *NEW PRODUCT*\n━━━━━━━━━━━━━━\n\nStep 1/6 — Send the *product name*.",{parse_mode:"Markdown"});Bot.runCommand("product_name_wait");
