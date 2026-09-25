/*CMD
  command: admin_add_start
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

if(Bot.getProperty("owner_id")!=user.telegramid)return;Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_admins"}]],"👮 *ADD ADMIN*\n\nSend Telegram numeric User ID.",{parse_mode:"Markdown"});Bot.runCommand("admin_add_wait");
