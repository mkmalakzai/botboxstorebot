/*CMD
  command: *
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

var mode=User.getProperty("input_mode");if(mode!="address")return;var x=message.split("|");if(x.length<3){Bot.sendMessage("⚠️ Use: *Label | Phone | Full Address*",{parse_mode:"Markdown"});return;}var p=User.getProperty("customer_profile")||{addresses:[]};p.addresses=p.addresses||[];p.addresses.push({label:x[0].trim(),phone:x[1].trim(),address:x.slice(2).join("|").trim()});p.phone=p.phone||x[1].trim();User.setProperty("customer_profile",p,"json");User.setProperty("input_mode",null);Bot.sendInlineKeyboard([[{title:"✅ Continue Checkout",command:"checkout"},{title:"👤 Profile",command:"profile"}]],"✅ *ADDRESS SAVED*",{parse_mode:"Markdown"});
