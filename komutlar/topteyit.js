const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, member) => {
  
if(!message.member.roles.cache.some(r => ['814859436950552596', '814859437776175124'].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new dc.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setFooter(`Developed By RedZenom`)
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)
.setColor('#000000')).then(x => x.delete({timeout: 5000}));
  
  let uye = message.mentions.users.first() || message.author;
let bilgi = db.get(`avenger.${uye.id}.registrar`);
let yazı = "Top Teyit Listesi"
  
let top = message.guild.members.cache.filter(uye => db.get(`avenger.${uye.id}.registrar`)).array().sort((uye1, uye2) => Number(db.get(`avenger.${uye2.id}.registrar`))-Number(db.get(`avenger.${uye1.id}.registrar`))).slice(0, 15).map((uye, index) => (index+1)+" • <@"+ uye +"> | \`" + db.get(`avenger.${uye.id}.registrar`) +"\` Kayıta Sahip.").join('\n');
message.channel.send(new dc.MessageEmbed().setAuthor(yazı, message.guild.iconURL({dynamic: true})).setImage(`https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`).setTimestamp().setColor("#000000").setFooter(message.member.displayName+" tarafından istendi!", message.author.avatarURL).setDescription(top));
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["topteyit", "top", "teyit", "top-teyit"],
    permLevel: 0
};

exports.help = {
    name: "topteyit"
}