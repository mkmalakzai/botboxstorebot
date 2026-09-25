/*CMD
  command: cart_clear
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

User.setProperty("cart",[],"json");Bot.runCommand("cart");
