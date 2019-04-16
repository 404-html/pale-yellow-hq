const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('pale yellow hq is best company faggot'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const Discord = require('discord.js');
// fixed somehow, ill try command to see if it works or not.
class Bot extends Discord.Client {
  constructor(options) {
    super(options);
  }
}
const client = new Bot();


client.commands = new Discord.Collection();
// Now we start the music module.

const commandFiles = fs.readdirSync('./kuteshi/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();
      
function changing_status() {
    let status = ["24/7 hosting by Glitch | Uptimerobot",`Eating ${client.users.size} users!`,"Made with NODE.JS and Discord.js",`Eating ${client.guilds.size} guilds!`,"chan@help","chan@help","chan@help","chan@help","chan@help","chan@help","chan@help"]
    let random = status[Math.floor(Math.random() * status.length)]
    client.user.setActivity(random)
}

client.on('ready', () => {
    setInterval(changing_status, 1000);
	console.log('Ready!');
});


client.on('message', message => {
  	if (message.channel.type == "dm") return;
	if (!message.content.startsWith(process.env.KUTESHIPREFIX) || message.author.bot) return;

	const args = message.content.slice(process.env.KUTESHIPREFIX.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${process.env.KUTESHIPREFIX}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(client,message,args)
	}
	catch (error) {
		message.channel.send(error.message);
	}
});

client.login(process.env.KUTESHITOKEN);
