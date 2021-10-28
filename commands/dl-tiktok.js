        let form = new URLSearchParams()
        form.append('url', url)
        let json = await (await fetch('https://api.tikmate.app/api/lookup', { method: 'POST', body: form, ...config })).json()
        if (!json.success) return resolve({ creator: '@neoxrs – Wildan Izzudin', status: false })
        let postInfo = {
            author: json.author_name + ' (@' + json.author_id + ')',
            publish: json.create_time,
            likes: numbFormat(json.like_count),
            comments: numbFormat(json.comment_count),
            shares: numbFormat(json.share_count),
        }
        let urlList = {
            videoSD: 'https://tikmate.app/download/' + json.token + '/' + json.id + '.mp4',
            videoHD: 'https://tikmate.app/download/' + json.token + '/' + json.id + '.mp4?hd=1'
        }; resolve({ creator: '@neoxrs – Wildan Izzudin', status: true, ...postInfo, data: urlList })
    })
}
 
analyze('https://vt.tiktok.com/ZSe2F5rTC/').then(res => console.log(res))
