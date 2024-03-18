var handler = async (m, {
	text,
	conn
}) => {
	if (!text) throw 'Mohon berikan URL Instagram reel yang valid'
	var url = text.replace(/\s+/g, '+')
    const isNumber = x => typeof x === 'number' && !isNaN(x)
    const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))
	try {
		//var response = await fetch(API('xzn', 'api/igdl', {
		//	url: url
		//}, 'apikey'))
        var response = await fetch(`https://api.lolhuman.xyz/api/instagram2?apikey=ravaja&url=${url}`)
		var wtfs = await response.json()
        var wtf = await wtfs.result
		for (var i = 0; i < wtf.media.length; i++) {
			var caption = i == 0 ? wtf.caption : ''
			//var type = wtf.media[i].includes('.jpg') ? 'image' : 'video'
			/*await conn.sendMessage(m.chat, {
				[type]: {
					url: wtf.media[i]
				},
				caption
			}, {
				quoted: m
			})*/
			//var bf = await (await fetch(wtf.media[i])).arrayBuffer();
            var bf = await wtf.media[i]
			conn.sendFile(m.chat, bf, '', caption, m)
			await delay(1500)
		}
	} catch (e) {
		console.error(e)
		throw e.toString()
	}
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true

module.exports = handler