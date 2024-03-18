let fetch = require('node-fetch')
const uploadImage = require('../lib/uploadImage') 
const { addExif } = require('../lib/sticker.js')
const { Sticker } = require('wa-sticker-formatter')
let handler = async (m, { conn, text, args }) => {
  let id = `${Math.floor(Math.random() * 5)}`
let res = await fetch(`https://skizo.tech/api/randommeme?apikey=ravaja`)
let wes = await res.json()
                let was = wes.media
				conn.sendFile(m.chat, was, wes.caption, m)
//let cita = wes.result[Math.floor(Math.random() * was.length)]
   // conn.sendFile(m.chat, cita, null, "*COWOK GANTENG*\n\npencarian dari: cogan " + text, m)
    //let stiker = await createSticker(null, cita, packname, author)
  //onn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.help = ['memee']
handler.tags = ['meme']
handler.command = /^(meme)$/i
handler.limit = true
handler.premium = false

module.exports = handler

// async function createSticker(img, url, packName, authorName, quality) {
// 	let stickerMetadata = {
// 		type: 'full',
// 		pack: global.packname,
// 		author: global.author,
// 		quality
// 	}
// 	return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
// }