/*CMD
  command: cart_remove
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

var c=User.getProperty("cart")||[];for(var i=0;i<c.length;i++)if(String(c[i].product_id)==String(params)){c[i].qty--;if(c[i].qty<=0)c.splice(i,1);break;}User.setProperty("cart",c,"json");Bot.runCommand("cart");
