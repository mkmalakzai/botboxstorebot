/*CMD
  command: admin_delivery
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

var s=Bot.getProperty("store_settings")||{},d=s.delivery||{};Bot.sendInlineKeyboard([[{title:"🆓 Free",command:"delivery_mode free"},{title:"💵 Fixed",command:"delivery_mode fixed"}],[{title:"📍 Area Based",command:"delivery_mode area"},{title:"⬅️ Admin Panel",command:"admin_panel"}]],"🚚 *DELIVERY SETTINGS*\n━━━━━━━━━━━━━━\n\nMode: *"+d.mode+"*\nFixed Fee: *"+d.fixed_fee+"*\n\nSet fee: `delivery_fee 50`",{parse_mode:"Markdown"});
