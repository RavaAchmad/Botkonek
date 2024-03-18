//const isToxic = /(anj[kg]|ajn[gk]|a?njin[gk]|bajingan|b[a]?[n]?gsa?t|ko?nto?l|me?me?[kq]|pe?pe?[kq]|meki|titi[t,d]|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|[kng]e?nto?[t,d]|jembut|bego|dajjal|janc[uo]k|pantek|puki?(mak)?|kimak|kampang|lonte|col[i,mek]|pelacur|henceut|nigga|fuck|dick|bitch|tits|bastard|asshole|a[su,w])/i;
const isToxic = /(anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|asu|ktlajg|ngentot)/i;
let handler = m => m;
handler.before = async function(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    if (chat.antiToxic && isAntiToxic) {
    let vsn = "./mp3/toxic.mp3"
	conn.sendFile(m.chat, vsn, "toxic.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
if (isBotAdmin && bot.restrict) {
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }}, m)
        }
    }
    return !0
}
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

//const vn = ["./mp3/toxic.mp3", "./mp3/toxic1.mp3"]