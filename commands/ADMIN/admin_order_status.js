/*CMD
  command: admin_order_status
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var x=params.split("|"),id=x[0],st=x[1],os=Bot.getProperty("store_orders")||[],ps=Bot.getProperty("store_products")||[];for(var i=0;i<os.length;i++)if(os[i].id==id){var old=os[i].status;if((st=="Rejected"||st=="Cancelled")&&old!="Rejected"&&old!="Cancelled")for(var j=0;j<os[i].items.length;j++)for(var k=0;k<ps.length;k++)if(String(ps[k].id)==String(os[i].items[j].product_id)){ps[k].stock=Number(ps[k].stock||0)+os[i].items[j].qty;break;}os[i].status=st;os[i].history=os[i].history||[];os[i].history.push({status:st,at:new Date().toISOString(),by:user.telegramid});Api.sendMessage({chat_id:os[i].user_id,text:"📦 ORDER UPDATE\n\nOrder "+id+" is now "+st+"."});break;}Bot.setProperty("store_orders",os,"json");Bot.setProperty("store_products",ps,"json");Bot.runCommand("admin_order_view "+id);
