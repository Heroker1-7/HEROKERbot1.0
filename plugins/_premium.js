let handler=_0x2e8cf0=>_0x2e8cf0;export async function all(_0x3d09b2){for(const _0xe093ec of Object['values'](global['db']['data']['users'])){if(_0xe093ec['premiumTime']!=0x0&&_0xe093ec['premium']){if(new Date()*0x1>=_0xe093ec['premiumTime']){_0xe093ec['premiumTime']=0x0,_0xe093ec['premium']=![];let _0x49af90=Object['keys'](global['db']['data']['users'])['find'](_0x3ca379=>global['db']['data']['users'][_0x3ca379]===_0xe093ec),_0x15d022=_0x49af90['split']`@`[0x0],_0xeb3388='[❗]\x20@'+_0x15d022+'\x20your\x20time\x20as\x20a\x20premium\x20user\x20is\x20over\x20';await this['sendMessage'](_0x49af90,{'text':_0xeb3388,'mentions':[_0x49af90]},{'quoted':''});}}}}