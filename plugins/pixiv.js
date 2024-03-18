var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Judul!\n\nContoh: ${usedPrefix + command} loli kawai`
  try {
  var ikyy = await fetch(`https://api.lolhuman.xyz/api/pixiv?apikey=IchanZX&query=${text}`)
  var res = await ikyy.json()
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6283137550315@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  await conn.reply(m.chat, wait, m)
  conn.sendFile(m.chat, res.result[0].image, res.result[0].title, "Hayo Nyari Apa Om" , m)
  } catch (e) {
      var ikyy = await fetch(`https://aemt.me/pixiv?query=${text}`)
  let id = `${Math.floor(Math.random() * 8)}`
  var res = await ikyy.json()
  var as = res.result[id]
  var asr = await as.urls
  
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6283137550315@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  await conn.reply(m.chat, wait, m)
  conn.sendFile(m.chat, asr.regular, null, "Hayo Nyari Apa Om" , m)
  }
}

handler.command = handler.help = ['pixiv']
handler.tags = ['internet']
handler.limit = true
handler.premium = true
module.exports = handler