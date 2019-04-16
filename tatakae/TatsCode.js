const { spawn } = require('child_process');
const ls = spawn('node',['full-rework.js']);
const dispatcher = null;
const express = require('express');
const app = express();
const Discord = require("discord.js");
const opus = require('opusscript');
const streamOptions = {
    seek: 0,
    volume: 1
};
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const yts = require('yt-search');
var logger = require('winston');
var servers = [];
var sta = [];
var prefix = 's!'
var creatorid = '371314406782402590';
var invitelink = `https://discordapp.com/oauth2/authorize?client_id=542681569035419658&scope=bot&permissions=8`;
var summoned = false;
function summonfm(mf) {
summoned = true;
  if (!mf.member.voiceChannel) {
   mf.channel.send(':negative_squared_cross_mark: Connect to a voice channel first!');
   summoned = false;
 }
            if (mf.guild.me.voiceChannel) {
             mf.channel.send(':negative_squared_cross_mark: I\'m already connected to this guild!');
              summoned = false;
            }

            mf.member.voiceChannel.join();
  return summoned;
}


function clean(text) {
      if (typeof (text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }




ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


/*



🤔🐱‍🐉💋💋🤔🤔😆🤔💋
🤔🐱‍🐉💋💋🤔🤔😆🤔💋


let embed = new RichEmbed()
    .setDescription (`Text here`)
    .setColor('#3399FF')
    message.channel.send(embed);
*/

//mind if i add a package // ok but what is it //fuckie lol

app.use(express.static('views'))
//still broke like my father

app.listen(3000, () => console.log('Gator app listening on port 3000!'))















    bot.on("ready", () => {
        console.log("Ready");
        console.log(servers);
        bot.user.setStatus('idle')
        bot.user.setPresence({
            game: {
                name: 'ＳｏｕｎｄＢｏｔ   ｜   Ｕｓｅ   ｓ！ｈｅｌｐ．',
              type: 'STREAMING',
              url: 'http://www.twitch.tv/monstercat'
             }
        });

    });



bot.on("message", (message) => {
    var args = message.content.substring(prefix.length).split(" ");
    var cmd = args[0];
    args.shift();
 // if (message.member.user.bot) return;
    if (message.content.substring(0, prefix.length) == prefix) {
      // please help my internet is broken. bye i guess
        if (cmd == 'play') {
            if (!message.member.voiceChannel) return message.channel.send(":negative_squared_cross_mark: Join a voice channel first!");
            if (!message.guild.me.voiceChannel) {
             summonfm(message); 
            }
            if (!message.guild.me.voiceChannelID == message.member.voiceChannelID) return message.channel.send(':negative_squared_cross_mark: You must be in the same voice channel the bot is in!')
            if (!args[0]) return message.channel.send(':negative_squared_cross_mark: Please input a valid YouTube video URL or something to search for on youtube!');

            let validate = ytdl.validateURL(args[0]);

            if (validate) {   

                message.channel.send('Fetching audio...');
                let info = ytdl.getInfo(args[0]);
                console.log(info);

                let voiceConnection = message.member.voiceChannel.join()
                    .then(voiceConnection => {
                        const stream = ytdl(args[0], {
                            filter: 'audioonly'
                        });
                        const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
                    })
                    .catch(console.error);
                message.channel.send(`Now playing: ${info.title} 
By ${info.author.name}`);

            } else {
                message.channel.send('Searching for `' + args.join(' ') + '`...');
              
              yts( args.join(' '), function ( err, r ) {
  if ( err ) return
 
  const videos = r.videos
  const playlists = r.playlists
  const accounts = r.accounts
 
  const firstResult = videos[ 0 ]
  
  const urltu = "http://www.youtube.com" + firstResult.url;
                
                message.channel.send('Fetching audio...');
                let info = ytdl.getInfo(urltu);
                console.log(info);

                let voiceConnection = message.member.voiceChannel.join()
                    .then(voiceConnection => {
                        const stream = ytdl(urltu, {
                            filter: 'audioonly'
                        });
                        const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
                    })
                    .catch(console.error);
                message.channel.send(`Now playing ${firstResult.title}
By ${firstResult.author.name}`);
 
  
} )
            }
        } // try it the eval command in discord
      if (cmd == 'playfile') {
        

	var Attachment = (message.attachments).array();
if (Attachment.length == 0) return message.channel.send('Please send a mp3 file to play in your message!');
if (Attachment[0].url == null) return message.channel.send('An error occurred, sorry about that!');
if (!Attachment[0].url.endsWith('.mp3')) return message.channel.send('Please send a ***mp3*** file, rather than anything else!');
    var urltu = Attachment[0].url
    let info = ytdl.getInfo(urltu);
                console.log(info);

                let voiceConnection = message.member.voiceChannel.join()
                    .then(voiceConnection => {
                        const stream = ytdl(urltu, {
                            filter: 'audioonly'
                        });
                        const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
                    })
                    .catch(console.error);
                message.channel.send(`Now playing something from a file
By someone I can't recognize`);
        
      }
      // your smart thnk you friend np

        if (cmd == 'leave') {

            if (!message.member.voiceChannel) return message.channel.send(':negative_squared_cross_mark: Connect to a voice channel first!');
            if (!message.guild.me.voiceChannel) return message.member.voiceChannel.join();
            if (!message.guild.me.voiceChannelID == message.member.voiceChannelID) return message.channel.send(':negative_squared_cross_mark: You must be in the same voice channel the bot is in!');
            if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(':negative_squared_cross_mark: You must have the *Manage Servers* permission to use this command!');
            message.guild.me.voiceChannel.leave();

            message.channel.send(':white_check_mark: Successfully left the voice channel.');

          //what r u doing here idk

        }

        if (cmd == 'summon') {
            
          
          
          
          if (summonfm(message) == true) {
            message.channel.send(':white_check_mark: Successfully summoned.'); 
          } 
        } // GOTTA ADD THOSE SMEXY EMBEDS! (later but i will add them embeds) // nop  there is not but i will fix it for you just wait a sec gogdamngsd
      if (cmd == 'stop') {
         const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
       if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(':negative_squared_cross_mark: You must have the *Manage Servers* permission to use this command!');
        if (dispatcher == null) return;
        if (voiceConnection === null) return message.channel.send('There is no song playing!');
        
        dispatcher.stop();
      
      }
      if (cmd == "volume") {
        let vol = args.join(" ");
 const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
if (voiceConnection === null) return message.channel.send('No music is being played!');
const dispatcher = voiceConnection.player.dispatcher;
const currentvol = dispatcher.volume * 100;
if(!vol) {
    let embed = new Discord.RichEmbed()
    .setDescription(`**Current Volume:** ${currentvol}%`)
    .setColor('#A65EA5')
    return message.channel.send(embed);
}
		if (vol > 200 || vol < 0) return message.channel.send('Volume out of range!').then((response) => {
			response.delete(5000);
		});

        let embed = new Discord.RichEmbed()
        //WHAT THE FUCK LOL THANK YOU YOU DID NOT HAVE TO DO THIS OH MY GOD YOU DON'T HAVE TO DO THIS MUCH EFFORT THI IS A STARTER BOT NOT A >RYTHM BOT PLEASE WH YDID YOU DO THIS LOL THIS IS SO ADVANCED NOT THE EMBED BUT THE WHOLE VOLUME THANK YOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUuu and dont do the rest of embeds ill do them myself
        .setDescription("Volume set to " + vol)
        .setColor('#A65EA5')
		dispatcher.setVolume((vol/100));
		message.channel.send(embed);
      }
               if (cmd == "pause") {
 const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
      const dispatcher = voiceConnection.player.dispatcher;
    if (dispatcher.paused) return message.channel.send(`Music already paused!`)
   else dispatcher.pause();
        let embed = new Discord.RichEmbed()
        .setDescription("Music paused!")
        .setColor('#A65EA5')
        //embed.setColor is a hex code right? because discord.io uses color integers which are very hard
		message.channel.send(embed);
      }
      if (cmd == 'resume') {
   const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
      if (voiceConnection === null) return message.channel.send('No music is being played.');

      const dispatcher = voiceConnection.player.dispatcher;
      if (!dispatcher.paused) return message.channel.send(`Music already playing.`)
      else dispatcher.resume();
        let embed = new Discord.RichEmbed()
        .setDescription("Music resumed.")
        .setColor('#A65EA5')
		message.channel.send(embed);
      }
      if (cmd == "eval") {
      if (message.author.id !== "384342022955466753" && message.author.id !== "371314406782402590") return message.reply("great try!"); //kokoda
      try {
        const code = args.join(" ");
        let evaled = eval(code);
        if (typeof evaled !== "string") evaled = require("util")
          .inspect(evaled);
        message.channel.send(clean(evaled), {
          code: "xl"
        });
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
    }
})



bot.login(process.env.token);














/*

   const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
      if (voiceConnection === null) return message.channel.send(m'No music is being played.'));
      if (!musicbot.isAdmin(msg.member) && !musicbot.anyoneCanPause) return message.channel.send(`You cannot resume queues.`));

      const dispatcher = voiceConnection.player.dispatcher;
      if (!dispatcher.paused) return message.channel.send(`Music already playing.`))
      else dispatcher.resume();
        let embed = new Discord.RichEmbed()
        .setDescription("Music resumed.")
        .setColor('#A65EA5')
		message.channel.send(embed);
*/