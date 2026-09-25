/*CMD
  command: main_menu
  help:
  need_reply: false
  auto_retry_time:
  folder: CORE

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group:
CMD*/

var s=Bot.getProperty("store_settings")||{name:"My Store"},p=User.getProperty("customer_profile")||{},b=[[{title:"🛍 Shop",command:"shop"},{title:"🛒 My Cart",command:"cart"}],[{title:"📦 My Orders",command:"my_orders"},{title:"❤️ Wishlist",command:"wishlist"}],[{title:"👤 My Profile",command:"profile"},{title:"💬 Help",command:"help"}]],o=Bot.getProperty("owner_id"),a=Bot.getProperty("store_admins")||[],ok=o==user.telegramid;for(var i=0;i<a.length;i++)if(a[i].user_id==user.telegramid)ok=true;if(ok)b.push([{title:"🛡 Admin Panel",command:"admin_panel"}]);Bot.sendInlineKeyboard(b,"🏠 *"+s.name+"*\n━━━━━━━━━━━━━━\n\nWelcome, *"+(p.first_name||user.first_name||"Customer")+"*! 👋\n\nEverything you need to shop, order and track purchases is right here.\n\n✨ *Simple shopping. Smooth ordering.*",{parse_mode:"Markdown"});
