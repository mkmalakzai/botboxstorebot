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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var os=Bot.getProperty("store_orders")||[],o=null;for(var i=0;i<os.length;i++)if(os[i].id==params){o=os[i];break;}if(!o){Bot.runCommand("admin_orders");return;}var s=Bot.getProperty("store_settings")||{symbol:"؋"},b=[];if(o.payment_proof&&o.payment_status=="Proof Pending")b.push([{title:"✅ Approve Payment",command:"payment_proof_action "+o.id+"|approve"},{title:"❌ Reject Proof",command:"payment_proof_action "+o.id+"|reject"}]);b.push([{title:"✅ Confirm",command:"admin_order_status "+o.id+"|Confirmed"},{title:"⚙️ Processing",command:"admin_order_status "+o.id+"|Processing"}]);b.push([{title:"🚚 Shipped",command:"admin_order_status "+o.id+"|Shipped"},{title:"🎉 Delivered",command:"admin_order_status "+o.id+"|Delivered"}]);b.push([{title:"❌ Reject Order",command:"admin_order_status "+o.id+"|Rejected"},{title:"⬅️ Orders",command:"admin_orders"}]);Bot.sendInlineKeyboard(b,"📦 *ORDER "+o.id+"*\n━━━━━━━━━━━━━━\n\n👤 User: "+o.user_id+"\n📌 Status: *"+o.status+"*\n💳 Payment: *"+o.payment_status+"*\n💰 Total: *"+s.symbol+Number(o.total).toFixed(2)+"*\n📍 "+o.address.address,{parse_mode:"Markdown"});
