/*let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe && m.isGroup) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let hapus = m.key.participant
  let bang = m.key.id
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.badword && chat.isBanned && isBadword) {
        user.warning += 1
        let thumb = 'https://telegra.ph/file/24adfea4e99aff04ecdb0.jpg'
        let dann = `*Badword terdeteksi!*
Warning: ${user.warning} / 5
Jika warning mencapai 5 kamu akan dibanned

ketik *#disable antibadword* untuk menonaktifkan badword
ketik *#astagfirullah* atau *#maaf* untuk mengurangi warning

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`

conn.sendMessage(m.chat, {text: dann})
        return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                    conn.groupParticipantsUpdate(m.chat, user, "remove")
                }
            }
        }
    }
    return !0
}
module.exports = handler*/