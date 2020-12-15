const db = require("quick.db")
const Discord = require("discord.js")
   exports.run = async(client, message ,args) => {
   let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == null) {
    kontrol = "EN";
}

  if (kontrol == "TR") {
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**HATA** \n - Bu Sunucuda Yetkili Değilsin. - \n - Sana **Mesajları Yönet** Yetkisi Lazım. -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(reklam) {
      
          if(!args[0]) return message.channel.send(member3.setDescription(`Reklam Korumasını Aktif Etmek İstersen **${client.ayarlar.prefix}reklamengel aç** Yazabilirsin :)`))
      db.delete(`reklam.${message.guild.id}`)
      return message.channel.send(member3.setDescription('**Reklam Engel Başarıyla Kapandı.**')).then(a => a.delete({timeout: 10000}));
      
      
   

   } else {
  
      db.set(`reklam.${message.guild.id}.durum`,true)
     return message.channel.send(member3.setDescription('**Reklam Engel Başarıyla Açıldı.**')).then(a => a.delete({timeout: 10000}));
   }
   } else {
   }

     
         let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**ERROR** \n - You Are Not Authorized On This Server. - \n - I Need You **Manage Messages** Authority. -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(reklam) {
      
          if(!args[0]) return message.channel.send(member3.setDescription(`If You Want to Enable Ad Block **${client.ayarlar.prefix}ad-block open** You can write :)`))
      db.delete(`reklam.${message.guild.id}`)
      return message.channel.send(member3.setDescription('**Ad Block Successfully Closed.**')).then(a => a.delete({timeout: 10000}));
      
      
   

   } else {
  
      db.set(`reklam.${message.guild.id}.durum`,true)
     return message.channel.send(member3.setDescription('**Ad Block Successfully Opened.**')).then(a => a.delete({timeout: 10000}));
     
   }
   }

   

   
   

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-engel" ,"ad-block" ,"ad-barrier"],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: 'WESTRA',
  usage: 'WESTRA'
};