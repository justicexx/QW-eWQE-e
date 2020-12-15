const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
	let rol = db.fetch(`banrol_${message.guild.id}`)
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}ban @ETİKET #Sebep\**kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
  if(!args[0]) return message.channel.send(nn.setColor('#00001').setDescription(`Görüyorumki Şuanda Senin \`BAN\` Yetkin Bulunmamaktadır Lütfen Yetkini Alıp Öyle Birisini Banlamayı Dene! `))
	let banlog = db.fetch(`banlog_${message.guild.id}`)
	if(!banlog) return message.channel.send(nn.setColor('#00001').setDescription(`Dostum \`Ban Log\`'u Ayarlamamışsın Ayarlamak İçin ==> 'ad!ban-log #Kanal' Yazarak Ayarlayabilirsin`))
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Sebep Yazılmamış."
     if(!user) return message.channel.send(nn.setDescription(`Lütfen Birisini Etiketleyip O Kişiyi Banlayabilirmisin? ,Chati Mi Banlıyayım Yahuu :D`))
     if(user.id === message.author.id) return message.channel.send(nn.setDescription(`Dostum Dertlerin mi Varda Kendini Banlıyorsun Günah ,Günah!`))
     if(user.id === client.user.id) return message.channel.send(nn.setDescription(`Dostum Sen Bizi Mi Banlamaya Çalışıyosun Ha hA Ha! `))
  if(user.id === message.guild.ownerID) return message.channel.send(nn.setDescription(`Dostum Sunucu Sahibini Banlayamazsın Buda Kafa Be?`))
    if (!message.guild.member(user).bannable) return message.channel.send(nn.setDescription(`Görüyorumki Şuanda Senin \`Üyeleri Yasakla\` Yetkin Bulunmamaktadır Yada Banladığın Kişinin \`Üyeleri Yasakla\` Vardır. `))

   message.channel.send(nn.setColor('#00001').setTitle('Onaylıyormusunuz?').setDescription('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?')).then(async m => { 
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)
//DarkCode Altyapısı
   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
   
      let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Kullanıcı GG')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Banlanan kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(banlog).send(embed)
       })
    })

   
                        
    await m.react('❌').then(r =>{ 
//DarkCode Altyapısı
   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('Banlama işlemi iptal edildi.')
      })
    })
})
}

                        

                                           

                      
                        
 //DarkCode Altyapısı
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:['atkafalıban'],
	permlevel: 0
};

exports.help = {
	name: "ban"

};
//DarkCode Altyapısı