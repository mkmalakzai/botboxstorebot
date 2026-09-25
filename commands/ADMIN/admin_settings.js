/*CMD
  command: admin_settings
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

var s=Bot.getProperty("store_settings")||{};Bot.sendInlineKeyboard([[{title:"🚚 Delivery",command:"admin_delivery"},{title:"💳 Payments",command:"admin_payments"}],[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"⚙️ *STORE SETTINGS*\n━━━━━━━━━━━━━━\n\n🏪 *"+s.name+"*\n💱 "+s.currency+" ("+s.symbol+")\n📦 Low Stock: "+s.low_stock+"\n💬 "+s.support+"\n\nEdit:\n`setting name | New Store Name`\n`setting currency | AFN | ؋`\n`setting support | @username`\n`setting low_stock | 5`",{parse_mode:"Markdown"});
