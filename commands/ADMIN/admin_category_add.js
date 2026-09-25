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

Bot.sendInlineKeyboard([[{title:"⬅️ Categories",command:"admin_categories"}]],"➕ *ADD CATEGORY*\n\nUse:\n`category_save Category Name`",{parse_mode:"Markdown"});
