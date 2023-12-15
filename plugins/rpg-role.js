const roles = {
'ɴᴏᴠᴀᴛᴏ⚒️ ᴄʟᴀsᴇ (ғ)': 0,
'ɴᴏᴠᴀᴛᴏ⚒️ ᴄʟᴀsᴇ (ᴇ)': 1,
'ɴᴏᴠᴀᴛᴏ⚒️ ᴄʟᴀsᴇ (ᴅ)': 2,
'ɴᴏᴠᴀᴛᴏ⚒️ ᴄʟᴀsᴇ (ᴄ)': 3,
'ɴᴏᴠᴀᴛᴏ⚒️ ᴄʟᴀsᴇ (ᴀ)': 4,
'ᴘʀɪɴᴄɪᴘɪᴀɴᴛᴇ👨‍🦱 ᴄʟᴀsᴇ (ғ)': 5,
'ᴘʀɪɴᴄɪᴘɪᴀɴᴛᴇ👨‍🦱 ᴄʟᴀsᴇ (ᴇ)': 6,
'ᴘʀɪɴᴄɪᴘɪᴀɴᴛᴇ👨‍🦱 ᴄʟᴀsᴇ (ᴅ)': 7,
'ᴘʀɪɴᴄɪᴘɪᴀɴᴛᴇ👨‍🦱 ᴄʟᴀsᴇ (ᴄ)': 8,
'ᴘʀɪɴᴄɪᴘɪᴀɴᴛᴇ👨‍🦱 ᴄʟᴀsᴇ (ᴀ)': 9,
'ᴀᴘʀᴇɴᴅɪs ᴇsᴘᴀᴅᴀ🗡️ ᴄʟᴀsᴇ (ғ)': 10,
'ᴀᴘʀᴇɴᴅɪs ᴇsᴘᴀᴅᴀ🗡️ ᴄʟᴀsᴇ (ᴇ)': 11,
'ᴀᴘʀᴇɴᴅɪs ᴇsᴘᴀᴅᴀ🗡️ ᴄʟᴀsᴇ (ᴅ)': 12,
'ᴀᴘʀᴇɴᴅɪs ᴇsᴘᴀᴅᴀ🗡️ ᴄʟᴀsᴇ (ᴄ)': 13,
'ᴀᴘʀᴇɴᴅɪs ᴇsᴘᴀᴅᴀ🗡️ ᴄʟᴀsᴇ (ᴀ)': 14,
'ᴅᴏᴍᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🦓 ᴄʟᴀsᴇ (ғ)': 15,
'ᴅᴏᴍᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🐘 ᴇʟɪᴛᴇ ᴄʟᴀsᴇ (ᴇ)': 16,
'ᴅᴏᴍᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🐎 ᴀᴠᴀɴᴢᴀᴅᴏ ᴄʟᴀsᴇ (ᴅ)': 17,
'ᴅᴏᴍᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🦊 sᴜᴘᴇʀɪᴏʀ ᴄʟᴀsᴇ (ᴄ)': 18,
'ᴅᴏᴍᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🦕 ᴘʀᴏᴅɪɢɪᴏ ᴄʟᴀsᴇ (ᴀ)': 19,
'ᴄᴀᴢᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🐲 ᴄʟᴀsᴇ (ғ)': 20,
'️ᴄᴀᴢᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🐉 ᴇʟɪᴛᴇ ᴄʟᴀsᴇ (ᴇ)': 21,
'ᴄᴀᴢᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🦖️ ᴀᴠᴀɴᴢᴀᴅᴏ ᴄʟᴀsᴇ (ᴅ)': 22,
'ᴄᴀᴢᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🦕 sᴜᴘᴇʀɪᴏʀ ᴄʟᴀsᴇ (ᴄ)': 23,
'ᴄᴀᴢᴀᴅᴏʀ ᴅᴇ ʙᴇsᴛɪᴀs🐉 ᴘʀᴏᴅɪɢɪᴏ ᴄʟᴀsᴇ (ᴀ)️': 24,
'ᴇsᴘᴀᴅᴀᴄʜíɴ⚔️ ᴄʟᴀsᴇ ᴀʟᴛᴏ ʀᴀɴɢᴏ (ғ)': 25,
'ᴇsᴘᴀᴅᴀᴄʜíɴ🗡️ ᴄʟᴀsᴇ ᴇʟɪᴛᴇ (ᴇ)': 26,
'ᴇsᴘᴀᴅᴀᴄʜíɴ⚔️ ᴄʟᴀsᴇ ᴘʀᴏᴅɪɢɪᴏ (ᴅ)': 27,
'ᴇsᴘᴀᴅᴀᴄʜíɴ🗡️ ᴄʟᴀsᴇ ʟᴇɢᴇɴᴅᴀʀɪᴏ (ᴄ)': 28,
'ᴇsᴘᴀᴅᴀᴄʜíɴ🗡️ ᴄʟᴀsᴇ ᴘʀᴏᴅɪɢɪᴏ (ᴀ)': 29,
'ᴀᴘʀᴇɴᴅɪs ᴅᴇ ᴍᴀɢɪᴀ🧙 ᴄʟᴀsᴇ (ғ)': 30,
'ᴀᴘʀᴇɴᴅɪs ᴅᴇ ᴍᴀɢɪᴀ🧙 ᴄʟᴀsᴇ (ᴇ)': 31,
'ᴀᴘʀᴇɴᴅɪs ᴅᴇ ᴍᴀɢɪᴀ🧙 ᴄʟᴀsᴇ (ᴅ)': 32,
'ᴀᴘʀᴇɴᴅɪs ᴅᴇ ᴍᴀɢɪᴀ🧙 ᴄʟᴀsᴇ (ᴄ)': 33,
'ᴀᴘʀᴇɴᴅɪs ᴅᴇ ᴍᴀɢɪᴀ🧙 ᴄʟᴀsᴇ (ᴀ)': 34,
'sᴏʟᴅᴀᴅᴏ💂 ᴄʟᴀsᴇ (ғ)': 35,
'sᴏʟᴅᴀᴅᴏ ᴇʟɪᴛᴇ💂 ᴄʟᴀsᴇ (ᴇ)️': 36,
'sᴏʟᴅᴀᴅᴏ ᴄᴀᴘɪᴛᴀɴ👮 ᴄʟᴀsᴇ (ᴅ)️': 37,
'sᴏʟᴅᴀᴅᴏ ɢᴇɴᴇʀᴀʟ👮 ᴄʟᴀsᴇ (ᴄ)️': 38,
'sᴏʟᴅᴀᴅᴏ ᴄᴏᴍᴀɴᴅᴀɴᴛᴇ👩‍✈️ᴄʟᴀsᴇ (️ᴀ)': 39,
'ɢᴜᴇʀʀᴇʀᴏ👮 ᴄʟᴀsᴇ (ғ)': 40,
'ɢᴜᴇʀʀᴇʀᴏ ᴘʀᴏᴅɪɢɪᴏ🛡️ ᴄʟᴀsᴇ (ᴇ)': 41,
'ɢᴜᴇʀʀᴇʀᴏ ʟᴇɢᴇɴᴅᴀʀɪᴏ⚔️ ᴄʟᴀsᴇ (ᴅ)': 42,
'ɢᴜᴇʀʀᴇʀᴏ ᴄᴇʟᴇsᴛɪᴀʟ🗡️ ᴄʟᴀsᴇ (ᴄ)': 43,
'ɢᴜᴇʀʀᴇʀᴏ ᴅɪᴠɪɴᴏ👑 ᴄʟᴀsᴇ (️ᴀ)': 44,
'ᴍᴀᴇsᴛʀᴏ ᴅᴇ ᴍᴀɢɪᴀ ᴄʟᴀsᴇ (ғ)': 45,
'ᴍᴀᴇsᴛʀᴏ ᴅᴇ ᴍᴀɢɪᴀ🧙 ʙásɪᴄᴏ ᴄʟᴀsᴇ (ᴇ)': 46,
'ᴍᴀᴇsᴛʀᴏ ᴅᴇ ᴍᴀɢɪᴀ🧙 sᴜᴘᴇʀɪᴏʀ ᴄʟᴀsᴇ (ᴄ)': 47,
'ᴍᴀᴇsᴛʀᴏ ᴅᴇ ᴍᴀɢɪᴀ🧙 ᴀʟᴛᴏ ʀᴀɴɢᴏ ᴄʟᴀsᴇ (ᴅ)': 48,
'ᴍᴀᴇsᴛʀᴏ ᴅᴇ ᴍᴀɢɪᴀ🧙 ᴄᴇʟᴇsᴛɪᴀʟ ᴄʟᴀsᴇ (️ᴀ)': 49,
'ᴅᴇᴘʀᴇᴅᴀᴅᴏʀ☠️ ᴄʟᴀsᴇ (ғ)': 50,
'ᴅᴇᴘʀᴇᴅᴀᴅᴏʀ ᴀᴠᴀɴᴢᴀᴅᴏ😈 ᴄʟᴀsᴇ (ᴇ)': 51,
'ᴅᴇᴘʀᴇᴅᴀᴅᴏʀ éʟɪᴛᴇ👹 ᴄʟᴀsᴇ (ᴄ)': 52,
'ᴅᴇᴘʀᴇᴅᴀᴅᴏʀ sᴜᴘᴇʀɪᴏʀ👹 ᴄʟᴀsᴇ (ᴅ)': 53,
'ᴅᴇᴘʀᴇᴅᴀᴅᴏʀ ʟᴇɢᴇɴᴅᴀʀɪᴏ👺 ᴄʟᴀsᴇ (️ᴀ)': 54,
'ɪɴᴠᴏᴄᴀᴅᴏʀ😈 ᴄʟᴀsᴇ (ғ)️': 55,
'ɪɴᴠᴏᴄᴀᴅᴏʀ ᴅᴇ ᴇsᴘíʀɪᴛᴜs👾 ᴀᴠᴀɴᴢᴀᴅᴏ ᴄʟᴀsᴇ (ᴇ)': 56,
'ɪɴᴠᴏᴄᴀᴅᴏʀ ᴅᴇ Áɴɢᴇʟᴇs😇 éʟɪᴛᴇ ᴄʟᴀsᴇ (ᴄ)️': 57,
'ɪɴᴠᴏᴄᴀᴅᴏʀ ᴅᴇ ᴅᴇᴍᴏɴɪᴏs😈 sᴜᴘᴇʀɪᴏʀ ᴄʟᴀsᴇ (ᴅ)': 58,
'ɪɴᴠᴏᴄᴀᴅᴏʀ️ ᴅᴇ ᴊᴇғᴇs ᴅᴇᴍᴏɴɪᴏs👺 ʟᴇɢᴇɴᴅᴀʀɪᴏ ᴄʟᴀsᴇ (️ᴀ)': 59,
'️ʜéʀᴏᴇ🦸🏻‍♂️ ᴄʟᴀsᴇ (ғ)': 60,
'️ʜéʀᴏᴇ éʟɪᴛᴇ🧙‍♀️ ᴄʟᴀsᴇ (ᴇ)': 61,
'ʜéʀᴏᴇ️ sᴜᴘᴇʀɪᴏʀ🦸 ᴄʟᴀsᴇ (ᴄ)': 62,
'️ʜéʀᴏᴇ ʟᴇɢᴇɴᴅᴀʀɪᴏ🧙‍♀️ ᴄʟᴀsᴇ (ᴅ)': 63,
'️ʜéʀᴏᴇ ᴄᴇʟᴇsᴛɪᴀʟ🦸 ᴄʟᴀsᴇ (️ᴀ)': 64,
'ᴇᴍᴘᴇʀᴀᴅᴏʀ🤴 ᴄʟᴀsᴇ (ғ)': 65,
'ᴇᴍᴘᴇʀᴀᴅᴏʀ ᴀʟᴛᴏ ʀᴀɴɢᴏ🤴 ᴄʟᴀsᴇ (ᴇ)': 66,
'ᴇᴍᴘᴇʀᴀᴅᴏʀ sᴜᴘᴇʀɪᴏʀ🤴 ᴄʟᴀsᴇ (ᴄ)': 67,
'ᴇᴍᴘᴇʀᴀᴅᴏʀ ʟᴇɢᴇɴᴅᴀʀɪᴏ🤴 ᴄʟᴀsᴇ (ᴅ)': 68,
'ᴇᴍᴘᴇʀᴀᴅᴏʀ ᴄᴇʟᴇsᴛɪᴀʟ🤴 ᴄʟᴀsᴇ (️ᴀ)': 69,
'ʀᴇʏ ᴅᴇᴍᴏɴɪᴏ🦹 ᴄʟᴀsᴇ (ғ)': 70,
'ʀᴇʏ ᴅᴇᴍᴏɴɪᴏ ᴀʟᴛᴏ ʀᴀɴɢᴏ🦹 ᴄʟᴀsᴇ (ᴇ)': 75,
'ʀᴇʏ ᴅᴇᴍᴏɴɪᴏ sᴜᴘᴇʀɪᴏʀ🦹 ᴄʟᴀsᴇ (ᴄ)': 80,
'ʀᴇʏ ᴅᴇᴍᴏɴɪᴏ ʟᴇɢᴇɴᴅᴀʀɪᴏ🦹 ᴄʟᴀsᴇ (ᴅ)': 85,
'ʀᴇʏ ᴅᴇᴍᴏɴɪᴏ ᴄᴇʟᴇsᴛɪᴀʟ🦹 ᴄʟᴀsᴇ (️ᴀ)': 90,
'ᴅɪᴏs ʜᴇʀᴏᴋᴇʀ ʟᴇɢᴇɴᴅᴀʀɪᴏ🪄 ᴄʟᴀsᴇ (ғ)': 100,
'ᴅɪᴏs ʜᴇʀᴏᴋᴇʀ sᴜᴘʀᴇᴍᴏ🪄 ᴄʟᴀsᴇ (ᴇ)': 140,
'ᴅɪᴏs ʜᴇʀᴏᴋᴇʀ ᴄᴇʟᴇsᴛɪᴀʟ🪄 ᴄʟᴀsᴇ (ᴄ)': 180,
'ᴅɪᴏs ʜᴇʀᴏᴋᴇʀ ᴅɪᴠɪɴᴏ🪄 ᴄʟᴀsᴇ (ᴅ)': 250,
'ᴅɪᴏs ʜᴇʀᴏᴋᴇʀ ᴏᴍɴɪᴘᴏᴛᴇɴᴛᴇ🪄 ᴄʟᴀsᴇ (️ᴀ)': 300
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}