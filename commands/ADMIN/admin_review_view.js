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

var r=Bot.getProperty("store_reviews")||[],i=Number(params),v=r[i];if(!v){Bot.runCommand("admin_reviews");return;}Bot.sendInlineKeyboard([[{title:"✅ Approve",command:"admin_review_action "+i+"|Approved"},{title:"❌ Reject",command:"admin_review_action "+i+"|Rejected"}],[{title:"⬅️ Reviews",command:"admin_reviews"}]],"⭐ *"+v.rating+"/5*\n\n"+v.text+"\n\nOrder: "+v.order_id,{parse_mode:"Markdown"});
