/*CMD
  command: order_view
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

var os=Bot.getProperty("store_orders")||[],o=null;for(var i=0;i<os.length;i++)if(os[i].id==params&&os[i].user_id==user.telegramid){o=os[i];break;}if(!o){Bot.runCommand("my_orders");return;}var s=Bot.getProperty("store_settings")||{symbol:"؋"},b=[];if(o.status=="Pending")b.push([{title:"❌ Cancel Order",command:"order_cancel "+o.id}]);b.push([{title:"⬅️ My Orders",command:"my_orders"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"📦 *ORDER DETAILS*\n━━━━━━━━━━━━━━\n\n🧾 `"+o.id+"`\n📌 Status: *"+o.status+"*\n💳 Payment: *"+o.payment_status+"*\n💰 Total: *"+s.symbol+Number(o.total).toFixed(2)+"*",{parse_mode:"Markdown"});
