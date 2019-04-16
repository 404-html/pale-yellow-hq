// can i remove my existance.
//yes // can you work on a thingy, i wan so you port volume, and summon to this bot ok
//should work now, don't type anything

const streamOptions = {
    seek: 0,
    volume: 1
};
const ytdl = require('ytdl-core');
const Discord = require("discord.js")
module.exports = {
    name: "ping",
    description: "DU-DUN",
	cooldown: 5,
	execute(client, message, args) {

    
    var url = 'https://cdn.glitch.com/6d136ff3-f5c3-47f0-9d2a-186ccbe62847%2Fdiscord.mp3?1549900983329';
    console.log(message.attachment)
    if (message.member.voiceChannel) {
      var alreadywas = false;
      if (message.guild.me.voiceChannel) {
       alreadywas = true; 
      }
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        connection.playArbitraryInput(url);
        setTimeout(function() {
          if (!alreadywas) {
          message.member.voiceChannel.leave()
          } //so the bot doesn't leave if it was in the channel before the commands // everything works as expected
        },1500);
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
 
  }}