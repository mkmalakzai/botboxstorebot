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

var __o=Bot.getProperty("owner_id"),__a=Bot.getProperty("store_admins")||[],__ok=__o==user.telegramid;for(var __i=0;__i<__a.length;__i++)if(__a[__i].user_id==user.telegramid)__ok=true;if(!__ok){Bot.sendMessage("⛔ ACCESS DENIED");return;}var os=Bot.getProperty("store_orders")||[],ps=Bot.getProperty("store_products")||[],s=Bot.getProperty("store_settings")||{symbol:"؋"},r=0,d=0,sales={};for(var i=0;i<os.length;i++)if(os[i].status=="Delivered"){r+=Number(os[i].total||0);d++;for(var j=0;j<os[i].items.length;j++){var it=os[i].items[j];sales[it.name]=(sales[it.name]||0)+Number(it.qty||0);}}var best="—",bestn=0;for(var n in sales)if(sales[n]>bestn){best=n;bestn=sales[n];}Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],"📈 *BUSINESS REPORTS*\n━━━━━━━━━━━━━━\n\n💰 Delivered Revenue: *"+s.symbol+r.toFixed(2)+"*\n🎉 Delivered Orders: *"+d+"*\n📦 Total Orders: *"+os.length+"*\n🏆 Best Seller: *"+best+"* ("+bestn+")\n🛍 Products: *"+ps.length+"*",{parse_mode:"Markdown"});
