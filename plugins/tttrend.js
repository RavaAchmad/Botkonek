var handler = async (m, {
	text,
	conn,
	command
}) => {
	if (!text) throw 'Perihal Apah';
	var body = text.replace(/\s+/g, '+')
	try {
		var xzn
		switch (command) {
			case 'tttren':
				xzn = await fetch(API('xzn', 'api/tttrending', {
					region: body
				}, 'apikey'))
				break;
			case 'asupantt':
				xzn = await fetch(API('xzn', 'api/ttsearch', {
					search: body
				}, 'apikey'))
				break;
		}
		var wtf = await xzn.json()
		conn.sendFile(m.chat, wtf.play, '', wtf.title, m)
	} catch (e) {
		throw e.toString();
	};
};
handler.help = handler.command = ['tttren', 'asupantt'];
handler.tags = ['tiktok', 'downloader'];

handler.limit = true

module.exports = handler;
/*var [t1, t2] = body.split`|`
	if (!/[0-9]/.test(t2)) throw ('only number')*/