/*CMD
  command: admin_remove_confirm
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

if(Bot.getProperty("owner_id")!=user.telegramid)return;Bot.sendInlineKeyboard([[{title:"✅ Remove",command:"admin_remove "+params},{title:"❌ Cancel",command:"admin_admins"}]],"⚠️ Remove admin "+params+"?");
