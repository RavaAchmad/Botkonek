const moment = require("moment-timezone");
const fetch = require('node-fetch')
const axios = require('axios')
const crypto = require('crypto')
const fs = require('fs')
const { sizeFormatter } = require('human-readable')
const { fetchJson, sleep } = require("../functions.js")
const { merchant, secret, signature, digiuser, digiapi, OpenAikey, nomorKu } = require("../lib/apikey.js")
let handler = async (m, { conn, args, isGroup, text, usedPrefix: _p, isPrems, command, isROwner }) => {
    const apikeyhost = digiuser // APIKEY LU OTPWEB.COM
    const sender = m.sender.split('@')[0]
    const admin = `${Math.floor(Math.random() * 500)}`
    
    switch (command) {
            case "deposit" : {
                let q = text
if (!text) throw 'Lengkapi Command kamu !\n\n_Contoh: .deposit 2000_'
                let jumlah = `${text}+${admin}`
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
      var deponya = result
  //  m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
                
            if (fs.existsSync(`./database/datasaldo/${sender}.json`)) throw 'Selesaikan pembelian anda sebelumnya'
// let [method, nomor] = q.split(" ")
  let axios = require('axios')
  let ref = Math.floor(Math.random() * 100000000)
  let h2hkey = apikeyhost
  
  var config = {
      method: 'POST',
      url: 'https://atlantich2h.com/deposit/create',
      data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      reff_id: ref,
      nominal: deponya,
     type: 'ewallet',
     metode: 'qris'
    }))
  };
                
  
  /*axios('https://atlantich2h.com/deposit/create',{
    method: 'POST',
    data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      reff_id: ref,
      nominal: text,
     type: 'ewallet',
     metode: 'qris'
    }))})*/
  axios(config)
  .then(async res => {
        if (res.data.status == false) {
          m.reply(`*_${res.data.status}_*`)// Biar tau apa yang salah cuyyy
            }
      m.reply(`*「 DEPOSIT PENDING 」*\n\n_Mohon Tunggu Pesanan Anda Sedang Diproses_`)
                    let obj = { id: sender, ref: res.data.data.id, status: res.data.data.status }
fs.writeFileSync(`./database/datasaldo/${sender}.json`, JSON.stringify(obj))
              let abc = `*_── 「 DEPOSIT」 ──_*
           
 *_⚡Id: ${res.data.data.id}_*
  _⚡Nominal: ${res.data.data.nominal}_
  _⚡Di Buat: ${res.data.data.created_at}_
  _⚡Status: ${res.data.data.status}_
 
 *BATAS MINIMAL TRANSFER 1JAM DAN KETIKA LEWAT SISTEM AKAN OTOMATIS MEMBATALKAN TOPUP INI*

 *_${namabot}_*`
conn.sendMessage(m.chat, { image: { url: res.data.data.qr_image }, caption: abc })
let status = res.data.data.status;
      
      var topup = {
      method: 'POST',
      url: 'https://atlantich2h.com/deposit/status',
      data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      id: res.data.data.id
    }))
  };
      
      while (status !== 'processing') {
              await sleep(1000); 
              const response = await axios(topup);
              status = response.data.data.status;
              console.log(status)
          if (status == 'cancel') 
              {
               m.reply('Transaksi Dibatalkan')
                  fs.unlinkSync(`./database/datasaldo/${sender}.json`)
              break;
              }
          if (status == 'expired') 
              {
               m.reply('Transaksi Dibatalkan')
                  fs.unlinkSync(`./database/datasaldo/${sender}.json`)
              break;
              }
        if (status == 'processing') 
              {
                  
          db.data.users[m.sender].saldo += res.data.data.nominal * 1
      // addSaldo(sender, Number(res.data.data.nominal), db_saldo)
      let anjay = `*_── 「 DEPOSIT 」 ──_*
           
 *_⚡Nominal: ${res.data.data.nominal}_*
  _⚡Reff Id: ${res.data.data.reff_id}_
  _⚡Id: ${res.data.data.id}_
  _⚡ Status: SUKSES_
 
 
 *_@YassStore_*`
      conn.sendMessage(m.chat, {text: anjay })
      fs.unlinkSync(`./database/datasaldo/${sender}.json`)
                  
              break;
              }
            }
      
      })
}
        break
            case "confirm" : {
                let q = text
if (!text) throw'Lengkapi Command kamu !\n\n_Contoh: .statusatc 1009wjns_'
// let [method, nomor] = q.split(" ")
  let axios = require('axios')
  let ref = Math.floor(Math.random() * 100000000)
  let h2hkey = apikeyhost
  axios('https://atlantich2h.com/deposit/status',{
    method: 'POST',
    data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      id: text
    }))}).then((res) => {
        
        if (res.data.status == false) {
          m.reply(`*_${res.data.status}_*`)// Biar tau apa yang salah cuyyy
            }
        if (res.data.status == true) {
                if (res.data.data.status == 'pending') {
m.reply('kamu belum melakukan pembayaran')
    } else if (res.data.data.status == 'processing') {
        let nomi = res.data.data.nominal
       db.data.users[m.sender].saldo += nomi * 1
      let anjay = `*_── 「 STATUS DEPOSIT」 ──_*
           
 *_⚡Id: ${res.data.data.id}_*
  _⚡Nominal: ${res.data.data.nominal}_
  _⚡Di Buat: ${res.data.data.created_at}_
  _⚡Status: ${res.data.data.status}_
 
 
 *_@YassStore_*`
         conn.sendMessage(m.chat, {text:anjay})
        fs.unlinkSync(`./database/datasaldo/${sender}.json`)
    }
        }
      })
}
        break
            case 'canceldepo':{
                if (!text) throw 'kirim .canceldepo id transaksi tadi\ncontoh: .canceldepo X1ha86HA'
                if(!fs.existsSync(`./database/datasaldo/${sender}.json`)) return m.reply('Kamu tidak melakukan pembelian')
                  let axios = require('axios')
  let ref = Math.floor(Math.random() * 100000000)
  let h2hkey = apikeyhost
  
  var config = {
      method: 'POST',
      url: 'https://atlantich2h.com/deposit/cancel',
      data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
      id: text
    }))
  };
                axios(config)
// if (!isGroup) throw 'Fitur Tidak Dapat Digunakan Untuk Group!'
fs.unlinkSync(`./database/datasaldo/${sender}.json`)
        m.reply('Sukses Cancel Depsoit ✅')
            }
        break
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
                       /* case "nokos-tele":{
      //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
                user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
var res = await fetchJson(`${domainotp}/api?api_key=${apikeyotp}&action=get_number&country_id=36&service_id=wa&operator=random&order_type=istimewa`)
if (res.success == false) return m.reply(res.data.messages)
await sleep(1000)
var ress = res.data
try {
m.reply(`${htki}*DETAIL ORDER*${htka}

》 id: ${ress.order_id}
》 nokos: ${ress.number}
》 status : ${ress.status}
》 region : Kanada

• info selengkapnya
silahkan ketik .getorder`)
} catch (e) {
    m.reply(`${res.messages}`)
    }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break*/
            case "nokos-wa-indo", "nokosindo":{
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
            case "order":{
     //      if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
         //       user.otplast = new Date * 1
if (!isROwner) return m.reply('Hadeh lu siape? Owner gw?')
let q = text
if (!q) return m.reply(`id layanannya?`)
var res = await fetchJson(`	https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=${q}&operator=any`)
var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=1`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
let ress = res.data
m.reply(`${htki}*DETAIL ORDER*${htka}

》 id: ${ress.id}
》 service name: ${ress.service_name}
》 nokos: ${ress.number}
》 category : ${ress.category}

• info selengkapnya
silahkan ketik .getorder`)
                user.otpcancel = new Date * 1
                var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
       //     } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
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
            case "cancel", "c":{
//if (!isPrems) return reply('Fitur ini khusus owner bot')
          if (new Date - global.db.data.users[m.sender].otpcancel > + 120000) {
                let q = text
if (!q) return m.reply(`id yah mana?`)
 res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=2`)
//var resa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=2`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
let ress = res.data
global.db.data.users[who].saldo += nokosindo * 1
m.reply(`Saldo Di Refund Sebesar Rp${nokosindo}`)
m.reply(`${htki}*CANCEL BERHASIL*${htka}

》 id: ${q}
》 status : Success Cancel Number
`) 
                 } else m.reply(`Kamu baru saja *Mengambil Otp*..\nMohon tunggu ${waktuh} untuk bisa *cancel Otp* kembali..`)
}
}
}
handler.command = handler.help = [
"deposit",
"confirm",
"canceldepo",
"transfer"
]
handler.premium = false
handler.register = false
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}