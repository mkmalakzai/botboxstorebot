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

var os=Bot.getProperty("store_orders")||[],ids=User.getProperty("my_order_ids")||[],b=[],n=0,uid=String(user.telegramid);
for(var i=os.length-1;i>=0&&n<15;i--){
  var owned=String(os[i].user_id)==uid;
  if(!owned&&ids.indexOf(os[i].id)>=0)owned=true;
  if(owned){b.push([{title:"📦 "+os[i].id+" • "+os[i].status,command:"order_view "+os[i].id}]);n++;}
}
b.push([{title:"🏠 Main Menu",command:"main_menu"}]);
Bot.sendInlineKeyboard(b,"📦 *MY ORDERS*\n━━━━━━━━━━━━━━\n\n"+(n?"Select an order.":"You haven't placed an order yet."),{parse_mode:"Markdown"});