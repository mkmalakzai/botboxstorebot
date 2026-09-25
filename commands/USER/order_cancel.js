/*CMD
  command: order_cancel
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

var os=Bot.getProperty("store_orders")||[],ps=Bot.getProperty("store_products")||[];for(var i=0;i<os.length;i++){var o=os[i];if(o.id==params&&o.user_id==user.telegramid&&o.status=="Pending"){o.status="Cancelled";o.history.push({status:"Cancelled",at:new Date().toISOString(),by:"customer"});for(var j=0;j<o.items.length;j++)for(var k=0;k<ps.length;k++)if(String(ps[k].id)==String(o.items[j].product_id)){ps[k].stock=Number(ps[k].stock||0)+o.items[j].qty;break;}Bot.setProperty("store_orders",os,"json");Bot.setProperty("store_products",ps,"json");Bot.runCommand("order_view "+o.id);return;}}Bot.sendMessage("⚠️ This order can no longer be cancelled.");
