/*CMD
  command: coupon_apply_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var code=(message||"").trim().toUpperCase(),cs=Bot.getProperty("store_coupons")||[],found=null;for(var i=0;i<cs.length;i++)if(cs[i].code==code&&cs[i].active){found=cs[i];break;}if(!found){Bot.sendMessage("❌ Invalid or inactive coupon.");Bot.runCommand("coupon_apply_wait");return;}var users=found.users||{},used=Number(users[user.telegramid]||0);if(Number(found.used||0)>=Number(found.total_limit||0)||used>=Number(found.per_user_limit||0)){Bot.sendMessage("❌ Coupon usage limit reached.");Bot.runCommand("checkout_review");return;}User.setProperty("checkout_coupon",code,"string");Bot.runCommand("checkout_review");
