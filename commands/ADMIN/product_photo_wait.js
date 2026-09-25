/*CMD
  command: product_photo_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}if(request.photo&&request.photo.length){var d=User.getProperty("product_draft")||{};d.photos=d.photos||[];d.photos.push(request.photo[request.photo.length-1].file_id);User.setProperty("product_draft",d,"json");Bot.sendInlineKeyboard([[{title:"🖼 Add Another",command:"product_photos_start"},{title:"👀 Preview",command:"product_preview"}]],"✅ Photo added. Total: "+d.photos.length);return;}Bot.sendInlineKeyboard([[{title:"👀 Preview",command:"product_preview"},{title:"❌ Cancel",command:"admin_products"}]],"⚠️ Send a photo, or tap Preview.");
