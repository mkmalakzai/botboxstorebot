/*CMD
  command: cart_add
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

var id=params,ps=Bot.getProperty("store_products")||[],p=null;for(var i=0;i<ps.length;i++)if(String(ps[i].id)==String(id)){p=ps[i];break;}if(!p||Number(p.stock||0)<=0){Bot.sendMessage("⚠️ *OUT OF STOCK*",{parse_mode:"Markdown"});return;}var c=User.getProperty("cart")||[],f=false;for(var j=0;j<c.length;j++)if(String(c[j].product_id)==String(id)){c[j].qty++;f=true;break;}if(!f)c.push({product_id:id,qty:1});User.setProperty("cart",c,"json");Bot.sendInlineKeyboard([[{title:"🛒 View Cart",command:"cart"},{title:"🛍 Keep Shopping",command:"shop"}]],"✅ *ADDED TO CART*\n\n"+p.name+" was added successfully.",{parse_mode:"Markdown"});
