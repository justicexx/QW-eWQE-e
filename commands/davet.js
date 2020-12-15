const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  const just = new Discord.MessageEmbed()
    
     message.channel.send(just.setDescription('**Botumuzu Davet Etmek İçin**\n \n [Botu Davet Et!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) \n \n **Destek Sunucumuza Gelmek İsterseniz**\n \n [Destek Sunucumuz](https://discord.gg/DTpWyUtMMQ)')
    .setFooter(client.user.username, client.user.avatarURL)
                          )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
