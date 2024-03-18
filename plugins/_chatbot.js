const fetch = require('node-fetch')
let handler = m => m

handler.before = async function(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    
      if (!chat.simi)
        return !0
        let res = await fetch(`https://aemt.me/simi?text=${encodeURIComponent(m.text)}`)
        if (!res.ok) throw 'maaf simi lagi sibuk'
        let json = await res.json()
        if (json.result == "Request failed!") await m.reply("gapaham cok :'v")
 //      await m.reply(`${json.success}`)
   await m.reply(`${json.result}`)
    
}

module.exports = handler