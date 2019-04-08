
bot.onText(/\ud83c\uddfa\ud83c\uddff O\'zbekcha/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(msg.from.id, `Salom, *${ msg.from.first_name }*!\n\n`
    + '*Iltimos, savollarni diqqat bilan o\'qib javob bering.*\n\n'
    + 'E\'lon qo\'shish uchun kerakli bo\'limni tanlang \ud83d\udc47\ud83c\udffb', {
    parse_mode: "Markdown",
    reply_markup: JSON.stringify({
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: [
        ['\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfeb Ustozman \ud83d\udc69\ud83c\udffc\u200d\ud83c\udfeb',
         '\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93 O\'quvchiman \ud83d\udc69\ud83c\udffb\u200d\ud83c\udf93']
      ]
    })
  });
});
