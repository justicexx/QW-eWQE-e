const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let kontrol = (await db.fetch(`dil_${message.guild.id}`)) || "EN";
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ad!";
  let ototag1 = (await db.fetch(`ototag_${message.guild.id}`)) || ":x:";
  let ototag2 = await db.fetch(`ototagk_${message.guild.id}`);
  let ototag3 = await db.fetch(`ototagmsj_${message.guild.id}`);
  let rolkoruma = await db.fetch(`rolk_${message.guild.id}`);
  let rolkoruma2 = await db.fetch(`rolrol_${message.guild.id}`);
  let bankoruma2 = await db.fetch(`banrol_${message.guild.id}`);
  let bankanalı = await db.fetch(`bank_${message.guild.id}`);
  let rolkoruma3 = (await db.fetch(`rollim_${message.guild.id}`)) || ":x:";
  let bank = (await db.fetch(`slimido_${message.guild.id}`)) || ":x:";
  let kanalkoruma = await db.fetch(`kanalk_${message.guild.id}`);
  let k = await db.fetch(`güvenlik_${message.guild.id}`);
  let c = await db.fetch(`güvenlikverilecek_${message.guild.id}`);
  let d = await db.fetch(`güvenlikalınacak_${message.guild.id}`);
  let cd = await db.fetch(`güvenlikfake_${message.guild.id}`);
  let küfürl = await db.fetch(`küfürl.${message.guild.id}.kanal`)
  let küfürs = await db.fetch(`küfür.${message.guild.id}.durum`);
  
     let küfürlog;
  if (!küfürlog) {
    if (kontrol === "TR_tr") {
      küfürlog = ":x:";
    } else {
      küfürlog = ":white_check_mark:";
    }
  } else {
    küfürlog = `<#${küfürlog}>`;
  }
  
  let küfür;
  if (!küfürs) {
    if (kontrol === "TR_tr") {
      küfürs = ":white_check_mark:";
    } else {
      küfürs = ":x:"
    }
  }

  
  
  let sce4;
  if (!cd) {
    if (kontrol === "TR_tr") {
      sce4 = ":x:";
    } else {
      sce4 = ":white_check_mark:";
    }
  } else {
    sce4 = `<@&${cd}>`;
  }

  let sce3;
  if (!d) {
    if (kontrol === "TR_tr") {
      sce3 = ":x:";
    } else {
      sce3 = ":white_check_mark:";
    }
  } else {
    sce3 = `<@&${d}>`;
  }
  let sce2;
  if (!c) {
    if (kontrol === "TR_tr") {
      sce2 = ":x:";
    } else {
      sce2 = ":white_check_mark:";
    }
  } else {
    sce2 = `<@&${c}>`;
  }

  let sce;
  if (!k) {
    if (kontrol === "TR_tr") {
      sce = ":x:";
    } else {
      sce = ":white_check_mark:";
    }
  } else {
    sce = `<#${k}>`;
  }

  let ototagk;
  if (!ototag2) {
    if (kontrol === "TR_tr") {
      ototagk = ":x:";
    } else {
      ototagk = ":white_check_mark:";
    }
  } else {
    ototagk = `<#${ototag2}>`;
  }
  let rolk;
  if (!rolkoruma) {
    if (kontrol === "TR_tr") {
      rolk = ":x:";
    } else {
      rolk = ":white_check_mark:";
    }
  } else {
    rolk = `<#${rolkoruma}>`;
  }
  let kanalk;
  if (!kanalkoruma) {
    if (kontrol === "TR_tr") {
      kanalk = ":x:";
    } else {
      kanalk = ":white_check_mark:";
    }
  } else {
    kanalk = `<#${kanalkoruma}>`;
  }
  let ban2;
  if (!bankanalı) {
    if (kontrol === "TR_tr") {
      ban2 = ":x:";
    } else {
      ban2 = ":white_check_mark:";
    }
  } else {
    ban2 = `<#${bankanalı}>`;
  }
  let rolk2;
  if (!rolkoruma2) {
    if (kontrol === "TR_tr") {
      rolk2 = ":x:";
    } else {
      rolk2 = ":white_check_mark:";
    }
  } else {
    rolk2 = `<@&${rolkoruma2}>`;
  }
  let bank2;
  if (!bankoruma2) {
    if (kontrol === "TR_tr") {
      bank2 = ":x:";
    } else {
      bank2 = ":white_check_mark:";
    }
  } else {
    bank2 = `<@&${bankoruma2}>`;
  }
  let ototagk2;
  if (!ototag3) {
    if (kontrol === "TR_tr") {
      ototagk2 = "-tag- | -uye-";
    } else {
      ototagk2 = "-tag- | -member-";
    }
  } else {
    ototagk2 = ototag3;
  }

  if (kontrol == "TR") {
    let seç = args[0];
    if (!seç)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Lütfen bir seçeneği seçiniz!\n-----------------------------------\nSeçenekler; `koruma` `genel`, `ototag`, `rol-koruma`, `kanal-koruma`, `ban-koruma`, `güvenlik`\n----------------------------------- \n ÖRNEK: ad!ayarlar genel"
          )
          .setColor("BLACK")
      );
    if (seç == "genel") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`İşte ${message.guild.name} adlı sunucunun ayarları!`)
        .addField(`Dil`, kontrol, true)
        .addField(`Önek`, prefix, true)
        .addField(`Ototag`, ototag1, true)
        .addField(`Ototag Kanal`, ototagk, true)
        .addField(`Ototag İsim`, ototagk2, true)
        .addField(`Rol Koruma Log`, rolk, true)
        .addField(`Rol Koruma Rol`, rolk2, true)
        .addField(`Rol Koruma Limit`, rolkoruma3, true)
        .addField(`Kanal Koruma Log`, kanalk, true)
        .addField(`Ban Koruma Log`, ban2, true)
        .addField(`Ban Koruma Rol`, bank2, true)
        .addField(`Ban Koruma Limit`, bank, true)
        .addField(`Güvenlik Log`, sce, true)
        .addField(`Güvenlik Eklenecek Rol`, sce2, true)
        .addField(`Güvenlik Alınacak Rol`, sce3, true)
        .addField(`Güvenlik Sahte Rol`, sce4, true)
        .addField(`Küfür Koruması`, küfür, true)  
        .addField(`Küfür-Log`, küfürlog, true)
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "ototag") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`İşte ${message.guild.name} adlı sunucunun ayarları!`)

        .addField(`Ototag`, ototag1, true)
        .addField(`Ototag Kanal`, ototagk, true)
        .addField(`Ototag İsim`, ototagk2, true)

        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "rol-koruma") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`İşte ${message.guild.name} adlı sunucunun ayarları!`)

        .addField(`Rol Koruma Log`, rolk, true)
        .addField(`Rol Koruma Rol`, rolk2, true)
        .addField(`Rol Koruma Limit`, rolkoruma3, true)

        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "kanal-koruma") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`İşte ${message.guild.name} adlı sunucunun ayarları!`)

        .addField(`Kanal Koruma Log`, kanalk, true)

        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "ban-koruma") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`İşte ${message.guild.name} adlı sunucunun ayarları!`)

        .addField(`Ban Koruma Log`, ban2, true)
        .addField(`Ban Koruma Rol`, bank2, true)
        .addField(`Ban Koruma Limit`, bank, true)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "güvenlik") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`İşte ${message.guild.name} adlı sunucunun ayarları!`)

        .addField(`Güvenlik Log`, sce, true)
        .addField(`Güvenlik Eklenecek Rol`, sce2, true)
        .addField(`Güvenlik Alınacak Rol`, sce3, true)
        .addField(`Güvenlik Sahte Rol`, sce4, true)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
      
       } else if (seç == "koruma") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`İşte ${message.guild.name} adlı sunucunun ayarları!`)
        .addField(`Küfür Log`, küfürlog, true)
        .addField(`Küfür Koruması Aktifmi?`, küfür, true)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else {
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Lütfen bir seçeneği seçiniz!\n-----------------------------------\nSeçenekler; `koruma`, `ototag`, `rol-koruma`, `kanal-koruma`, `ban-koruma`, `güvenlik`\n----------------------------------- \n ÖRNEK: ad!ayarlar genel"
          )
          .setColor("BLACK")
      );
    }
  } else {
    let seç = args[0];
    if (!seç)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Please select an option!\n-----------------------------------\nOptions; `general`, `autotag`, `role-protection`, `channel-protection`, `ban-protection`, `security-protection`\n----------------------------------- \n EXAMPLE: ad!settings general"
          )
          .setColor("BLACK")
      );
    if (seç == "general") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Here are the settings of the server named ${message.guild.name}!`
        )
        .addField(`Language`, kontrol, true)
        .addField(`Prefix`, prefix, true)
        .addField(`Autotag`, ototag1, true)
        .addField(`Autotag Channel`, ototagk, true)
        .addField(`Autotag Name`, ototagk2, true)
        .addField(`Role Protection Log`, rolk, true)
        .addField(`Role Protection Role`, rolk2, true)
        .addField(`Role Protection Limit`, rolkoruma3, true)
        .addField(`Channel Protection Log`, kanalk, true)
        .addField(`Ban Protection Log`, ban2, true)
        .addField(`Ban Protection Role`, bank2, true)
        .addField(`Ban Protection Limit`, bank, true)
        .addField(`Security Protection Log`, sce, true)
        .addField(`Security Add Role`, sce2, true)
        .addField(`Security Remove Role`, sce3, true)
        .addField(`Security Fake Role`, sce4, true)
        .addField(`Swearing Protection`, küfür, true)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
      return;
    } else if (seç == "autotag") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Here are the settings of the server named ${message.guild.name}!`
        )
        .addField(`Autotag`, ototag1, true)
        .addField(`Autotag Channel`, ototagk, true)
        .addField(`Autotag Name`, ototagk2, true)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "role-protection") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Here are the settings of the server named ${message.guild.name}!`
        )

        .addField(`Role Protection Log`, rolk, true)
        .addField(`Role Protection Role`, rolk2, true)
        .addField(`Role Protection Limit`, rolkoruma3, true)

        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "channel-protection") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Here are the settings of the server named ${message.guild.name}!`
        )

        .addField(`Channel Protection Log`, kanalk, true)

        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "ban-protection") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Here are the settings of the server named ${message.guild.name}!`
        )

        .addField(`Ban Protection Log`, ban2, true)
        .addField(`Ban Protection Role`, bank2, true)
        .addField(`Ban Protection Limit`, bank, true)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else if (seç == "security-protection") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Here are the settings of the server named ${message.guild.name}!`
        )

        .addField(`Security Protection Log`, sce, true)
        .addField(`Security Add Role`, sce2, true)
        .addField(`Security Remove Role`, sce3, true)
        .addField(`Security Fake Role`, sce4, true)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
    } else {
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            "Please select an option!\n-----------------------------------\nOptions; `general`, `autotag`, `role-protection`, `channel-protection`, `ban-protection`, `security-protection`\n-----------------------------------"
          )
          .setColor("BLACK")
      );
    }
  }
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ["mematixosmanx"],
  permLevel: 0
};

exports.help = {
  name: "lolosmwnda",
  description: "ayarlar",
  usage: "ayarlar"

};
