const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async(client, message, args) => {
 
if(!['814859428465213473'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed().setFooter(`Developed By RedZenom`).setDescription(`**Komutu kullanmak için yetkiniz bulunmamakta.**`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor('#c42828')).then(x => x.delete({timeout: 5000}));    
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(new MessageEmbed().setFooter(`Developed By RedZenom`).setDescription(`**Geçerli Bir Kullanıcı Etiketlemelisin !**`).setColor("RANDOM")).then(msg => msg.delete({timeout: 5000}))
if(message.member.roles.highest.position <= member.roles.highest.position) return 
  
await member.roles.remove('814859464804794378')//vip rol id yaz
message.channel.send(new MessageEmbed().setImage(`https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`).setFooter(`Developed By RedZenom`).setDescription(`${member} **Adlı Kullanıcı** ${message.author} **Tarafından VİP Rolü Alındı** \n**Alınan Rol:** <@&814859464804794378>`)).then(msg => msg.delete({timeout: 4000}))}
exports.conf = { enabled: true, guildOnly: true , aliases: ["vip-al"]}
exports.help = { name: "vip-al"}