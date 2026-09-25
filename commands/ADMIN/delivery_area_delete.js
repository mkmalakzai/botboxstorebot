/*CMD
  command: delivery_area_delete
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

var s=Bot.getProperty("store_settings")||{},a=(s.delivery||{}).areas||[],i=Number(params);if(a[i])a.splice(i,1);s.delivery.areas=a;Bot.setProperty("store_settings",s,"json");Bot.runCommand("delivery_areas");
