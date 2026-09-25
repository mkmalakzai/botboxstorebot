/*CMD
  command: delivery_area_view
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var s=Bot.getProperty("store_settings")||{},a=(s.delivery||{}).areas||[],i=Number(params);if(!a[i]){Bot.runCommand("delivery_areas");return;}Bot.sendInlineKeyboard([[{title:"🗑 Delete",command:"delivery_area_delete "+i}],[{title:"⬅️ Areas",command:"delivery_areas"}]],"📍 *"+a[i].name+"*\nFee: *"+a[i].fee+"*",{parse_mode:"Markdown"});
