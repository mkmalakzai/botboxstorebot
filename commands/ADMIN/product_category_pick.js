/*CMD
  command: product_category_pick
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var d=User.getProperty("product_draft")||{};d.category_id=params;User.setProperty("product_draft",d,"json");Bot.sendInlineKeyboard([[{title:"➕ Add Variant",command:"product_variant_add"},{title:"⏭ Skip Variants",command:"product_photos_start"}],[{title:"❌ Cancel",command:"admin_products"}]],"🎨 Step 8/10 — Add variants (size/color etc.) or skip.");
