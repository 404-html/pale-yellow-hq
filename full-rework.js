const express = require('express')
const em = require('enmap')

const app = express()
const port = 3000
const rolecn = ['self-roles','self-role','assign-roles','assignable-roles','role-yourself','choose-roles','pick-roles','get-roles']
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var subrs=[]
var sbcd=[]
const fs = require('fs');

const Discord = require('discord.js');
// go to /commands/eval.js



class Bot extends Discord.Client {
  constructor(options) {
    super(options);
  }
}


const client = new Bot();

const be = new em({
  name: "backups",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}



const cooldowns = new Discord.Collection();
      
function changing_status() {
    let status = ['s!help', 'v2.0', 'Soundbot v2.0', 'Tatakae | ohyeahyeah.ga#0546', 'Kuteshikikatoari#4789']
    let random = status[Math.floor(Math.random() * status.length)]
    client.user.setPresence({
      game: {
        name: random,
        type: 'STREAMING',
        url: 'http://www.twitch.tv/monstercat'
            }
    });
  //ur still a frog tho
  
  
  
}

client.on('ready', () => {

    setInterval(changing_status, 2000);
	console.log('Ready!');
        setInterval(function() { client.channels.get('546388798192222228').setTopic('Home of '+ client.channels.get('546388798192222228').guild.memberCount +' members');}, 5000);
});




client.on('message', message => {
  	if (message.channel.type == "dm") {
      
    //random stuff here
      
      return;
    }
  if (rolecn.includes(message.channel.name.toLowerCase())) {
    if (message.guild.roles.find(trl => trl.name.toLowerCase() == message.content.toLowerCase()))  {
   message.react('✅') 
    }
  }
  if (message.content.includes('<@'+client.user.id+'>')) {
   if (Math.floor(Math.random() * 3) + 1 == 2) {
    message.react(':wave:') 
   }
  }
  if (message.author.bot) return;
  
  var subrs = []
  var tsb = ""
  var spm = message.content.split('')
  var status = "no"
  var i;
  for (i=0; i<spm.length; i++) {
    if (spm[i] == "r") {
     if (status == "no") {
      status = "r" 
      continue
     }
    }
    if (status == "r" && spm[i] != "/") {
     status = "none"
      tsb = ""
      continue
    }
    if (spm[i] == "/") {
      if (status == "r") {
       status = "sub"
        tsb = tsb + "r/"
        continue
      }
    }
    if (status == "sub") {
     if (spm[i] == " ") {
      subrs.push(tsb)
       tsb = ""
       status = "no"
       continue
     } else {
       tsb = tsb + spm[i]
     }
    }
  }
  if (status == "sub") {
   subrs.push(tsb)
    tsb = ""
    status = "no"
  }
  subrs.filter(function(val) {
    if (val == "r/") {
     return false 
    } else {
     return true 
    }
  })
  var i;
  if (!subrs.length == 0) {
  const embed = new Discord.RichEmbed()
  embed.setTitle(message.author.tag+"'s message: Subreddit links")
  embed.setAuthor(message.author.tag,message.author.avatarURL)
  embed.setColor(0x3399FF)
  
  for (i=0; i<subrs.length; i++) {
    embed.addField(subrs[i],
    "["+subrs[i]+"](https://www.reddit.com/"+subrs[i]+")")
  }
  setTimeout(function() {
      message.channel.send({embed});
  },2000)
  
  }
	if (!message.content.startsWith(process.env.PREFIX)) return;

  
	const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
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
			reply += `\nThe proper usage would be: \`${process.env.PREFIX}${command.name} ${command.usage}\``;
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





client.login(process.env.token);
