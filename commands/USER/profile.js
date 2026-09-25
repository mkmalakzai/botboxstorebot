/*CMD
  command: profile
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

var p=User.getProperty("customer_profile")||{},a=p.addresses||[],t="👤 *MY PROFILE*\n━━━━━━━━━━━━━━\n\n👤 Name: *"+(p.first_name||user.first_name||"Customer")+"*\n📱 Phone: *"+(p.phone||"Not set")+"*\n📍 Saved Addresses: *"+a.length+"*";Bot.sendInlineKeyboard([[{title:"📱 Edit Phone",command:"profile_phone"},{title:"➕ Add Address",command:"address_add"}],[{title:"📍 Addresses",command:"addresses"},{title:"🏠 Main Menu",command:"main_menu"}]],t,{parse_mode:"Markdown"});
