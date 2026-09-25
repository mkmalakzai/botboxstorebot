/*CMD
  command: broadcast_confirm
  help:
  need_reply: false
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group:
CMD*/

var m=User.getProperty("broadcast_draft"),ids=Bot.getProperty("customer_ids")||[];if(!m){Bot.runCommand("admin_panel");return;}for(var i=0;i<ids.length;i++)Bot.sendMessageToChatWithId(ids[i],"📣 *STORE UPDATE*\n━━━━━━━━━━━━━━\n\n"+m,{parse_mode:"Markdown"});User.setProperty("broadcast_draft",null);Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"✅ *BROADCAST SENT*\n\nRecipients queued: *"+ids.length+"*",{parse_mode:"Markdown"});
