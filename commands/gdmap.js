
const Discord = require("discord.js")
module.exports = {
    name: "gdmap",
    description: "geometry dash",
    usage: "[name]",
	cooldown: 5,
	execute(client, message, args) {
const gdc = require('node-geometry-dash');
const GD = new gdc({
  username: "...",
  password: "..."
});

GD.levels(args.join(" ")).then( levels => {
 //message.channel.send(levels[0].name + " | Likes/Stars/Downloads: " + levels[0].likes + "/" + levels[0].stars + "/" + levels[0].downloads)
 // message.channel.send(`${levels[0].stars} - stars ${levels[0].name} - name ${levels[0].description} - desc ${levels[0].song.url} - songurl ${levels[0].length}  - length ${levels[0].difficulty} - diff ${levels[0].author.name} - author`)

  const embed = {
  "fields": [
    {
      "name": "Stars",
      "value": levels[0].stars,
      "inline": true
    },
    {
      "name": "Name",
      "value": levels[0].name,
      "inline": true
    },
    {
    "name": "Description",
    "value": levels[0].description, 
      "inline": true
    },
    {
      "name": "Length",
      "value": levels[0].length,
      "inline": true
    },
    {
      "name": "Difficulty",
      "value": levels[0].difficulty, // also broken for some reason
      "inline": true
    },
    {
      "name": "Creator Name", 
      "value": levels[0].author.name + " | Id | " + levels[0].author.id,
      "inline": true
    }
  ]
};

message.channel.send({ embed });
});

  }}
