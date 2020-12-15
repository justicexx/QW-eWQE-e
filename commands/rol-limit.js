const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  if (kontrol == "TR_tr") {
      const member3 = new Discord.MessageEmbed()
    .setDescription(` **HATA** \n - Bu Sunucuda Malesef Yetkin Yok - \n - Sana **Yönetici** Yetkisi Lazım! -`)
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(member3)
    let kanal = args[0]
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Lütfen bir sınır belirtiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`rollim_${message.guild.id}`, kanal);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Rol limit; ${kanal} olarak ayarlandı!\nNot: Eğer ayarlardan herhangi bir rol ayarlanmadıysa limit işlemez!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = args[0]
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Please specify a limit!`);
      message.channel.send(embed);
      return;
    }
    db.set(`rollim_${message.guild.id}`, kanal);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Role limit; Set to ${kanal}!\nNote: If no role has been set in the settings, no limit is set!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-limit"],
  permLevel: 3
};

exports.help = {
  name: "role-limit",
  description: "role-limit",
  usage: "role-limit"
};
