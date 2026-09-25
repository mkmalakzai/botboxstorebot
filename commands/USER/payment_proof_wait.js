/*CMD
  command: payment_proof_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group:
CMD*/

var id=User.getProperty("proof_order_id"),photo=request.photo;if(!photo||!photo.length){Bot.sendMessage("⚠️ Please send the payment screenshot as a *photo*.",{parse_mode:"Markdown"});Bot.runCommand("payment_proof_wait");return;}var file=photo[photo.length-1].file_id,os=Bot.getProperty("store_orders")||[],o=null;for(var i=0;i<os.length;i++)if(os[i].id==id&&os[i].user_id==user.telegramid){o=os[i];o.payment_proof=file;o.payment_status="Proof Pending";o.proof_at=new Date().toISOString();break;}if(!o){User.setProperty("proof_order_id",null);Bot.runCommand("my_orders");return;}Bot.setProperty("store_orders",os,"json");User.setProperty("proof_order_id",null);var owner=Bot.getProperty("owner_id");if(owner)Api.sendPhoto({chat_id:owner,photo:file,caption:"💳 *PAYMENT PROOF*\n━━━━━━━━━━━━━━\n\n🧾 Order: `"+o.id+"`\n👤 User: `"+o.user_id+"`\n💰 Total: "+o.total+"\n\nReview from Admin → Orders.",parse_mode:"Markdown"});Bot.sendInlineKeyboard([[{title:"📦 View Order",command:"order_view "+o.id},{title:"🏠 Main Menu",command:"main_menu"}]],"✅ *PROOF SUBMITTED*\n━━━━━━━━━━━━━━\n\nYour payment proof is waiting for admin review.",{parse_mode:"Markdown"});
