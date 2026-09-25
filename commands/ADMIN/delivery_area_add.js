/*CMD
  command: delivery_area_add
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

User.setProperty("delivery_area_draft",{},"json");Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"delivery_areas"}]],"📍 *NEW AREA*\n\nSend area/city name.",{parse_mode:"Markdown"});Bot.runCommand("delivery_area_name_wait");
