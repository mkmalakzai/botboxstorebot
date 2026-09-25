/*CMD
  command: delivery_area_name_wait
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

if(!message){Bot.runCommand("delivery_area_name_wait");return;}User.setProperty("delivery_area_draft",{name:message.trim()},"json");Bot.sendMessage("💵 Send delivery fee for *"+message.trim()+"*.",{parse_mode:"Markdown"});Bot.runCommand("delivery_area_fee_wait");
