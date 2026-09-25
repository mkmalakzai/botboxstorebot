/*CMD
  command: payment_proof
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

var os=Bot.getProperty("store_orders")||[],o=null;for(var i=0;i<os.length;i++)if(os[i].id==params&&os[i].user_id==user.telegramid){o=os[i];break;}if(!o){Bot.runCommand("my_orders");return;}User.setProperty("proof_order_id",o.id,"string");var ms=Bot.getProperty("payment_methods")||[],m=null;for(var j=0;j<ms.length;j++)if(ms[j].id==o.payment_method){m=ms[j];break;}Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"order_view "+o.id}]],"📸 *PAYMENT PROOF*\n━━━━━━━━━━━━━━\n\n"+(m&&m.instructions?m.instructions+"\n\n":"")+"Send your payment screenshot/photo now.",{parse_mode:"Markdown"});Bot.runCommand("payment_proof_wait");
