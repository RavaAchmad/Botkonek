let fs = require("fs");
let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
 // const poto = await fs.readFileSync('./media/bank.jpg')
 const photo = `https://img.freepik.com/free-vector/money-delivery-bank_53876-28371.jpg`
  const caption = `
▧「 *B A N K  U S E R* 」
👤𝗡𝗮𝗺𝗲: ${user.registered ? user.name : conn.getName(m.sender)}
💳𝗔𝘁𝗺: ${user.atm > 0 ? 'Level ' + user.atm : 'Tidak Punya'}
🏦𝗕𝗮𝗻𝗸: Rp.${user.bank}
💰𝗠𝗼𝗻𝗲𝘆: Rp.${user.money}

⚕️𝗦𝘁𝗮𝘁𝘂𝘀: ${user.premiumDate > 0 ? 'Premium' : 'Free'}
👾𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿𝗲𝗱: ${user.registered ? 'Ya':'Tidak'}
`.trim()
  conn.sendMessage(m.chat, { image: { url: photo }, caption: caption }, {quoted: m })
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i
handler.group = true
handler.register = true
module.exports = handler
