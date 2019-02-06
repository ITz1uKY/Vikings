const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";


client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('           ELBot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('╚[════════════════════════════════════]╝');
});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private 📩**');





 message.author.sendMessage(`
**Dynasty System** By: ITz1uKY
╔[❖════════════❖]╗
             Prefix = ' ! '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

❖ !mutechannel ➾ mute any text channel

❖ !unmutechannel ➾ unmute any text channel

❖ !kick ➾ kick anyone

❖ !ban ➾ ban anyone

❖ !createtext ➾ create text channel

❖ !cc ➾ create colors roles

❖ !moveall ➾ move all members to your room

❖ !clear ➾ clear chat 

❖ !bc <message> ➾ message all members in server


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ !calc (Ex: !calc 5+5) ➾ Calculate anything

❖ !members ➾ members info

❖ !say ➾ the bot says what you say

❖ !avatar ➾ shows your profile picture

❖ !embed ➾ put your text in embed

❖ !stats ➾ to show bot stats

❖ !invites ➾ your invites

❖ !id ➾ infortmation about you

❖ !server ➾ server informations

❖ !level ➾ to know your level

❖ رابط ➾ server invite for 24 hours

❖ الوان ➾ to see the server colors roles

❖ لون ➾ to choose any color

╚[❖════════════❖]╝


`);

    }
});







client.on('message', message => {
     if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'clear')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let request = `Requested By ${message.author.username}`;
  message.channel.send(`**هل انت متاكد من مسح الشات؟`).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))
  .then(() =>msg.react('✅'))
  
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  
  let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
  reaction1.on("collect", r => {
  message.channel.send(`سوف يمسح الشات`).then(m => m.delete(5000));
  var msg;
          msg = parseInt();
  
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {
  
          }
        }}).then(msg => {msg.delete(3000)});
  
  })
  reaction2.on("collect", r => {
  message.channel.send(`**تم الغاء مسح الشات**`).then(m => m.delete(5000));
  msg.delete();
  })
  })
  }
  });



  client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });






   

   const math = require('math-expression-evaluator');  
client.on('message', message => {
if (message.content.startsWith(prefix + 'calc')) {
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
           var Canvas = module.require('canvas');
           var jimp = module.require('jimp');
   
    const w = ['./math.png'];
   
            let Image = Canvas.Image,
                canvas = new Canvas(802, 404),
                ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
            ctx.filter = 'bilinear';
            ctx.antialias = 'subpixel';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                if (err) return console.log(err);
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 802, 404);
   
    })
        let args = message.content.split(" ").slice(1);
       const question = args.join(' ');
   if (args.length < 1) {
       message.reply('Specify a equation, please.\n\ Ex: !calc 5+5 ' );
} else {    let answer;
   try {
       answer = math.eval(question);
   } catch (err) {
       message.reply(`Error: ${err}`);
   }
var ment = message.mentions.users.first();
           var getvalueof;
           if(ment) {
             getvalueof = ment;
           } else {
             getvalueof = message.author;
           }
                                          let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                            jimp.read(url, (err, ava) => {
                                                if (err) return console.log(err);
                                                ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                    if (err) return console.log(err);
                                                                             
                           
                                                    ctx.font = '42px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '50px';
                                                    ctx.fillStyle = "#ffffff";
                                                    ctx.fillText(`${answer}`,108, 130);
                                                   
                                                   
                                                     ctx.font = '25px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '30px';
                                                    ctx.fillStyle = "#ffffff";
                                                    ctx.fillText(`${question}`,105, 90);
 
                           
                                ctx.beginPath();
                                ctx.stroke();
                              message.channel.sendFile(canvas.toBuffer());
                           
                           
                         
                           
                            })
                           
                            })
}
}
});









client.on('message', message => {
  
      if (message.author.id === client.user.id) return;
      if (message.guild) {
     let embed = new Discord.RichEmbed()
      let args = message.content.split(' ').slice(1).join(' ');
  if(message.content.split(' ')[0] == prefix + 'bc') {
      if (!args[1]) {
  message.channel.send("**bc <message>**");
  return;
  }
          message.guild.members.forEach(m => {
     if(!message.member.hasPermission('ADMINISTRATOR')) return;
              var bc = new Discord.RichEmbed()
              .addField('» السيرفر :', `${message.guild.name}`)
              .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
              .addField(' » الرسالة : ', args)
                  .setFooter('Dynasty System')
              .setColor('#ff0000')
              // m.send(`[${m}]`);
              m.send(`${m}`,{embed: bc});
          });
      }
      } else {
          return;
      }
  });



  
  client.on('message', message => {
    if(message.content.startsWith(prefix + "invites")) {
     message.guild.fetchInvites().then(invs => {
       let user = message.mentions.users.first() || message.author
       let personalInvites = invs.filter(i => i.inviter.id === user.id);
       let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
                let mmmmEmbed = new Discord.RichEmbed()
                          .setAuthor(client.user.username)
                          .setThumbnail(message.author.avatarURL)
  .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
            .setFooter(`- Requested By: ${message.author.tag}`);
            message.channel.send(mmmmEmbed)
 });
   }
 });






const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const getYoutubeID = require('get-youtube-id'); 
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 

//سنحتاج كل هده التعريفات الان و لاحقا//

  

	client.on('ready', () => {
		client.user.setGame(`!help | Dynasty System `,"http://twitch.tv/Dynasty System")
		 client.user.setStatus("dnd")
	  });

	 



client.on('message', message => {
    if (!message.guild) return; 
    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)

      message.author.send(`**هذا الرابط لعشر اشخاص و لمدة 24 ساعة **`)
    }
});




 client.on('message', message => {
    if(message.content.startsWith(prefix + 'moveall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });









client.on('message', message => {
    if (message.content.startsWith("!stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``Dynasty System`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``Prefix``' , `[ ! ]` , true)
                  .addField('``Language``' , `[ Java Script ]` , true)
                  .addField('``Founder ``' , ` [ ITz1uKY] ` , true)
    })
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};





client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '!color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length > 0)
   
 
if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
    }
});
client.on('message', ra3d => {
 
  if (ra3d.content ===  prefix + 'cc'){
              if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**');
              ra3d.channel.send("**✅ | يتم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 141; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });







client.on('message', message => {
    if(message.content == '!members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`
**   📗 Online: **${message.guild.members.filter(m=>m.presence.status == 'online').size}
 
**   📕 DND: **${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
 
**   📙 Idle: **${message.guild.members.filter(m=>m.presence.status == 'idle').size}  
 
**   📓 Offline: **${message.guild.members.filter(m=>m.presence.status == 'offline').size}
 
**   🔖 All: **${message.guild.memberCount}`)      
 
         message.channel.send({embed});
 
    }
  });






client.on('message', msg => {//msg
    if (msg.content === 'الوان') {
      if (msg.channel.id !== "470244501986738190") return;
      msg.channel.send({file : "https://d.top4top.net/p_925trmdy1.png"})
    }
  });;
  

client.on('message', message => {
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'لون'){
if (message.channel.id !== "470244501986738190") return;
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number ** ❌ `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
          if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
              
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color Changed Successfully** ✅ `)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){
     
      message.member.removeRole(message.guild.roles.find("name",`${x}`))
    
      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));
  
      
}
});





client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم  ${member.guild.memberCount} `) 
}).catch(console.error)
})









client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});





client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني تبنيد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



client.on('message', message => {

    if (message.content === "!mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === "!unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});





client.on('message', message => {
if (message.content.startsWith(prefix+"createtext")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});






client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});






client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






client.on('message', message => {
    if (message.content.includes('discord.gg')){      //شيل المسافه
                        if(!message.channel.guild) return message.reply ('')
                    if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
       message.channel.send('kick <@' + message.author.id + '>')
       message.delete() 
       }
    }
          if (message.content.startsWith("kick")) {
             if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
             var member= message.mentions.members.first();
             member.ban().then((member) => {
                 message.channel.sendMessage("", {embed: {
                 author: {
                 },
                 title: 'بسبب النشر ' + member.displayName + ' تم طرد',
                 color: 490101,
                 }
               });
           }
         ) 
       }
   });







client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });





client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Dynasty Group ."));
    });








const developers = ["542483698788859904"]
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



client.on('message', message => {
    var prefix = "!"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});






client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

//جاكيو لفل 
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // اللفل الجديد
    userData.level = curLevel;
     message.reply(`**لقد وصلت الى المستوى ${curLevel}**`).then(m => m.delete(100000));
  }

  if (message.content.startsWith(prefix + "level")) {
    // الفل
      message.reply(` ** انت في المستوى ${userData.level}  مع ${userData.points} نقاط . ** `).then(m => m.delete(100000));

  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
// ملف تخزين اللفل والنقاط
});
//طبعا لتنضيف الشات يمسح كل ديقيقة الرسالة 



client.on('message', message => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});





client.on('message', async message => {
  if(message.content.startsWith(prefix + "voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});






client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});







client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!count')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });




client.on('message', message => {
 
  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("542492678462504981").send(
      "\n" + "**" + "● اقتراحات سيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● مرسل الاقتراح : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الاقتراح : " + "**" +
      "\n" + "**" + args + "**")
  }
  });






client.on('message', message => { 
    if (message.content.startsWith(prefix + 'roles')) {

        const Rank = message.guild.roles.map(e => e.toString()).join(" ");

        const RankList = new Discord.RichEmbed()
            .setTitle('➠ Roles.') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(Rank) 
            .setFooter(message.guild.name) 
        message.channel.send(RankList) 
    }
});




client.on('message', message => {
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
           
        if(message.mentions.users.size === 0) {
          return message.reply("Please mention a user to mute.");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("Try again.");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("User muted successfully.");
        }
      }
    });





client.on('message', message => {
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("User unmuted successfully.");
      }
    }
  });






let ar = JSON.parse(fs.readFileSync(`./AutoRole.json`, `utf8`))


client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})

client.on('message', message => { 
  var sender = message.author

if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Dynasty Group .'
  }

if(message.content.startsWith(prefix + `autorole`)) {
         
  let perms = message.member.hasPermission(`MANAGE_ROLES`)

  if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorle toggle/ set [ROLE NAME]`)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`) 
    if(state.trim().toLowerCase() == 'toggle') { 
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole setrole [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
    ar[message.guild.id].role = newRole
     message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
   } 
         }
if(message.content === prefix + 'info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`) 
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()

.addField(`Autorole : :sparkles:  `, `

State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)


    .setColor(`BLUE`)
    message.channel.send({embed})
  }


    fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });


});




const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'Click Here',
      channel : 'Click Here'
       }
        if(message.content.startsWith('!temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('Click Here', 'category').then(cg => {
           var ccc =message.guild.createChannel('Click Here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === '!temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Must Be Numbers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });




const jimp = require('jimp');
const Canvas = require('canvas');
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'hey');
const w = ['./w1.png'];
 
         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
         
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`Welcome to ${member.guild.name} ✋`, 300, 130);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                         
               
                             
welcomer.sendFile(canvas.toBuffer())
 
 
 
     
     
                    }  )  
     
                   
 
})
      });                    
});
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("542769480653209601");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 
 
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("542769480653209601");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("542769480653209601");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
 channel.send(`**Invited By** ${Invite.inviter} `) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});


client.on('message', message => {

    if(message.content.startsWith(prefix + 'id')) {
if(!message.channel.guild) return;
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
         var heg;
         if(men) {
             heg = men
         } else {
             heg = message.author
         }
       var mentionned = message.mentions.members.first();
          var h;
         if(mentionned) {
             h = mentionned
         } else {
             h = message.member
         }
  moment.locale('ar');
    const w = ['../id1.png','../id2.png','../id3.png','../id4.png','../id5.png']
        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);

})
                let url = h.user.displayAvatarURL.endsWith(".webp") ? h.user.displayAvatarURL.slice(5, -20) + ".png" : h.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
  //time dateformet
  const millis = new Date().getTime() - h.user.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy');
  const stats2 = ['online', 'Low', 'Medium', 'Insane'];
  const days = millis / 1000 / 60 / 60 / 24;
            dateFormat(now, 'dddd, mmmm dS, yyyy');
            
        
                          //دخولك الديسكورد
                          var day = `منذ ${days.toFixed(0)} يوم`
                          ctx.font = '27px Arial Bold';
                          ctx.fontSize = '30px';
                          ctx.fillStyle = "#ffffff";
                          ctx.textAlign = "center";
                          ctx.fillText(day, 109, 97)
              //wl
              var millis1;
        if(mentionned){
            var millis1 = new Date().getTime() - mentionned.joinedAt
        } else {
            var millis1 = new Date().getTime() - moment(message.member.joinedAt);;
            
        }

  const days1 = millis1 / 1000 / 60 / 60 / 24;
  
                        //دخولك السيرفر
                        var day2 = `منذ ${days1.toFixed(0)} يوم`
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(day2, 388, 97); 

                        //ur name
                        ctx.font = '27px BlowBrush';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(h.user.username, 245, 365);
                        //tag
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '45px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`#${heg.discriminator}`, 120, 450);
                        
                        //حالتك
                           let status;
    if (h.presence.status === 'online') {
        status = 'اون لاين';
    } else if (h.presence.status === 'dnd') {
        status = 'مشغول';
    } else if (h.presence.status === 'idle') {
        status = 'خمول';
    } else if (h.presence.status === 'offline') {
        status = 'اوف لاين';
    }
                        ctx.font = '27px Arial Bold';//ALPHACODE
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${status}`, 380, 450);//ALPHACODE
                        
                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(250, 238, 64, 0, Math.PI*2, true); //ALPHACODE
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 185, 172, 130, 130 );
                         
     message.channel.sendFile(canvas.toBuffer())//ALPHACODE
})
   })

} });//ALPHACODE

client.login(process.env.BOT_TOKEN)
