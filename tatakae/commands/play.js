

function summonfm(mf) {
  if (!mf.member.voiceChannel) {
   mf.channel.send(':negative_squared_cross_mark: Connect to a voice channel first!');
 }
            if (mf.guild.me.voiceChannel) {
             mf.channel.send(':negative_squared_cross_mark: I\'m already connected to this guild!');
            }

            mf.member.voiceChannel.join();
}


const streamOptions = {
    seek: 0,
    volume: 1
};
const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const yts = require("yt-search");
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text; 
}

module.exports = {
    name: "play",
    description: "song",
    usage: "music",
	cooldown: 5,
	execute(client, message, args) {
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
                message.channel.send(`Now playing ${firstResult.title}\nxBy ${firstResult.author.name}`);
 
  
} )	      
            }}}
