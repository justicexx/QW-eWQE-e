const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  if (kontrol == "TR_tr") {
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.find(rol => rol.name === args[0]);
     const member2 = new Discord.MessageEmbed()
    if (!c) return message.channel.send(member2.setDescription("Lütfen bir rol belirtiniz!"))
    db.set(`güvenlikfake_${message.guild.id}`, c.id);
     const member3 = new Discord.MessageEmbed()
    message.channel.send(member3.setDescription(
      `Güvenlik fakelere verilecek rol <@&${c.id}> olarak ayarlandı!`
    ))
  } else {
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.find(rol => rol.name === args[0]);
     const member2 = new Discord.MessageEmbed()
    if (!c) return message.channel.send(member2.setDescription("Please specify a role!"))
    db.set(`güvenlikfake_${message.guild.id}`, c.id);
     const member3 = new Discord.MessageEmbed()
    message.channel.send(member3.setDescription(
      `Security is set to <@&${c.id}> the role to be given to the fakes!`
    ))
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-fake-role"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-sahte-rol",
  description: "güvenlik-sahte-rol",
  usage: "güvenlik-sahte-rol"
};
