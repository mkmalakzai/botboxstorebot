/*CMD
  command: coupon_type
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

var d=User.getProperty("coupon_draft")||{};d.type=params;d.value=0;User.setProperty("coupon_draft",d,"json");if(params=="free_delivery"){Bot.runCommand("coupon_min_start");return;}Bot.sendMessage("💰 Send discount value.");Bot.runCommand("coupon_value_wait");
