let fetch = require('node-fetch')
let fs = require('fs')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    
    if (!text) throw `contoh .confirm id transaksi tadi`
    let pler = JSON.parse(fs.readFileSync('./lib/ichan/deposit.json').toString())
    let jangan = pler.includes(text)
    if (!jangan) throw `ID DEPOSIT INVALID`
    let qris = 'https://telegra.ph/file/e6bb2ee11bd8074eefe96.jpg' // ISI QRIS LU
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
  let thm = 'https://telegra.ph/file/5e52b6e8ab1ed136705ad.jpg'
  let admin = `${Math.floor(Math.random() * 500)}`
  let id = `${Math.floor(Math.random() * 99999)}`
  let tg = `${m.sender.split('@')[0]}@s.whatsapp.net`
  let kata = `${pickRandom('1291912', '12177819', '928192', '12919929', '12729890', '7625410', '272829', '7524136', '2712514', '121872756' )}`
  const prem = JSON.parse(fs.readFileSync("./lib/ichan/deposit.json"))
  let cpt = `*ADA TRANSAKSI MASUK*\n*DARI @${m.sender.split('@')[0]}*\n\nDENGAN ID DEPOSIT : ${text}\n*Tunggu sampai dia tf hihi*`
  let capt = `OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI *SYSTEM* MENGKONFIRMASI DEPOSIT TERSEBUT`
  //	global.db.data.users[m.sender].id -= `${text}`
  
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Mana Bukti Screenshot nya dek?'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
    let out = `${link}`
     let unp = prem.indexOf(args)
     prem.splice(unp, 1)
fs.writeFileSync("./lib/ichan/deposit.json", JSON.stringify(prem))
        m.reply(capt)
   await conn.sendFile('6281232615640@s.whatsapp.net', out, 'order.jpg', `${cpt}`, m)
   // return conn.sendFile('6281232615640@s.whatsapp.net', thm, 'order.jpg', `${cpt}`, m)
}
handler.help = ['confirm']
handler.tags = ['store']

handler.command = /^(confm)$/i
handler.premium = false
handler.register = false
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}