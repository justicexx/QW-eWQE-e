const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  if (kontrol == "TR_tr") {
    let c = await db.fetch(`güvenlikverilecek_${message.guild.id}`);
    const member2 = new Discord.MessageEmbed()
    if (!c) return message.channel.send(member2.setDescription("Güvenlik verilecek rolü zaten sıfırlanmamış!"))
    const member3 = new Discord.MessageEmbed()
    message.channel.send(member3.setDescription("Güvenlik verilecek rolü başarıyla sıfırlandı!"))
    db.delete(`güvenlikverilecek_${message.guild.id}`);
  } else {
    let c = await db.fetch(`güvenlikverilecek_${message.guild.id}`);
    const member2 = new Discord.MessageEmbed()
    if (!c) return message.channel.send(member2.setDescription("The security given role has not been reset already!"))
    const member3 = new Discord.MessageEmbed()
    message.channel.send(member3.setDescription("Security given role has been successfully reset!"))
    db.delete(`güvenlikverilecek_${message.guild.id}`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-add-role-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-rol-sıfırla",
  description: "güvenlik-rol-sıfırla",
  usage: "güvenlik-rol-sıfırla"
};
