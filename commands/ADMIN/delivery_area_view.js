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

var s=Bot.getProperty("store_settings")||{},a=(s.delivery||{}).areas||[],i=Number(params);if(!a[i]){Bot.runCommand("delivery_areas");return;}Bot.sendInlineKeyboard([[{title:"🗑 Delete",command:"delivery_area_delete "+i}],[{title:"⬅️ Areas",command:"delivery_areas"}]],"📍 *"+a[i].name+"*\nFee: *"+a[i].fee+"*",{parse_mode:"Markdown"});
