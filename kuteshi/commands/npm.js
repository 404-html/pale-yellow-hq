const Discord = require("discord.js");
const snek = require('snekfetch');
const moment = require('moment');
require('moment-duration-format');
module.exports = {
	name: 'npm',
	description: 'npm',
	cooldown: 5,
	execute: async (client, message, args) => {
		if(args.length === 0) return message.reply('You must supply a search term.');
		const query = args.join(' ');
		try {
			const {
				body
			} = await snek.get(`https://registry.npmjs.com/${query.toLowerCase()}`);
			const version = body.versions[body['dist-tags'].latest];
			let deps = version.dependencies ? Object.keys(version.dependencies) : null;
			let maintainers = body.maintainers.map(user => user.name);
			let github = version.repository.url
			let gitshort = github.slice(23, -4)
			if(maintainers.length > 10) {
				const len = maintainers.length - 10;
				maintainers = maintainers.slice(0, 10);
				maintainers.push(`...${len} more.`);
			}
			if(deps && deps.length > 10) {
				const len = deps.length - 10;
				deps = deps.slice(0, 10);
				deps.push(`...${len} more.`);
			}

			function customTemplate() {
				return this.duration.asSeconds() >= 86400 ? "w [weeks], d [days]" : "h [hrs], m [mins], s [secs]";
			}
			let updated = moment.duration(Date.now() - new Date(body.time[body['dist-tags'].latest]).getTime()).format(customTemplate, {
				trim: false
			});
			const embed = new Discord.RichEmbed()
				.setColor(0xCB3837)
				.setAuthor(`${body.name} - npmjs Package Information`, 'https://i.imgur.com/ErKf5Y0.png')
				.setThumbnail('https://i.imgur.com/8DKwbhj.png')
				.addField(`Description`, `${version.description || 'No description.'}\n​`)
				.addField('Last Modified', `${updated} ago`, true)
				.addField('Version', `${body['dist-tags'].latest}`, true)
				.addField('License', `${body.license}\n​`, true)
				.addField('Maintainers', maintainers.join(', '), true)
				.addField('Dependencies', `${deps && deps.length ? deps.join(', ') : '*None*'}\n​`, false)
				.addField('\`NPMjs Package\`', `[\`https://www.npmjs.com/package/${query.toLowerCase()}\`](https://www.npmjs.com/package/${query.toLowerCase()})`)
				.addField('\`Github Repository\`', `[\`https://www.github.com/${gitshort}\`](https://www.github.com/${gitshort})`)
			message.channel.send({
				embed
			});
		} catch (error) {
			if(error.status == 404) return message.channel.send('**Could not find any results.**');
			console.log(error);
		}
	}
};