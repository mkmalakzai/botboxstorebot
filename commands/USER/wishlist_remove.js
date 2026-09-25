/*CMD
  command: wishlist_remove
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

var w=User.getProperty("wishlist")||[],n=[];for(var i=0;i<w.length;i++)if(String(w[i])!=String(params))n.push(w[i]);User.setProperty("wishlist",n,"json");Bot.runCommand("wishlist");
