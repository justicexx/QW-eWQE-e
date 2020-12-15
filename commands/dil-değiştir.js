const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
   const member3 = new Discord.MessageEmbed()
.setColor(0x36393F)
.setDescription(`**HATA** \n - Bu Sunucuda Malesef Yetkin Yok - \n - Sana **Mesajları Yönet** Yetkisi Lazım! -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR") {
    let dil = args[0];
    if (!dil) {
         const just = new Discord.MessageEmbed()
       message.channel.send(just.setDescription(`__Lütfen Bir dil belirtiniz! Diller:__ \`TR\`/\`EN\``))
      return;
    }
    if (dil === "EN") {
       const just = new Discord.MessageEmbed()
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(just.setDescription(`__New language set to \`${dil}\`!__`))
      
    } else if (dil === "TR") {
       const just = new Discord.MessageEmbed()
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(just.setDescription(`__Yeni dil \`${dil}\` olarak ayarlandı!__`))
    } else {
      const just = new Discord.MessageEmbed()
      message.channel.send(just.setDescription(`__Hatalı Dil! Diller:__ \`TR\`/\`EN\``))
      return;
    }
  } else {
    let dil = args[0];
    if (!dil) {
      const just = new Discord.MessageEmbed()
     message.channel.send(just.setDescription(
        `__Please Specify a Language! Languages: \`TR\`/\`EN\``
      ));
      return;
    }
    if (dil === "EN") {
      db.set(`dil_${message.guild.id}`, dil);
      const just = new Discord.MessageEmbed()
      message.channel.send(just.setDescription(`__New language set to \`${dil}\`!__`))
    } else if (dil === "TR") {
      db.set(`dil_${message.guild.id}`, dil);
      const just = new Discord.MessageEmbed()
      message.channel.send(just.setDescription(`__Yeni dil \`${dil}\` olarak ayarlandı!__`))
    } else {
      const just = new Discord.MessageEmbed()
     message.channel.send(just.setDescription(
        `__Incorrect language! Languages: \`TR\`/\`EN\`` 
      ));
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["language", "lang"],
  permLevel: 0
};

exports.help = {
  name: "dil",
  description: "dil",
  usage: "dil"
};
