/*CMD
  command: wishlist_add
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

var w=User.getProperty("wishlist")||[];if(w.indexOf(params)<0)w.push(params);User.setProperty("wishlist",w,"json");Bot.runCommand("wishlist");
