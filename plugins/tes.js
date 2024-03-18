// let handler = async (m) => {
//   const randomReply = getRandomResponse();
//   const fakeContact = {
//     "key": {
//       "fromMe": false,
//       "remoteJid": m.sender,
//       "id": "fake-contact-" + new Date().getTime(),
//     },
//     "message": {
// 		"contactMessage": {
// 			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
// 		}
//     },
//   };
//   m.reply(randomReply, null, {
//     quoted: fakeContact,
//   });
// };

// const responses = [
//   'Cari apa puh',
//   'Halo puh',
//   'Sungkem puh',
//   'Kiw Kiw Kiw', 
//   'Ah sepuh bisa aja',
//   'Ajarin dong puh',
//   'Sok asik lu!!!', 
//   'User gratisan Diam Sat', 
//   'Emang lu yang nyewa?',
//   'Ada yang bisa dibantu puh?',
//   'Makek elite Donasi sulit', 
//   'Silahkan ketik .menu puh',
//   'Tingki wingki dipsi lala asep puh sepuh',
//   'Aku adalah temanmu puh',
//   'Selamat datang puh, semoga harimu menyenangkan',
//   'Hidup adalah anugerah, nikmatilah setiap detiknya',
//   'Semoga harimu dipenuhi dengan keceriaan',
// ];

// const getRandomResponse = () => {
//   const randomIndex = Math.floor(Math.random() * responses.length);
//   return responses[randomIndex];
// };

// handler.help = ['tes'];
// handler.tags = ['info'];
// handler.customPrefix = /^(tes|bot)$/i;
// handler.command = new RegExp;

// module.exports = handler;
//var fetch = require('node-fetch') 
//const { sticker } = require('../lib/sticker')

//const { sticker } = require('../lib/sticker')
let { sticker } = require ('../lib/sticker.js')

let handler = async (m, { conn, text, usedPrefix, command }) => {
/*let stiker = await sticker(null, `https://telegra.ph/file/482d144966e095d6d36cf.jpg`, global.spackname, global.sauthor)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)*/
    conn.sendFile(m.chat, pickRandom(koneko), '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
    //throw stiker.toString()
//conn.reply(m.chat, 'Oi Bang ada Yang manggil nama lu nih @6281212035575', m)
    
}
/*m.reply(`ON
`.trim())*/ // Tambah sendiri kalo mau
handler.help = ['tes']
handler.tags = ['info']
handler.customPrefix = /^(tes|bot|koneko)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const koneko = [
    
    "./mp3/clara.mp3",
    "./mp3/clara1.mp3",
    "./mp3/clara3.mp3",
    "./mp3/clara2.mp3",
    "./mp3/clara4.mp3"
    
]

