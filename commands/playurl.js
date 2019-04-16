// can i remove my existance.
//yes
//should work now, don't type anything
const streamOptions = {
    seek: 0,
    volume: 1
};
const ytdl = require('ytdl-core');
const Discord = require("discord.js")
module.exports = {
    name: "playurl",
    description: "Play a url.",
	cooldown: 5,
	execute(client, message, args) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply(`Currently playing ${args.join(" ")}`);
        connection.playArbitraryInput(args.join(" "));
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
 
  }}