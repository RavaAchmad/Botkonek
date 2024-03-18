let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, usedPrefix, command, text }) => {
let { limit, role, level, exp, premiumDate } = db.data.users[m.sender]
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id' 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
    
    // JANGAN ASAL COMOT MINIMAL BIKIN SENDIRI
    let id = jb1 + '@g.us'
    let groupMetadata = await conn.groupMetadata(id)
        if (!groupMetadata) throw 'groupMetadata is undefined'
        if (!'participants' in groupMetadata) throw 'participants is not defined'
        let me = groupMetadata.participants.find(user => user.id === m.sender)
    let idgc = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(id)
     //   m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(id))
    // JANGAN ASAL COMOT MINIMAL BIKIN SENDIRI
   
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
  let menyu = `
*${namabot}* ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ꜱɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ᴛɪɴᴅᴀᴋᴀɴ, ᴍᴇɴᴄᴀʀɪ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴘᴘ.
─────────────
ʜᴀʟᴏ *${name}* ᴀᴅᴀ ʏᴀɴɢ ʙɪꜱᴀ ꜱᴀʏᴀ ʙᴀɴᴛᴜ?
ᴋᴇᴛɪᴋ *.ᴏᴡɴᴇʀ* ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇᴡᴀ ʙᴏᴛ ᴀᴛᴀᴜ ᴋᴇᴘᴇʀʟᴜᴀɴ ʟᴀɪɴɴʏᴀ, ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ
─────────────

◈ ━━━━━ *INFO BOTZ* ━━━━━ ◈

⌬〡 Name : ${name}
⌬〡 Runtime : ${uptime}
⌬〡 Mode : Public
⌬〡 Date : ${week}, ${date}
⌬〡 Time : ${time}

${htjava}  *SUB - MENU*

◦ .Menumain
◦ .allmenu
◦ .Menuowner
◦ .Menugames
◦ .Menufun
◦ .Menusticker
◦ .Menumaker
◦ .Menuanime
◦ .Menugroup
◦ .Menudownload
◦ .Menuinternet
◦ .Menutools

⚡ to go to all commands type _*.menuall*_`
  let images = pickRandom(waifu)
  if (!me) throw conn.sendMessage(m.chat, {text: `📣 Haiii ${name}

Mau pake perintah bot? Yuk, join dulu di komunitas kami agar mendapatkan seputar informasi terbaru, setelah itu kamu bisa pake bot lagi.

*Join Dulu Disini :*
*${idgc}*
`, contextInfo: {
				externalAdReply: {
                    showAdAttribution: true,
                    title: 'Join sekarang ❗',
					body: '',
					mediaTpe: 1,
					thumbnailUrl: images,
					sourceUrl: idgc,
					renderLargerThumbnail: true		
				}
			}
			}, {quoted: m})
                conn.sendPresenceUpdate("recording", m.chat)
    conn.sendMessage(m.chat, {
text: menyu,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namabot,
body: namaowner,
thumbnailUrl: ppUrl,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.customPrefix = /^(.menu|menu|help|menunya)$/i
handler.command = new RegExp
handler.register = false;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Good morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}