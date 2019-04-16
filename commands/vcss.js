
const Discord = require("discord.js")
module.exports = {
    name: "vcss",
    description: "vcss (Voice Chat ScreenShare) - gives the link to open screensharing of the voice chat you're in.",
    usage: "[]",
	cooldown: 5,
	execute(client, message, args) {
	
    if (message.member.voiceChannel) {
      message.channel.send({embed: {
        title: "Join "+message.member.voiceChannel.name+" and click this link after that to screenshare in the voice channel",
    url: "http://discordapp.com/channels/"+message.guild.id+"/"+message.member.voiceChannel.id
      }})
    } else {
     message.reply('Join a voice channel!')
      return;
    }
    
  }}
