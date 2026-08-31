const overlay = document.getElementById('modalOverlay');
const modalImg = document.getElementById('modalImg');
const modalCorner = document.getElementById('modalCorner');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.block-cards img').forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modalCorner.textContent = img.dataset.title;
        modalText.textContent = img.dataset.text;
        overlay.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});