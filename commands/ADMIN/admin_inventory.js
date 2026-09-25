/*CMD
  command: admin_inventory
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

var ps=Bot.getProperty("store_products")||[],s=Bot.getProperty("store_settings")||{low_stock:5},t="📦 *INVENTORY CENTER*\n━━━━━━━━━━━━━━\n\n",n=0;for(var i=0;i<ps.length;i++)if(Number(ps[i].stock||0)<=Number(s.low_stock||5)){t+="⚠️ "+ps[i].name+" — *"+ps[i].stock+"*\n";n++;}if(!n)t+="✅ Stock levels look healthy.";Bot.sendInlineKeyboard([[{title:"🛍 Products",command:"admin_products"},{title:"⬅️ Admin Panel",command:"admin_panel"}]],t,{parse_mode:"Markdown"});
