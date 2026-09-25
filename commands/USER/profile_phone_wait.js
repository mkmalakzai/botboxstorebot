/*CMD
  command: profile_phone_wait
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

if(!message||message.length<5){Bot.sendMessage("⚠️ Send a valid phone number.");Bot.runCommand("profile_phone_wait");return;}var p=User.getProperty("customer_profile")||{};p.phone=message.trim();User.setProperty("customer_profile",p,"json");Bot.runCommand("profile");
