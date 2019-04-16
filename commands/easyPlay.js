const streamOptions = {
    seek: 0,
    volume: 1
};
const youtubedownloader = require("ytdl-core");
const Discord = require("discord.js");
const youtubesearch = require("yt-search");

module.exports = {
    name: "easyplay",
    description: "asdasd",
    usage: "",
	cooldown: 5,
	execute(client, message, args) {
              if (!message.member.voiceChannel) return message.channel.send(":negative_squared_cross_mark: Join a voice channel first! :negative_squared_cross_mark:");
            if (!message.guild.me.voiceChannelID == message.member.voiceChannelID) return message.channel.send(':negative_squared_cross_mark: You must be in the same voice channel the bot is in! :negative_squared_cross_mark:')
            if (!args[0]) return message.channel.send(':negative_squared_cross_mark: Please input a valid YouTube video URL or something to search for on youtube! :negative_squared_cross_mark:');
              youtubesearch(args.join(' '), function (err, response) {
  const videos = response.videos
  const video = videos[ 0 ]
  const videourl = "http://www.youtube.com" + video.url;
                message.channel.send('Fetching audio...');
                let info = youtubedownloader.getInfo(videourl);
                console.log(info);

                let voiceConnection = message.member.voiceChannel.join()
                    .then(voiceConnection => {
                        const stream = youtubedownloader(videourl, {filter: 'audioonly'});
                        const songPlayer = voiceConnection.playStream(stream, streamOptions);
                    })
                    .catch(console.error);
                message.channel.send(`Now playing ${video.title}\nBy ${video.author.name}`);
  })}};