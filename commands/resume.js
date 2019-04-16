const Discord = require("discord.js")
module.exports = {
    name: "resume",
    description: "Resume a track.",
	cooldown: 5,
	execute(client, message, args) {
	   const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
      if (voiceConnection === null) return message.channel.send('No music is being played.');

      const dispatcher = voiceConnection.player.dispatcher;
      if (!dispatcher.paused) return message.channel.send(`Music already playing.`)
      else dispatcher.resume();
        let embed = new Discord.RichEmbed()
        .setDescription("Music resumed.")
        .setColor('#A65EA5')
		message.channel.send(embed);
  }}