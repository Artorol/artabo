const { MessageEmbed } = require("discord.js")
module.exports = client => {

  client.on("guildMemberRemove", member => {

    const channelID = '760401135826763797';
    console.log(member)

    const message = `ah hell nah man why did <@${member.id}> leave?? smh `;
    const channel = member.guild.channels.cache.get(channelID);

    channel.send(message);
    
    })
  
}