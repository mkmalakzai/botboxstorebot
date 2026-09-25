/*CMD
  command: address_label_wait
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

if(!message||message.length<2){Bot.sendMessage("⚠️ Please send a valid address label.");Bot.runCommand("address_label_wait");return;}User.setProperty("address_draft",{label:message.trim()},"json");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:User.getProperty("address_return")=="checkout"?"checkout":"profile"}]],"📱 *PHONE NUMBER*\n━━━━━━━━━━━━━━\n\nNow send the phone number for this delivery address.",{parse_mode:"Markdown"});Bot.runCommand("address_phone_wait");
