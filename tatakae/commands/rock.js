const Discord = require("discord.js")
module.exports = {
    name: "rock",
    description: ":moyai:\:moyai::moyai:\:moyai::moyai:\:moyai:",
	cooldown: 5,
	execute(client, message, args) {
    const embed = new Discord.RichEmbed()
      // Set the title of the field
      .setTitle('🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿')
      // Set the color of the embed
    .setAuthor('🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿',message.author.avatarURL)
      .setColor(0x4B4B4B)
      // Set the main content of the embed
      .setDescription(':moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai:')
    
    .addField(":moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai:", ":moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai:", true)
    .addField(":moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai:", ":moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai::moyai:\:moyai:", true)
   
    .setFooter("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿", message.author.avatarURL)
  .setTimestamp()
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }}