const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '865127867:AAEe3AhTeah-Q967yXwzTORzbeiYlVEu_TQ'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Salom, ${msg.from.first_name}')
})
