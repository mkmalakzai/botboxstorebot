/*CMD
  command: setup
  help:
  need_reply: false
  auto_retry_time:
  folder: CORE

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /setup
  group:
CMD*/

var o=Bot.getProperty("owner_id");if(o&&o!=user.telegramid){Bot.sendMessage("⛔ *SETUP LOCKED*",{parse_mode:"Markdown"});return;}Bot.setProperty("owner_id",user.telegramid,"integer");if(!Bot.getProperty("store_settings"))Bot.setProperty("store_settings",{name:"My Store",currency:"AFN",symbol:"؋",support:"Not configured",low_stock:5,delivery:{mode:"fixed",fixed_fee:0,areas:[]},features:{reviews:true,wishlist:true,coupons:true},order_statuses:["Pending","Confirmed","Processing","Shipped","Delivered","Cancelled","Rejected"]},"json");var init=[["store_admins",[]],["store_products",[]],["store_categories",[]],["store_orders",[]],["store_coupons",[]],["store_reviews",[]],["customer_ids",[]]];for(var i=0;i<init.length;i++)if(!Bot.getProperty(init[i][0]))Bot.setProperty(init[i][0],init[i][1],"json");if(!Bot.getProperty("payment_methods"))Bot.setProperty("payment_methods",[{id:"cod",name:"Cash on Delivery",type:"cod",enabled:true}],"json");Bot.sendInlineKeyboard([[{title:"🛡 Admin Panel",command:"admin_panel"}],[{title:"🏠 Store",command:"main_menu"}]],"✅ *TPL-003 SETUP COMPLETE*\n━━━━━━━━━━━━━━\n\nYour professional store is ready for configuration.",{parse_mode:"Markdown"});
