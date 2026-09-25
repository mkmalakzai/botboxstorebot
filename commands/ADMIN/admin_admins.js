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

var o=Bot.getProperty("owner_id");if(o!=user.telegramid){Bot.sendMessage("⛔ Owner-only section.");return;}var a=Bot.getProperty("store_admins")||[],b=[[{title:"➕ Add Admin",command:"admin_add_start"}]];for(var i=0;i<a.length;i++)b.push([{title:"👮 "+a[i].user_id,command:"admin_remove_confirm "+a[i].user_id}]);b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"👮 *ADMIN MANAGEMENT*\n━━━━━━━━━━━━━━\n\n👑 Owner: "+o+"\n👮 Additional admins: "+a.length,{parse_mode:"Markdown"});
