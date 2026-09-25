/*CMD
  command: admin_review_view
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var r=Bot.getProperty("store_reviews")||[],i=Number(params),v=r[i];if(!v){Bot.runCommand("admin_reviews");return;}Bot.sendInlineKeyboard([[{title:"✅ Approve",command:"admin_review_action "+i+"|Approved"},{title:"❌ Reject",command:"admin_review_action "+i+"|Rejected"}],[{title:"⬅️ Reviews",command:"admin_reviews"}]],"⭐ *"+v.rating+"/5*\n\n"+v.text+"\n\nOrder: "+v.order_id,{parse_mode:"Markdown"});
