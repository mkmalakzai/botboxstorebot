/*CMD
  command: admin_category_add
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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_categories"}]],"➕ *NEW CATEGORY*\n━━━━━━━━━━━━━━\n\nSend the category name.",{parse_mode:"Markdown"});Bot.runCommand("category_name_wait");
