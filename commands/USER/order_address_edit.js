/*CMD
  command: order_address_edit
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

Bot.sendMessage("📍 Send the new delivery address.");Bot.runCommand("order_address_edit_wait");
