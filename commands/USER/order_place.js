/*CMD
  command: order_place
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

var lock=User.getProperty("placing_order");if(lock){Bot.sendMessage("⏳ Your order is already being processed.");return;}User.setProperty("placing_order",true,"boolean");var c=User.getProperty("cart")||[],p=User.getProperty("customer_profile")||{},idx=User.getProperty("checkout_address_index"),addr=(p.addresses||[])[idx],pay=User.getProperty("checkout_payment"),ps=Bot.getProperty("store_products")||[],s=Bot.getProperty("store_settings")||{symbol:"؋",delivery:{mode:"fixed",fixed_fee:0}},sub=0,items=[];if(!c.length||!addr||!pay){User.setProperty("placing_order",false,"boolean");Bot.runCommand("checkout");return;}for(var i=0;i<c.length;i++){var found=null;for(var j=0;j<ps.length;j++)if(String(ps[j].id)==String(c[i].product_id)){found=ps[j];break;}if(!found||Number(found.stock||0)<c[i].qty){User.setProperty("placing_order",false,"boolean");Bot.sendInlineKeyboard([[{title:"🛒 Review Cart",command:"cart"}]],"⚠️ *STOCK CHANGED*\n\nOne or more products no longer have enough stock.",{parse_mode:"Markdown"});return;}var price=Number(found.sale_price||found.price||0);sub+=price*c[i].qty;items.push({product_id:found.id,name:found.name,qty:c[i].qty,price:price});}var d=s.delivery||{},fee=d.mode=="free"?0:Number(d.fixed_fee||0),os=Bot.getProperty("store_orders")||[],id="ORD-"+new Date().getTime(),o={id:id,user_id:user.telegramid,items:items,address:addr,payment_method:pay.id,payment_name:pay.name,payment_status:pay.type=="cod"?"COD":"Awaiting Proof",subtotal:sub,delivery_fee:fee,discount:0,total:sub+fee,status:"Pending",history:[{status:"Pending",at:new Date().toISOString()}],created_at:new Date().toISOString()};os.push(o);Bot.setProperty("store_orders",os,"json");for(var k=0;k<items.length;k++)for(var z=0;z<ps.length;z++)if(String(ps[z].id)==String(items[k].product_id)){ps[z].stock=Number(ps[z].stock||0)-items[k].qty;break;}Bot.setProperty("store_products",ps,"json");User.setProperty("cart",[],"json");User.setProperty("checkout_address_index",null);User.setProperty("checkout_payment",null);User.setProperty("placing_order",false,"boolean");var b=[];if(pay.type=="manual")b.push([{title:"📸 Send Payment Proof",command:"payment_proof "+id}]);b.push([{title:"📦 My Orders",command:"my_orders"},{title:"🏠 Main Menu",command:"main_menu"}]);Bot.sendInlineKeyboard(b,"🎉 *ORDER CREATED SUCCESSFULLY*\n━━━━━━━━━━━━━━\n\n🧾 Order: `"+id+"`\n💰 Total: *"+s.symbol+(sub+fee).toFixed(2)+"*\n📦 Status: *Pending*\n💳 Payment: *"+pay.name+"*\n\nWe'll notify you when the order status changes.",{parse_mode:"Markdown"});
