/*CMD
  command: payment_save
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

var x=params.split("|");if(x.length<2){Bot.sendMessage("⚠️ Use: payment_save Name | Instructions");return;}var m=Bot.getProperty("payment_methods")||[];m.push({id:"PAY-"+new Date().getTime(),name:x[0].trim(),instructions:x.slice(1).join("|").trim(),type:"manual",enabled:true});Bot.setProperty("payment_methods",m,"json");Bot.runCommand("admin_payments");
