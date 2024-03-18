const fetch = require('node-fetch');
const uploader = require('../lib/uploadImage');

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || '' 
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
    let buffer = await q.download()
    await m.reply(wait)    
    try {
      let media = await uploader(buffer)
      let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()  
      conn.sendMessage(m.chat, { text: json.result }, { quoted: m })
    } catch (err) {
      throw `${eror}`
    }
  } else {
    let json = await (await fetch(`https://aemt.me/bard?text=${text}`)).json() 
    conn.sendMessage(m.chat, { text: json.result }, { quoted: m })
  }
}

handler.help = ['bardimg']
handler.tags = ['tools']
handler.command = /^(bardimg|bardimage|bard)$/i
handler.limit = true;

module.exports = handler