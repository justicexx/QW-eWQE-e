
const db = require("quick.db")
const Discord = require("discord.js")
  exports.run = async(client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == null) {
    kontrol = "EN";
}
 
  if (kontrol == "TR") {
    let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**HATA** \n - Bu Sunucuda Yetkili Değilsin. - \n - Sana **Mesajları Yönet** Yetkisi Lazım. -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
  if(!args[0]) return message.channel.send(member3.setDescription(`Küfür Korumasını Aktif Etmek İstersen **${client.ayarlar.prefix}küfürengel aç** Yazabilirsin :)`))
      if(küfür) {
      db.delete(`küfür.${message.guild.id}`)
return message.channel.send(member3.setDescription('**Küfür Engel Başarıyla Kapandı.**')).then(a => a.delete({timeout: 10000}));
    
    }else{
      db.set(`küfür.${message.guild.id}.durum`,true)
return message.channel.send(member3.setDescription('**Küfür Engel Başarıyla Açıldı.**')).then(a => a.delete({timeout: 10000}));
    }
    
    }else{
    }
      let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**ERROR** \n - You Are Not Authorized On This Server. - \n - I Need You **Manage Messages** Authority. -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
  if(!args[0]) return message.channel.send(member3.setDescription(`If You Want to Enable Swearing Protection **${client.ayarlar.prefix}swearingblock open** You can write :)`))
      if(küfür) {
      db.delete(`küfür.${message.guild.id}`)
return message.channel.send(member3.setDescription('**Swearing Block Successfully Closed**')).then(a => a.delete({timeout: 10000}));
    
    }else{
      db.set(`küfür.${message.guild.id}.durum`,true)
return message.channel.send(member3.setDescription('**Swearing Block Successfully Open**')).then(a => a.delete({timeout: 10000}));
    }
    }


 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür-engel" ,"swearingblock" ,"swearing-block"],
  permLevel: 0
};

exports.help = {
  name: 'küfürengel',
  description: '',
 usage: ''
};
  