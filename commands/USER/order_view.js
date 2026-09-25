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

var os=Bot.getProperty("store_orders")||[],o=null;for(var i=0;i<os.length;i++)if(os[i].id==params&&os[i].user_id==user.telegramid){o=os[i];break;}if(!o){Bot.runCommand("my_orders");return;}var s=Bot.getProperty("store_settings")||{symbol:"؋"},b=[];if(o.status=="Pending")b.push([{title:"✏️ Edit Order",command:"order_edit "+o.id},{title:"❌ Cancel Order",command:"order_cancel "+o.id}]);if(o.status=="Delivered")b.push([{title:"⭐ Write Review",command:"review_start "+o.id}]);if(o.payment_status=="Awaiting Proof"||o.payment_status=="Proof Rejected")b.push([{title:"📸 Send Payment Proof",command:"payment_proof "+o.id}]);b.push([{title:"⬅️ My Orders",command:"my_orders"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"📦 *ORDER DETAILS*\n━━━━━━━━━━━━━━\n\n🧾 "+o.id+"\n📌 Status: *"+o.status+"*\n💳 Payment: *"+o.payment_status+"*\n🎟 Discount: "+s.symbol+Number(o.discount||0).toFixed(2)+"\n💰 Total: *"+s.symbol+Number(o.total).toFixed(2)+"*",{parse_mode:"Markdown"});
