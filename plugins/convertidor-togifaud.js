let handler=async(_0x1c711d,{conn:_0x42d1c2,usedPrefix:_0xc7cb55,command:_0xe25f9d})=>{if(!_0x1c711d['quoted'])throw'[❗]\x20tag\x20the\x20audio\x20you\x20want\x20to\x20convert\x20into\x20𝙶𝙸𝙵';const _0x46e395=_0x1c711d['quoted']||_0x1c711d;let _0x3cf723=(_0x46e395['msg']||_0x46e395)['mimetype']||'';if(!/(mp4)/['test'](_0x3cf723))throw'[❗]\x20type\x20of\x20file\x20\x20'+_0x3cf723+'\x20is\x20not\x20correct\x20try\x20to\x20tag\x20a\x20voice\x20note\x20or\x20video\x20that\x20you\x20want\x20to\x20convert\x20into\x20𝙶𝙸𝙵';_0x1c711d['reply'](global['wait']);let _0xe40740=await _0x46e395['download']();_0x42d1c2['sendMessage'](_0x1c711d['chat'],{'video':_0xe40740,'gifPlayback':!![],'caption':'here\x20you\x20have\x20your\x20audio\x20converted\x20here\x20you\x20have\x20your\x20audio\x20converted\x20into\x20𝙶𝙸𝙵'},{'quoted':_0x1c711d});};handler['command']=['togifaud'],handler['register']=!![],handler['premium']=!![];export default handler;