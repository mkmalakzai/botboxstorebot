/*CMD
  command: coupon_value_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var n=Number(message),d=User.getProperty("coupon_draft")||{};if(isNaN(n)||n<=0||(d.type=="percent"&&n>100)){Bot.sendMessage("⚠️ Send a valid value.");Bot.runCommand("coupon_value_wait");return;}d.value=n;User.setProperty("coupon_draft",d,"json");Bot.runCommand("coupon_min_start");
