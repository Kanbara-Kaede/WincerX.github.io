const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    audio: [
        {
            name: '前前前世 (movie ver.)',
            artist: 'RADWIMPS',
            url: 'https://music.163.com/#/outchain/2/426881487/',
            cover: 'https://p2.music.126.net/sSxbRt9RpC6s_MaewyDJfA==/18597139672292692.jpg'
        },
        {
            name: '振り子',
            artist: 'Uru',
            url: 'https://music.163.com/#/outchain/2/1486489621/',
            cover: 'http://p1.music.126.net/sVXxPcESvXtO7Nz_9x1oKA==/109951165385788994.jpg'
        }
	]
});
