let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.igdl https://www.capcut.com/template-detail/7254579764793511170?template_id=7254579764793511170&share_token=50c68e86-b857-40d7-9056-6c5db8b37c4c&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1*`
m.reply(wait)
  let res = await fetch(`https://aemt.me/download/capcut?url=${text}`)
  let json = await res.json()
  let v = json.result
  let cap = `_Nih Kak Videonya >,<_`
  conn.sendMessage(m.chat, { video: { url: v.video_ori }, caption: wm }, m)
}
handler.help = ['CapCut']
handler.tags = ['downloader']
handler.command = /^(capcut|ccdl|capcutdl)$/i

module.exports = handler