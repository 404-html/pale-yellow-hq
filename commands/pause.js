





const Discord = require("discord.js")
module.exports = {
    name: "pause",
    description: "pause the song i guess",
    usage: "[]",
	cooldown: 5,
	execute(client, message, args) {
    	const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);

const hahayes = voiceConnection.player.dispatcher
        if (hahayes == null) return;
        if (voiceConnection === null) return message.channel.send('There is no song playing!');
    hahayes.pause();
            let w = new Discord.RichEmbed().setDescription("Paused.").setColor('#A65EA5')
            message.channel.send(w);
  }}