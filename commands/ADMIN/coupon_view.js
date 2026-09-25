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

var c=Bot.getProperty("store_coupons")||[],i=Number(params),d=c[i];if(!d){Bot.runCommand("admin_coupons");return;}Bot.sendInlineKeyboard([[{title:d.active?"🔴 Disable":"🟢 Enable",command:"coupon_toggle "+i},{title:"🗑 Delete",command:"coupon_delete "+i}],[{title:"⬅️ Coupons",command:"admin_coupons"}]],"🎟 *"+d.code+"*\nType: "+d.type+"\nValue: "+d.value+"\nMin: "+d.min_order+"\nUsed: "+d.used+"/"+d.total_limit+"\nPer user: "+d.per_user_limit,{parse_mode:"Markdown"});
