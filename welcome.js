const { MessageEmbed } = require("discord.js")
module.exports = client => {

  client.on('guildMemberAdd', member => {

    const channelID = '760401135826763797';
    console.log(member)

    const message = `yoo welcome to the server <@${member.id}> read the rules, thanks `;
    const channel = member.guild.channels.cache.get(channelID);

    channel.send(message);
    
    })
  
}