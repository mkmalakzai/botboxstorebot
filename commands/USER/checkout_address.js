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

var p=User.getProperty("customer_profile")||{},a=p.addresses||[],idx=Number(params);if(isNaN(idx)||!a[idx]){Bot.runCommand("checkout");return;}User.setProperty("checkout_address_index",idx,"integer");var ms=Bot.getProperty("payment_methods")||[],b=[];for(var i=0;i<ms.length;i++)if(ms[i].enabled)b.push([{title:(ms[i].type=="cod"?"💵 ":"💳 ")+ms[i].name,command:"checkout_payment "+ms[i].id}]);b.push([{title:"⬅️ Change Address",command:"checkout"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"💳 *PAYMENT METHOD*\n━━━━━━━━━━━━━━\n\n📍 Deliver to: *"+a[idx].label+"*\n\nChoose one payment method to continue.",{parse_mode:"Markdown"});
