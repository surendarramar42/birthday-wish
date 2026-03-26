
function answerYes() {
    document.getElementById('answer').innerText = "🎉 Haha! Nice! 😎";
}

function answerNo() {
    document.getElementById('answer').innerText = "🙂 Cool! Stay awesome!";
}

// Make "No" button dodge the cursor
const noBtn = document.querySelector('.question button:nth-child(3)'); // No button
noBtn.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;
    const randX = Math.floor(Math.random() * maxX);
    const randY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'absolute';
    noBtn.style.left = randX + 'px';
    noBtn.style.top = randY + 'px';
});

// Auto-play background music
const music = document.getElementById('bg-music');
music.volume = 0.3;
