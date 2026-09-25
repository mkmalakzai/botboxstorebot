/*CMD
  command: broadcast_send
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

var ids=Bot.getProperty("customer_ids")||[];if(!params)return;for(var i=0;i<ids.length;i++)Bot.sendMessageToChatWithId(ids[i],"📣 *STORE UPDATE*\n━━━━━━━━━━━━━━\n\n"+params,{parse_mode:"Markdown"});Bot.sendMessage("✅ Broadcast queued for "+ids.length+" customers.");
