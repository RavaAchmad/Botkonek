let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .remini'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://skizo.tech/api/waifu2x?url=${url}&apikey=ravaja`)).buffer()
await conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['remini']
handler.tags = ['maker']
handler.command = /^(remini)$/i
handler.limit = true

module.exports = handler