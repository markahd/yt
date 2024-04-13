async function convertToMp3() {
    const youtubeUrl = document.getElementById("youtube-url").value;
    const resultDiv = document.getElementById("result");

    try {
        if (typeof ytdl === 'undefined') {
            await loadScript('https://cdn.jsdelivr.net/npm/ytdl-core@latest');
        }

        const info = await ytdl.getInfo(youtubeUrl);
        const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        const audioStream = ytdl.chooseFormat(audioFormats, { quality: 'highestaudio' });

        resultDiv.innerHTML = `Converting...`;

        const response = await fetch(audioStream.url);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${info.title}.mp3`;
        a.textContent = 'Download MP3';
        resultDiv.innerHTML = '';
        resultDiv.appendChild(a);
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}

function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}
