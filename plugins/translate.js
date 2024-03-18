const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'
const fetch = require('node-fetch')

let handler = async (m, { args, text, usedPrefix, command }) => {
    let [bahasa, pesan] = text.split `|`
    if (!bahasa) return conn.reply(m.chat, 'Silahkan masukan bahasa yang akan di translate!\n\nContoh .transalate en|saya butuh script\ncontoh: .transalate id|i need script', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan Teks Translatenya!', m)
    if (text > 2000) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    let apinya = await fetch(`https://api-miftah.xyz/api/tools/translate?api_key=IchanZX&language=${bahasa}&text=${pesan}`)
    let res = await apinya.json()
  m.reply(res.data.translated_text)
}
handler.help = ['translate'].map(v => v + ' <lang> <teks>')
handler.tags = ['internet']
handler.command = /^(tr(anslate)?)$/i
handler.limit = true
handler.fail = null
handler.exp = 0
module.exports = handler