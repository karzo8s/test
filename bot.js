const Discord = require('discord.js');
const Canvas = require('canvas');

const client = new Discord.Client();

const prefix = ['-']
client.once('ready', () => {
	console.log('Ready!');
});
//////////////////////////////////////-(التوكن)/////////////////////////////////
client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);
//////////////////////////////////////-(صطريمنق)///////////////////////////////
client.on('ready',async () => {
let streaming = [`Credits Lover`, `Welcome To Me Pu**y`];
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
setInterval(() => {
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
}, 5000);
});
