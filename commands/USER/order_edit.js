/*CMD
  command: order_edit
  help:
  need_reply: false
  auto_retry_time:
  folder: USER

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

var os=Bot.getProperty("store_orders")||[],o=null;for(var i=0;i<os.length;i++)if(os[i].id==params&&os[i].user_id==user.telegramid){o=os[i];break;}if(!o||o.status!="Pending"){Bot.runCommand("order_view "+params);return;}User.setProperty("edit_order_id",params,"string");Bot.sendInlineKeyboard([[{title:"📱 Change Phone",command:"order_phone_edit"},{title:"📍 Change Address",command:"order_address_edit"}],[{title:"⬅️ Order",command:"order_view "+params}]],"✏️ *EDIT ORDER*\n\nChanges are allowed while the order is Pending.",{parse_mode:"Markdown"});
