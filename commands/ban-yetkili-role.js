const Discord = require('discord.js');

const db = require('quick.db');

exports.run = async(client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();

    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}ban-log \` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

    let rol = message.mentions.roles.first()

    if(!rol) return message.channel.send(nn.setColor('#00001').setTitle('Bir hata oldu!').setDescription(`Dostum Yetkili Rolünü Ayarlamak İçin Bir Rol Etiketlemelisin Örnek 'ad!ban-yetkili-role @Kurucu'`))

   db.set(`banrol_${message.guild.id}`, rol.id)

   return message.channel.send(nn.setColor('#00001').setTitle('Başarılı!').setDescription('Ban yetkili rolü <@&' + rol+ '> Olarak ayarlandı'))

} 

exports.conf = {

	enabled: true,	
  guildOnly: false,

	aliases:[],

	permlevel: 0

};

exports.help = {

	name: "ban-yetkili-rol"

}
//DarkCode Altyapısı