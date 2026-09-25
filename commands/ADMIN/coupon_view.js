/*CMD
  command: coupon_view
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var c=Bot.getProperty("store_coupons")||[],i=Number(params),d=c[i];if(!d){Bot.runCommand("admin_coupons");return;}Bot.sendInlineKeyboard([[{title:d.active?"🔴 Disable":"🟢 Enable",command:"coupon_toggle "+i},{title:"🗑 Delete",command:"coupon_delete "+i}],[{title:"⬅️ Coupons",command:"admin_coupons"}]],"🎟 *"+d.code+"*\nType: "+d.type+"\nValue: "+d.value+"\nMin: "+d.min_order+"\nUsed: "+d.used+"/"+d.total_limit+"\nPer user: "+d.per_user_limit,{parse_mode:"Markdown"});
