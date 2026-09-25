/*CMD
  command: category_save
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

if(!params)return;var cs=Bot.getProperty("store_categories")||[];cs.push({id:"CAT-"+new Date().getTime(),name:params.trim(),active:true});Bot.setProperty("store_categories",cs,"json");Bot.runCommand("admin_categories");
