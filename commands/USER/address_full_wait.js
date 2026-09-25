/*CMD
  command: address_full_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

if(!message||message.length<5){
  Bot.sendMessage("⚠️ Please send a complete address.");
  Bot.runCommand("address_full_wait");
  return;
}

var d=User.getProperty("address_draft")||{};
var p=User.getProperty("customer_profile")||{addresses:[]};
d.address=message.trim();
p.addresses=p.addresses||[];
p.addresses.push(d);
p.phone=p.phone||d.phone;

User.setProperty("customer_profile",p,"json");
User.setProperty("address_draft",null);

var back=User.getProperty("address_return");
User.setProperty("address_return",null);

if(back=="checkout"){
  var idx=p.addresses.length-1;
  User.setProperty("checkout_address_index",idx,"integer");
  Bot.sendInlineKeyboard(
    [[{title:"✅ Continue to Payment",command:"checkout_address "+idx}],[{title:"🏠 Main Menu",command:"main_menu"}]],
    "✅ *ADDRESS SAVED*\n━━━━━━━━━━━━━━\n\n*"+d.label+"* has been saved successfully.",
    {parse_mode:"Markdown"}
  );
  return;
}

Bot.sendInlineKeyboard(
  [[{title:"📍 My Addresses",command:"addresses"},{title:"🏠 Main Menu",command:"main_menu"}]],
  "✅ *ADDRESS SAVED*\n━━━━━━━━━━━━━━\n\n*"+d.label+"* has been saved successfully.",
  {parse_mode:"Markdown"}
);