let handler = async (m, { conn, args, usedPrefix, command }) => {
    let group = jb1 + '@g.us'
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
`.trim()
    await conn.groupSettingUpdate(group, isClose)
}
handler.help = ['botgc <open/close>']
handler.tags = ['owner']
handler.command = /^(botgc)$/i
handler.owner = true
handler.private = true

module.exports = handler