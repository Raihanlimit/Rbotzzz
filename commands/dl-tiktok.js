case 'tiktoknowm':
                     if(!isPremium && !isOwner )return reply(mess.only.prem)
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(aml.Iv)
                     if (args.length < 1) return reply('Link?')
                     lin = args[0]
                     reply(mess.wait) 
                     hx.ttdownloader(`${args[0]}`)
            		.then(result => {
             		const { wm, nowm, audio } = result
             		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
            		.then(async (a) => {
             		me = `*Link* : ${a.data}`
	                 Resta.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek, caption:me}) 
