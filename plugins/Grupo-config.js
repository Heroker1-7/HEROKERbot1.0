let handler=async(_0x2a6be6,{conn:_0x3afe56,args:_0x45edff,usedPrefix:_0x4745eb,command:_0x3eeba6})=>{let _0x4a9892={'open':'not_announcement','close':'announcement','abierto':'not_announcement','cerrado':'announcement','abrir':'not_announcement','cerrar':'announcement','libera a las bestias':'not_announcement','encierra a las bestias':'announcement'}[_0x45edff[0x0]||''];if(_0x4a9892===undefined)throw('\x0a*[❗]FORMATO ERRÓNEO!!*\x0a*✨EJEMPLO✨*\x0a'+(_0x4745eb+_0x3eeba6)+' *open*\x0a'+(_0x4745eb+_0x3eeba6)+' *close*')['trim']();await _0x3afe56['groupSettingUpdate'](_0x2a6be6['chat'],_0x4a9892);{_0x2a6be6['reply']('[ ✔ ] GRUPO CONFIGURADO CORRECTAMENTE');}};handler['help']=['group open / close','grupo abrir / cerrar','bestias liberar / bestias encerrar'],handler['tags']=['group'],handler['command']=/^(group|grupo|bestias)$/i,handler['admin']=!![],handler['botAdmin']=!![],handler['register']=!![];export default handler;