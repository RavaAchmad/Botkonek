let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let response = args.join(' ').split('|')
  if (!args) throw `✳️ Contoh :\n${usedPrefix + command} Tidak Ada Hasil Yang Instant Kecuali Ia Ingin Berproses`
    let teks = args.join` `
    let thumb = 'https://telegra.ph/file/244bba9145c3aba2c0281.jpg'
    let res = await fetch(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=IchanZX`)
    let json = await res.json()
    let v = json.result
    let images = `https://api.lolhuman.xyz/api/quotemaker2?apikey=IchanZX&text=${teks}&author=${namabot}`
    let admin = `${Math.floor(Math.random() * 110)}`
  //  await conn.sendFile(m.chat, thumb, 'galau.jpg', `${pickRandom(global.galau)}`, m)
    global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    let audio = `https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/sound${admin}.mp3`
   // conn.sendFile(m.chat, './mp3/galau.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
     let cap = `${htki} QUOTES ANIME ${htka}
${v.quote}

▢ *Karakter:* ${v.character}
▢ *Anime:* ${v.anime}
▢ *Episode:* ${v.episode}
${dmenuf}`
await conn.sendMessage(m.chat, { image: { url: images }, caption: wm })
    return conn.sendFile(m.chat, audio, '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}
handler.help = ['anime']
handler.tags = ['quotes']
handler.command = /^(buatquotes)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}