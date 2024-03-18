let fetch = require('node-fetch')

let timeout = 180000
let poin = `${Math.floor(Math.random() * 5000)}`
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (id in conn.tebaktebakan) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaktebakan[id][0])
        throw false
    }
   let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `${htki} *TEBAK TEBAKAN* ${htka}
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teba untuk bantuan
ketik .nyerah-teba untuk menyreh
Bonus: ${poin} Money
Saldo: 5 Saldo
`.trim()
    conn.tebaktebakan[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaktebakan[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaktebakan[id][0])
            delete conn.tebaktebakan[id]
        }, timeout)
    ]
}
handler.help = ['tebaktebakan']
handler.tags = ['game']
handler.command = /^tebaktebakan/i
handler.limit = true
handler.group = true

module.exports = handler