/*CMD
  command: broadcast_wait
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

if(!message){Bot.runCommand("broadcast_wait");return;}User.setProperty("broadcast_draft",message,"string");Bot.sendInlineKeyboard([[{title:"✅ Send Broadcast",command:"broadcast_confirm"}],[{title:"❌ Cancel",command:"admin_panel"}]],"👀 *BROADCAST PREVIEW*\n━━━━━━━━━━━━━━\n\n"+message+"\n\nSend this to all registered customers?",{parse_mode:"Markdown"});
