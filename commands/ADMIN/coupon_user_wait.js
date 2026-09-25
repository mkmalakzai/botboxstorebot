/*CMD
  command: coupon_user_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var n=Number(message);if(isNaN(n)||n<1){Bot.runCommand("coupon_user_wait");return;}var d=User.getProperty("coupon_draft")||{},c=Bot.getProperty("store_coupons")||[];d.per_user_limit=Math.floor(n);d.used=0;d.users={};d.active=true;d.free_delivery=d.type=="free_delivery";c.push(d);Bot.setProperty("store_coupons",c,"json");User.setProperty("coupon_draft",null);Bot.runCommand("admin_coupons");
