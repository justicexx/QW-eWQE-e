const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  if (kontrol == "TR_tr") {
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.find(rol => rol.name === args[0]);
    const member3 = new Discord.MessageEmbed()
    if (!c) return message.channel.send(member3.setDescription("Lütfen bir rol belirtiniz!"))
    db.set(`güvenlikverilecek_${message.guild.id}`, c.id);
    const member2 = new Discord.MessageEmbed()
    message.channel.send(member2.setDescription(
      `Güvenlik verilecek rol <@&${c.id}> olarak ayarlandı!`
    ))
  } else {
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.find(rol => rol.name === args[0]);
    const member3 = new Discord.MessageEmbed()
    if (!c) return message.channel.send(member3.setDescription("Please specify a role!"))
    db.set(`güvenlikverilecek_${message.guild.id}`, c.id);
    const member2 = new Discord.MessageEmbed()
    message.channel.send(member2.setDescription(
      `Security is set to <@&${c.id}> the role to be given to the members!`
    ))
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-add-role"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-verilecek-rol",
  description: "güvenlik-rol",
  usage: "güvenlik-rol"
};
