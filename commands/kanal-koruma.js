const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  if (kontrol == "TR_tr") {
    const member3 = new Discord.MessageEmbed()
    .setDescription(` **HATA** \n - Bu Sunucuda Malesef Yetkin Yok - \n - Sana **Yönetici** Yetkisi Lazım! -`)
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(member3)
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Lütfen log kanalını etiketleyiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`kanalk_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Kanal koruma log kanalı; ${kanal} olarak ayarlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Please tag the log channel!`);
      message.channel.send(embed);
      return;
    }
    db.set(`kanalk_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Channel protection log channel; Set to ${kanal}!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["channel-protection"],
  permLevel: 3
};

exports.help = {
  name: "kanal-koruma",
  description: "kanal-koruma",
  usage: "kanal-koruma"
};
