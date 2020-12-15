const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
   if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}ban-log \` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send(nn.setColor('#00001').setDescription(`Dostum Bir Ban Log Kanalı Belirtmen Lazım Örnek ; 'ad!ban-log #BanLogKanalı'`))

    db.set(`banlog_${message.guild.id}`, kanal.id)
   return message.channel.send(nn.setColor('#00001').setDescription(`Belirttiğiniz <#${kanal.id}> Adlı Kanal Ban Log Kanalı Olarak Ayarlandı!`))
    
  
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban-log"
}
//DarkCode Altyapısı