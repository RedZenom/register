const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#000000')
.setFooter(`Developed By RedZenom`)
.setDescription(`***__KAYIT KOMUTLARI__***
<a:aveng_ok1:815200926570512405> \`a!e\` **Etiketlediğiniz Üyeyi Erkek Olarak Kayıt Edersiniz.**
<a:aveng_ok1:815200926570512405> \`a!k\` **Etiketlediğiniz Üyeyi Kadın Olarak Kayıt Edersiniz.**


***__KONTROL KOMUTLARI__***
<a:aveng_ok1:815200926570512405> \`a!stat\` **Toplam Kayıtlarınızı Gösterir.**
<a:aveng_ok1:815200926570512405> \`a!topteyit\` **En Çok Kayıt Yapan Yetkilileri Gösterir.**


***__SIFIRLA KOMUTLARI__***
<a:aveng_ok1:815200926570512405> \`a!kayıt-sıfırla\` **Etiketlediğiniz Kişinin Kayıtını Sıfırlar.**


***__AL - VER KOMUTLARI__***
<a:aveng_ok1:815200926570512405> \`a!kayıtsız\` **Etiketlediğiniz Kişiyi Kayıtsıza Atar.**
<a:aveng_ok1:815200926570512405> \`a!vip-ver\` **Etiketlediğiniz Kişiyi VİP Rolü Verirsiniz.**
<a:aveng_ok1:815200926570512405> \`a!vip-al\` **Etiketlediğiniz Kişiyi VİP Rolü Alırsınız.**`)
.setImage(`https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help', 'command', 'commands'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Avenger Yardım.',
  usage: 'yardım'
};