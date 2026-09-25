/*CMD
  command: delivery_area_fee_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var n=Number(message);if(isNaN(n)||n<0){Bot.sendMessage("⚠️ Send a valid fee.");Bot.runCommand("delivery_area_fee_wait");return;}var d=User.getProperty("delivery_area_draft")||{},s=Bot.getProperty("store_settings")||{};s.delivery=s.delivery||{};s.delivery.areas=s.delivery.areas||[];d.fee=n;s.delivery.areas.push(d);s.delivery.mode="area";Bot.setProperty("store_settings",s,"json");User.setProperty("delivery_area_draft",null);Bot.runCommand("delivery_areas");
