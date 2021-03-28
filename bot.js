const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.TOKEN);

//-----------------------TAG----------------------\\
client.on("message", message => {
    if(message.content.toLowerCase() == "tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "-tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "h!tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "h?tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!!tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "?tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "h-tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "h.tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "..tag") 
    return message.channel.send(`⍣`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "tag ney") 
    return message.channel.send(`⍣`)
});

//-----------------------SA AS----------------------\\
client.on("message", message => {
    if(message.content.toLowerCase() == "sa") 
    return message.channel.send(`**Aleyküm Selam, Hoş Geldin Nasılsın?**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selam") 
    return message.channel.send(`**Aleyküm Selam, Hoş Geldin Nasılsın?**`)
});;

client.on("message", message => {
    if(message.content.toLowerCase() == "merhaba") 
    return message.channel.send(`**Aleyküm Selam, Hoş Geldin Nasılsın?**`)
});;

client.on("message", message => {
    if(message.content.toLowerCase() == "cümleten sa") 
    return message.channel.send(`**Aleyküm Selam, Hoş Geldin Nasılsın?**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "s.a") 
    return message.channel.send(`**Aleyküm Selam, Hoş Geldin Nasılsın?**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "mrb") 
    return message.channel.send(`**Merhaba, Hoş Geldin Nasılsın?**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "slm") 
    return message.channel.send(`**Aleyküm Selam, Hoş Geldin Nasılsın?**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selamun aleyküm") 
    return message.channel.send(`**Aleyküm Selam, Hoş Geldin Nasılsın?**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selamın aleyküm") 
    return message.channel.send(`**Aleyküm Selam, Hoş Geldin Nasılsın?**>`)
});

//-----------------------OTO ROL ----------------------\\
client.on("guildMemberAdd", member => {
  member.roles.add('814859471817932831');
});



//------------------------HOŞ GELDİN-----------------------\\
client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `<a:aveng_0:815200288146980904>`,
            '1': `<a:aveng_1:815200267975917568>`,
            '2': `<a:aveng_2:815200289257685032>`,
            '3': `<a:aveng_3:815200289287176192>`,
            '4': `<a:aveng_4:815200289668726858>`,
            '5': `<a:aveng_5:815200290231812107>`,
            '6': `<a:aveng_6:815200291184050177>`,
            '7': `<a:aveng_7:815200293935513630>`,
            '8': `<a:aveng_8:815200293200855061>`,
            '9': `<a:aveng_9:815200292794400779>`}[d];})}
  
      const kanal = member.guild.channels.cache.find(r => r.id === "814859551610241084");
      let register = '814859436950552596'
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = '<a:aveng_no:815200955666399303> `Güvenilir Değil.`'
  if (kurulus > 1296000000) kontrol = '<a:aveng_yes:815200956059877396> `Güvenilir Gözüküyor.`'
    moment.locale("tr");
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.guild.name, member.guild.iconURL({dynamic:true}))
  .setColor("#000000")
  .setDescription(`<@`+member.id+`> **Kayarak Sunucuya Katıldı !** 
  
  **Kayıt Olmak İçin,** \` V.Confirmed \` **Kanallarına Geç.**

  <@&814859436950552596> **Yetlilere Teyit Vermen Yeterli.**
  
  **Seninle Birlikte** `+üyesayısı+` **Kişiye Ulaştık !**
  
  **Hesap Kuruluş Tarihi:** \``+gecen+`\`
  **Bu Kullanıcı:** `+kontrol+`

  **Sunucumuzun Tagını** (\` ⍣ \`) **Alarak Bizlere Destek Olabilirsin**`)
  .setImage(`https://media.discordapp.net/attachments/654649891490103297/756111347128729670/original.gif`)
  kanal.send(embed)
  kanal.send(`<@&${register}><@`+member.id+`>`)
});

//------------------------ŞÜPHELİ-----------------------\\
client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var x = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     x = x.replace("Birkaç Saniye Önce", " ")
     if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
    const kytsz = member.guild.roles.cache.find(r => r.id === "814859471817932831") 
     var rol = member.guild.roles.cache.get("814859486506123275s") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
     var kayıtsız = member.guild.roles.cache.get(kytsz) // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
     member.roles.add(rol)
     member.roles.remove(kytsz)

  member.user.send('<a:aveng_ok1:815200926570512405> **Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.**')
  setTimeout(() => {
  
  }, 1000)
  
  
     }
          else {
  
          }
      });

//-----------------------TAG ROL----------------------\\     STG

client.on("userUpdate", async (stg, yeni) => {
  var sunucu = client.guilds.cache.get('798149707535745064'); // Buraya Sunucu ID
  var uye = sunucu.members.cache.get(yeni.id);
  var ekipTag = "⍣"; // Buraya Ekip Tag
  var ekipRolü = "814859463508492288"; // Buraya Ekip Rolünün ID
  var logKanali = "814859581389275188"; // Loglanacağı Kanalın ID

  if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username) return;
  
  if ((yeni.username).includes(ekipTag) && !uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.add(ekipRolü);
      await uye.send(`Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`${yeni} adlı üye tagımızı alarak aramıza katıldı!`));
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(ekipTag) && uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(ekipRolü).position));
      await uye.send(`Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${ekipTag}**`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`));
    } catch(err) { console.error(err) };
  };
});