/*CMD
  command: coupon_total_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var n=Number(message);if(isNaN(n)||n<1){Bot.runCommand("coupon_total_wait");return;}var d=User.getProperty("coupon_draft")||{};d.total_limit=Math.floor(n);User.setProperty("coupon_draft",d,"json");Bot.sendMessage("👤 Send per-user usage limit.");Bot.runCommand("coupon_user_wait");
