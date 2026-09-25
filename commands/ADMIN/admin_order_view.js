/*CMD
  command: admin_order_view
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

var os=Bot.getProperty("store_orders")||[],o=null;for(var i=0;i<os.length;i++)if(os[i].id==params){o=os[i];break;}if(!o){Bot.runCommand("admin_orders");return;}var s=Bot.getProperty("store_settings")||{symbol:"؋"};Bot.sendInlineKeyboard([[{title:"✅ Confirm",command:"admin_order_status "+o.id+"|Confirmed"},{title:"⚙️ Processing",command:"admin_order_status "+o.id+"|Processing"}],[{title:"🚚 Shipped",command:"admin_order_status "+o.id+"|Shipped"},{title:"🎉 Delivered",command:"admin_order_status "+o.id+"|Delivered"}],[{title:"❌ Reject",command:"admin_order_status "+o.id+"|Rejected"},{title:"⬅️ Orders",command:"admin_orders"}]],"📦 *ORDER "+o.id+"*\n━━━━━━━━━━━━━━\n\n👤 User: `"+o.user_id+"`\n📌 Status: *"+o.status+"*\n💳 Payment: *"+o.payment_status+"*\n💰 Total: *"+s.symbol+Number(o.total).toFixed(2)+"*\n📍 "+o.address.address,{parse_mode:"Markdown"});
