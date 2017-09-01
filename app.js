const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

client.on('ready',() => {
	console.log('I\'m Online');
});

var prefix = "!"
client.on('message', message => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.send('Pong! Wassup, ' + message.author + '?');
	} else

	if (message.content.startsWith(prefix + 'setgame')) {
		client.user.setGame('Command Prefix: ' + prefix);
	} else

	if (message.content.startsWith(prefix + 'riggedpolls')) {
		message.channel.send('you\'re rigged, you autistic poptart!');
	} else

	if (message.content.startsWith(prefix + "shutdown")) {
		message.channel.send('Command recieved. Shutting down, ' + message.author)
		client.destroy()
	} else
	
	if (message.content.startsWith('prefix')) {
		message.channel.send('Prefix: ' + prefix);
	}
});

client.login(token);
