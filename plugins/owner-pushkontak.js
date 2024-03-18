let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    command
}) => {
if (!text && !m.quoted) return m.reply("Pesannya Sayang?")
    let get = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    let count = get.length;
    let sentCount = 0;
    let loadd = [
 'ʟ',
 'ʟᴏ',
 'ʟᴏᴀ',
 'ʟᴏᴀᴅ',
 'ʟᴏᴀᴅɪ',
 'ʟᴏᴀᴅɪɴ',
 'ʟᴏᴀᴅɪɴɢ',
 'ʟᴏᴀᴅɪɴɢ\nᴄ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘʟ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘʟᴇ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘʟᴇᴛ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘʟᴇᴛᴇ',
 'sᴜᴄᴄᴇssғᴜʟʟ'  //ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ
 ]

let { key } = await conn.sendMessage(m.chat, {text: 'ᴀᴡᴀɪᴛ ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
    for (let i = 0; i < get.length; i++) {
        setTimeout(function() {
            if (text) {
                conn.sendMessage(get[i], {
                    text: text
                });
            } else if (m.quoted) {
                conn.copyNForward(get[i], m.getQuotedObj(), false);
            } else if (text && m.quoted) {
                conn.sendMessage(get[i], {
                    text: text + "\n" + m.quoted.text
                });
            }
            count--;
            sentCount++;
            if (count === 0) {
                m.reply(`Berhasil Push Kontak:\nJumlah Pesan Terkirim: *${sentCount}*`);
            }
        }, i * 1000); // delay setiap pengiriman selama 1 detik
    }
}
handler.command = handler.help = ["pushkontak"]
handler.tags = ["owner"]
handler.owner = true
handler.group = true

module.exports = handler