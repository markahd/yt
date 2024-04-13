function generateMeme() {
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const imageInput = document.getElementById('imageInput');

    if (!topText || !bottomText || !imageInput.files[0]) {
        alert('Please enter top text, bottom text, and select an image.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = document.getElementById('meme');
        img.src = event.target.result;
    };
    reader.readAsDataURL(imageInput.files[0]);

    const memeText = document.createElement('div');
    memeText.style.position = 'absolute';
    memeText.style.top = '10px';
    memeText.style.left = '50%';
    memeText.style.transform = 'translateX(-50%)';
    memeText.style.color = 'white';
    memeText.style.textAlign = 'center';
    memeText.style.width = '100%';
    memeText.innerHTML = `
        <div style="position: relative;">
            <span style="font-size: 30px; display: block;">${topText}</span>
            <span style="font-size: 30px; display: block;">${bottomText}</span>
        </div>
    `;

    const memeContainer = document.querySelector('div');
    memeContainer.appendChild(memeText);
}
