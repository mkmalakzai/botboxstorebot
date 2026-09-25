/*CMD
  command: coupon_add
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}User.setProperty("coupon_draft",{},"json");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"admin_coupons"}]],"🎟 *NEW COUPON*\n\nSend coupon code.",{parse_mode:"Markdown"});Bot.runCommand("coupon_code_wait");
