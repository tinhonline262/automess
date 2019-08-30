const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Quẩy Lên đi');
  console.log(`Nhập hồn thành công vào ${client.user.tag}!`);
});


client.on('message', message => {

  if (message.content === process.env.mess) {
    client.channels.get("609150983687372841").send("@daily");
    message.reply('Đã Tự Động Điểm Danh Thành Công')
    setTimeout(() => {
      client.channels.get("616583219730710554").send(process.env.mess)

    }, 86500000);
  }
});

//616583219730710554

client.login(process.env.token);






























     //hackdailyspam02082005snfubrcbeiucbeiucbeiucfhhcuhdfquh