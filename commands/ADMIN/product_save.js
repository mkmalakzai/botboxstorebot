/*CMD
  command: product_save
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

var x=params.split("|");if(x.length<6){Bot.sendMessage("⚠️ Invalid product format.");return;}var ps=Bot.getProperty("store_products")||[],id="PRD-"+new Date().getTime();ps.push({id:id,name:x[0].trim(),description:x[1].trim(),price:Number(x[2]),sale_price:null,stock:Number(x[3]),sku:x[4].trim(),category_id:x[5].trim(),featured:false,active:true,variants:[],photos:[],created_at:new Date().toISOString()});Bot.setProperty("store_products",ps,"json");Bot.runCommand("admin_products");
