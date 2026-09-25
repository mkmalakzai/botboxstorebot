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

Bot.sendInlineKeyboard([[{title:"⬅️ Products",command:"admin_products"}]],"➕ *ADD PRODUCT*\n━━━━━━━━━━━━━━\n\nUse:\n`product_save Name | Description | Price | Stock | SKU | CategoryID`",{parse_mode:"Markdown"});
