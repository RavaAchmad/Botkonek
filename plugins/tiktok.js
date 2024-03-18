const fetch = require("node-fetch");

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan URL!\n\nContoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`;
  //if (!args[0].match(/tiktok/gi)) throw `URL Tidak Ditemukan!`;
    //var delay = time => new Promise(res => setTimeout(res, time))
    const fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

 const arr = [
    { text: "🕚", timeout: 1500 },
    { text: "🕛", timeout: 1500 },
    { text: "✅", timeout: 1500 },
    { text: wait, timeout: 1500 },
  ];
conn.sendPresenceUpdate("recording", m.chat)
  const lll = await conn.sendMessage(m.chat, { text: '🕙' }, { quoted: fkontak });

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, {quoted: fkontak});
  }
		const url = args[0];
		const apis = await fetch(`https://skizo.tech/api/tiktok?url=${url}&apikey=ravaja`);
    var json = await apis.json()
    /*var { 
caption, 
video, 
photo,
audio,
duration,
data
} = json.data*/
    var {
			data,
			code,
			msg
		} = await json
    try{
		

if (data?.images?.length) {
			for (var x = 0; x < data.images.length; x++) {
				var capt = x == 0 ? data.title : ''
				await conn.sendMessage(m.chat, {
					image: {
						url: data.images[x]
					},
					caption: capt
				}, {
					quoted: m
				})
			}
		} else {
			var vid = data.hdplay
			var desc = `${formatK(data.digg_count)} Likes, ${formatK(data.comment_count)} Comments. TikTok video from ${data.author.nickname} (@${data.author.id}): "${data.title}". ${data.music_info.title}.`
			//await conn.sendFile(m.chat, vid, '', desc, m)
            await conn.sendMessage(m.chat, { video: { url: vid }, caption: `${data.title}` }, { quoted: m })
                var pesan = conn.relayMessage(m.chat, {
              extendedTextMessage:{
                text: desc, 
                contextInfo: {
                     externalAdReply: {
                        title: "Powered by Rava",
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: false,
                        thumbnailUrl: 'https://i.ibb.co/WHxqstf/scaramouche-wanderer-icon.jpg',
                        sourceUrl: 'https://instagram.com/ravaja_'
                    }
                }, mentions: [m.sender]
}}, {})
           //await conn.sendFile(m.chat, data.music, 'error.mp3', null, m, true)
     await conn.sendMessage(m.chat, { audio: { url: data.music }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: 'Done ya kak ><',
    body: "Made by rava",
    thumbnailUrl: 'https://i.ibb.co/W5Skvsw/IMG-20230824-WA0174.jpg',
    sourceUrl: '',
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: false
    }}} , { quoted: m })
        }
    }catch(e){
        m.reply('Server error')
        let owner = `6281212035575@s.whatsapp.net`
        conn.sendMessage(owner, e) 
    }
};
handler.help = ['tiktok']
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|dlttwm)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;

function formatK(num) {
	return new Intl.NumberFormat('en-US', {
		notation: 'compact',
		maximumFractionDigits: 1
	}).format(num)
}