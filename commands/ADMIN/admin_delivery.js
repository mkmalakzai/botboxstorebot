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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var s=Bot.getProperty("store_settings")||{},d=s.delivery||{};Bot.sendInlineKeyboard([[{title:"🆓 Free",command:"delivery_mode free"},{title:"💵 Fixed Fee",command:"delivery_fixed_start"}],[{title:"📍 Area Based",command:"delivery_areas"},{title:"⬅️ Admin Panel",command:"admin_panel"}]],"🚚 *DELIVERY SETTINGS*\n━━━━━━━━━━━━━━\n\nMode: *"+(d.mode||"free")+"*\nFixed fee: *"+Number(d.fixed_fee||0)+"*\nAreas: *"+((d.areas||[]).length)+"*",{parse_mode:"Markdown"});
