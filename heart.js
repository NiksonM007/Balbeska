function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.querySelector('.hearts').appendChild(heart);
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

window.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.background-image');
    if (img) {
        img.style.width = Math.min(window.innerWidth * 0.7, 300) + 'px';
    }
});

window.onload = () => {
    const audio = document.getElementById('backgroundMusic');
    if (audio) {
        audio.play().catch(error => console.log('Автовоспроизведение заблокировано:', error));
    }
};
