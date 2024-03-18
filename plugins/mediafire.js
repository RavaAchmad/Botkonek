
var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.mediafire.com/file/yrc43keyw0bw8c7/By_ichan.zip/file`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${Apisichan}/api/downloader/mediafire?api_key=${apichan}&file_url=${args}`)
  let json = await res.json()
  let v = json.data
    
     	let cap = `${htki}  *M E D I A F I R E* ${htka}
  
▢ *☃️Titel* : ${v.title}
▢ *☃️ Size* : ${v.size}
${dmenuf}
`
        m.reply(cap)
    conn.sendMessage(m.chat, { document: { url: v.url}, mimetype: 'document', fileName: `${v.title}`}, {quoted: m})
    }

handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(me?d(ia)?f(ire)?)$/i
handler.limit = 5
handler.group = false
module.exports = handler
