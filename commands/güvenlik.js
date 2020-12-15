const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  if (kontrol == "TR") {
const member3 = new Discord.MessageEmbed()
    let c = message.mentions.channels.first();
      const member2 = new Discord.MessageEmbed()
    if (!c) return message.channel.send(member2.setDescription("Lütfen bir kanal etiketleyiniz!"))
    db.set(`güvenlik_${message.guild.id}`, c.id);
    const member4 = new Discord.MessageEmbed()
    message.channel.send(member4.setDescription(
      `Güvenlik kanalı ${c} olarak ayarlandı!`
    ))
  } else {
    const member2 = new Discord.MessageEmbed()
        let c = message.mentions.channels.first();
    if (!c) return 
    message.channel.send(member2.setDescription("Please tag a channel!"))
    db.set(`güvenlik_${message.guild.id}`, c.id);
    const member3 = new Discord.MessageEmbed()
    message.channel.send(member3.setDescription(
      `Security channel is set to ${c}!`
    ))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security"],
  permLevel: 0
};

exports.help = {
  name: "güvenlik",
  description: "güvenlik",
  usage: "güvenlik"
};
