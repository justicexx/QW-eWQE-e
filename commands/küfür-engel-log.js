  exports.run = async (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
        let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == null) {
    kontrol = "EN";
}
 
  if (kontrol == "TR") {
    let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**HATA** \n - Bu Sunucuda Malesef Yetkin Yok - \n - Sana **Mesajları Yönet** Yetkisi Lazım! -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(` **HATA**  \n - Bir Kanal Etiketlemen Lazım. -`)
      if(küfür) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`küfürl.${message.guild.id}.kanal`,kanal.id)
        const nn = new Discord.MessageEmbed();
        
      return message.channel.send(member3.setDescription(`**Küfür Engel Log Başarıyla <#${kanal.id}> Olarak Ayarlandı.**`)).then(a => a.delete({timeout: 10000}));
 
                             
                                                       
      
      
                                                                                                                                                          
    } else {
                             
                             
  
    
                         
    }
  
  } else {
  
   let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`**ERROR** \n - You Are Not Authorized On This Server. - \n - I Need You **Manage Messages** Authority. -`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(` **ERROR**  \n - You Need To Tag A Channel. -`)
      if(küfür) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`küfürl.${message.guild.id}.kanal`,kanal.id)
        const nn = new Discord.MessageEmbed();
        
      return message.channel.send(member3.setDescription(`**Swearing Protection Log Successfully <#${kanal.id}> Set To.**`)).then(a => a.delete({timeout: 10000}));
 
                             
                                                       
      
      
                                                                                                                                                          
    } else {
                             
                             
  
    
    }
    }
  }                          
  

  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür-log" ,"swearinglog" ,"swearing-log"],
  permLevel: 0
};
    

exports.help = {
  name: 'küfürlog',
  description: '',
  usage: ''

};