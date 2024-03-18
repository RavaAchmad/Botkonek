const fsPromises = require('fs').promises;
const fetch = require("node-fetch");
const canvafy = require("canvafy");

let conn = {}; // Temporary variable for demonstration, replace with your actual conn object

conn.kuisy = conn.kuisy || {};
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;

let handler = async (m, { conn, text, usedPrefix }) => {
    // BY ICHANZX CODER
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
    let user = global.db.data.users[m.sender];
    if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`;
    if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama.umur*`;
    let [_, name, splitter, age] = text.match(Reg);
    if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)';
    if (!age) throw 'Umur tidak boleh kosong (Angka)';
    age = parseInt(age);
    if (age > 60) throw 'Umur terlalu tua 😂';
    if (age < 6) throw 'Bayi bisa ngetik sesuai format bjir ._.';
    let __waktuh = (new Date() - global.db.data.users[m.sender].reglast);
    let _waktuh = (30000 - __waktuh);
    let waktuh = clockString(_waktuh);
    if (new Date() - global.db.data.users[m.sender].reglast > 30000) {
        user.reglast = new Date() * 1;
        user.name = name.trim();
        user.age = age;
        let limitnye = global.db.data.users[m.sender].limit += 20;

        let id = m.chat;
        let bybu = `${Math.floor(Math.random() * 99999)}`;
        let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
        if (id in conn.kuisy) return conn.reply(m.chat, 'Anda Masih Dalam Verifikasi!', conn.kuisy[id][0]);

        const { image, otp } = await createOtpCanvas(pp, bybu);
		let tutor = `cara login yaitu\n- Reply pesan yang bergambar\n- Ketik angka yang terdapat pada pesan tersebut\n\nNOTED : Jikalau tidak berfungsi maka tunggu 1 menit/laporkan ke owner agar bisa di atasi secepat mungkin`;
        let caption = `「 Verif 」\n🚩 *Lakukan Verifikasi OTP terlebih dahulu!* Reply Pesan Agar Bot Memverifikasi Data Anda!`;
        m.reply(tutor);
        conn.kuisy[id] = [
            await conn.sendFile(m.chat, image, 'anu.jpg', caption, m, false),
            bybu, name, age, 4,
            setTimeout(() => {
                if (conn.kuisy[id]) conn.reply(m.chat, `🚩 *Waktu Mendaftar Habis Silahkan .reg Kembali*`);
                delete conn.kuisy[id];
            }, 180000)
        ];
    } else m.reply(`Kamu sudah *daftar*..\nMohon tunggu ${waktuh} untuk bisa *daftar* kembali..`);
};

handler.help = ['kuisy'];
handler.tags = ['game'];
handler.command = /^(reg|daftar|register|verify)$/i;
handler.group = false;
handler.private = false;
handler.limit = true;
handler.fail = null;

module.exports = handler;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

async function createOtpCanvas(avatar, bybu) {
    const captchaBuffer = await new canvafy.Captcha()
        .setBackground("image", "https://telegra.ph/file/2418e7a2c8f4ad25c04d5.jpg")
        .setCaptchaKey(bybu.toString())
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.7)
        .build();
    const securityBuffer = await new canvafy.Security()
        .setAvatar(avatar)
        .setBackground("image", "https://telegra.ph/file/2418e7a2c8f4ad25c04d5.jpg")
        .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
        .setBorder("#f0f0f0")
        .setLocale("id") // country short code - default "en"
        .setAvatarBorder("#f0f0f0")
        .setOverlayOpacity(0.9)
        .build();
    return {
        image: captchaBuffer,
        otp: bybu,
        verified: securityBuffer
    };
}