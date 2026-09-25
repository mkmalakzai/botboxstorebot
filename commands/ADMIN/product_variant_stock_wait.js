/*CMD
  command: product_variant_stock_wait
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var n=Number(message);if(isNaN(n)||n<0){Bot.runCommand("product_variant_stock_wait");return;}var v=User.getProperty("variant_draft")||{},d=User.getProperty("product_draft")||{};v.stock=Math.floor(n);d.variants=d.variants||[];d.variants.push(v);User.setProperty("product_draft",d,"json");User.setProperty("variant_draft",null);Bot.sendInlineKeyboard([[{title:"➕ Add Another",command:"product_variant_add"},{title:"🖼 Continue Photos",command:"product_photos_start"}]],"✅ Variant added: "+v.name+" • stock "+v.stock);
