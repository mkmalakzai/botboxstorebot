/*CMD
  command: product_variant_add
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}Bot.sendInlineKeyboard([[{title:"❌ Cancel Variant",command:"product_photos_start"}]],"🎨 Send variant name, e.g. Red / XL.");Bot.runCommand("product_variant_name_wait");
