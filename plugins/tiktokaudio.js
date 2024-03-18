const fetch = require('node-fetch')
const axios = require('axios')
let handler = async (m, { conn, args }) => {
let spas = "                "
  if (!args[0]) throw 'Uhm...url nya mana?'
  try {
      m.reply(wait)
      let ich = await ( await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${apichan}&url=${args[0]}`)).json()
      let q = ich.result
 let chat = global.db.data.chats[m.chat]
    let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${apichan}&url=${args[0]}`
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
await conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${apichan}&url=${args[0]}`, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *TIKTOK AUDIO*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* ${q.title}
│• *Type:* MP3
┆• *📥 Ukuran File:* 
└❏

▶︎ ━━━━━━━•──────── 
Now Playing...
`.trim(), m, null, {
   document: { url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${apichan}&url=${args[0]}`}, mimetype: 'audio/mpeg', fileName: `${q.title}`, conntextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).buffer(),
         mediaUrl: syt,
        }
     }
  });
await conn.sendMessage(m.chat, {
                audio: {
                    url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${apichan}&url=${args[0]}`
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: q.title,
                        body: '▶︎ Now Playing...',
                        thumbnailUrl: 'https://telegra.ph/file/9e323ad1f4b2d52579416.jpg',
                        sourceUrl: syt,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: m
            });
  } catch (e) {
      conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key, }})
        var res = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apichan}&url=${text}`)
  			var user = await res.json()
  			var v = user.result
			var sce = v.link
            // var sce = `https://aemt.me/youtube?url=${text}&filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg`
            //var cvr = await audioyt(url)
          //  var sce = cvr.url
            
            var tmb = v.thumbnail
            var captionvid = `∘ Title: ${v.title}\n∘ Bot By: ${wm}\n∘ Url:  ${text}\n\n *Proses Sedang Mengirim Audio....*`
            var pesan = await conn.sendMessage(m.chat, {
                text: captionvid,
                contextInfo: {
                    externalAdReply: {
                        title: "",
                        body: "Powered by",
                        thumbnailUrl: tmb,
                        sourceUrl: text,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
            conn.sendMessage(m.chat, {
                audio: {
                    url: sce
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: v.title,
                        body: "",
                        thumbnailUrl: tmb,
                        sourceUrl: text,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: pesan
            })
        
        conn.sendMessage(m.chat, { document: { url: sce}, mimetype: 'document', fileName: `${v.title}.mp3`}, {quoted: m})
       conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key, }})
  }
}
handler.tags = ['downloader']
handler.command = /^(tiktokaudio|ttaudio|ttmp3)$/i

handler.limit = true

module.exports = handler