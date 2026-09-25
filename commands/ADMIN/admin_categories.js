/*CMD
  command: admin_categories
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var cs=Bot.getProperty("store_categories")||[],b=[[{title:"➕ Add Category",command:"admin_category_add"}]];for(var i=0;i<cs.length;i++)b.push([{title:(cs[i].active===false?"🔴 ":"🟢 ")+cs[i].name,command:"admin_category_toggle "+cs[i].id}]);b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"🗂 *CATEGORY MANAGEMENT*\n━━━━━━━━━━━━━━\n\nCategories: *"+cs.length+"*",{parse_mode:"Markdown"});
