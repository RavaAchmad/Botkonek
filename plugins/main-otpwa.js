const moment = require("moment-timezone");
const fetch = require('node-fetch')
const axios = require('axios')
const crypto = require('crypto')
const { sizeFormatter } = require('human-readable')
const { fetchJson, sleep } = require("../functions.js")
const fs = require('fs')

let handler = async (m, { conn, args, text, usedPrefix: _p, isPrems, command, isROwner }) => {
    const domainotp = "https://otpku.com"
    const apikeyotp = apiotp // APIKEY LU OTPWEB.COM
    const sender = m.sender.split('@')[0]
    
    var who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    var userz = global.db.data.users[m.sender]

    const user = global.db.data.users[m.sender]
    const __waktuh = (new Date - global.db.data.users[m.sender].otpcancel)
const _waktuh = (+ 120000 - __waktuh)
   const waktuh = clockString(_waktuh)
    
    switch (command) {
            case "saldoku": {
if (!isROwner) return m.reply('Hadeh lu siape? Owner gw?')
	let u = m.sender.split('@')[0] + "@s.whatsapp.net"
    let hai = await axios.get("https://test-json.ichangaming.repl.co/");
//var res = await fetchJson(`${domainotp}/api?api_key=${apikeyotp}&action=balance`)
//if (res.success == false) return m.reply(res.data.messages)
//await sleep(1000)
//let ress = res.data
    await m.reply(`*GET PROFILE*
- Saldo: Rp${hai}`)
            }
            break
            /*case "nokos":
            case "nokoswa":
            case "nokos-wa":{
            m.reply('Nokos sebenarnya adalah singkatan dari nomor kosong, yakni sebuah nomor HP yang bisa kamu gunakan untuk membuat akun Telegram.\n\n----Informasi Lebih Lanjut--------\nKetik .harga-nokos\nKetik .nokos-wa-indo\n')
    }
            break*/
            case 'harga-nokos':
            case 'hargaotp':{
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
                                let q = text
if (!q) return m.reply(`${htki} *Negara Tersedia* ${htka}
- USA
- indo
- malay
- Ru
--------- -------- ----------
• info selengkapnya
silahkan ketik .harga-nokos indo
--------- -------- ----------
• Untuk Order
.nokos-wa-indo
.nokos-wa-malay
.nokos-wa-usa
`)
let kode = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=services&country=${q}`)
if (kode.status == false) return m.reply(kode.data.msg)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.order id_layanan\n\n*Contoh:* .order 14\n\n*List Layanan Kode Otp*\n\n'
let GG = 0
for (let x of kode.data){
teks +=`- ID layanan: ${x.id}\n- Name: ${x.name}\n- Harga: Rp${x.price}\n- Stock: ${x.tersedia} / tersedia\n\n`
}
m.reply(teks)
}
            break
        case "nokos-wa-indo":
            case "nokosindo":{
     //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
       //     user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
if (userz.saldo < nokosindo) {
  m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
  } else if(userz.saldo > nokosindo) {
var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=716&operator=any`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
var ress = res.data
try {
m.reply(`${htki}*DETAIL ORDER*${htka}

》 id: ${ress.id}
》 service name: ${ress.service_name}
》 nokos: ${ress.number}
》 region : Indonesia

• info selengkapnya
silahkan ketik .getorder`)
    var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
    global.db.data.users[who].saldo -= nokosindo
    user.otpcancel = new Date * 1
} catch (e) {
    m.reply(`${res.data.msg}`)
    }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
  }
}
            break
            case "nokos-wa-usa", "nokosusa":{
      //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
       //     user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
if (userz.saldo < nokosusa) {
  m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
  } else if(userz.saldo > nokosusa) {
var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=140&operator=any`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
var ress = res.data
try {
m.reply(`${htki}*DETAIL ORDER*${htka}

》 id: ${ress.id}
》 service name: ${ress.service_name}
》 nokos: ${ress.number}
》 region : USA

• info selengkapnya
silahkan ketik .getorder`)
    var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
global.db.data.users[who].saldo -= nokosusa
    user.otpcancel = new Date * 1
} catch (e) {
    m.reply(`${res.data.msg}`)
    }
  }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
            case "nokos-wa-malay", "nokosmalay":{
      //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
       //     user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
if (userz.saldo < nokosmalay) {
  m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
  } else if(userz.saldo > nokosmalay) {
    var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=313&operator=any`)
    var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
    if (res.status == false) return m.reply(res.data.msg)
    await sleep(1000)
    var ress = res.data
    try {
    m.reply(`${htki}*DETAIL ORDER*${htka}
    
    》 id: ${ress.id}
    》 service name: ${ress.service_name}
    》 nokos: ${ress.number}
    》 region : Malaysia
    
    • info selengkapnya
    silahkan ketik .getorder`)
global.db.data.users[who].saldo -= nokosmalay
    user.otpcancel = new Date * 1
        m.reply(`Anda menggunakan saldo sebesar Rp{nokosmalay}`)
} catch (e) {
    if (res.messages == false) return m.reply('Sedang dalam proses restock, mohon tunggu sebentar.')
    m.reply(`${res.messages}`)
    }
  }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
            
            case "nokoswa":{
                let q = 716
                let balance = db.data.users[m.sender].saldo
                var cekhar = await fetchJson('https://otpku.com/api/json.php?api_key=' + apikeyotp + '&action=services&country=')
                let x = false
  Object.keys(cekhar.data).forEach((i) => {
    if (cekhar.data[i].id == q){x = i}
  })
  const pricee = cekhar.data[x].price
  let jumlah = `${pricee}+1500`
                let val = jumlah
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
      var harga = result
  //  m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  
  
  if (balance < harga) {
 m.reply(`Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu\n*HARGA NOKOSWA: Rp${harga}*`)
 } else if(balance > harga) { 
    var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=716&operator=any`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
var ress = res.data
try {
m.reply(`${htki}*DETAIL ORDER*${htka}

》 id: ${ress.id}
》 service name: ${ress.service_name}
》 nokos: ${ress.number}
》 region : Indonesia
》 Harga : ${harga}

• info selengkapnya
silahkan ketik .getorder`)
                db.data.users[m.sender].saldo -= harga * 1
                    let path = `./database/${sender}.json`
                await fs.writeFileSync(path, JSON.stringify(harga))
                user.otpcancel = new Date * 1
                var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
       //     } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
} catch (e) {
    m.reply(`${res.data.msg}`)
            } } }
            break
            case "buynokos":{
                let q = text
if (!q) return m.reply(`id layanannya?`)
                let balance = db.data.users[m.sender].saldo
                var cekhar = await fetchJson('https://otpku.com/api/json.php?api_key=' + apikeyotp + '&action=services&country=')
                let x = false
  Object.keys(cekhar.data).forEach((i) => {
    if (cekhar.data[i].id == q){x = i}
  })
  const pricee = cekhar.data[x].price
  if (balance < pricee) {
 m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(balance > pricee) { 
     //      if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
         //       user.otplast = new Date * 1
//if (!isROwner) return m.reply('Hadeh lu siape? Owner gw?')
var res = await fetchJson(`	https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=${q}&operator=any`)
var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=1`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
let ress = res.data
m.reply(`${htki}*DETAIL ORDER*${htka}

》 id: ${ress.id}
》 service name: ${ress.service_name}
》 nokos: ${ress.number}
》 Harga : ${pricee}

• info selengkapnya
silahkan ketik .getorder`)
                db.data.users[m.sender].saldo -= pricee * 1
                    let path = `./database/${sender}.json`
                await fs.writeFileSync(path, JSON.stringify(pricee))
                user.otpcancel = new Date * 1
                var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
       //     } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            }
            break
            case "getstatus":
            case "getorder":{
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
let kode = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=active_order`)
if (kode.succes == false) return m.reply(kode.data.msg)
await sleep(1000)
let GG = 0
for (let x of kode.data){
teks =`${htki}STATUS ORDER${htka}

》 id: ${x.id}
》 number : ${x.number}
》 sms otp : ${x.otp}\n\n`
}
// let teks =`*MENGAMBIL OTP*\n\n- ID layanan: ${x.order_id}\n- Nomor: ${x.number}\n- OTP: ${x.sms}\n\n*!Jika Undefined berarti tidak ada otp masuk*`
let cap = teks + '\n\n## *Jika Kosong Tidak ada otp Masuk* ##'
m.reply(cap)
}
            break
        case "cancel":
            case "c":{
//if (!isPrems) return reply('Fitur ini khusus owner bot')
          if (new Date - global.db.data.users[m.sender].otpcancel > + 120000) {
             const dat = require(`../database/${sender}.json`)
                let q = text
if (!q) return m.reply(`id yah mana?`)
              let cekser = await fetchJson('https://otpku.com/api/json.php?api_key=' + apikeyotp + '&action=services&country=')
 res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=2`)
//var resa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=2`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
let ress = res.data
//global.db.data.users[who].saldo += nokosindo * 1
m.reply(`${htki}*CANCEL BERHASIL*${htka}

》 id: ${q}
》 status : Success Cancel Number
`) 
              fs.unlinkSync(`./database/${sender}.json`)
              db.data.users[m.sender].saldo += dat * 1
              m.reply(`Saldo Di Refund Sebesar Rp${dat}`);
                 } else m.reply(`Kamu baru saja *Mengambil Otp*..\nMohon tunggu ${waktuh} untuk bisa *cancel Otp* kembali..`)
}
}
}
handler.command = handler.help = [
"saldoku",
"nokos-tele",
"nokos-wa-usa",
"nokos-wa-malay",
"harga-nokos",
"order",
"nokoswa",
"buynokos",
"nokos",
"nokos-wa",
"cancel",
"c",
"nokosindo",
"nokosusa",
"nokosmalay",
"getorder"
]
handler.tags = ['store']
handler.limit = false
handler.register = true
module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
async function fetchAccessList() {
  try {
    var { data } = await axios.get("https://test-json.ichangaming.repl.co/");
    accessList = data;
  } catch (error) {
    throw new Error(`Terjadi kesalahan: ${error.message}`);
  }
}