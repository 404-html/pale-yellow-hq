const streamOptions = {
	seek: 0,
	volume: 1
};
const youtubedownloader = require("ytdl-core");
const Discord = require("discord.js");
const youtubesearch = require("yt-search");
module.exports = {
	name: "mplay",
	description: "asdasd",
	usage: "",
	cooldown: 5,
	execute(client, message, args) {
		if(!message.member.voiceChannel) return message.channel.send(":negative_squared_cross_mark: Join a voice channel first! :negative_squared_cross_mark:");
		if(!message.guild.me.voiceChannelID == message.member.voiceChannelID) return message.channel.send(':negative_squared_cross_mark: You must be in the same voice channel the bot is in! :negative_squared_cross_mark:')
		if(!args[0]) return message.channel.send(':negative_squared_cross_mark: Please input a valid YouTube video URL or something to search for on youtube! :negative_squared_cross_mark:');
		youtubesearch(args.join(' '), function(err, response) {
			let voiceConnection = message.member.voiceChannel.join()
				.then(voiceConnection => {
					const stream = youtubedownloader("http://www.youtube.com" +  response.videos[0].url, {
						filter: 'audioonly'
					});
					const songPlayer = voiceConnection.playStream(stream, streamOptions);
				})
				.catch(console.error);
      let w = new Discord.RichEmbed().setDescription(`:smile: By ${response.videos[0].author.name}`).setTitle(`Playing | ${response.videos[0].title}`).setColor('#A65EA5');
            message.channel.send(w);
		})
	}
};