const fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${command}`
m.reply(`Proses`)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://aemt.me/toanime?url=${url}`)).json()
let as = hasil.url
await conn.sendFile(m.chat, as.img_crop_single, '', `${global.wm}`, m)
}

handler.help = ['jadianime']
handler.tags = ['fun']
handler.command = /^(jadianime)$/i

module.exports = handler