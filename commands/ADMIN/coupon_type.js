/*CMD
  command: coupon_type
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var d=User.getProperty("coupon_draft")||{};d.type=params;d.value=0;User.setProperty("coupon_draft",d,"json");if(params=="free_delivery"){Bot.runCommand("coupon_min_start");return;}Bot.sendMessage("💰 Send discount value.");Bot.runCommand("coupon_value_wait");
