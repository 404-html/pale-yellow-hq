const Discord = require("discord.js")
module.exports = {
  name: "bash",
  description: "Post code in bash.",
  usage: "[bashcommands]",
  cooldown: 5,
  execute(client, message, args) {
    if(message.author.id !== "384342022955466753" && message.author.id !== "371314406782402590") return message.reply("great try!"); //kokoda
    const {
      exec
    } = require('child_process');
    exec(args.join(" "), (error, stdout, stderr) => {
      message.channel.send(`stdout: ${stdout}`);
      message.channel.send(`stderr: ${stderr}`);
    })
  }
}
