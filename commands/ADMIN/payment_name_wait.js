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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}if(!message||message.length<2){Bot.sendMessage("⚠️ Send a valid name.");Bot.runCommand("payment_name_wait");return;}User.setProperty("payment_draft",{name:message.trim()},"json");Bot.sendMessage("📝 Send payment address/account and instructions.");Bot.runCommand("payment_instructions_wait");
