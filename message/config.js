const fs = require('fs')
const chalk = require('chalk')
const { times, runtime, sender, pushname, formatDate, tanggal } = require('../library/function')


// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' 

NameOwner = 'KenisawaDev'
NameBot = 'Bot Md'

// FOOTER/WM
Mfooter = 'Advertencia: si haces spam con comandos te banearan.\n\n© KenisawaDev'// footer menu

// Other
global.owner = ['5493865362492']
global.premium = ['5493865362492']
global.profilebio = ['5493865362492'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.packname = ' Bot Md'
global.footer = '© KenisawaDevolper'// footer biasa
global.author = 'KenisawaDevolper '
global.prefa = ['','/']
global.act = {
		wait: 'Espere un momento, procesando datos..',
		urlerr: 'Link Error',
		nurl: 'Introducir URL',
		ntext: 'Ingresa el texto',
		proc:'Cargando por favor espere..',
		error:'Error :(',
		success:'Listo !',
		repiar:'Esta función de mantenimiento!',
		botadm:'No soy admin :(',
		admin:'Solo para admins!',
		done:'Hecho!',
		gc:'Solo para grupos',
		owner:'Solo propietario permitido'
}


exports.allmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
				
╭──❲ *${NameBot}* ❳	
│	
│┌──❏ *INFO*
││
││⭔ *Nombre :* 
││_「 ${pushname} 」_
││⭔ *Numero :* 
││ _「 ${m.sender.split("@")[0]} 」_
││⭔ *Hora :* 
││ _「 ${times(new Date)} 」_
││⭔ *Fecha :* 
││ _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* 
││ _「 ${runtime(process.uptime())} 」_
││
│└───────❏
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│
│┌──❏ *MENU DESCARGAS*
││ 
││⫹⫺ ${prefix}tiktok _url_ 
││⫹⫺ ${prefix}tiktokaudio _url_ 
││⫹⫺ ${prefix}ytmp4 _url_ 
││⫹⫺ ${prefix}ytmp3 _url_ 
││
│╰─༽
│
│┌──❏ *MENU BUSQUEDA*
││
││⫹⫺ ${prefix}play [consulta] 
││⫹⫺ ${prefix}ytsearch [consulta] 
││⫹⫺ ${prefix}pinterest 
││				
│╰─༽
│
│┌──❏ *MENU GRUPO*
││
││⫹⫺ ${prefix}linkgc
││⫹⫺ ${prefix}add _num_
││⫹⫺ ${prefix}kick @tag
││⫹⫺ ${prefix}tagall _texto_
││⫹⫺ ${prefix}promote @tag
││⫹⫺ ${prefix}demote @tag
││⫹⫺ ${prefix}setname _texto_
││⫹⫺ ${prefix}setppgroup _foto_ 
││⫹⫺ ${prefix}setdesk _texto_
││⫹⫺ ${prefix}hidetag _texto_
││⫹⫺ ${prefix}totag _mensaje_ 
││
│╰─༽
│
│┌──❏ *MENU ANIME*
││⫹⫺ ${prefix}cosplay
││⫹⫺ ${prefix}waifu
││⫹⫺ ${prefix}waifu2
││⫹⫺ ${prefix}shota
││⫹⫺ ${prefix}loli
││⫹⫺ ${prefix}yotsuba
││⫹⫺ ${prefix}shinomiya
││⫹⫺ ${prefix}yumeko
││⫹⫺ ${prefix}tejina
││⫹⫺ ${prefix}chiho
││⫹⫺ ${prefix}shizuka
││⫹⫺ ${prefix}boruto
││⫹⫺ ${prefix}kagori
││⫹⫺ ${prefix}kaga
││⫹⫺ ${prefix}kotori
││⫹⫺ ${prefix}mikasa
││⫹⫺ ${prefix}akiyama
││⫹⫺ ${prefix}hinata
││⫹⫺ ${prefix}minato
││⫹⫺ ${prefix}naruto
││⫹⫺ ${prefix}nezuko
││⫹⫺ ${prefix}yuki
││⫹⫺ ${prefix}hestia
││⫹⫺ ${prefix}emilia
││⫹⫺ ${prefix}itachi
││⫹⫺ ${prefix}madara
││⫹⫺ ${prefix}sasuke
││⫹⫺ ${prefix}deidara
││⫹⫺ ${prefix}sakura
││⫹⫺ ${prefix}tsunade
│╰─༽
│
│┌──❏ *MENU TOOLS*
││
││⫹⫺ ${prefix}sticker/s 
││⫹⫺ ${prefix}stickergif 
││⫹⫺ ${prefix}swm [txt|txt] 
││⫹⫺ ${prefix}toimg _sticker_ 
││⫹⫺ ${prefix}style _texto_
││⫹⫺ ${prefix}smeme [txt|txt] 
││⫹⫺ ${prefix}ebinary _texto_
││⫹⫺ ${prefix}dbinary [code] 
││⫹⫺ ${prefix}tomp4 [sticker] 
││⫹⫺ ${prefix}toaud [video] 
││⫹⫺ ${prefix}tomp3 [video] 
││⫹⫺ ${prefix}tovn [audio/video] 
││⫹⫺ ${prefix}togif [sticker] 
││⫹⫺ ${prefix}tourl [foto/video] 
││
│╰─༽
│
│┌──❏ *SIN CATEGORÍA*
││ 
││⫹⫺ ${prefix}requestfitur _texto_
││⫹⫺ ${prefix}listonline 
││⫹⫺ ${prefix}listgc 
││⫹⫺ ${prefix}listpc 
││
│╰─༽
│
│┌──❏ *MENU DUEÑO*
││
││⫹⫺ ${prefix}block @tag
││⫹⫺ ${prefix}unblock @tag
││⫹⫺ ${prefix}setppbot _foto_
││⫹⫺ ${prefix}join _link grupo_
││⫹⫺ ${prefix}leave 
││⫹⫺ ${prefix}anticall 
││⫹⫺ ${prefix}addprem @tag _num_
││⫹⫺ ${prefix}delprem @tag
││⫹⫺ ${prefix}setbotbio
││⫹⫺ ${prefix}setnamabot
││⫹⫺ > 
││⫹⫺ => 
││⫹⫺ $ 
││
│╰─༽
╰────────────────⊱
`
}


global.thumb = fs.readFileSync('./media/me.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})