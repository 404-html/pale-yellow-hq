
const Discord = require("discord.js")
module.exports = {
    name: "gdplayer",
    description: "geometry dash",
    usage: "[name]",
	cooldown: 5,
	execute(client, message, args) {
const gdc = require('node-geometry-dash');
const GD = new gdc({
  username: "...",
  password: "..."
});

GD.users(args.join(" ")).then( users => {
 //message.channel.send(levels[0].name + " | Likes/Stars/Downloads: " + levels[0].likes + "/" + levels[0].stars + "/" + levels[0].downloads)
 // message.channel.send(`${levels[0].stars} - stars ${levels[0].name} - name ${levels[0].description} - desc ${levels[0].song.url} - songurl ${levels[0].length}  - length ${levels[0].difficulty} - diff ${levels[0].author.name} - author`)

  const embed = {
  "fields": [
    {
      "name": "UserCoins",
      "value": users[0].userCoins,
      "inline": true
    },
    {
      "name": "Stars",
      "value": users[0].stars,
      "inline": true
    },
    {
    "name": "Demons",
    "value": users[0].demons,
      "inline": true
    }
  ]
};

message.channel.send({ embed });
});

  }}
