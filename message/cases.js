
// CONST \\
const { generateMessageID, downloadContentFromMessage, proto, generateWAMessageFromContent, prepareWAMessageMedia, areJidsSameUser, getLastMessageInChat, jidDecode } = require('@adiwajshing/baileys');
const colors = require('colors');
const axios = require('axios');
const util = require('util');
const chalk = require('chalk');
const { times, fetchJson, isUrl, getBuffer, getRandom, sleep, getGroupAdmins, downloadMediaMessage, runtime, jsonformat, formatDate, tanggal, formatp } = require('../library/function');
const fs = require('fs');
const os = require('os');
const { color, mylog, infolog } = require("../library/color")
const moment = require('moment-timezone');
const clph = require("caliph-api");
const ffmpeg = require('fluent-ffmpeg');
const PhoneNumber = require('awesome-phonenumber');
const readline = require('readline');
const { performance } = require('perf_hooks');
const speed = require('performance-now')
const { exec, spawn } = require('child_process');
const toMs = require("ms")
global.prem = require("../library/premium")
let { allmenu } = require('./config')
// -------[ END ]------- \\

let print = console.log;

// FUNCTION TIME \\
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} H ${pad(minutes)} M ${pad(seconds)} S`
}
// -------[ END ]------- \\

// MODULE, CONST \\
module.exports = index = async(conn, m, store, warn) =>{
try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
	const args = body.trim().split(/ +/).slice(1)
	const arg = body.substring(body.indexOf(" ") + 1);
	const isCmd = body.startsWith(prefix)
	const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
	const sender = m.key.participant ? m.key.participant : m.key.remoteJid
	const senderName = m.pushName ? m.pushName : ''
	const pushname = m.pushName || "No Name"
	const text = q = args.join(" ")
	const fatkuns = (m.quoted || m)
	const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
	const isMedia = /image|video|sticker|audio/.test(mime)

	const isGroup = from.endsWith('@g.us')
	const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const number = [`global.owner@s.whatsapp.net`]
	const botNumber = await conn.decodeJid(conn.user.id)
	const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : ''
	const isGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const participants = m.isGroup ? await groupMetadata.participants : ''
	let who = m.mentions && m.mentions[0] ? m.mentions : m.fromMe ? this.user : m.sender 
// -------[ END ]------- \\

	require('./config');
	
// BUFFER \\
const downloadContentFromMediaMessage = async(m) => {
let mime = (m.msg || m).mimetype || ''
const stream = await downloadContentFromMessage(m.quoted ? m.quoted : m.msg, mime.split("/")[0])
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
// -------[ END ]------- \\

	// FAKE \\
	
	// fake reply 
/*	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6283102650464-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*Hola* _${pushname} 👋_\n	╰≻ ${prefix + command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }*/
      // end

    const fake = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        orderMessage: {
          itemCount: 1,
          status: 1,
          surface: 1,
          message: " KenisawaDevolper ",
          orderTitle: "Bang",
          thumbnail: thumb,
          sellerJid: "0@s.whatsapp.net",
        },
      },
    };

// fake doc
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283102650464-1589321480@g.us","inviteCode": "m","groupName": NameBot, "caption": global.footer, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}
    // end
// -------[ END ]------- \\

		// PREMEXP \\
		prem.expiredCheck(conn, m, premium);
		// -------[ END ]------- \\

   // Push Message To Console && Auto Read
        if (m.message) {
            conn.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.white(chalk.bgGreen(new Date)) + '\n          ' + chalk.white(chalk.bgMagenta(budy || m.mtype)) + '\n' + chalk.green('=> By'), chalk.magenta(pushname), chalk.yellow(m.sender) + '\n' + chalk.green('=> In'), chalk.blueBright(m.isGroup ? pushname : 'Private Chat', from) + '\n' + chalk.magenta('──────────────────────────────────────────────────────'))
        }
        // -------[ END ]------- \\
        
        
const reply = (teks) => {
            conn.sendMessage(m.chat, { text: teks},{ quoted: fake})
        }
        
const sendListMsg = async (title, description, textButton, sections) => {
      var list = WAProto.Message.fromObject({
        listMessage: WAProto.ListMessage.fromObject({
          title: title,
          buttonText: textButton,
          description: description,
          listType: 1,
          sections: sections,
        }),
      });
      await conn.relayMessage(m.chat, list, { messageId: m.key.id });
    };
// COMMANDS \\


switch(command){



// START \\
			case'menu':
			case'help': {
			var teks = allmenu(m.sender, prefix, m.pushName)
          let botoness = [
            {buttonId: `${prefix}ping`,buttonText: { displayText: "Ping " },type: 1,},
          ];
          let buttonMessage25 = {
            image: {
              url: `https://satoru-api.herokuapp.com/api/anime/waifu?apikey=APIKEY`,
            },
            caption: teks,
            footer: conn.user.name,
            buttons: botoness,
            headerType: 4,
          };
          conn.sendMessage(m.chat, buttonMessage25, { quoted: fake });
        }
break

case 'ping': case 'botstatus': case 'statusbot': {
           	  const used = process.memoryUsage()
           	  const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
           	  })
           	  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
        	     }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
           	  }
         	    })
           	  let timestamp = speed()
        	     let latensi = speed() - timestamp
          	   neww = performance.now()
      	       oldd = performance.now()
       	      respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_\n\nRuntime : ${runtime(process.uptime())}
 `.trim()
                m.reply(respon)
       	     }
         	   break

case 'creador':
case 'dueño':
case 'owner': { 
cok = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "status@broadcast" })}, message: { 'contactMessage': { 'displayName': NameBot, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Akaeru Bot,;;;\nFN:AkaeruBotz,\nitem1.TEL;waid=0:0\nitem1.X-ABLabell:Ponsel\nEND:VCARD`} }}
reply(`wa.me/${global.owner}`)
conn.sendContact(from, global.owner, cok)
}
break

		
// -------[ END ]------- \\


// OWNER MENU \\
case 'linkgroup': case 'linkgc': {
               if (!m.isGroup) return m.reply(act.gc)
               let response = await conn.groupInviteCode(from)
               conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink del grupo : ${groupMetadata.subject}`, m, { detectLink: true })
      	      }
     	       break

case 'setstatus': case 'setbiobot': case 'setbotbio': {
if (!isCreator) return m.reply(act.owner)
if (!text) return m.reply(`Ingresa el texto por favor`)
let name = await conn.updateProfileStatus(text)
m.reply(`Cambió con éxito el estado de la biografía del bot a ${text}`)
}
break

case 'setnamabot': case 'setnamebot': {
if (!isCreator) return m.reply(act.owner)
if (!text) return m.reply( `Ej : ${prefix + command} WhatsApp bot`)
let name = await conn.updateProfileName(text)
m.reply(`El nombre del bot se cambio a ${text}`)
}
break

			case 'block': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

      	  case 'unblock': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

          case 'setppbot': {
                if (!isCreator) return m.reply(act.owner)
                if (!/image/.test(mime)) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break

           case 'join': {
                if (!isCreator) return m.reply(act.owner)
                if (!text) return m.reply(act.nurl)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(act.urlerr)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        	    }
           	 break

          case 'leave': {
                if (!isCreator) return m.reply(act.owner)
                await conn.groupLeave(from).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                console.log()
            	}
             break

          case 'anticall': {
           	 if (!isCreator) return m.reply(act.owner)
                let asuuu = JSON.parse(fs.readFileSync('../metadata/anticall.json'));
                if (args[0] === "on") {
                if (asuuu.setting.anticall == true) return m.reply(`Anticall ya estaba activo`)
                asuuu.setting.anticall = true
				fs.writeFileSync('../metadata/anticall.json', JSON.stringify(asuuu))
                m.reply(`AntiCall activo!`)
                } else if (args[0] === "off") {
                if (asuuu.setting.anticall == false) return m.reply(`Anticall ya desactivado`)
                asuuu.setting.anticall = false
				fs.writeFileSync('../metadata/anticall.json', JSON.stringify(asuuu))
                m.reply(`AntiCall desactivado !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, `Modo anticall`, global.footer, fake)
                }
          	   }
       	      break

         case 'addprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Ejemplo :\n*#addprem* @tag días\n*#addprem* numero días\n\nEj : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				m.reply("Listo");
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				m.reply("Éxito a través del número");
						}
					}
				break

			case 'delprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args, arg } {
				if (args.length < 1) return reply(`Ejemplo :\n*#delprem* @tag\n*#delprem* numero`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./metadata/premium.json", JSON.stringify(premium));
					}
					m.reply(act.success);
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./metadata/premium.json", JSON.stringify(premium));
				m.reply("Listo");
				}
				}
				break
// -------[ END ]------- \\

// DOWNLOADER MENU \\

            case 'tiktoknowm':
			case 'tiktok':
			case 'tt':
			    if (!text) return m.reply(act.nurl)
				let p = await clph.downloader.tiktok(q)
				let nih = `
				📌 *Titulo:* ${p.title}
				👤 *Autor:* ${p.author}
				`
				let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: p.nowm },
                    caption: nih,
                    title: '*TIKTOK DOWNLOADER*',
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 5
                }
                conn.sendMessage(from, buttonMessage, { quoted: fake })
            
			    break

			case 'tiktokmp3': 
			case 'tiktokaudio': {
				if (!text) return m.reply(act.url)
				let aud = await clph.downloader.tiktok(text)
				let cap = ` *TIKTOK AUDIO*
				
				📌 *Titulo:* ${aud.title}
				👤 *Autor:* ${aud.author}
				`
				conn.sendMessage(from, { caption: cap, image: {url: aud.thumbnail}})
				conn.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: fake })
				}
				break
// -------[ END ]------- \\

// SEARCH MENU \\
            case 'play':
			case 'ytplay': {
                if (!text) return m.reply(`Ej : ${prefix + command} Stay with me japan`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                          let botoness = [
            {buttonId: `ytaudio ${anu.url}`,buttonText: { displayText: "Audio " },type: 1,},
            {buttonId: `ytmp4 ${anu.url}`,buttonText: { displayText: "Video " },type: 2,},
          ];
          let buttonMessage25 = {
            image: {
              url: anu.thumbnail,
            },
            caption: "✘ ᵖˡᵃʸ-ʸᵒᵘᵗᵘᵇᵉ ✘",
            footer: 
`     ᴛɪᴛᴜʟᴏ : ${anu.title}
     ᴅᴜʀᴀᴄɪᴏɴ : ${anu.timestamp}
     ᴠɪsᴛᴀs : ${anu.views}
     ғᴇᴄʜᴀ : ${anu.ago}
     ᴄᴀɴᴀʟ : ${anu.author.name}
     
     ᴇʟɪᴊᴀ ᴀʙᴀᴊᴏ...`,
            buttons: botoness,
            headerType: 4,
          };
          conn.sendMessage(m.chat, buttonMessage25, { quoted: fake });
                console.log(anu)
      	      }
      	      break

            case 'yts':
			case 'ytsearch': {
                if (!text) m.reply(`Ej : ${prefix + command} stay with me japan`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'Busqueda de YouTube\n\n Resultado sobre '+text+'\n\n'
				var list = []

                let no = 1
                for (let i of search.all) {
                	list.push({

				title: `*${i.title}*`, rowId: `${prefix}ytmp3 ${i.url}`, description: `\n\n▢ Título : ${i.title}\n▢ Canal : ${i.author.name}\n▢ Fecha : ${i.ago}\n▢ Vistas : ${i.views}\n▢ Duración : ${i.timestamp}\n▢ URL : ${i.url}`})

				}

				var sections = [{title: `Hola *${pushname}* Seleccione a continuación`, rows:list}]

				var listms = { text: `*Busquesa de YouTube*\n\n Busqueda sobre : ${text}\n Seleccione a continuación`, footer: footer, buttonText: "Click aquí", sections }

				conn.sendMessage(from, listms, m)

               }
          	  break

case 'ytmp3': {
let { yta } = require('../library/y2mate')
if (!text) throw `Ej : ${prefix + command} _url youtube + calidad_`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return 
conn.sendImage(m.chat, media.thumb, 
`Titulo : ${media.title}
Peso : ${media.filesizeF}
Calidad : ${args[1] || '128kbps'}`, m)
conn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fake })
}
break

case 'ytaudio': {
let { yta } = require('../library/y2mate')
if (!text) throw `Ej : ${prefix + command} _url youtube + calidad_`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return 
conn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fake })
}
break

case 'ytmp4': 
case 'ytvideo': {
let { ytv } = require('../library/y2mate')
if (!text) throw `Example : ${prefix + command} _url youtube + calidad_`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return 
conn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: 
`Titulo : ${media.title}
Peso : ${media.filesizeF}
Calidad : ${args[1] || '360p'}
` }, { quoted: fake })
}
break

case 'pinterest': {
let { pinterest } = require('../library/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(from, { image: { url: result }, caption: 'Link de la imagen : '+result }, { quoted: fake })
}
break
// -------[ END ]------- \\


// GROUP MENU\\
case 'kick': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

			case 'add': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.gc)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

			case 'promote': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
       		 if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

			case 'demote': {
				if (!m.isGroup) return m.reply(act.gc)
      		  if (!isBotAdmins) return m.reply(act.botadm)
       		 if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break

case 'tagall': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
				let teks = `─────✪〘 *👥 Invocación* 〙✪─────
 
 ≻ *Mensaje : ${q ? q : 'Ninguno'}*\n\n`
                for (let mem of participants) {
                teks += `╰≻ @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fake })
                }
                break

case 'setname': case 'setsubject': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
                if (!text) return m.reply(act.ntext)
                await conn.groupUpdateSubject(from, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
       	     }
          	  break
           case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply(act.botadm)
                if (!isAdmins) return m.reply(act.admin)
                if (!text) return m.reply(act.ntext)
                await conn.groupUpdateDescription(from, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
          	  }
       	     break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isAdmins) return m.reply(act.admin)
                if (!/image/.test(mime)) return m.reply(`Responde a una imagen con el comando  ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(act.success)
                }
                break
			case 'hidetag': {
           	 if (!m.isGroup) return m.reply(act.gc)
            	if (!isBotAdmins) return m.reply(act.botadm)
          	  if (!isAdmins) return m.reply(act.admin)
         	   conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fake })
         	   }
            	break
            case 'totag': {
               if (!m.isGroup) return m.reply(act.gc)
               if (!isBotAdmins) return m.reply(act.botadm)
               if (!isAdmins) return m.reply(act.admin)
               if (!m.quoted) return m.reply(`Responde a un mensaje con el comando ${prefix + command}`)
               conn.sendMessage(from, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
// -------[ END ]------- \\

// TOOLS MENU \\
case 'sticker': case 's': case 'stickergif': case 'sgif': {
        	   if (/image/.test(mime)) {
              	  let media = await conn.downloadMediaMessage(qmsg)
            	    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
             	   await fs.unlinkSync(encmedia)
         	   } else if (/video/.test(mime)) {
        	        if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
             	   let media = await conn.downloadMediaMessage(qmsg)
             	   let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
        	        await fs.unlinkSync(encmedia)
      	      } else {
       	         m.reply(`Responde a imagen/video/gif con el comando ${prefix + command}\n Duracion de Video/Gif 1-9 segundos`)
       	         }
        	    }
        	    break

			case 'stickerwm':
			case 'swm':
			case 'stickergifwm':
			case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Responde a un sticker con el comando ${prefix + command} txt1|txt2`)
                if (!teks2) return m.reply(`Responde a un sticker con el comando ${prefix + command} txt1|txt2`)
            	m.reply(act.proc)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`Responde a un sticker con el comando ${prefix + command} txt|txt`)
                }
        	    }
        	    break

			case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) return m.reply(`Responde a un sticker con el comando *${prefix + command}*`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(from, { image: buffer }, { quoted: fake })
                    fs.unlinkSync(ran)
                })
       	     }
     	       break

case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       	 if (!/image/.test(mime)) return m.reply(`Responde a image/sticker con el comando ${prefix + command} text1|text2`)
      	      if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
       	     atas = text.split('|')[0] ? text.split('|')[0] : '-'
      	      bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	  	      let dwnld = await conn.downloadMediaMessage(qmsg)
	 	       let { floNime } = require('../library/uploader')
	  	      let fatGans = await floNime(dwnld)
	       	 let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	  	      let has = await conn.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
	  	      await fs.unlinkSync(has)
       	     }
	  	      break     
	  	      
	  	   case 'ebinary': {
        	    if (!text) return m.reply(`Ej : ${prefix + command} texto`)
           	 let { eBinary } = require('../library/binary')
          	  let eb = await eBinary(text)
           	 m.reply(eb)
       		 }
       		 break

            case 'dbinary': {
          	  if (!text) return m.reply(`Ej : ${prefix + command} 0101010`)
          	  let { dBinary } = require('../library/binary')
          	  let db = await dBinary(text)
            	m.reply(db)
       		 }
      	  	break

case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) return m.reply(`Responde a un sticker animado con el comando *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('../library/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: fake })
                await fs.unlinkSync(media)
        	    }
           	 break

            case 'toaud': case 'toaudio': {
        	    if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Responde a Video/Audio con el comando ${prefix + command}`)
        	    m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toAudio } = require('../library/converter')
         	   let audio = await toAudio(media, 'mp4')
          	  conn.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
          	  }
           	 break

            case 'tomp3': {
          	  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Responde a Video/Audio con el comando ${prefix + command}`)
          	  m.reply(act.wait)
           	 let media = await conn.downloadMediaMessage(qmsg)
           	 let { toAudio } = require('../library/converter')
            	let audio = await toAudio(media, 'mp4')
           	 conn.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convertido por ${conn.user.name}.mp3`}, { quoted : m })
           	 }
           	 break

            case 'tovn': case 'toptt': {
         	   if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Responde a Video/Audio con el comando ${prefix + command}`)
          	  m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toPTT } = require('../library/converter')
          	  let audio = await toPTT(media, 'mp4')
         	   conn.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
           	 }
          	  break

            case 'togif': {
                if (!/webp/.test(mime)) return m.reply(`Responde a un sticker animado con el comando *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('../library/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Listo' }, gifPlayback: true }, { quoted: fake })
                await fs.unlinkSync(media)
         	   }
          	  break

	        case 'tourl': {
                m.reply(act.wait)
				let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../library/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            	}
          	  break
// -------[ END ]------- \\			

// FUN MENU \\


// -------[ END ]------- \\			


// OTHER MENU \\

case "cosplay":
      case "waifu":
      case "waifu2":
      case "shota":
      case "loli":
      case "yotsuba":
      case "shinomiya":
      case "yumeko":
      case "tejina":
      case "chiho":
      case "shizuka":
      case "boruto":
      case "kagori":
      case "kaga":
      case "kotori":
      case "mikasa":
      case "akiyama":
      case "hinata":
      case "minato":
      case "naruto":
      case "nezuko":
      case "yuki":
      case "hestia":
      case "emilia":
      case "itachi":
      case "madara":
      case "sasuke":
      case "deidara":
      case "sakura":
      case "tsunade":
        {
          let botao25 = [
            {
              buttonId: `${prefix+command}`,
              buttonText: { displayText: "Siguiente " },
              type: 1,
            },
          ];
          let buttonMessage25 = {
            image: {
              url: `https://satoru-api.herokuapp.com/api/anime/${command}?apikey=APIKEY`,
            },
            caption: `Aqui esta!!`,
            footer: conn.user.name,
            buttons: botao25,
            headerType: 4,
          };
          conn.sendMessage(m.chat, buttonMessage25, { quoted: fake });
        }
        break;

// -------[ END ]------- \\		


// -------[ END ]------- \\		
            

//++++++++++++++ END CASE +++++++++++++++
default:
      
      
if (budy.startsWith("$") && isCreator) {
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) m.reply(`${stdout}`.trim())
})
}
if (budy.startsWith(`>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(m.key.remoteJid, { text: JSON.stringify(eval(body.slice(2)), null, 2)}, { quoted: fake})
} catch (e) {
print(e)
conn.sendMessage(from, { text: String(e)}, { quoted: fake})}
}
if (budy.startsWith(`=>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(from, { text: util.format(eval(`( async () => { return ${body.slice(3)}})()`))}, { quoted: fake})
} catch (e) {
print(e)
conn.sendMessage(`5493865362492@s.whatsapp.net`, { text: String(e) }, { quoted: fake})
}
}
}
} catch(e) {
print(`[x] Error: ${e}`.red)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
