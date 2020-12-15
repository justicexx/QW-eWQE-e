const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
exports.run = async (bot, message) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    //let shardi = bot.shard.id + 1;

    const duration = moment
      .duration(bot.uptime)
      .format("D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .addField(`»Versiyon`,` V12.5.0 `, true)
      .addField(`»Aktiflik Süresi`, duration, true)
      .addField(`»Sunucular`, bot.guilds.cache.size.toLocaleString(), true)
      .addField(
        `»Kullanıcılar`,
        bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
        true
      )
      .addField(`»Gecikme`, bot.ws.ping + "ms", true)
      .addField(
        `»Ram Kullanımı`,
        `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
       true
      )
      //.addField(`Toplam Shard`, bot.shard.count, true)
      //.addField(`Bulunduğum Shard`, shardi, true)
      //.addField(`Genel Shard`, `${shardi}/${bot.shard.count}`, true)
      .addField(`Destek Sunucusu`, `[Tıkla!](https://discord.gg/sVqjM6h)`, true)
      .addField(
        `Botu Ekleyin`,
        `[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=774154474063003658&scope=bot&permissions=8)`,
        true
      )
      .addField(`Bota Oy Verin`, `[YAKINDA](https://oyvermekçokyakında!.com)`, true)
      .setFooter(bot.user.username, bot.user.avatarURL);
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-info"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};
