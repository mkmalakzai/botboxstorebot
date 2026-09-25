/*CMD
  command: payment_proof_action
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var x=params.split("|"),id=x[0],act=x[1],os=Bot.getProperty("store_orders")||[];for(var i=0;i<os.length;i++)if(os[i].id==id){os[i].payment_status=act=="approve"?"Paid":"Proof Rejected";os[i].history=os[i].history||[];os[i].history.push({payment:os[i].payment_status,at:new Date().toISOString(),by:user.telegramid});Api.sendMessage({chat_id:os[i].user_id,text:"💳 PAYMENT UPDATE\n\nOrder "+id+" payment: "+os[i].payment_status});break;}Bot.setProperty("store_orders",os,"json");Bot.runCommand("admin_order_view "+id);
