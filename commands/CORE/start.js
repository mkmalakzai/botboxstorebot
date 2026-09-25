/*CMD
  command: /start
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

if(Bot.getProperty("blocked_"+user.telegramid)){Bot.sendInlineKeyboard([[{title:"💬 Help",command:"help"}]],"⛔ *ACCESS RESTRICTED*",{parse_mode:"Markdown"});return;}var p=User.getProperty("customer_profile");if(!p){p={id:user.telegramid,first_name:user.first_name||"Customer",username:user.username||"",phone:"",addresses:[],joined_at:new Date().toISOString()};User.setProperty("customer_profile",p,"json");var ids=Bot.getProperty("customer_ids")||[];if(ids.indexOf(user.telegramid)<0){ids.push(user.telegramid);Bot.setProperty("customer_ids",ids,"json");}}Bot.runCommand("main_menu");
