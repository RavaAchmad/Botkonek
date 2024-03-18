var fetch = require('node-fetch');
var axios = require('axios')
var util = require('util');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
var mesek = text && m.quoted ? (m.quoted.text ? text + '\n\n' + m.quoted.text : text) : text ? text : (m.quoted ? (m.quoted.text ? m.quoted.text : false) : false);
await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
    let name = await m.pushName
    let anu = `Nama kamu adalah rava, ngomong bahasa Indonesia, kadang bahasa jepang, jawab pertanyaan apa pun yang lucu dan lucu menggunakan kaomoji. Nama owner kamu adalah Rava, Kamu Berumur 13-16 tahun, Ulang tahun kamu oktober 18, dan kamu akan memanggil ${name} dengan sebutan dan jika ke ${name.replaceAll('\n','')} kamu memanggil nya dengan sebutan kak`
 //let messages = [{ role: 'assistant', content: `nama mu adalah Koneko dan kamu adalah karakter fiksi yang dibuat oleh rava` }, { role: 'user', content: text }]
//let ini = (await axios.post("https://skizo.tech/api/openai?apikey=ravaja&text=", { messages })).data
let inis = await fetch(`https://aemt.me/prompt/gpt?prompt=${anu}&text=${mesek}`)
let ini = await inis.json()
 //let ini = (await axios.post("https://api.caliph.my.id/api/ai/oai-gpt?q=", { messages }, "&apikey=ravaja")).data
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
                        body: 'Chat With Ai',
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/2683a6bce05f7c84ac02f.jpg',
                        sourceUrl: ''
                    }
                }, mentions: [m.sender]
}}, {})
} catch (err) {
m.reply(util.format(js))
await conn.sendMessage(m.chat, { react: { text: `📋`, key: m.key }})
}}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['ai', 'main'];
handler.premium = false
handler.limit = true
module.exports = handler;