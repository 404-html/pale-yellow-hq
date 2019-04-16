const Discord = require('discord.js');
module.exports = {
	name: "warn",
	description: "warn somebody",
	usage: "[user] [reason]",
	execute(client, message, args) {
		var embedColor = '#00ff00'
		var missingPermissionsEmbed = new Discord.RichEmbed().setColor(embedColor).setAuthor(message.author.username, message.author.avatarURL).setTitle('Insufficient Permissions!').setDescription('You need the `MANAGE_MESSAGES` permission to use this command!').setTimestamp();
		var missingArgsEmbed = new Discord.RichEmbed().setColor(embedColor).setAuthor(message.author.username, message.author.avatarURL).setTitle('Missing Arguments!').setDescription('Usage: `warn [@User] [Reason]').setTimestamp();
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed);
		let mentioned = message.mentions.users.first();
		if(!mentioned) return message.channel.send(missingArgsEmbed);
		let reason = args.slice(1).join(' ')
		if(!reason) return message.channel.send(missingArgsEmbed);
		var warningEmbed = new Discord.RichEmbed().setColor(embedColor).setAuthor(message.author.username, message.author.avatarURL).setTitle(`You've been warned in ${message.guild.name}`).addField('Warned by', message.author.tag).addField('Reason', reason).setTimestamp();
		mentioned.send(warningEmbed);
		var warnSuccessfulEmbed = new Discord.RichEmbed().setColor(embedColor).setTitle('User Successfully Warned!');
		message.channel.send(warnSuccessfulEmbed);
		message.delete();
	}
};