/*CMD
  command: wishlist
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

var w=User.getProperty("wishlist")||[],ps=Bot.getProperty("store_products")||[],b=[];for(var i=0;i<w.length;i++)for(var j=0;j<ps.length;j++)if(String(ps[j].id)==String(w[i])){b.push([{title:"❤️ "+ps[j].name,command:"product "+ps[j].id},{title:"✖️",command:"wishlist_remove "+ps[j].id}]);break;}b.push([{title:"🛍 Shop",command:"shop"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"❤️ *MY WISHLIST*\n━━━━━━━━━━━━━━\n\n"+(w.length?"Your saved products are below.":"Your wishlist is empty."),{parse_mode:"Markdown"});
