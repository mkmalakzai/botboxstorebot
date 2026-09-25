/*CMD
  command: admin_customer_view
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var id=Number(params),blocked=Bot.getProperty("blocked_"+id);Bot.sendInlineKeyboard([[{title:blocked?"✅ Unblock":"⛔ Block",command:"admin_customer_block "+id}],[{title:"⬅️ Customers",command:"admin_customers"}]],"👤 *CUSTOMER*\n\nTelegram ID: "+id+"\nStatus: "+(blocked?"Blocked":"Active"),{parse_mode:"Markdown"});
