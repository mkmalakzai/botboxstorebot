/*CMD
  command: payment_instructions_wait
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group:
CMD*/

var d=User.getProperty("payment_draft")||{},ms=Bot.getProperty("payment_methods")||[];d.instructions=message.trim();d.id="PAY-"+new Date().getTime();d.type="manual";d.enabled=true;ms.push(d);Bot.setProperty("payment_methods",ms,"json");User.setProperty("payment_draft",null);Bot.sendInlineKeyboard([[{title:"💳 Payment Methods",command:"admin_payments"},{title:"➕ Add Another",command:"payment_add"}]],"✅ *PAYMENT METHOD CREATED*\n\n*"+d.name+"* is enabled.",{parse_mode:"Markdown"});
