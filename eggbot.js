const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!';

// This event will run if the bot starts, and logs in, successfully.
client.on('ready', () => {

// Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setGame(`!eggbot on ${client.guilds.size} servers`);
});



// This event will run on every single message received, from any channel or DM.
client.on('message', message => {

	// It's good practice to ignore other bots. This also makes your bot ignore itself
	// and not get into a spam loop (we call that "botception").
	if(message.author.bot) return;

	// Also good practice to ignore any message that does not start with our prefix, 
	// which is declared as prefix.
	if(message.content.indexOf(prefix) !== 0) return;


	// Here we separate our "command" name, and our "arguments" for the command. 
	// e.g. if we have the message "+say Is this the real life?" , we'll get the following:
	// command = say
	// args = ["Is", "this", "the", "real", "life?"]
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	const EGGBOT_MESSAGE = "*For more commands type [!eggbot]*";

//COMMANDS


	//Postar alla commands
	if(command === "eggbot"){
		const eggbotmessage =
			"*Hello! My name is EggBot!*"
                + "\r\n"
                + "*These are my current commands:*"
                + "\r\n"
                + "\r\n"
                + "1. [!tg]: Fetches a togethertube link"
                + "\r\n"
                + "2. [!rabbit]: Fetches a Rabb.it link"
                + "\r\n"
                + "3. [!dick]: Posts a random dick";
	
	message.channel.send(eggbotmessage);
	}

	//Postar en togethertubelänk
	if(command === "tg"){
		message.channel.send("*Choose a togethertube room from the ones below*" + "\r\n" + "*To choose a room, write !tg with the corresponding room number*"
					+ "\r\n" + "\r\n" + "• Room 1" + "\r\n" + "• Room 2 (CURRENTLY UNAVAILABLE)" + "\r\n" + "• Room 3 (CURRENTLY UNAVAILABLE)");
		message.channel.send(EGGBOT_MESSAGE);
	}	
	//Postar room 1
	if(command === "tg1"){
		message.channel.send("Togethertube Room 1");
		message.channel.send("https://togethertube.com/rooms/upr-room-1");
		message.channel.send("*For more commands type [!eggbot]*");
	
	}
	
	//Postar room 2
	if(command === "tg2"){
		message.channel.send("Togethertube Room 2");
		message.channel.send("ROOM CURRENTLY UNAVAILABLE");
		message.channel.send("*For more commands type [!eggbot]*");
	
	}
	
	//Postar room 3
	if(command === "tg3"){
		message.channel.send("Togethertube Room 3");
		message.channel.send("ROOM CURRENTLY UNAVAILABLE");
		message.channel.send("*For more commands type [!eggbot]*");
	
	}


//Postar en rabbitlänk
	if(command === "rabbit"){
	message.channel.send("https://www.rabb.it/OliverDizz");
	message.channel.send(EGGBOT_MESSAGE);

	}

//Postar en random dicc
	if(command === "test"){
		var x = Math.floor((Math.random() * 10) + 1);
		message.channel.send(x);

  }




});

//Logs in the bot with the token
client.login('MjYzNzY5MzQ5MzQzNTQzMjk2.DSRFow.YYNOR3CGAHO5F_iXbkzSUqp3aGs');
