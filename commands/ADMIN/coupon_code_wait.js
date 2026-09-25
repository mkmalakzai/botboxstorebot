/*CMD
  command: coupon_code_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}if(!message){Bot.runCommand("coupon_code_wait");return;}User.setProperty("coupon_draft",{code:message.trim().toUpperCase()},"json");Bot.sendInlineKeyboard([[{title:"📊 Percentage",command:"coupon_type percent"},{title:"💵 Fixed",command:"coupon_type fixed"}],[{title:"🚚 Free Delivery",command:"coupon_type free_delivery"},{title:"❌ Cancel",command:"admin_coupons"}]],"Choose coupon type.");
