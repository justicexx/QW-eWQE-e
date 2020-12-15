const { MessageEmbed } = require('discord.js')
const { Client, Util, Message } = require("discord.js");
const hastebins = require('hastebin-gen');
const fs = require("fs");
const db = require("quick.db");

var backups = JSON.parse(fs.readFileSync("./Data/backups.json", "utf8"));

exports.run = async (client, message, args) => {
let nn = new MessageEmbed()
     if(!message.member.hasPermission("ADMINISTRATOR")) return;
     if(!message.guild.members.cache.get(client.user.id).hasPermission("ADMINISTRATOR")) return message.channel.send(nn.setDescription(`**HATA** \n - Bu Sunucuda Yetkili Değilsin. - \n - Sana **Yönetici** Yetkisi Lazım. -`))
if (args[0] === "oluştur") {
  let id = makeid(25); // sayı uzunluğu siz belirleyin

   const channels = message.guild.channels.cache.sort(function(a, b) { return a.position - b.position; }).array().map(c => {
      const channel = { 
        type: c.type, 
        name: c.name, 
        position: c.calculatedPosition,
      };
      if (c.parent) channel.parent = c.parent.name;
       return channel;
   });

 const roles = message.guild.roles.cache.filter(r => r.name !== "@everyone").sort(function(a, b) {
        return a.position - b.position;
 }).array().map(r => {
   const role = { 
     name: r.name, 
     color: r.color, 
     hoist: r.hoist, 
     permissions: r.permissions, 
     mentionable: r.mentionable,
     position: r.position 
   };
    return role; 
 }); 

 if (!backups[message.author.id]) backups[message.author.id] = {};
    backups[message.author.id][id] = {
            icon: message.guild.iconURL(),
            name: message.guild.name,
            owner: message.guild.ownerID,
            members: message.guild.memberCount,
            createdAt: message.guild.createdAt,
            roles,
            channels
     }; save();
    
 const okey = new MessageEmbed()
   
   .setDescription(`:white_check_mark: **|** ${message.guild.name} **Adlı Sunucu** ` + id + ` **ID Si İle Yedek Yüklenecek** ${message.author}**!** `)
  
 message.channel.send(okey)
  
   const dmMesaj = new MessageEmbed()
   
   .setDescription(`:white_check_mark: | ${message.guild.name} Adlı Sunucu **${id}** İD Si İle Yedek Yüklenecek ${message.author}**!** `)
    
 return message.author.send(dmMesaj)
}
  
   if (args[0] === "sil") {
        let code = args[1];
  if(!code){
  }
        let errorEmbed = new MessageEmbed()

          .setDescription( `:x: Böyle Bir İD Bulunamadı!`)

          .setColor("BLACK");
  
        if (!code) return message.channel.send(errorEmbed);

        let cantfindbackup = new MessageEmbed()
          
          .setDescription(`:x: Böyle bir ${code} Sunucu Yedeği Bulunamadı`)

        
        
        if (!backups[message.author.id][code])
          return message.channel.send(cantfindbackup);

        delete backups[message.author.id][code];
        save();

        let deletedsuc = new MessageEmbed()
          
          .setDescription(`:white_check_mark: **Başarılı! Sunucu Yedeği Silindi**.`)

        return message.channel.send(deletedsuc);
      }
  
  if (args[0] === "temizle") {
        let errorEmbed = new MessageEmbed()
 
          .setDescription(
            `Ne yazık ki yedekte hiç sunucun yok.`
          )
          .setColor("BLACK");
        if (!backups[message.author.id])
          return message.channel.send(errorEmbed);

        let warningEmbed = new MessageEmbed().setTitle(`:warning: UYARI`)
          .setDescription(`Tüm Yedeklerini Silmeye Emin misin?
__Bu İşlem Geri **ALINMAZ!**__`);
       return message.channel.send(warningEmbed).then(msg => {
          msg.react("✅").then(() => msg.react("❌"));

          let yesFilter = (reaction, user) =>
            reaction.emoji.name === "✅" && user.id === message.author.id;
          let noFilter = (reaction, user) =>
            reaction.emoji.name === "❌" && user.id === message.author.id;

          let yes = msg.createReactionCollector(yesFilter, { time: 0 });
          let no = msg.createReactionCollector(noFilter, { time: 0 });

          yes.on("collect", r => {
            delete backups[message.author.id];

            let deletedsuc = new MessageEmbed()
              
              .setDescription(`Tüm yedekler silindi!`)
              
            return message.channel.send(deletedsuc);
            msg.delete();
          });

          no.on("collect", r => {
            msg.delete();
          });
        });
      }


        if(args[1] === "bilgi") {
                let id = args[2];
                let MissingbackupinfoEmbed = new MessageEmbed()
                
                    .setDescription(`You forgot to define the argument **backup_id**. Use \`x!help backup info\` for more information   
                    [Support](https://discord.club/discord)`)
                .setColor("#a11616")
                if(!id) return message.channel.send(MissingbackupinfoEmbed)

                let cantfindEmbed = new MessageEmbed()
                
                .setDescription(`You have **no backup** with the id \`${id}\`.
                "[Support](https://discord.club/discord)`)
                .setColor("#a11616")
                if(!backups[message.author.id][id]) return message.channel.send(cantfindEmbed)

                try{
                let infoEmbed = new MessageEmbed()
                .setTitle(backups[message.author.id][id].name)
                .setThumbnail(backups[message.author.id][id].icon)
                .addField("Creator", `<@${backups[message.author.id][id].owner}>`, true)
                .addField("Members", backups[message.author.id][id].members, true)
                .addField("Created At", backups[message.author.id][id].createdAt)
                .addField("Channels", `\`\`\`${backups[message.author.id][id].channels.map(channel => channel.name).join('\n')}\`\`\``, true)
                .addField("Roles", `\`\`\`${backups[message.author.id][id].roles.map(role => role.name).join('\n')}\`\`\``, true)
                return message.channel.send(infoEmbed)
                }catch(e) {
                    hastebins(backups[message.author.id][id].channels.map(channel => channel.name).join('\n'), 'txt').then(ch => {
                        hastebins(backups[message.author.id][id].roles.map(role => role.name).join('\n'), 'txt').then(ro => {
                    let infoEmbed = new MessageEmbed()
                        .setTitle(backups[message.author.id][id].name)
                        .setThumbnail(backups[message.author.id][id].icon)
                        .addField("Creator", `<@${backups[message.author.id][id].owner}>`, true)
                        .addField("Members", backups[message.author.id][id].members, true)
                        .addField("Created At", backups[message.author.id][id].createdAt)
                        .addField("Channels", ch, true)
                        .addField("Roles", ro, true)
                  return  message.channel.send(infoEmbed)
                    })
                })
                }

                
            }
 
  
                
            
  
     
if (args[0] === "yükle") {

  let code = args[1];
  if(!code){
   const yokkiAmq = new MessageEmbed()
   
.setColor(0x36393F)
  return message.channel.send(yokkiAmq.setDescription(`:x: **| Lütfen Bir İD Girermisin?**`))
    return message.channel.send(yokkiAmq)
 }
  console.log(backups)
 if (!backups[message.author.id][code]){
   const yokkiAmq = new MessageEmbed()
 
   .setColor(0x36393F)
  return message.channel.send(yokkiAmq.setDescription(`:x: **| Yedekleme ID Sana Ait Değil Yada Böyle Bir İD Bulunamadı.**`))
    return message.channel.send(yokkiAmq)
 }
   // aynı mantık adamın id ile alıyor zaten xd  
  // hem adamların sistem bile çalışmıyor siktir et
                              
  message.guild.channels.cache.forEach(async function(channel) { await channel.delete(); });
        
  message.guild.roles.cache.filter(role => role.members.every(member => !member.user.bot)).forEach(async function(roles) { await roles.delete(); }); 

  await backups[message.author.id][code].roles.forEach(async function(role) {
     message.guild.roles.create({ data: { 
          name: role.name,
          color: role.color,
          permissions: role.permissions,
          hoist: role.hoist,
          mentionable: role.mentionable,
          position: role.position
       }, reason: "Adonis Yedek sistemi" })
   });

 await backups[message.author.id][code].channels.filter(c => c.type == "category").forEach(ch => { 
      message.guild.channels.create(ch.name, {type: ch.type, permissionOverwrites: ch.permissionOverwriteArray });
  }); 
                                    
  await backups[message.author.id][code].channels.filter(c => c.type !== "category").forEach(ch => {
       message.guild.channels.create(ch.name,{ type: ch.type, permissionOverwrites: ch.permissionOverwriteArray}).then(c => {
         const parent = message.guild.channels.cache.filter(c => c.type == "category").find(c => c.name === ch.parent);
         c.setParent(parent).catch(err => { throw err; }) 
       });
  });
     message.guild.setName(backups[message.author.id][code].name);
     message.guild.setIcon(backups[message.author.id][code].icon);
}  
     
     
 const yanlış = new MessageEmbed()
 
 return message.channel.send(yanlış.setDescription(`**Adonis Yedek Sistemi!** \n __ad!yedek oluştur__ **== > Sunucu Yedeğinizi Oluşturursunuz.** \n __ad!yedek yükle__ **== > Oluşturduğunuz Yedeği Yüklersiniz** \n __ad!yedek sil__ **== > Size Verilen Kodu Yazarak Yedeğinizi Silersiniz** \n __ad!yedek temizle__ **== > Oluşturduğunuz Tüm Yedeklerinizi Silersiniz**`))
     
function makeid(length) {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                   result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
             }

             function save() {
                fs.writeFile("./Data/backups.json", JSON.stringify(backups), (err) => {
                    if (err) console.error(err)
                
                          
              
                
                
                
            });
      }
        
  }

                             
             


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yadak", "backu", "backups"],
  permLevel: 0
};

exports.help = {
  name: "yedek",
  description: "yardım",
  usage: "yardım"

 
};