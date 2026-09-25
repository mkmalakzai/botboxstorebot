/*CMD
  command: review_text_wait
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

if(!message){Bot.runCommand("review_text_wait");return;}var r=Bot.getProperty("store_reviews")||[],oid=User.getProperty("review_order_id");for(var i=0;i<r.length;i++){if(r[i].order_id==oid&&r[i].user_id==user.telegramid){Bot.sendMessage("⚠️ You already reviewed this order.");return;}}r.push({id:"REV-"+new Date().getTime(),order_id:oid,user_id:user.telegramid,rating:User.getProperty("review_rating"),text:message.trim(),status:"Pending",created_at:new Date().toISOString()});Bot.setProperty("store_reviews",r,"json");Bot.sendInlineKeyboard([[{title:"📦 My Orders",command:"my_orders"},{title:"🏠 Main Menu",command:"main_menu"}]],"✅ Review submitted for moderation.");
