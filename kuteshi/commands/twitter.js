const Discord = require("discord.js");
const latestTweets = require('latest-tweets');
module.exports = {
	name: 'twitter',
	description: 'get tweets from other people',
	usage: "[user]",
	cooldown: 1,
	execute(client, message, args) {
			latestTweets(args[0], function(err, tweets) {
				var text = tweets[0].content;
				text = text.split("pic.twitter");
				var embed = new Discord.RichEmbed().setTitle(tweets[0].username).setDescription(text[0]).setColor(0x4099FF).setURL(tweets[0].url).setTimestamp(tweets[0].date)
				message.channel.send({
					embed
				});
			});
	}
}