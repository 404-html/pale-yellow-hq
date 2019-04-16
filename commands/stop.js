
const Discord = require("discord.js")
module.exports = {
    name: "stop",
    description: "Stop a song.",
	cooldown: 5,
	execute(client, message, args) {
     const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
    const dispatcher = voiceConnection.player.dispatcher;
       if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(':negative_squared_cross_mark: You must have the *Manage Servers* permission to use this command!');
        if (dispatcher == null) return;
        if (voiceConnection === null) return message.channel.send('There is no song playing!');
        
        dispatcher.end();
  }}