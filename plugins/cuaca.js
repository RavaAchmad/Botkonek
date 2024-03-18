var fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	var res = await fetch(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=ichanzx`)
    var data = res.json()
    let emror = data.result
    //if (emror.tempat === "") throw m.reply('lokasi tidak ada!')
    var {
        tempat,
        latitude,
        longitude,
        cuaca,
        angin,
        description,
        kelembapan,
        suhu,
        udara,
        permukaan_laut
    } = await data.result
    var capt = `~Lokasi = ${tempat}\n~Latitude = ${latitude}\n~Longitude = ${longitude}\n~Cuaca = ${cuaca}\n~Angin = ${angin}\n~Deskripsi = ${description}\n~Kelembapan = ${kelembapan}\n~Suhu = ${suhu}\n~udara = ${udara}\nPermukaan laut = ${permukaan_laut}` 
    await conn.sendMessage(m.chat, capt, m)
}
handler.help = ['cuaca']
handler.command = /^(cuaca)$/i
handler.tags = ['internet'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;