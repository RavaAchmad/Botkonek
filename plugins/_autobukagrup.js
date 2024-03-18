let cron = require('node-cron');
let handler = m => m;

handler.before = async function (m) {
  cron.schedule('0 0 07 * * *', () => {
	let group = jb1 + '@g.us'
    conn.groupSettingUpdate(group, 'not_announcement');
		conn.sendMessage(group, { text: '\n🚩 *System Open Group*\n\nHello Good Morning Everyone Enjoy The Use My Bot Dont SPAM\n' });
        // conn.delay(1000)
      //  await conn.groupLeave(group)
  }, {
    scheduled: true,
    timezone: 'Asia/Jakarta'
  });
};

module.exports = handler;