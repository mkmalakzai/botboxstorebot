/*CMD
  command: checkout_payment
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

var ms=Bot.getProperty("payment_methods")||[],m=null;for(var i=0;i<ms.length;i++)if(String(ms[i].id)==String(params)&&ms[i].enabled){m=ms[i];break;}if(!m){Bot.sendMessage("⚠️ This payment method is unavailable.");return;}User.setProperty("checkout_payment",m,"json");Bot.runCommand("checkout_review");
