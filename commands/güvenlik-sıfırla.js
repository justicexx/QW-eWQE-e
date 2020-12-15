const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let k = await db.fetch(`güvenlik_${message.guild.id}`);
  if (kontrol == "TR_tr") {
     const member2 = new Discord.MessageEmbed()
    if (!k) return message.channel.send(member2.setDescription("Güvenlik sistemi zaten ayarlanmamış!"))
    db.delete(`güvenlik_${message.guild.id}`);
     const member3 = new Discord.MessageEmbed()
    message.channel.send(member3.setDescription(`Güvenlik kanalı sıfırlandı!`))
  } else {
     const member2 = new Discord.MessageEmbed()
    if (!k) return message.channel.send(member2.setDescription("The security system is not already set!"))
    db.delete(`güvenlik_${message.guild.id}`);
     const member3 = new Discord.MessageEmbed()
    message.channel.send(member3.setDescription(`Security channel has been reset!`))
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-sıfırla",
  description: "güvenlik-sıfırla",
  usage: "güvenlik-sıfırla"
};
