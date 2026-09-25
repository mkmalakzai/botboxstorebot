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

var c=User.getProperty("cart")||[];
if(!c.length){Bot.runCommand("cart");return;}

var keepAddress=User.getProperty("checkout_address_index");
var p=User.getProperty("customer_profile")||{},a=p.addresses||[],b=[];

if(keepAddress!==null&&keepAddress!==undefined&&!isNaN(Number(keepAddress))&&a[Number(keepAddress)]){
  Bot.runCommand("checkout_address "+Number(keepAddress));
  return;
}

User.setProperty("checkout_payment",null);

for(var i=0;i<a.length;i++){
  b.push([{title:"📍 "+a[i].label,command:"checkout_address "+i}]);
}
b.push([{title:"➕ Add New Address",command:"address_add_checkout"}]);
b.push([{title:"⬅️ Cart",command:"cart"},{title:"🏠 Main Menu",command:"main_menu"}]);

Bot.sendInlineKeyboard(
  b,
  "📍 *DELIVERY ADDRESS*\n━━━━━━━━━━━━━━\n\nChoose one saved address or add a new one.",
  {parse_mode:"Markdown"}
);