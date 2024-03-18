let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	  if (!text) throw `Contoh: ${usedPrefix + command} indo`
let res = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${apichan}&query=cowok%20ganteng%20${text}`)
let wes = await res.json()
                let was = wes.result
let cita = wes.result[Math.floor(Math.random() * was.length)]
    conn.sendFile(m.chat, cita, null, "*COWOK GANTENG*\n\npencarian dari: cogan " + text, m)
	//  scrap.pinterest(text)
    //  .then(a => a[Math.floor(Math.random() * a.length)])
   //    .then(b => conn.sendFile(m.chat,b,b,"*PINTEREST*\n\npencarian dari: " + text, m)
  //  )
}
    
handler.help = ['cogan <text>']
handler.tags = ['internet']
handler.command = /^(cogan)$/i
handler.limit = true

module.exports = handler