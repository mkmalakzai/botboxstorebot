/*CMD
  command: checkout
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

var c=User.getProperty("cart")||[];if(!c.length){Bot.runCommand("cart");return;}var p=User.getProperty("customer_profile")||{},b=[];for(var i=0;i<(p.addresses||[]).length;i++)b.push([{title:"📍 "+p.addresses[i].label,command:"checkout_address "+i}]);b.push([{title:"➕ Add New Address",command:"address_add"}]);b.push([{title:"⬅️ Cart",command:"cart"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"📍 *DELIVERY ADDRESS*\n━━━━━━━━━━━━━━\n\nChoose a saved address or add a new one.",{parse_mode:"Markdown"});
