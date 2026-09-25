/*CMD
  command: admin_payments
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var ms=Bot.getProperty("payment_methods")||[],b=[];for(var i=0;i<ms.length;i++)b.push([{title:(ms[i].enabled?"🟢 ":"🔴 ")+ms[i].name,command:"payment_toggle "+ms[i].id}]);b.push([{title:"➕ Add Manual Method",command:"payment_add"}]);b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"💳 *PAYMENT METHODS*\n\nTap a method to enable/disable it.",{parse_mode:"Markdown"});
