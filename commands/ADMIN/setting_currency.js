/*CMD
  command: setting_currency
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}Bot.sendInlineKeyboard([[{title:"؋ AFN",command:"currency_pick AFN"},{title:"$ USD",command:"currency_pick USD"}],[{title:"Rs PKR",command:"currency_pick PKR"},{title:"₹ INR",command:"currency_pick INR"}],[{title:"⬅️ Settings",command:"admin_settings"}]],"💱 *STORE CURRENCY*\n\nChoose the store currency.",{parse_mode:"Markdown"});
