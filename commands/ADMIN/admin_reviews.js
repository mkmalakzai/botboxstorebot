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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var r=Bot.getProperty("store_reviews")||[],b=[],p=0;for(var i=0;i<r.length;i++){if(r[i].status=="Pending"){p++;b.push([{title:"⭐ "+r[i].rating+" • "+r[i].id,command:"admin_review_view "+i}]);}}b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"⭐ *REVIEW MODERATION*\n\nPending: *"+p+"*",{parse_mode:"Markdown"});
