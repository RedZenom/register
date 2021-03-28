const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

if(!message.member.roles.cache.some(r => ["814859436950552596", "814859437776175124"].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
 
 let kullanıcı = message.mentions.users.first()
    
 
if(!kullanıcı) {

let masculin = db.fetch(`avenger.${message.author.id}.masculin`);
let femme = db.fetch(`avenger.${message.author.id}.femme`);
let avenger = db.fetch(`avenger.${message.author.id}.registrar`); 
if(masculin === null) masculin = "0"  
if(masculin === undefined) masculin = "0"
if(femme === null) femme = "0"
if(femme === undefined) femme = "0"
if(avenger === null) avenger = "0"
if(avenger === undefined) avenger = "0"
  
const sorgu1 = new MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`Developed By RedZenom`)
.addField(`<a:aveng_ok1:815200926570512405> Toplam Kayıtların:`, `\`${avenger}\``)

.addField(`:male_sign: Toplam Erkek Kayıtların:`, `\`${masculin}\``)

.addField(`:female_sign: Toplam Kadın Kayıtların:`, `\`${femme}\``)
.setColor('#000000')
.setImage(`https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let masculin1 = db.fetch(`yetkili.${kullanıcı.id}.masculin`);
let femme1 = db.fetch(`yetkili.${kullanıcı.id}.femme`);
let avenger1 = db.fetch(`avenger.${kullanıcı.id}.registrar`); 
if(masculin1 === null) masculin1 = "0"  
if(masculin1 === undefined) masculin1 = "0"
if(femme1 === null) femme1 = "0"
if(femme1 === undefined) femme1 = "0"
if(avenger1 === null) avenger1 = "0"
if(avenger1 === undefined) avenger1 = "0"
  
const sorgu2 = new MessageEmbed()
.setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
.setAuthor(`${kullanıcı.username}`)
.setFooter(`Developed By RedZenom`)
.addField(`<a:aveng_ok1:815200926570512405> Toplam Kayıtların:`, `\`${avenger1}\``)

.addField(`:male_sign: Toplam Erkek Kayıtların:`, `\`${masculin1}\``)

.addField(`:female_sign: Toplam Kadın Kayıtların:`, `\`${femme1}\``)
.setImage(`https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
.setColor('#000000')
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["stat", "kayıtlar", "kayıt-kontrol"],
    permLvl: 0,
}
  
exports.help = {  
  name: "stat"
}