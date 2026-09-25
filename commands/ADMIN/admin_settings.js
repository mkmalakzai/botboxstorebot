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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var s=Bot.getProperty("store_settings")||{};Bot.sendInlineKeyboard([[{title:"🏪 Store Name",command:"setting_name"},{title:"💱 Currency",command:"setting_currency"}],[{title:"💬 Support",command:"setting_support"},{title:"📦 Low Stock",command:"setting_lowstock"}],[{title:"🚚 Delivery",command:"admin_delivery"},{title:"💳 Payments",command:"admin_payments"}],[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"⚙️ *STORE SETTINGS*\n━━━━━━━━━━━━━━\n\n🏪 "+(s.name||"My Store")+"\n💱 "+(s.currency||"AFN")+" ("+(s.symbol||"؋")+")\n💬 "+(s.support||"Not configured")+"\n📦 Low-stock: "+(s.low_stock||5),{parse_mode:"Markdown"});
