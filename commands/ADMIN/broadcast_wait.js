/*CMD
  command: broadcast_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}if(!message){Bot.runCommand("broadcast_wait");return;}User.setProperty("broadcast_draft",message,"string");Bot.sendInlineKeyboard([[{title:"✅ Send Broadcast",command:"broadcast_confirm"}],[{title:"❌ Cancel",command:"admin_panel"}]],"👀 *BROADCAST PREVIEW*\n\n"+message,{parse_mode:"Markdown"});
