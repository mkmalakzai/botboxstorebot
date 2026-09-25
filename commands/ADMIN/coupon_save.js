/*CMD
  command: coupon_save
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

var x=params.split("|");if(x.length<6){Bot.sendMessage("⚠️ Invalid coupon format.");return;}var c=Bot.getProperty("store_coupons")||[];c.push({code:x[0].trim().toUpperCase(),type:x[1].trim(),value:Number(x[2]),min_order:Number(x[3]),total_limit:Number(x[4]),per_user_limit:Number(x[5]),used:0,active:true,expires_at:null,free_delivery:false});Bot.setProperty("store_coupons",c,"json");Bot.runCommand("admin_coupons");
