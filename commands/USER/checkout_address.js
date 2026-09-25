/*CMD
  command: checkout_address
  help:
  need_reply: false
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group:
CMD*/

User.setProperty("checkout_address_index",Number(params),"integer");var ms=Bot.getProperty("payment_methods")||[],b=[];for(var i=0;i<ms.length;i++)if(ms[i].enabled)b.push([{title:(ms[i].type=="cod"?"💵 ":"💳 ")+ms[i].name,command:"checkout_payment "+ms[i].id}]);b.push([{title:"⬅️ Address",command:"checkout"}]);Bot.sendInlineKeyboard(b,"💳 *PAYMENT METHOD*\n━━━━━━━━━━━━━━\n\nChoose how you want to pay.",{parse_mode:"Markdown"});
