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

var c=User.getProperty("cart")||[],p=User.getProperty("customer_profile")||{},idx=User.getProperty("checkout_address_index"),addr=(p.addresses||[])[idx],pay=User.getProperty("checkout_payment"),ps=Bot.getProperty("store_products")||[],s=Bot.getProperty("store_settings")||{symbol:"؋",delivery:{fixed_fee:0}},sub=0,items=[];if(!c.length||!addr||!pay){Bot.runCommand("checkout");return;}for(var i=0;i<c.length;i++)for(var j=0;j<ps.length;j++)if(String(ps[j].id)==String(c[i].product_id)){var q=ps[j];if(Number(q.stock||0)<c[i].qty){Bot.sendMessage("⚠️ Not enough stock for "+q.name);return;}var price=Number(q.sale_price||q.price||0);sub+=price*c[i].qty;items.push({product_id:q.id,name:q.name,qty:c[i].qty,price:price});break;}var fee=(s.delivery&&s.delivery.mode=="free")?0:Number((s.delivery||{}).fixed_fee||0),os=Bot.getProperty("store_orders")||[],id="ORD-"+new Date().getTime(),o={id:id,user_id:user.telegramid,items:items,address:addr,payment_method:pay.id,payment_status:pay.type=="cod"?"COD":"Awaiting Proof",subtotal:sub,delivery_fee:fee,discount:0,total:sub+fee,status:"Pending",history:[{status:"Pending",at:new Date().toISOString()}],created_at:new Date().toISOString()};os.push(o);Bot.setProperty("store_orders",os,"json");for(var k=0;k<items.length;k++)for(var z=0;z<ps.length;z++)if(String(ps[z].id)==String(items[k].product_id)){ps[z].stock=Number(ps[z].stock||0)-items[k].qty;break;}Bot.setProperty("store_products",ps,"json");User.setProperty("cart",[],"json");Bot.sendInlineKeyboard([[{title:"📦 My Orders",command:"my_orders"},{title:"🏠 Main Menu",command:"main_menu"}]],"✅ *ORDER PLACED*\n━━━━━━━━━━━━━━\n\n🧾 `"+id+"`\n💰 Total: *"+s.symbol+(sub+fee).toFixed(2)+"*\n📦 Status: *Pending*\n💳 Payment: *"+pay.name+"*",{parse_mode:"Markdown"});
