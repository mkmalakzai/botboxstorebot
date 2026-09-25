/*CMD
  command: admin_reviews
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

var r=Bot.getProperty("store_reviews")||[],p=0;for(var i=0;i<r.length;i++)if(r[i].status=="Pending")p++;Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"⭐ *REVIEW MODERATION*\n━━━━━━━━━━━━━━\n\nPending: *"+p+"*\nTotal: *"+r.length+"*",{parse_mode:"Markdown"});
