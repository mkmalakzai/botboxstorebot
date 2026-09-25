/*CMD
  command: admin_customers
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ids=Bot.getProperty("customer_ids")||[],b=[];for(var i=0;i<ids.length&&i<30;i++)b.push([{title:"👤 "+ids[i],command:"admin_customer_view "+ids[i]}]);b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"👥 *CUSTOMERS*\n━━━━━━━━━━━━━━\n\nRegistered: *"+ids.length+"*",{parse_mode:"Markdown"});
