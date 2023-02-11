const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.MessageEmbed
  .setTitle(`commands: ${client.commands.size}`)
  .setDescription(commands)
  .setFooter("my prefix is ar!")
  message.channel.send({embeds:[embed]})
}

exports.name = "commands"