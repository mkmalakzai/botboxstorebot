/*CMD
  command: admin_admins
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

var o=Bot.getProperty("owner_id");if(o!=user.telegramid){Bot.sendMessage("⛔ Owner-only section.");return;}var a=Bot.getProperty("store_admins")||[],t="👮 *ADMIN MANAGEMENT*\n━━━━━━━━━━━━━━\n\n👑 Owner: `"+o+"`\n";for(var i=0;i<a.length;i++)t+="\n👮 `"+a[i].user_id+"`";t+="\n\nAdd: `admin_add USER_ID`\nRemove: `admin_remove USER_ID`";Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],t,{parse_mode:"Markdown"});
