
const streamOptions = {
    seek: 0,
    volume: 1
};
const ytdl = require('ytdl-core');
const Discord = require("discord.js")
module.exports = {
    name: "playfile",
    description: "Play a file I guess.",
	cooldown: 5,
	execute(client, message, args) {
	var Attachment = (message.attachments).array();
if (Attachment.length == 0) return message.channel.send('Please send a mp3 file to play in your message!');
if (Attachment[0].url == null) return message.channel.send('An error occurred, sorry about that!');
if (!Attachment[0].url.endsWith('.mp3')) return message.channel.send('Please send a ***mp3*** file, rather than anything else!');
    console.log(message.attachment)
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply(`Currently playing ${Attachment[0].fileName}`);
        connection.playArbitraryInput(Attachment[0].proxyURL);
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
 
  }}