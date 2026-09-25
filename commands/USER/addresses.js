/*CMD
  command: addresses
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

var p=User.getProperty("customer_profile")||{},a=p.addresses||[],t="📍 *SAVED ADDRESSES*\n━━━━━━━━━━━━━━\n\n";for(var i=0;i<a.length;i++)t+="*"+(i+1)+". "+a[i].label+"*\n"+a[i].phone+"\n"+a[i].address+"\n\n";if(!a.length)t+="No saved addresses yet.";Bot.sendInlineKeyboard([[{title:"➕ Add Address",command:"address_add"},{title:"⬅️ Profile",command:"profile"}]],t,{parse_mode:"Markdown"});
