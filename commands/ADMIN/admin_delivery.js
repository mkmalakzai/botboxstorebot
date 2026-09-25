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

var s=Bot.getProperty("store_settings")||{},d=s.delivery||{};Bot.sendInlineKeyboard([[{title:"🆓 Free",command:"delivery_mode free"},{title:"💵 Fixed Fee",command:"delivery_fixed_start"}],[{title:"📍 Area Based",command:"delivery_areas"},{title:"⬅️ Admin Panel",command:"admin_panel"}]],"🚚 *DELIVERY SETTINGS*\n━━━━━━━━━━━━━━\n\nMode: *"+(d.mode||"free")+"*\nFixed fee: *"+Number(d.fixed_fee||0)+"*\nAreas: *"+((d.areas||[]).length)+"*",{parse_mode:"Markdown"});
