/*CMD
  command: help
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

var s=Bot.getProperty("store_settings")||{support:"Not configured"};Bot.sendInlineKeyboard([[{title:"🏠 Main Menu",command:"main_menu"},{title:"📦 My Orders",command:"my_orders"}]],"💬 *HELP & SUPPORT*\n━━━━━━━━━━━━━━\n\nNeed help with a product, payment, delivery or order?\n\n📞 Support: *"+s.support+"*",{parse_mode:"Markdown"});
