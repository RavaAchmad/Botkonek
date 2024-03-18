let levelling = require('../lib/levelling')

let handler = m => {
    var img = './media/levelup.jpg'
  let user = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let capt = `┌───⊷ LEVEL
▢ Nama : *${user.name}*
▢ Level : *${user.level}*
▢ XP : *(${user.exp - min}/${xp})*
▢ Role : *${user.role}*
└──────────────

Kurang *${max - user.exp}* Untuk Naik Level!`
conn.sendFile(m.chat, img, null, capt, m);
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.register = true
handler.command = /^level(|up)$/i

module.exports = handler
