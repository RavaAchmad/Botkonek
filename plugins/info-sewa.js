let handler = async m => m.reply(`Sewa Bot 25k / Bulan Minat?
Chat : https://wa.me/${nomorowner}
`.trim()) // Tambah sendiri kalo mau
handler.help = ['panel']
handler.tags = ['info']
handler.command = /^sewa$/i

module.exports = handler