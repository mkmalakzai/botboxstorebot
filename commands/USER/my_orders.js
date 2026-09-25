/*CMD
  command: my_orders
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

var os=Bot.getProperty("store_orders")||[],b=[],n=0;for(var i=os.length-1;i>=0&&n<15;i--)if(os[i].user_id==user.telegramid){b.push([{title:"📦 "+os[i].id+" • "+os[i].status,command:"order_view "+os[i].id}]);n++;}b.push([{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"📦 *MY ORDERS*\n━━━━━━━━━━━━━━\n\n"+(n?"Select an order.":"You haven't placed an order yet."),{parse_mode:"Markdown"});
