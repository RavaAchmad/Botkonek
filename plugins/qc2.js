let { sticker5 } = require('../lib/sticker2.js')
let axios = require('axios')

let handler = async (m, { conn, args }) => {
  try {
    let text
    if (args.length >= 1) {
      text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
      text = m.quoted.text
    } else {
      throw new Error("*Example*: .qc how to make bots")
    }

    if (!text) return m.reply('enter text')
    if (text.length > 50) return m.reply('🐱 Max 50 Texts!')

    let randomColor = ['#FFFFFF'];
    const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];

    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png')
	var qus = text
    const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": apiColor,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": m.name,
          "photo": {
            "url": pp
          }
        },
        "text": text,
        "replyMessage": {}
      }]
    }

    const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const buffer = Buffer.from(json.data.result.image, 'base64')
    let stiker = await sticker5(buffer, false, global.packname, global.author)

    if (stiker) {
      return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
    } else {
      throw new Error("🐱 It looks like something went wrong")
    }
  } catch (error) {
    console.log(error)
   try { 
       const chanz = "https://telegra.ph/file/24fa902ead26340f3df2c.png"
    let images = `https://api.lolhuman.xyz/api/bubblechat?apikey=${apichan}&avatar=${chanz}&name=${m.name}&text=${qus}`
   let stiker = await createSticker(images, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
    } catch (error) {
    console.log(error)
    m.reply("server error")
  }
  }
}

handler.help = ['qc2']
handler.tags = ['tools']
handler.command = /^(qc2|quotely2|qc|quotely)$/i

module.exports = handler
