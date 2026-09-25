/*CMD
  command: admin_panel
  help:
  need_reply: false
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /admin
  group:
CMD*/

var o=Bot.getProperty("owner_id"),a=Bot.getProperty("store_admins")||[],ok=o==user.telegramid;for(var i=0;i<a.length;i++)if(a[i].user_id==user.telegramid)ok=true;if(!ok){Bot.sendMessage("⛔ *ACCESS DENIED*",{parse_mode:"Markdown"});return;}var os=Bot.getProperty("store_orders")||[],ps=Bot.getProperty("store_products")||[],ids=Bot.getProperty("customer_ids")||[],rev=0,pending=0;for(var j=0;j<os.length;j++){if(os[j].status=="Pending")pending++;if(os[j].status=="Delivered")rev+=Number(os[j].total||0);}var s=Bot.getProperty("store_settings")||{symbol:"؋"},b=[[{title:"📊 Dashboard",command:"admin_panel"},{title:"📦 Orders",command:"admin_orders"}],[{title:"🛍 Products",command:"admin_products"},{title:"🗂 Categories",command:"admin_categories"}],[{title:"📦 Inventory",command:"admin_inventory"},{title:"💳 Payments",command:"admin_payments"}],[{title:"🚚 Delivery",command:"admin_delivery"},{title:"🎟 Coupons",command:"admin_coupons"}],[{title:"👥 Customers",command:"admin_customers"},{title:"⭐ Reviews",command:"admin_reviews"}],[{title:"📈 Reports",command:"admin_reports"},{title:"📣 Broadcast",command:"admin_broadcast"}],[{title:"⚙️ Settings",command:"admin_settings"},{title:"👮 Admins",command:"admin_admins"}],[{title:"🏠 Main Menu",command:"main_menu"}]];Bot.sendInlineKeyboard(b,"🛡 *ADMIN CONTROL CENTER*\n━━━━━━━━━━━━━━\n\n💰 Revenue: *"+s.symbol+rev.toFixed(2)+"*\n📦 Orders: *"+os.length+"* • Pending: *"+pending+"*\n🛍 Products: *"+ps.length+"*\n👥 Customers: *"+ids.length+"*\n\nManage your entire store below 👇",{parse_mode:"Markdown"});
