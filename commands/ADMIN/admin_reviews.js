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

var r=Bot.getProperty("store_reviews")||[],b=[],p=0;for(var i=0;i<r.length;i++){if(r[i].status=="Pending"){p++;b.push([{title:"⭐ "+r[i].rating+" • "+r[i].id,command:"admin_review_view "+i}]);}}b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"⭐ *REVIEW MODERATION*\n\nPending: *"+p+"*",{parse_mode:"Markdown"});
