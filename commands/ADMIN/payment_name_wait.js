/*CMD
  command: payment_name_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group:
CMD*/

if(!message||message.length<2){Bot.runCommand("payment_name_wait");return;}User.setProperty("payment_draft",{name:message.trim()},"json");Bot.sendMessage("📝 *PAYMENT INSTRUCTIONS*\n━━━━━━━━━━━━━━\n\nSend the account/address and instructions customers should follow.",{parse_mode:"Markdown"});Bot.runCommand("payment_instructions_wait");
