/*CMD
  command: address_phone_wait
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

if(!message||message.length<5){Bot.sendMessage("⚠️ Please send a valid phone number.");Bot.runCommand("address_phone_wait");return;}var d=User.getProperty("address_draft")||{};d.phone=message.trim();User.setProperty("address_draft",d,"json");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:User.getProperty("address_return")=="checkout"?"checkout":"profile"}]],"🏠 *FULL ADDRESS*\n━━━━━━━━━━━━━━\n\nSend the complete delivery address now.\n\nInclude area, street and any useful landmark.",{parse_mode:"Markdown"});Bot.runCommand("address_full_wait");
