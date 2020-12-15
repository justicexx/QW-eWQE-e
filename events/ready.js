
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");
  var oyun = [
        "Adonis   "     + client.guilds.cache.size +    " sunucuya ve "   + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +   "  kullanıcıya hizmet veriyor!",
        "ad!yardım",
        "#hızlabüyüyoruz",
        "Türkiyenin en iyisi olmak için çaba gösteriyoruz!",
        "BAKIMDAYIZ."
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};
