
const Discord = require("discord.js")
const em = require('enmap')
module.exports = {
    name: "backup",
    description: "Saves or loads backups of servers",
    usage: "[[save/load] [load backup code]]",
	cooldown: 5,
	execute(client, message, args) {
	  if (args.length < 1) {
      message.reply('the usage to this command is: backup [either save or load] [if load, backup code here]')
      return
    }
    if (args[0] == 'save') {
      
    } else if (args[0] == 'load') {
      
    }
  }}