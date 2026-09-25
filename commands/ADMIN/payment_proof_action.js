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

var x=params.split("|"),id=x[0],act=x[1],os=Bot.getProperty("store_orders")||[];for(var i=0;i<os.length;i++){if(os[i].id==id){os[i].payment_status=act=="approve"?"Paid":"Proof Rejected";os[i].history=os[i].history||[];os[i].history.push({payment:os[i].payment_status,at:new Date().toISOString()});break;}}Bot.setProperty("store_orders",os,"json");Bot.runCommand("admin_order_view "+id);
