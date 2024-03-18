var fetch = require('node-fetch');
var axios = require('axios')
var util = require('util');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
const teks = text && m.quoted ? (m.quoted.text ? text + '\n\n' + m.quoted.text : text) : text ? text : (m.quoted ? (m.quoted.text ? m.quoted.text : false) : false);
await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
//let { key } = await conn.sendMessage(m.chat, {text: 'Mohon Tunggu Sebentar...'})
// let messages = [{ role: 'system', content: `nama mu adalah Jokowi` }, { role: 'user', content: text }]
//let ini = (await axios.post(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=Vestia%20Zeta`)).data
    let inis = await fetch(`https://aemt.me/ai/c-ai?prompt=Vestia%20Zeta&text=${teks}`)
    let ini = await inis.json()
try {
await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
let hasil = `
${ini.result}`
const truei = conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: hasil, 
                contextInfo: {
                     externalAdReply: {
                        title: 'OPEN AI CHAT',
                        body: 'Chat With Zeta-chan',
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://i.ibb.co/z7K8N1y/Vestia-Zeta.jpg',
                        sourceUrl: ''
                    }
                }, mentions: [m.sender]
}}, {})
} catch (err) {
m.reply(util.format(js))
await conn.sendMessage(m.chat, { react: { text: `📋`, key: truei.key }})
}}
handler.command = handler.help = ['aizeta','zeta'];
handler.tags = ['ai'];
handler.premium = false
module.exports = handler;