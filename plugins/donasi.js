let handler = async (m, { conn, args, command }) => {
    let qris = 'https://telegra.ph/file/1b6de18af3d0c125d2233.jpg'
let chann = `Gw kagak butuh kecil besar udah Rp500
Berharga Bagi Gw Syukur Nikmat Untuk Diberi Atas Apa Adnya

++++++++++++++
Ovo : 6281232615640
A/n : Alif Taran Ihsan
--------  -------  ------
Qris All Payment
A/n : ConvertPulsa.ig
--------  -------  ------
`
await conn.sendFile(m.chat, qris, 'qris.jpg', `${chann}`, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler