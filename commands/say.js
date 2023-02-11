exports.run = (client, message, args) => {
  let toSay = args.join(" ")
  if (!tosay) return message.channel.send({content: "you have to type something for me to say bro lmao"})
  message.channel.send({content: toSay}) 
}

exports.name = "say"
