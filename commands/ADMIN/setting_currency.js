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

Bot.sendInlineKeyboard([[{title:"؋ AFN",command:"currency_pick AFN"},{title:"$ USD",command:"currency_pick USD"}],[{title:"Rs PKR",command:"currency_pick PKR"},{title:"₹ INR",command:"currency_pick INR"}],[{title:"⬅️ Settings",command:"admin_settings"}]],"💱 *STORE CURRENCY*\n\nChoose the store currency.",{parse_mode:"Markdown"});
