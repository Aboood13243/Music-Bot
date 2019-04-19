const Commando = require('discord.js-commando');
const bot = new Commando.Client ();
const token = 'NTY2NTU1OTQ0MTI1OTg4ODY1.XLGsYg.viuugvDHBeZnRxQJajV8mkSWNXY'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', "Music")
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');
global.servers = {};
bot.on('ready', function(){
    console.log('Ready');
});

bot.login(token);