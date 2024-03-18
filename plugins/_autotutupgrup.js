let cron = require('node-cron');
let handler = m => m;

handler.before = async function (m) {
  cron.schedule('0 0 21 * * *', () => {
	let group = jb1 + '@g.us'
    conn.groupSettingUpdate(group, 'announcement');
		conn.sendMessage(group, { text: '\n🚩 *System Close Group*\n\nSleeping Group This Group Open Again A Clock 07.00 WIB\n' });
      //   conn.delay(900)
      //  await conn.groupLeave(group)
  }, {
    scheduled: true,
    timezone: 'Asia/Jakarta'
  });
};

module.exports = handler;