const tmi = require('tmi.js');
const { timeout } = require('tmi.js/lib/commands');
require('dotenv').config();
const axios = require('axios');

const saludos = ['hola', 'ola', 'holi', 'wenas', 'wennas', 'buena men', 'buenas', 'wena po', 'ola po', 'buenasss','hewwo']

const despedidas = ['adios', 'chao', 'nos vimos', 'adio', 'hasta luego', 'chaito', 'bye', 'bye~', 'bye~~']
const chomoSaludos = ['olam','omlam']
const channel = 'memelty'

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    },
    channels: ['memelty']
}

function findWord(word, str) {   
        return str.split(' ').some(function (w) { w  === word }) 

}

const client = new tmi.Client(options);

client.connect()

/*  client.on("connected", (address, port) => {
        client.say(channel,'/me modo bot activado');  
});  */


client.on("hosted", (channel, username, viewers, autohost) => {
    console.log([channel, username, viewers, autohost])
    client.say(channel,!so `${username}`);
});

client.on("resub", (channel, username, months, message, userstate, methods) => {
    console.log([channel, username, months, message, userstate, methods])
    let cumulativeMonths = userstate["msg-param-cumulative-months"];
    console.log(cumulativeMonths)
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    console.log([channel, username, streakMonths, recipient, methods, userstate])
    let senderCount = userstate["msg-param-sender-count"];
    console.log(senderCount);
}); // ya capturada


client.on("subscription", (channel, username, method, message, userstate) => {
    console.log([channel, username, method, message, userstate])
});


client.on('message', async (channel, tags, message, self) => {

    if (self) return;

    let msgSaludo = message.split(' ',1).join();

    if (despedidas.includes(message.toLowerCase())) {
            client.say(channel, `/me @${tags.username} Adios cuidate, esperamos que hayas disfrutado del directo y recuerda irte por la sombrita uwu <3`)
    }

    if (saludos.includes(msgSaludo.toLowerCase())) {
        
            client.say(channel, `/me @${tags.username} Hola bienvenido, esperamos que disfrutes del directo de ${channel}`)
    }

    if(chomoSaludos.includes(message.toLowerCase())){
        if(tags.usename === 'chiimuu'){
            client.say(channel, 'omlam chomoooo')
        }else{
                client.say(channel,'/me omlam biemvemnimdom pureconShiba');
        }
    }

    if (findWord('chomo', message.toLowerCase())){
        
        client.say(channel, `/me @${tags.username} no00o0o000o0o0o la palabra ~~chomo~~ esta funada memeltYAAAAA memeltYPium memeltYAAAAA memeltYPium memeltYAAAAA memeltYPium  memeltYpan `);
        
    } 
    if (message.toLowerCase() === '!ps') {
            client.say(channel, 'pspspspspspspspspspspspspspspspspspspspspspsps');
    }

    if (message.toLowerCase() === '!panik') {
        client.say(channel, `/me !vc cuidado ${channel} que despertaras a los pingüinos`);
    }
    if (message.toLowerCase() === '!pastillas') {
        client.say(channel, `/me que te metiste en la boca perro culiao? ESCUPELO ALTOKE!!!!!!!!`);
    }

    if (message.toLowerCase() === '!suititas') {
        client.say(channel, `/me suititas?!?!?! sera real o no ?`);
    }
    if (message.toLowerCase() === '!mod') {
        client.say(channel, `/me para ser mod, tienes que pasar una serie de retos, primero tienes que vencer
        a todos los mods en un 1 vs 1 en free fire, pero al neriaj debes vencerlo 15 veces sin perder, recien ahi puede optar a enviar tu cv`);
    }

    if (message.toLowerCase() === '!jindyus') {
        client.say(channel, `/me !vc jindyus lo compra`);
    }

    if (message.toLowerCase() === '!cummandos') {
        client.say(channel, '\n'+  
            '!pastillas \n'+
            '!jindyus \n'+
            '!suititas \n'+
            '!panik \n'+
            '!ps \n'+
            '!anime \n'+
            '!uwu \n'+
            '!pokemon \n'+
            '!:0 \n'+
            '!bruh \n'
        );
    }

    
    if (findWord('melty',message.toLowerCase()) ) {
        client.say(channel, `/timeout ${tags.username} 5s por decir melty`);
    }
    if (findWord('memelty', message.toLowerCase())) {
        client.say(channel, `/timeout ${tags.username} 5s por decir melty`);
    }
    if (findWord('ñelty', message.toLowerCase())) {
        client.say(channel, `/timeout ${tags.username} 5s por decir melty`);
    }
    if (findWord('melty!', message.toLowerCase())) {
        client.say(channel, `/timeout ${tags.username} 5s por decir melty`);
    }
    if (findWord('meltys', message.toLowerCase())) {
        client.say(channel, `/timeout ${tags.username} 5s por decir melty`);
    }   

    if (message.toLowerCase() === '!anime') {
        try {
            let res = await axios.get('https://animechan.vercel.app/api/random')
                client.say(channel, `@${tags.username} Puedes ver el anime ' ${res.data.anime} '`)
        } catch (error) {
            console.log(error);
        }
    }

    if(message.toLowerCase() === '!uwu'){
            client.say(channel,'\n'+ 
            '⡆⣐⢕⢕⢕⢕⢕⢕⢕⢕⠅⢗⢕⢕⢕⢕⢕⢕⢕⠕⠕⢕⢕⢕⢕⢕⢕⢕⢕⢕\n'+
            '⢐⢕⢕⢕⢕⢕⣕⢕⢕⠕⠁⢕⢕⢕⢕⢕⢕⢕⢕⠅⡄⢕⢕⢕⢕⢕⢕⢕⢕⢕\n'+
            '⢕⢕⢕⢕⢕⠅⢗⢕⠕⣠⠄⣗⢕⢕⠕⢕⢕⢕⠕⢠⣿⠐⢕⢕⢕⠑⢕⢕⠵⢕\n'+
            '⢕⢕⢕⢕⠁⢜⠕⢁⣴⣿⡇⢓⢕⢵⢐⢕⢕⠕⢁⣾⢿⣧⠑⢕⢕⠄⢑⢕⠅⢕\n'+
            '⢕⢕⠵⢁⠔⢁⣤⣤⣶⣶⣶⡐⣕⢽⠐⢕⠕⣡⣾⣶⣶⣶⣤⡁⢓⢕⠄⢑⢅⢑\n'+
            '⠍⣧⠄⣶⣾⣿⣿⣿⣿⣿⣿⣷⣔⢕⢄⢡⣾⣿⣿⣿⣿⣿⣿⣿⣦⡑⢕⢤⠱⢐\n'+
            '⢠⢕⠅⣾⣿⠋⢿⣿⣿⣿⠉⣿⣿⣷⣦⣶⣽⣿⣿⠈⣿⣿⣿⣿⠏⢹⣷⣷⡅⢐\n'+
            '⣔⢕⢥⢻⣿⡀⠈⠛⠛⠁⢠⣿⣿⣿⣿⣿⣿⣿⣿⡀⠈⠛⠛⠁⠄⣼⣿⣿⡇⢔\n'+
            '⢕⢕⢽⢸⢟⢟⢖⢖⢤⣶⡟⢻⣿⡿⠻⣿⣿⡟⢀⣿⣦⢤⢤⢔⢞⢿⢿⣿⠁⢕\n'+
            '⢕⢕⠅⣐⢕⢕⢕⢕⢕⣿⣿⡄⠛⢀⣦⠈⠛⢁⣼⣿⢗⢕⢕⢕⢕⢕⢕⡏⣘⢕\n'+
            '⢕⢕⠅⢓⣕⣕⣕⣕⣵⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣷⣕⢕⢕⢕⢕⡵⢀⢕⢕\n'+
            '⢑⢕⠃⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⢕⢕⢕\n'+
            '⣆⢕⠄⢱⣄⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢁⢕⢕⠕⢁\n'+
            '⣿⣦⡀⣿⣿⣷⣶⣬⣍⣛⣛⣛⡛⠿⠿⠿⠛⠛⢛⣛⣉⣭⣤⣂⢜⠕⢑⣡⣴⣿')
    }

    if (message.toLowerCase() === '!pokemon') {

            client.say(channel, '¿Quien es ese pokemon?\n' +
            '⣿⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⢻⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠙⠻⢿⡿⠿⣿⠿⠉⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⣿⣿⣿⣿⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⣿⣿⣿⣿⣿⣧⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⣿⣿⡿⠋⢰⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⡿⠋⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⡇⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠤⠤⢤⣶⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⣿⣿⣦⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⣿⣿\n' +
            '⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿'
            )
        
    }

    if(message.toLowerCase() === '!:0'){
        
            client.say(channel,'\n'+
            '⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿ \n'+
            '⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿'
        )
    
    }

    if(message.toLowerCase() ==='!bruh'){
        client.say(channel,'\n'+
            '⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹ \n'+
            '⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀ \n'+
            '⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀ \n'+
            '⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀ \n'+
            '⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀ \n'+
            '⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰ \n'
        )
    }



});

