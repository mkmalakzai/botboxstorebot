/*CMD
  command: admin_category_delete_confirm
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

var o=Bot.getProperty("owner_id"),a=Bot.getProperty("store_admins")||[],ok=o==user.telegramid;for(var i=0;i<a.length;i++)if(a[i].user_id==user.telegramid)ok=true;if(!ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}Bot.sendInlineKeyboard([[{title:"🗑 Yes, Delete",command:"admin_category_delete "+params},{title:"❌ Cancel",command:"admin_category_view "+params}]],"⚠️ Delete this category?\n\nProducts will not be deleted.");
