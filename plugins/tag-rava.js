let { sticker } = require ('../lib/sticker.js')

let handler = async (m, { conn, text, usedPrefix, command }) => {
//let stiker = await sticker(null, `https://telegra.ph/file/482d144966e095d6d36cf.jpg`, global.packname, global.author)
    /*if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()*/
    let rab = 6281212035575
conn.reply(m.chat, `apa manggil rava? @6281212035575`, m)
    conn.reply(rab + '@s.whatsapp.net', `nih ada yang manggil. \n '${m.text}'`, m) 
       
    
}

handler.customPrefix = /^rava|rafa|rav$/i;
handler.command = new RegExp();

module.exports = handler