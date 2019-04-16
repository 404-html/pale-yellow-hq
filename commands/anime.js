const Discord = require('discord.js');
const mal = require("maljs");
module.exports = {
  name: 'anime',
  description: 'Get info about a Anime',
  usage: "[anime_name]",
  cooldown: 5,
  execute(client, message, args) {
    let command = message.content.split(' ');
    command.shift();
    let query = command.join(" ");
    mal.quickSearch(query, 'anime').then(function(results) {
      results.anime[0].fetch().then(function(r) {
        let embed = new Discord.RichEmbed().setTitle(r.title).setColor(0x2E51A2).setThumbnail(r.cover).setURL('https://myanimelist.net' + r.path).addField('Anime', 'Score : ' + r.score).setDescription(r.description.replace('[Written by MAL Rewrite]', ''));
        message.channel.send({
          embed
        });
      });
    });
  }
}
