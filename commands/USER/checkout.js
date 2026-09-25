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

var c=User.getProperty("cart")||[];if(!c.length){Bot.runCommand("cart");return;}User.setProperty("checkout_address_index",null);User.setProperty("checkout_payment",null);var p=User.getProperty("customer_profile")||{},a=p.addresses||[],b=[];for(var i=0;i<a.length;i++)b.push([{title:"📍 "+a[i].label,command:"checkout_address "+i}]);b.push([{title:"➕ Add New Address",command:"address_add_checkout"}]);b.push([{title:"⬅️ Cart",command:"cart"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"📍 *DELIVERY ADDRESS*\n━━━━━━━━━━━━━━\n\nChoose one saved address or add a new one.\n\nYour selection will be used only for this checkout.",{parse_mode:"Markdown"});
