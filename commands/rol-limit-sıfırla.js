const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  if (kontrol == "TR_tr") {
    const member3 = new Discord.MessageEmbed()
    .setDescription(` **HATA** \n - Bu Sunucuda Malesef Yetkin Yok - \n - Sana **Yönetici** Yetkisi Lazım! -`)
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(member3)
    let kanal = await db.fetch(`rollim_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Rol limit zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`rollim_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Rol limit sıfırlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = await db.fetch(`rollim_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Role limit is not already set!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`rollim_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Role limit reset!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-limit-reset"],
  permLevel: 3
};

exports.help = {
  name: "rol-limit-sıfırla",
  description: "rol-limit-sıfırla",
  usage: "rol-limit-sıfırla"
};
