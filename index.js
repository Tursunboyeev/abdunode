const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '865127867:AAEe3AhTeah-Q967yXwzTORzbeiYlVEu_TQ';

const bot = new TelegramBot(TOKEN, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Salom');
});

bot.onText(/\/love/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Yes, you are the bot of my life ❤'],
        ['No, sorry there is another one...']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
});
