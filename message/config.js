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
Mfooter = 'Advertencia: si haces spam con comandos te banearan.\n\nยฉ KenisawaDev'// footer menu

// Other
global.owner = ['5493865362492']
global.premium = ['5493865362492']
global.profilebio = ['5493865362492'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.packname = ' Bot Md'
global.footer = 'ยฉ KenisawaDevolper'// footer biasa
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
		repiar:'Esta funciรณn de mantenimiento!',
		botadm:'No soy admin :(',
		admin:'Solo para admins!',
		done:'Hecho!',
		gc:'Solo para grupos',
		owner:'Solo propietario permitido'
}


exports.allmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} ๐
				
โญโโโฒ *${NameBot}* โณ	
โ	
โโโโโ *INFO*
โโ
โโโญ *Nombre :* 
โโ_ใ ${pushname} ใ_
โโโญ *Numero :* 
โโ _ใ ${m.sender.split("@")[0]} ใ_
โโโญ *Hora :* 
โโ _ใ ${times(new Date)} ใ_
โโโญ *Fecha :* 
โโ _ใ ${tanggal(new Date)} ใ_
โโโญ *Runtime :* 
โโ _ใ ${runtime(process.uptime())} ใ_
โโ
โโโโโโโโโโ
โ
โโซบ ${prefix}ping 
โโซบ ${prefix}menu
โโซบ ${prefix}script
โ
โ
โโโโโ *MENU DESCARGAS*
โโ 
โโโซนโซบ ${prefix}tiktok _url_ 
โโโซนโซบ ${prefix}tiktokaudio _url_ 
โโโซนโซบ ${prefix}ytmp4 _url_ 
โโโซนโซบ ${prefix}ytmp3 _url_ 
โโ
โโฐโเผฝ
โ
โโโโโ *MENU BUSQUEDA*
โโ
โโโซนโซบ ${prefix}play [consulta] 
โโโซนโซบ ${prefix}ytsearch [consulta] 
โโโซนโซบ ${prefix}pinterest 
โโ				
โโฐโเผฝ
โ
โโโโโ *MENU GRUPO*
โโ
โโโซนโซบ ${prefix}linkgc
โโโซนโซบ ${prefix}add _num_
โโโซนโซบ ${prefix}kick @tag
โโโซนโซบ ${prefix}tagall _texto_
โโโซนโซบ ${prefix}promote @tag
โโโซนโซบ ${prefix}demote @tag
โโโซนโซบ ${prefix}setname _texto_
โโโซนโซบ ${prefix}setppgroup _foto_ 
โโโซนโซบ ${prefix}setdesk _texto_
โโโซนโซบ ${prefix}hidetag _texto_
โโโซนโซบ ${prefix}totag _mensaje_ 
โโ
โโฐโเผฝ
โ
โโโโโ *MENU ANIME*
โโโซนโซบ ${prefix}cosplay
โโโซนโซบ ${prefix}waifu
โโโซนโซบ ${prefix}waifu2
โโโซนโซบ ${prefix}shota
โโโซนโซบ ${prefix}loli
โโโซนโซบ ${prefix}yotsuba
โโโซนโซบ ${prefix}shinomiya
โโโซนโซบ ${prefix}yumeko
โโโซนโซบ ${prefix}tejina
โโโซนโซบ ${prefix}chiho
โโโซนโซบ ${prefix}shizuka
โโโซนโซบ ${prefix}boruto
โโโซนโซบ ${prefix}kagori
โโโซนโซบ ${prefix}kaga
โโโซนโซบ ${prefix}kotori
โโโซนโซบ ${prefix}mikasa
โโโซนโซบ ${prefix}akiyama
โโโซนโซบ ${prefix}hinata
โโโซนโซบ ${prefix}minato
โโโซนโซบ ${prefix}naruto
โโโซนโซบ ${prefix}nezuko
โโโซนโซบ ${prefix}yuki
โโโซนโซบ ${prefix}hestia
โโโซนโซบ ${prefix}emilia
โโโซนโซบ ${prefix}itachi
โโโซนโซบ ${prefix}madara
โโโซนโซบ ${prefix}sasuke
โโโซนโซบ ${prefix}deidara
โโโซนโซบ ${prefix}sakura
โโโซนโซบ ${prefix}tsunade
โโฐโเผฝ
โ
โโโโโ *MENU TOOLS*
โโ
โโโซนโซบ ${prefix}sticker/s 
โโโซนโซบ ${prefix}stickergif 
โโโซนโซบ ${prefix}swm [txt|txt] 
โโโซนโซบ ${prefix}toimg _sticker_ 
โโโซนโซบ ${prefix}style _texto_
โโโซนโซบ ${prefix}smeme [txt|txt] 
โโโซนโซบ ${prefix}ebinary _texto_
โโโซนโซบ ${prefix}dbinary [code] 
โโโซนโซบ ${prefix}tomp4 [sticker] 
โโโซนโซบ ${prefix}toaud [video] 
โโโซนโซบ ${prefix}tomp3 [video] 
โโโซนโซบ ${prefix}tovn [audio/video] 
โโโซนโซบ ${prefix}togif [sticker] 
โโโซนโซบ ${prefix}tourl [foto/video] 
โโ
โโฐโเผฝ
โ
โโโโโ *SIN CATEGORรA*
โโ 
โโโซนโซบ ${prefix}requestfitur _texto_
โโโซนโซบ ${prefix}listonline 
โโโซนโซบ ${prefix}listgc 
โโโซนโซบ ${prefix}listpc 
โโ
โโฐโเผฝ
โ
โโโโโ *MENU DUEรO*
โโ
โโโซนโซบ ${prefix}block @tag
โโโซนโซบ ${prefix}unblock @tag
โโโซนโซบ ${prefix}setppbot _foto_
โโโซนโซบ ${prefix}join _link grupo_
โโโซนโซบ ${prefix}leave 
โโโซนโซบ ${prefix}anticall 
โโโซนโซบ ${prefix}addprem @tag _num_
โโโซนโซบ ${prefix}delprem @tag
โโโซนโซบ ${prefix}setbotbio
โโโซนโซบ ${prefix}setnamabot
โโโซนโซบ > 
โโโซนโซบ => 
โโโซนโซบ $ 
โโ
โโฐโเผฝ
โฐโโโโโโโโโโโโโโโโโฑ
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