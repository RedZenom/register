const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['814859436950552596'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));

const tag = '⍣'
const kadınrol = message.guild.roles.cache.find(r => r.id === '814859467543281704') 
const kadınrol2 = message.guild.roles.cache.find(r => r.id === '814859469213007912')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '814859471817932831')
const genelchat = message.guild.channels.cache.find(c => c.id === '814859581389275188')
const savelog = message.guild.channels.cache.find(c => c.id === '814859639416946709')

if(!kadınrol) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`1. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
if(!kadınrol2) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`2. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
if(!kayıtsız) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kayıtsız rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bir kullanıcı belirt.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
let name = args[1]
let age = Number(args[2])
if(!name) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir isim belirtmelisin.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
if(!age) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir yaş belirtmelisin.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kendini kayıt edemezsin.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
if(member.id === client.user.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bot kayıt edemezsin.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Sunucu sahibini kayıt edemezsin.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
  
  
datab.add(`avenger.${message.author.id}.femme`, 1)
datab.add(`avenger.${message.author.id}.registrar`, 1)
let alldata = datab.fetch(`avenger.${message.author.id}.registrar`)

member.setNickname(`${tag} ${name} | ${age}`)
member.roles.add(kadınrol)
member.roles.add(kadınrol2)
member.roles.remove(kayıtsız)


message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<a:aveng_onay:815201245882220595> ${member} Üyesini ${message.author} Kayıt Etti. \n${kadınrol}, ${kadınrol2} Rolleri Verildi. \n\` ${tag} ${name} | ${age} \` Olarak İsmi Güncellendi.`)
.setFooter(`Toplam kayıtların: ${alldata}`)
.setImage(`https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
.setColor('PURPLE'))
  
genelchat.send(`${member} **Aramıza Katıldı, Hoşgeldin Umarım Keyifli Vakit Geçirirsin.**
**Tagımızı Alarak Ailemize Katılabilirsin** \` ${tag} \``)
  
savelog.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setImage(`https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
.setDescription(`• Yetkili: ${message.author} | \`${message.author.id}\`\n\n• Kullanıcı: ${member} | \`${member.id}\`\n\n• Güncel İsim: \`${tag} ${name} | ${age}\`\n\n Roller: ${kadınrol}, ${kadınrol2} \n\n Kanal: <#${message.channel.id}> | \`${message.channel.id}\`\n\n• Kayıtlar: \`${alldata}\` `)
.setColor('PURPLE'))


datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: name, yas: age, role: kadınrol.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['kadın', 'k', 'girl', 'woman', 'kız'], permLevel: 0}
exports.help = {name: 'kadın', description: "Etiketlenen kişiyi kadın rolleriyle kayıt eder.", usage: '.kadın @etiket/id İsim Yaş'}