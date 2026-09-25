/*CMD
  command: admin_category_view
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

var o=Bot.getProperty("owner_id"),a=Bot.getProperty("store_admins")||[],ok=o==user.telegramid;for(var i=0;i<a.length;i++)if(a[i].user_id==user.telegramid)ok=true;if(!ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var cs=Bot.getProperty("store_categories")||[],p=null;for(var i=0;i<cs.length;i++)if(String(cs[i].id)==String(params)){p=cs[i];break;}if(!p){Bot.runCommand("admin_categories");return;}Bot.sendInlineKeyboard([[{title:p.active===false?"🟢 Enable":"🔴 Disable",command:"admin_category_toggle "+p.id}],[{title:"🗑 Delete Category",command:"admin_category_delete_confirm "+p.id}],[{title:"⬅️ Categories",command:"admin_categories"}]],"🗂 *"+p.name+"*",{parse_mode:"Markdown"});
