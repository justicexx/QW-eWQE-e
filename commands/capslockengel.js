const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**HATA** \n - Bu Sunucuda Yetkili Değilsin. - \n - Sana **Mesajları Yönet** Yetkisi Lazım. -`)
  const just = new Discord.MessageEmbed()
   if(!args[0]) return message.channel.send(just.setDescription(`Capslock Korumasını Aktif Etmek İstersen **${client.ayarlar.prefix}capslockengel aç** Yazabilirsin :)`))
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`, 'kapat')
    const just = new Discord.MessageEmbed()
  message.channel.send(just.setDescription(`Capslock Engel Başarıyla Kapatıldı!`))
  }
  
 const justt = new Discord.MessageEmbed()
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'aç')
    message.channel.send(justt.setDescription(`Capslock Engel Başarıyla Açıldı!`))
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslockengel','capslock','capslock-engel','cl'],
  permLevel: 3
};
exports.help = {
  name: 'capsengel',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};
