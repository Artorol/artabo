const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
})

const express = require("express")
const app = express()
const fs = require("fs");
const prefix = "ar!"

client.commands = new Discord.Collection();
const commands = js.readdirSync("./commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./commands/${commandName}`)
  client.commands.set(commandName, command)
}

cilent.on("messageCreate", message => {
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return message.channel.send({content: "that command dosent exist bro"})
    command.run(client, message, args )
  }
})

const welcome = require('./welcome.js');
const leave = require('./leave.js');

app.get("/", (req, res) => {
  res.send("yoooo its working")
})

app.listen(3000, () => {
  console.log("it do be running doe")

  welcome(client)
  leave(client)
})


// start

// phrases

client.on("message", (message) => {
  if (message.content === "creeper") {
    message.channel.send("Aw man!");
  }
  if (message.content === "Creeper") {
    message.channel.send("Aw man!");
  }
  if (message.content === "Creeper!") {
    message.channel.send("Aw man!");
  }
  if (message.content === "creeper!") {
    message.channel.send("Aw man!");
  }
  if (message.content === "Creeper.") {
    message.channel.send("Aw man!");
  }
  if (message.content === "creeper.") {
    message.channel.send("Aw man!");
  }
  if (message.content === "im hungry") {
    message.channel.send("hi hungry, i'm artabo");
  }
  if (message.content === "im thirsty") {
    message.channel.send("hi thirsty, i'm artabo");
  }
  if (message.content === "whos ligma?") {
    message.channel.send("Ligma balls!");
  }
  if (message.content === "whos joe?") {
    message.channel.send("Joe mama!");
  }
  if (message.content === "who lives in a pineapple under the sea?") {
    message.channel.send("spongebob Squarepants");
  }
  if (message.content === "whats 9+10?") {
    message.channel.send("21.");
  }
  if (message.content === "2+2 is 4") {
    message.channel.send("minus 1 is 3, quick maths B)");
  }
  if (message.content === "good morning") {
    message.channel.send("yooo gm bru")
  }
  if (message.content === "01110010 01100001 01110000 01100101") {
    message.channel.send(
      "LOL, imagine trying to not get caught saying swear words so you type it in binary, what a loser."
    );
  }
  if (
    message.content === "01101110 01101001 01100111 01100111 01100101 01110010"
  ) {
    message.channel.send(
      "LOL, imagine trying to not get caught saying swear words so you type it in binary, what a loser."
    );
  }
  if (message.content === "01101110 01101001 01100111 01100111 01100001") {
    message.channel.send(
      "LOL, imagine trying to not get caught saying swear words so you type it in binary, what a loser."
    );
  }
  if (message.content === "reee") {
    message.channel.send("tard");
  }
  if (message.content === "REEE") {
    message.channel.send("tard");
  }
  if (message.content === "Reee") {
    message.channel.send("tard");
  }
  if (message.content === ".-. .- .--. .") {
    message.channel.send(
      "LOL, imagine trying to not get caught saying swear words so you type it in morse code, what a loser."
    );
  }
  if (message.content === "-. .. --. --. . .-.") {
    message.channel.send(
      "LOL, imagine trying to not get caught saying swear words so you type it in morse code, what a loser."
    );
  }
  if (message.content === "-. .. --. --. .-") {
    message.channel.send(
      "LOL, imagine trying to not get caught saying swear words so you type it in morse code, what a loser."
    );
  }
  if (message.content === "ping.") {
    message.channel.send("Pong!");
  }
  if (message.content === "Ping.") {
    message.channel.send("Pong!");
  }
  if (message.content === "ping!") {
    message.channel.send("Pong!");
  }
  if (message.content === "Ping!") {
    message.channel.send("Pong!");
  }
  if (message.content === "!rank") {
    message.channel.send(
      "https://media1.tenor.com/images/d56fb4be3035a6b2dc3eaeddf4529f05/tenor.gif?itemid=17817029"
    );
  }
  if (message.content === "<@!751812888938807398>") {
    message.channel.send("**whomst has summoned the almighty one.**");
  }
  if (message.content === "f") {
    message.channel.send("uck");
  }
  if (message.content === "good night") {
    message.channel.send("good night girl ill see u tomorrow");
  }
  if (message.content === "gn") {
    message.channel.send("good night girl ill see u tomorrow");
  }

  // end of phrases

  // commands

  if (message.content === "ar!whosdragon") {
    message.channel.send("dragon deez nuts LOLLL");
  }
  if (message.content === "ar!creeper") {
    message.channel.send("aw man");
  }
  if (message.content === "ar!scatmansworld") {
    message.channel.send(
      "BA BO BE BA BABADE BA BA BA BA BABADE BA BO BE BA BABADE BA BA BA BA BABADE BA BO BE BA BABADE BA BA BA BA BABADE BA BO BE BA BABADE BA BA BA BA BABADE"
    );
  }
  if (message.content === "ar!ilikeyourcutg") {
    message.channel.send("AAAAAAAAAAAAA");
  }
  if (message.content === "ar!say im stupid") {
    message.channel.send("yeah we know");
  }
  if (message.content === "ar!showketchupsandwich") {
    message.channel.send(
      "https://media.discordapp.net/attachments/761565514664640522/767405760119832607/unknown.png?width=799&height=406"
    );
  }
  if (message.content === "ar!areyoudead") {
    message.channel.send("no why would i be dead lol");
  }
  if (message.content === "ar!unlimitedbobux") {
    message.channel.send(
      "ok here is some unlimited bobux no scam 2021!!!11!!1!11!!1"
    );
  }
  if (message.content === "ar!goodnight") {
    message.channel.send(
      "gn girl, i'll see u tmrw. https://i.ytimg.com/vi/OYnp5RcC2WU/maxresdefault.jpg"
    );
  }
  if (message.content === "ar!2plus1is3") {
    message.channel.send("half life 3 confirmed :sunglasses:");
  }
  if (message.content === "ar!hellothere") {
    message.channel.send("general kenobi.");
  }
  if (message.content === "ar!hello") {
    message.channel.send(
      "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif"
    );
  }
  if (message.content === "ar!goodbye") {
    message.channel.send(
      "https://thumbs.gfycat.com/NeighboringShortFlounder-size_restricted.gif"
    );
  }
  if (message.content === "ar!givediamondore") {
    message.channel.send(
      "here ya go. use it wisely :D https://cdn.discordapp.com/emojis/756917203462520912.gif?v=1"
    );
  }
  if (message.content === "ar!cringe") {
    message.channel.send(
      "i smell cringe https://media.discordapp.net/attachments/296056831514509312/765183624093630464/image0.gif?width=110&height=135"
    );
  }
  if (message.content === "ar!artaboisbest") {
    message.channel.send(
      `${message.author.toString()} says that <@!751812888938807398> is the best bot ever, that's nice of them! :D`
    );
  }
  if (message.content === "ar!rateme") {
    let number = Math.floor(Math.random() * 11);
    return message.channel.send(
      `i would probably rate you a ` + number + `/10`
    );
  }
  // end of commands

  // complex commands

  if (message.content === "ar!avatar") {
    let embed = new Discord.MessageEmbed()
      .setTitle("this is your avatar")
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ size: 1024, dynamic: true, format: "png" })
      )
      .setColor("RANDOM")
      .setFooter("lookin good")
      .setImage(message.author.displayAvatarURL());
    message.channel.send(embed);
  }

  const array = [
    "ar!8ball",
    "ar!amogus",
    "ar!areyoudead",
    "ar!artaboisbest",
    "ar!avatar",
    "ar!commands (obviously)",
    "ar!creeper",
    "ar!cringe",
    "ar!getem",
    "ar!givediamondore",
    "ar!goodbye",
    "ar!goodnight",
    "ar!hello",
    "ar!hellothere",
    "ar!ilikeyourcutg",
    "ar!innocentcommand",
    "ar!kill",
    "ar!minecraftimages",
    "ar!nickname",
    "ar!nostalgia",
    "ar!pepeimage",
    "ar!rateme",
    "ar!rps",
    "ar!sayimstupid",
    "ar!scatmansworld",
    "ar!showcreepyface",
    "ar!showketchupsandwich",
    "ar!showstockimage",
    "ar!speakgibberish",
    "ar!supportserver",
    "ar!unlimitedbobux",
    "ar!whosdragon",
  ];

  if (message.content === "ar!commands") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Commands:")
      .setAuthor("Artabo")
      .setColor("RANDOM")
      .setDescription(array.join("\n"))
      .setThumbnail(
        "https://media.discordapp.net/attachments/746229113496403978/855485942281666620/artabo_bot_logo_2_v3.png?width=410&height=410"
      )
      .setFooter(":D");
    message.channel.send(embed);
  }
  if (message.content === "ar!nickname") {
    let nicknames = [
      "Dill Dough",
      "Eyema Deer Cared",
      "ArtaboLover",
      "Your Mother",
      "xX360_N0SC0PERXx",
      "Sexy MF",
      "Joe",
      "Ligma",
      "IceSwallowCome",
      "Mike Oxmall",
      "Mike Hawk",
      "Alpha Kenny Body",
      "SexHaver420",
      "Weeb",
      "Woodcha Blowme",
      "Bob",
      "TEST_SUBJECT_042",
      "Order 66",
      "insert name here",
      "ducc",
      "furry x3",
      "I love Artabo",
      "thanos man",
      "bruh moment",
      "League of legends Addict",
      "spooderman",
      "allah :flushed:",
      "dababy",
      "family guy fan",
      "Mike Hunt",
      "Spunchbob",
    ];
    let embed = new Discord.MessageEmbed()
      .setTitle("random Name")
      .setAuthor("Artabo")
      .setColor("RANDOM")
      .setDescription(
        `${nicknames[Math.floor(Math.random() * nicknames.length)]}`
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/853957936573317120/856595783100923934/randomname.png?width=384&height=384"
      )
      .setFooter("have fun with your new nickname");
    message.channel.send(embed);
  }
  if (message.content === "ar!nostalgia") {
    let images = [
      "https://upload.wikimedia.org/wikipedia/en/5/50/Windows_7_SP1_screenshot.png",
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Windows_8.1_Pro_Default_Start_Screen.png",
      "https://upload.wikimedia.org/wikipedia/en/6/64/Windows_XP_Luna.png",
      "https://mk0wparena2dlb3il88l.kinstacdn.com/wp-content/uploads/2009/09/img19.jpg",
      "https://oswallpapers.com/wp-content/uploads/2016/06/img24.jpg",
      "https://oswallpapers.com/wp-content/uploads/2016/06/img7.jpg",
      "https://mk0wparena2dlb3il88l.kinstacdn.com/wp-content/uploads/2009/09/img17.jpg",
      "https://i.ytimg.com/vi/Sd1vMDmlh4k/maxresdefault.jpg",
      "https://static.wikia.nocookie.net/windows/images/4/4b/300px-Windows98.png/revision/latest/scale-to-width-down/640?cb=20160514151855",
      "https://static.wikia.nocookie.net/dantdm/images/0/02/Old_Lab.jpg/revision/latest?cb=20190514125926",
      "https://media.discordapp.net/attachments/746202728375648273/857289569111638036/Windows_Vista.png?width=480&height=360",
      "https://freegamesmac.com/wp-content/uploads/2019/10/Grand-Theft-Auto-Vice-City-Screenshots-4-1250x950.jpg",
      "https://www.wikihow.com/images/thumb/d/d6/Date-a-Girl-in-Grand-Theft-Auto_-San-Andreas-Step-2-Version-2.jpg/v4-460px-Date-a-Girl-in-Grand-Theft-Auto_-San-Andreas-Step-2-Version-2.jpg.webp",
      "https://i0.wp.com/www.thexboxhub.com/wp-content/uploads/2017/02/doodlegod3.jpg?fit=1440%2C810&ssl=1",
      "https://i.pinimg.com/originals/7e/a8/2d/7ea82de4bac2dc9e2e81e3f0fe171005.jpg",
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/wheres-my-water/8/85/IMG_0132.PNG?width=325",
      "https://gamasexual.com/c/i/g/cut-the-rope.jpg",
      "https://i.ytimg.com/vi/TsfXcgpscy0/maxresdefault.jpg",
      "https://upload.wikimedia.org/wikipedia/en/d/da/Wiimen.png",
    ];
    let embed = new Discord.MessageEmbed()
      .setTitle("nostalgic images")
      .setAuthor("artabo")
      .setColor("RANDOM")
      .setDescription("nostalgia!")
      .setFooter("feel the nostalgia..")
      .setImage(`${images[Math.floor(Math.random() * images.length)]}`);
    message.channel.send(embed);
  }
  if (message.content === "ar!speakgibberish") {
    let gibberish = [
      "fuewifeeriur",
      "miuerohgiurhg8yrhiurh",
      "jg875878d  H9EG9MH879MHG9NMHwqh7405hi5hi5o6khpo56hpk65",
      "nuihgerygirehyyuIU!yigui",
      "HUGEYGHIUREYGHIRYFJYIUYFGIGIEUGTRHTR;LHK;R,TOIJOhYGBOKKSOIFJEIRURTI",
      ".GE;RGLREOJGIREGNUEOIFYWE872BT87TR2676TR65`R6E5WTNE6T9G87YR9HY94HUIYJPO5Y[JP5O#5YJ]",
      "FMWOIEJGIUEORHIUHGIURHIUFHWOF723TR356Y8758363187429378536I54PHLT4H;T4/';T4H.'4TLHKOIT4HJIT4UHU",
      "JIREUGEHTRUOIRUHIRTHJUHJIRTJHIURH",
      "UGIYUGIEi984987t3489G9T989HUG098EHR9879H8g76r8364gt9834g837g3r7 t86t9f 9WN UGKERKLG;.W",
      "FWEFJIURGNEYMROHN6 8 $KINHUWQOIR GURW 7 89CYG83HG8HY8T4HY5LJULK[.Y;H]",
      "NUGHIUREHGURHGO7438T874KY04J9'E2YFOOM2EUF",
      "JUOMR7HUTR8HUTH73NMR3G9N83R",
      "K843UT87FRUITO45Y5976945",
      "U983NMT093R079987",
      "HJ7T8349YT87439MY847RK493HTHIJuhriuehruHHG7H",
      "897YM387Y987y87yg87r9yg73y9g8y7t89ruk98wye9f87",
      "jugyr87g9ergye7tjk09rykur9e7y8g7y879y87Y987Y987E99arefk",
      "HURGURIGHihuoirughirughoierugheoirughiuerghoieurhgoiuwerhgoiuethqeh",
      "hiutgheiugheriughoierugheiuhhoiyjhoiy6yghy5gg2q4yghi4h6hj4jhm46mjhy5kjjn5kyhj",
      "BGHHrgihURUGIHhg9wgh9whRGWGJWLKRGJ;WRLJGU  WFOIUWRHGIURHIQHHIHTIUHHQIRUHIOTHWRUHH",
    ];
    let embed = new Discord.MessageEmbed()
      .setTitle("Here is some gibberish for ya!")
      .setAuthor("Artabo")
      .setColor("RANDOM")
      .setDescription(
        `${gibberish[Math.floor(Math.random() * gibberish.length)]}`
      )
      .setFooter("Gibberish!");
    message.channel.send(embed);
  }
  if (message.content === "ar!invite") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Link:")
      .setAuthor("Artabo")
      .setColor("RANDOM")
      .setDescription(
        "https://discord.com/api/oauth2/authorize?client_id=751812888938807398&permissions=8&scope=bot"
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/746229113496403978/855485942281666620/artabo_bot_logo_2_v3.png?width=410&height=410"
      )
      .setFooter("Add it! :D");
    message.channel.send(embed);
  }
  if (message.content === "ar!supportserver") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Support Server:")
      .setAuthor("Artabo")
      .setColor("RANDOM")
      .setDescription("https://discord.gg/Y9jvW3P9mg")
      .setThumbnail(
        "https://media.discordapp.net/attachments/746229113496403978/855485942281666620/artabo_bot_logo_2_v3.png?width=410&height=410"
      )
      .setFooter("Join the support server, :D");
    message.channel.send(embed);
  }
  if (message.content === "ar!amogus") {
    let embed = new Discord.MessageEmbed()
      .setTitle("amogus")
      .setAuthor("amogus")
      .setColor("RANDOM")
      .setDescription("amogus")
      .setFooter("amogus")
      .setImage(
        "https://media.discordapp.net/attachments/780799886080737290/856480018838716426/dumpy856479975799914506.gif?width=426&height=412"
      );
    message.channel.send(embed);
  }
  if (message.content.startsWith("ar!kill")) {
    let victim = message.mentions.users.first();
    let deathmessages = [
      "WAS KILLED",
      "got oof'd",
      "got le killed",
      "died",
      "got killed like a crewmate in among us",
      "died with no sound he just died",
      "done something called die",
      "got murdered by a meth addict",
      "fell out of the world",
      "got scrambled like an egg before he got folded like an omelette",
      "has left the chat",
      "has left us",
      "has gone to the void",
      "got milked on",
      "overdosed on meth and cocaine and died",
      "became non-existent",
      "hit the ground to hard",
      "got sucked up by a black hole",
      "was ejected",
      "got snatched",
      "has exploded",
      "went kaboom",
      "passed away",
      "ate shit and died",
      "literally went oof",
      "is kil",
      "is alive'nt",
      "mfing died ",
      "fucking died",
      "is no longer with us",
      "has fallen asleep forever",
      "got shot by a hitman",
      "got jumped",
    ]

    let botId = '751812888938807398';
    if (mentionedMember.id === botId) {
      let tries = [
        "lmaooo u wish",
        "LMAOOOO no",
        "u really wanna kill me bruh?",
        "dont even try dude",
        'lmaoo',
      ];

      if (!victim)
        return message.channel.send("bruh you have to mention someone to kill them");
      if (victim.id === message.author.id)
        return message.channel.send(
          "https://media.discordapp.net/attachments/1071475295917449317/1073590024311951391/09b.png?width=771&height=434"
        );
      else {
        message.channel.send(
          `${victim} ${
          deathmessages[Math.floor(Math.random() * deathmessages.length)]
          } because of ${message.author} :(`
        );
      }
    }
  };

// end for complex commands

// important but boring part

client.login(process.env.token);


client.on("ready", () => {
    client.user.setPresence({
        activities: [{ 
          name: "over servers",
          type: "WATCHING"
        }],
        status: "idle"
    })
});