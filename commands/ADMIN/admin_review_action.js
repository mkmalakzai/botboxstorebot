/*CMD
  command: admin_review_action
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

var x=params.split("|"),r=Bot.getProperty("store_reviews")||[],i=Number(x[0]);if(r[i])r[i].status=x[1];Bot.setProperty("store_reviews",r,"json");Bot.runCommand("admin_reviews");
