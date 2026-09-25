/*CMD
  command: admin_product_edit
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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}User.setProperty("edit_product_id",params,"string");Bot.sendInlineKeyboard([[{title:"✏️ Name",command:"product_edit_field name"},{title:"📝 Description",command:"product_edit_field description"}],[{title:"💰 Price",command:"product_edit_field price"},{title:"🏷 Discount",command:"product_edit_field sale_price"}],[{title:"🏷 SKU",command:"product_edit_field sku"},{title:"📦 Stock",command:"admin_stock_set "+params}],[{title:"⬅️ Product",command:"admin_product_view "+params}]],"✏️ *EDIT PRODUCT*\n\nChoose a field to edit.",{parse_mode:"Markdown"});
