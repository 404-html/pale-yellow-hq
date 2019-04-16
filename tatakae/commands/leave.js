



const Discord = require("discord.js")
module.exports = {
    name: "leave",
    description: "Leave a channel. I think so. Yeah..",
	cooldown: 5,
	execute(client, message, args) {
	
            if (!message.member.voiceChannel) return message.channel.send(':negative_squared_cross_mark: Connect to a voice channel first!');
            if (!message.guild.me.voiceChannel) return message.member.voiceChannel.join();
            if (!message.guild.me.voiceChannelID == message.member.voiceChannelID) return message.channel.send(':negative_squared_cross_mark: You must be in the same voice channel the bot is in!');
            if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(':negative_squared_cross_mark: You must have the *Manage Servers* permission to use this command!');
            message.guild.me.voiceChannel.leave();

            message.channel.send(':white_check_mark: Successfully left the voice channel.');
  }}