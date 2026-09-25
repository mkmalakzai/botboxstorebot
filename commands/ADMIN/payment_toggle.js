/*CMD
  command: payment_toggle
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

var m=Bot.getProperty("payment_methods")||[];for(var i=0;i<m.length;i++)if(String(m[i].id)==String(params)){m[i].enabled=!m[i].enabled;break;}Bot.setProperty("payment_methods",m,"json");Bot.runCommand("admin_payments");
