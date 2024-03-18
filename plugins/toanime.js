let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${usedPrefix}${command}`
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://skizo.tech/api/toanime?url=${url}&apikey=ravaja`)).buffer()
await conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['jadianime']
handler.tags = ['maker']
handler.command = /^(toanime|jadianime)$/i
handler.limit = true

module.exports = handler