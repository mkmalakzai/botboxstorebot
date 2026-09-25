/*CMD
  command: admin_orders
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

var os=Bot.getProperty("store_orders")||[],b=[];for(var i=os.length-1;i>=0&&b.length<20;i--)b.push([{title:"📦 "+os[i].id+" • "+os[i].status,command:"admin_order_view "+os[i].id}]);b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"📦 *ORDER MANAGEMENT*\n━━━━━━━━━━━━━━\n\nOrders: *"+os.length+"*",{parse_mode:"Markdown"});
