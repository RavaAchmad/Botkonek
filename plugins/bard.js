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
    try {
    var apii = await fetch(`https://aemt.me/bard?text=${q}`)
     var js = await apii.json()
    await m.reply(js.result)
    } catch(e) {
        m.reply(`Maff, Server sedang mengalami gangguan/error`)
        conn.reply('6281212035575' + '@s.whatsapp.net', e)
    }
  }
}
handler.help = ['bard', 'bardimg']
handler.command = /^(bard|bardimg)$/i
handler.tags = ['main', 'ai'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;
