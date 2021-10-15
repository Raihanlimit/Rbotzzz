let { Presence } = require('@adiwajshing/baileys')
exports.run = {
	usage: ['limit'],
	async: async (m, { conn, _func, isPrefix }) => {
		let user = global.db.users[m.sender]
		let owner = global.db.setting.owner
		conn.updatePresence(m.chat, Presence.composing)
		if (owner.includes(m.sender.split`@`[0])) return m.reply(`*Your limit is Unlimited.*`)
		if (user.limit == 0) return conn.sendButtonLoc(m.chat, await _func.buffer(global.db.setting.cover), `*Sorry @${m.sender.split`@`[0]}, you don't have a limit, please exchange it with your points first.*`, global.footer, 'EXCHANGE', `${isPrefix}exchange 1`, m)
		m.reply(`*Your have ${user.limit} limits.*`)
	},
	error: false
}