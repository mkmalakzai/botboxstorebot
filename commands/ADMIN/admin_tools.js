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

var ms=Bot.getProperty("payment_methods")||[],b=[];for(var i=0;i<ms.length;i++)b.push([{title:(ms[i].enabled?"🟢 ":"🔴 ")+ms[i].name,command:"payment_toggle "+ms[i].id}]);b.push([{title:"➕ Add Manual Method",command:"payment_add"}],[{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"💳 *PAYMENT METHODS*\n━━━━━━━━━━━━━━\n\nUse `payment_save Name | Instructions` to add a manual method.",{parse_mode:"Markdown"});
