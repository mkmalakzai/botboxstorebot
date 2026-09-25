/*CMD
  command: review_start
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

var os=Bot.getProperty("store_orders")||[],ok=false;for(var i=0;i<os.length;i++){if(os[i].id==params&&os[i].user_id==user.telegramid&&os[i].status=="Delivered"){ok=true;break;}}if(!ok){Bot.runCommand("my_orders");return;}User.setProperty("review_order_id",params,"string");Bot.sendInlineKeyboard([[{title:"⭐",command:"review_rating 1"},{title:"⭐⭐",command:"review_rating 2"}],[{title:"⭐⭐⭐",command:"review_rating 3"},{title:"⭐⭐⭐⭐",command:"review_rating 4"}],[{title:"⭐⭐⭐⭐⭐",command:"review_rating 5"}]],"⭐ *RATE YOUR ORDER*",{parse_mode:"Markdown"});
