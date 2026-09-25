/*CMD
  command: delivery_areas
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var s=Bot.getProperty("store_settings")||{},a=(s.delivery||{}).areas||[],b=[[{title:"➕ Add Area",command:"delivery_area_add"}]];for(var i=0;i<a.length;i++)b.push([{title:"📍 "+a[i].name+" • "+a[i].fee,command:"delivery_area_view "+i}]);b.push([{title:"⬅️ Delivery",command:"admin_delivery"}]);Bot.sendInlineKeyboard(b,"📍 *DELIVERY AREAS*\n\nChoose an area or add a new one.",{parse_mode:"Markdown"});
