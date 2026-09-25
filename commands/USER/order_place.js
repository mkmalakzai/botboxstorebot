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

var lock=User.getProperty("placing_order");if(lock){Bot.sendMessage("⏳ Order is already being processed.");return;}
User.setProperty("placing_order",true,"boolean");
var c=User.getProperty("cart")||[],p=User.getProperty("customer_profile")||{},idx=User.getProperty("checkout_address_index"),addr=(p.addresses||[])[idx],pay=User.getProperty("checkout_payment"),ps=Bot.getProperty("store_products")||[],s=Bot.getProperty("store_settings")||{symbol:"؋"},code=User.getProperty("checkout_coupon"),cs=Bot.getProperty("store_coupons")||[],sub=0,items=[];
if(!c.length||!addr||!pay){User.setProperty("placing_order",false,"boolean");Bot.runCommand("checkout");return;}
for(var i=0;i<c.length;i++){var found=null;for(var j=0;j<ps.length;j++)if(String(ps[j].id)==String(c[i].product_id)){found=ps[j];break;}if(!found||Number(found.stock||0)<c[i].qty){User.setProperty("placing_order",false,"boolean");Bot.sendInlineKeyboard([[{title:"🛒 Review Cart",command:"cart"}]],"⚠️ Stock changed.");return;}var price=Number(found.sale_price||found.price||0);sub+=price*c[i].qty;items.push({product_id:found.id,name:found.name,qty:c[i].qty,price:price});}
var d=s.delivery||{},fee=d.mode=="free"?0:Number(d.fixed_fee||0);
if(d.mode=="area"){fee=0;for(var q=0;q<(d.areas||[]).length;q++)if(String(d.areas[q].name).toLowerCase()==String(addr.label).toLowerCase()){fee=Number(d.areas[q].fee||0);break;}}
var disc=0,cp=null,ci=-1;if(code)for(var k=0;k<cs.length;k++)if(cs[k].code==code&&cs[k].active){cp=cs[k];ci=k;break;}
if(cp&&sub>=Number(cp.min_order||0)){if(cp.type=="percent")disc=sub*Number(cp.value||0)/100;if(cp.type=="fixed")disc=Math.min(sub,Number(cp.value||0));if(cp.free_delivery)fee=0;cp.used=Number(cp.used||0)+1;cp.users=cp.users||{};cp.users[user.telegramid]=Number(cp.users[user.telegramid]||0)+1;cs[ci]=cp;Bot.setProperty("store_coupons",cs,"json");}
var total=Math.max(0,sub-disc)+fee,id="ORD-"+new Date().getTime(),o={id:id,user_id:Number(user.telegramid),items:items,address:addr,payment_method:pay.id,payment_name:pay.name,payment_status:pay.type=="cod"?"COD":"Awaiting Proof",subtotal:sub,delivery_fee:fee,discount:disc,coupon:cp?cp.code:null,total:total,status:"Pending",history:[{status:"Pending",at:new Date().toISOString()}],created_at:new Date().toISOString()};
var os=Bot.getProperty("store_orders")||[];os.push(o);Bot.setProperty("store_orders",os,"json");
var mine=User.getProperty("my_order_ids")||[];mine.push(id);User.setProperty("my_order_ids",mine,"json");
for(var x=0;x<items.length;x++)for(var y=0;y<ps.length;y++)if(String(ps[y].id)==String(items[x].product_id)){ps[y].stock=Number(ps[y].stock||0)-items[x].qty;if(ps[y].stock<=0)ps[y].was_out_of_stock=true;break;}
Bot.setProperty("store_products",ps,"json");
User.setProperty("cart",[],"json");User.setProperty("checkout_address_index",null);User.setProperty("checkout_payment",null);User.setProperty("checkout_coupon",null);User.setProperty("placing_order",false,"boolean");
var b=[];if(pay.type=="manual")b.push([{title:"📸 Send Payment Proof",command:"payment_proof "+id}]);b.push([{title:"📦 My Orders",command:"my_orders"},{title:"🏠 Main Menu",command:"main_menu"}]);
Bot.sendInlineKeyboard(b,"🎉 *ORDER CREATED*\n\n🧾 "+id+"\n💰 *"+s.symbol+total.toFixed(2)+"*\n📦 Pending",{parse_mode:"Markdown"});