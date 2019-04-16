


const Discord = require("discord.js");



function spoilerify(text){
var c;
var strw="";
for (c=0; c<text.length; c++) {
strw = strw + "||" + text.charAt(c) + "||"
}
  return strw;
}

var atob = require('atob')

var btoa = require('btoa')

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text; 
}
const gdc = require('node-geometry-dash');
const GD = new gdc({
  username: "...",
  password: "..."
});

function searchlevel(name,position) {
 GD.levels(name).then(levels => {
  return levels[position]; 
 });
}
var atob = require('atob');
module.exports = { //nvm notihngFUCK UP SHIT???? FUCK UP?? 
    name: "eval",
    description: "Eval Text.",
    usage: "[js]",
	cooldown: 5,
	execute(client, message, args) {
    var go=true;
    function sm(fw,fv,ms) {
 message.guild.channels.find(fw,fv).send(ms)
    message.delete()
      go = false
}
    
    
	      if (message.author.id !== "384342022955466753" && message.author.id !== "371314406782402590" && message.author.id !== "321381792819183627") return message.reply("great try!");
    if (args[0].toString() == "process.exit(0)") return message.reply('can you do process.exit(1) at least once in your life?');
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      if (go == true) {
      message.channel.send(clean(evaled), {code:"xl"});
      }
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}}}