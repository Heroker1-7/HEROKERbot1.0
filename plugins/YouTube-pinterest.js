import{pinterest}from'@bochilteam/scraper';let handler=async(_0x51063b,{conn:_0x16c018,text:_0x22917c,usedPrefix:_0x5e2d25,command:_0x235e66})=>{if(!_0x22917c)throw'*[❗𝐈𝐍𝐅𝐎❗]EXAMPLE\x20USE\x20THE\x20COMMAND\x20\x20'+(_0x5e2d25+_0x235e66)+'\x20Minecraft*';const _0x5bff4a=await pinterest(_0x22917c);_0x16c018['sendFile'](_0x51063b['chat'],_0x5bff4a['getRandom'](),'error.jpg',('\x0a*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂\x20𝙳𝙴\x20𝙻𝙰\x20𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰*\x0a'+_0x22917c+'\x0a\x0a\x0a*SEARCH\x20RESULT*\x0a'+_0x22917c)['trim'](),_0x51063b);};handler['help']=['pinterest\x20<keyword>'],handler['tags']=['internet'],handler['command']=/^(pinterest)$/i,handler['limit']=0x3,handler['premium']=!![];export default handler;