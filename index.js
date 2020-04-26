const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Con cak nè');
  console.log(`Nhập môn hoàn tất ${client.user.tag}!`);
});


client.on('message', message => {

  if (message.content === process.env.mess) {
    client.channels.get("609150983687372841").send("@daily");
    message.reply('Hoàn thành tốt')
    setTimeout(() => {
      client.channels.get("703911463428948028").send(process.env.mess)

    }, 86500000);
  }
});


client.login(process.env.token);












