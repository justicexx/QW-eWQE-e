
const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
const jusst = new Discord.MessageEmbed()
  if(!rol)  return message.channel.send(jusst.setDescription(`Bir Rol Belirtebilir misin? *Örnek: ad!otorol @ROL #KANAL**`))
  if(!kanal) return message.channel.send(jusst.setDescription(`Bir Kanal Belirtebilir misin? **Örnek: ad!otorol @ROL #KANAL**`))
  
  db.set(`otorol_${message.guild.id}`, rol.id)
  db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
  return message.channel.send(jusst.setDescription(`Başarılı , Otorol ${rol} Otorol Kanalı ${kanal} Olarak Ayarlandı`))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otorol-ayarla'],
    permLevel: 0
};
exports.help = {
    name: 'otorol',
    description: 'Sunucuya Yeni Katılanlara Ayarladığınız Rolü Verir',
    usage: 'otorol <@rol> <#kanal>'
};