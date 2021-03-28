const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["814859407900803122"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));


const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir kullanıcı belirt.`)
.setFooter(`Developed By RedZenom`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
if(!member.roles.highest.position >= message.member.roles.highest.position) message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));

  
let bilgi = db.get(`avenger.${member.id}`);  
db.delete(`avenger.${message.author.id}.masculin`)
db.delete(`avenger.${message.author.id}.registrar`)  
db.delete(`avenger.${message.author.id}.femme`)
let toplami = db.fetch(`avenger.${message.author.id}.registrar`)  

message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setColor("000000")
.setImage(`https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
.setFooter(`Developed By RedZenom`)
.setDescription(`<a:aveng_onay:815201245882220595> ${member} Adlı Kullanıcının Db'si Silindi, <@${message.author.id}> Tarafından Sıfırlandı.`))
  

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sıfırla", "kayıt-sıfırla", "kayıtları-sıfırla", "db-sıfırla", "dbisil", "db-sil"],
    permLevel: 0
};

exports.help = {
    name: "sıfırla"
}

