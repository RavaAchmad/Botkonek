let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `Contoh penggunaan:\n${usedPrefix + command} aku siapa? @6283861760785 kamu ownerku ><`, m, { contextInfo: { mentionedJid: ['6283861760785@s.whatsapp.net'] } })
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, `Contoh penggunaan:\n${usedPrefix + command} aku siapa? @6283861760785 kamu ownerku ><`, m, { contextInfo: { mentionedJid: ['6283861760785@s.whatsapp.net'] } })
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.reply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim())
    }
  })
}
handler.command = /^(fpc)$/
handler.null = null
module.exports = handler


function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
