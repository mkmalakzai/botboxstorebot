/*CMD
  command: order_address_edit_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var id=User.getProperty("edit_order_id"),os=Bot.getProperty("store_orders")||[];if(!message||message.length<5){Bot.runCommand("order_address_edit_wait");return;}for(var i=0;i<os.length;i++)if(os[i].id==id&&os[i].user_id==user.telegramid&&os[i].status=="Pending"){os[i].address.address=message.trim();os[i].history.push({edit:"address",at:new Date().toISOString()});break;}Bot.setProperty("store_orders",os,"json");Bot.runCommand("order_view "+id);
