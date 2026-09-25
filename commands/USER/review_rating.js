/*CMD
  command: review_rating
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

User.setProperty("review_rating",Number(params),"integer");Bot.sendMessage("✍️ Send your review text.");Bot.runCommand("review_text_wait");
