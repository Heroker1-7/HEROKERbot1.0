let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('│‼️│ESTE CHAT FUE PROHIBIDO CON ÉXITO🗝')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.register = true
handler.rowner = true
export default handler
