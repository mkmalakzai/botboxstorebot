/*CMD
  command: category_name_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}if(!message||message.length<2){Bot.sendMessage("⚠️ Send a valid category name.");Bot.runCommand("category_name_wait");return;}var cs=Bot.getProperty("store_categories")||[];cs.push({id:"CAT-"+new Date().getTime(),name:message.trim(),active:true});Bot.setProperty("store_categories",cs,"json");Bot.sendInlineKeyboard([[{title:"🗂 Categories",command:"admin_categories"},{title:"➕ Add Another",command:"admin_category_add"}]],"✅ *CATEGORY CREATED*\n\n*"+message.trim()+"* is ready.",{parse_mode:"Markdown"});
