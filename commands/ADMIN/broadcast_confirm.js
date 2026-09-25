/*CMD
  command: broadcast_confirm
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var m=User.getProperty("broadcast_draft"),ids=Bot.getProperty("customer_ids")||[];if(!m){Bot.runCommand("admin_panel");return;}for(var i=0;i<ids.length;i++)Api.sendMessage({chat_id:ids[i],text:"📣 STORE UPDATE\n\n"+m});User.setProperty("broadcast_draft",null);Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"✅ Broadcast sent to "+ids.length+" registered customers.");
