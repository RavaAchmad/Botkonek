let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let img = `https://api.lolhuman.xyz/api/textprome2/space?apikey=IchanZX&text1=Role%20Kamu&text2=${user.role}`
    let capt = `┌───⊷ *R O L E - K A M U*
▢ Nama : *${user.name}*
▢ Role : *${user.role}*
└──────────────

*Tingkatkan Lagi Untuk Lebih Banyak Akses!*`
conn.sendFile(m.chat, img, null, capt, m);
}

handler.help = ['role']
handler.tags = ['role']
handler.register = true
handler.command = /^role|rank$/i

module.exports = handler
