let ffmpeg = require('fluent-ffmpeg')

let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let name = await conn.getName(who);
  conn.hdr = conn.hdr ? conn.hdr : {};
  if (m.sender in conn.hdr) {
    return
  }
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";
  if (!mime) throw `Video tidak ditemukan`;
  let videoData = await conn.downloadAndSaveMediaMessage(q, 'video');
  let output = './tmp/video.mp4';
  ffmpeg(videoData)
    .outputOptions('-s', '1920x1080')
    .save(output)
    .on('end', () => {
      conn.hdr[m.sender] = true
      conn.sendFile(m.chat, output, '', wm, m)
    })
    .on('error', (err) => {
      console.error(err)
      m.reply('Terjadi kesalahan saat meningkatkan resolusi video. ' + err)
    })
};

handler.command = handler.help = ["hdvid"]
handler.tags = ["tools"]
handler.limit = true

module.exports = handler
