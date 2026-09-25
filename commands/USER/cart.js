/*CMD
  command: cart
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

var c=User.getProperty("cart")||[],ps=Bot.getProperty("store_products")||[],s=Bot.getProperty("store_settings")||{symbol:"؋"};if(!c.length){Bot.sendInlineKeyboard([[{title:"🛍 Browse Products",command:"shop"},{title:"🏠 Main Menu",command:"main_menu"}]],"🛒 *YOUR CART*\n━━━━━━━━━━━━━━\n\nYour cart is empty.",{parse_mode:"Markdown"});return;}var t="🛒 *YOUR CART*\n━━━━━━━━━━━━━━\n\n",total=0,b=[];for(var i=0;i<c.length;i++){var p=null;for(var j=0;j<ps.length;j++)if(String(ps[j].id)==String(c[i].product_id)){p=ps[j];break;}if(!p)continue;var price=Number(p.sale_price||p.price||0),line=price*c[i].qty;total+=line;t+="• "+p.name+" × "+c[i].qty+" — "+s.symbol+line.toFixed(2)+"\n";b.push([{title:"➖ "+p.name,command:"cart_remove "+p.id},{title:"➕",command:"cart_add "+p.id}]);}t+="\n💳 *Subtotal:* "+s.symbol+total.toFixed(2);b.push([{title:"✅ Checkout",command:"checkout"},{title:"🗑 Clear",command:"cart_clear"}]);b.push([{title:"🛍 Shop",command:"shop"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,t,{parse_mode:"Markdown"});
