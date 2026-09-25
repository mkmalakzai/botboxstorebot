/*CMD
  command: checkout_review
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

var c=User.getProperty("cart")||[],p=User.getProperty("customer_profile")||{},idx=User.getProperty("checkout_address_index"),a=(p.addresses||[])[idx],pay=User.getProperty("checkout_payment"),ps=Bot.getProperty("store_products")||[],s=Bot.getProperty("store_settings")||{symbol:"؋",delivery:{mode:"fixed",fixed_fee:0}};if(!c.length||!a||!pay){Bot.runCommand("checkout");return;}var sub=0,t="🧾 *ORDER REVIEW*\n━━━━━━━━━━━━━━\n\n";for(var i=0;i<c.length;i++)for(var j=0;j<ps.length;j++)if(String(ps[j].id)==String(c[i].product_id)){var price=Number(ps[j].sale_price||ps[j].price||0),line=price*c[i].qty;sub+=line;t+="• "+ps[j].name+" × "+c[i].qty+" — "+s.symbol+line.toFixed(2)+"\n";break;}var d=s.delivery||{},fee=d.mode=="free"?0:Number(d.fixed_fee||0);t+="\n📍 *Address:* "+a.label+"\n💳 *Payment:* "+pay.name+"\n\n🛒 Subtotal: "+s.symbol+sub.toFixed(2)+"\n🚚 Delivery: "+s.symbol+fee.toFixed(2)+"\n💰 *Total: "+s.symbol+(sub+fee).toFixed(2)+"*\n\nConfirm only when everything looks correct.";Bot.sendInlineKeyboard([[{title:"✅ Confirm Order",command:"order_place"}],[{title:"⬅️ Change Payment",command:"checkout_address "+idx},{title:"📍 Change Address",command:"checkout"}],[{title:"🛒 Back to Cart",command:"cart"}]],t,{parse_mode:"Markdown"});
