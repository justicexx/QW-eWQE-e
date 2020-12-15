 exports.run = async (client, message, args) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
        let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == null) {
    kontrol = "EN";
}

  if (kontrol == "TR") {
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**HATA** \n - Bu Sunucuda Malesef Yetkin Yok - \n - Sana **Mesajları Yönet** Yetkisi Lazım! -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(` **HATA**  \n - Bir Kanal Etiketlemen Lazım. -`)
      if(reklam) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
        const nn = new Discord.MessageEmbed();
      db.set(`reklam.${message.guild.id}.kanal`,kanal.id)
      return message.channel.send(member3.setDescription(`**Reklam Engel Log Başarıyla <#${kanal.id}> Olarak Ayarlandı **`)).then(a => a.delete({timeout: 10000}));
    
    }else{
      return message.channel.send(member3.setDescription('**Reklam Engel Ayarlanmamış!**')).then(a => a.delete({timeout: 10000}));
    
    
    
    }
} else {
 let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**ERROR** \n - You Are Not Authorized On This Server. - \n - I Need You **Manage Messages** Authority. -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**ERROR**  \n - You Need To Tag A Channel. -`)
      if(reklam) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
        const nn = new Discord.MessageEmbed();
      db.set(`reklam.${message.guild.id}.kanal`,kanal.id)
      return message.channel.send(member3.setDescription(`**Reklam Engel Log Başarıyla <#${kanal.id}> Olarak Ayarlandı **`)).then(a => a.delete({timeout: 10000}));
    
    }else{
      return message.channel.send(member3.setDescription('**Reklam Engel Ayarlanmamış!**')).then(a => a.delete({timeout: 10000}));
    }
}
                           
   
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-log"],
  permLevel: 0
};

exports.help = {
  name: 'reklamlog',
  description: '',
  usage: ''
};