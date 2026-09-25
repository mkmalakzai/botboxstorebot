/*CMD
  command: admin_coupons
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var c=Bot.getProperty("store_coupons")||[],b=[[{title:"➕ Create Coupon",command:"coupon_add"}]];for(var i=0;i<c.length;i++)b.push([{title:(c[i].active?"🟢 ":"🔴 ")+c[i].code,command:"coupon_view "+i}]);b.push([{title:"⬅️ Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"🎟 *COUPONS & PROMOTIONS*\n━━━━━━━━━━━━━━\n\nCoupons: *"+c.length+"*",{parse_mode:"Markdown"});
