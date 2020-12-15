const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  if (kontrol == "TR_tr") {
    const member3 = new Discord.MessageEmbed()
    .setDescription(` **HATA** \n - Bu Sunucuda Malesef Yetkin Yok - \n - Sana **Yönetici** Yetkisi Lazım! -`)
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(member3)
    let kanal = message.mentions.roles.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Lütfen bir rol etiketleyiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`rolrol_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Rol koruma rolü; ${kanal} olarak ayarlandı!\nNot: Eğer ayarlardan herhangi bir limit sayısı ayarlanmadıysa işlemez!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = message.mentions.roles.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Please tag a role!`);
      message.channel.send(embed);
      return;
    }
    db.set(`rolrol_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Role protection role; Set to ${kanal}!\nNote: It will not work if no limit is set from the settings!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection-role"],
  permLevel: 3
};

exports.help = {
  name: "rol-koruma-rol",
  description: "rol-koruma-rol",
  usage: "rol-koruma-rol"
};
