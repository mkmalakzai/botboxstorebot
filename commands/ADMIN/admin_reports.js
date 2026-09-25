/*CMD
  command: admin_reports
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

var os=Bot.getProperty("store_orders")||[],s=Bot.getProperty("store_settings")||{symbol:"؋"},r=0,d=0;for(var i=0;i<os.length;i++)if(os[i].status=="Delivered"){r+=Number(os[i].total||0);d++;}Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"📈 *BUSINESS REPORTS*\n━━━━━━━━━━━━━━\n\n💰 Delivered Revenue: *"+s.symbol+r.toFixed(2)+"*\n🎉 Delivered Orders: *"+d+"*\n📦 Total Orders: *"+os.length+"*",{parse_mode:"Markdown"});
