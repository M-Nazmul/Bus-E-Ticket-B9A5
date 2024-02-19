const modalOpenBtn = document.getElementById('modal-open-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBackground = document.getElementById('modal-background');
const modalContent = document.getElementById('modal-content');

modalOpenBtn.addEventListener('click', () => {
    modalBackground.classList.remove('hidden');
    modalContent.classList.remove('hidden');
});

modalCloseBtn.addEventListener('click', () => {
    modalBackground.classList.add('hidden');
    modalContent.classList.add('hidden');
});

modalBackground.addEventListener('click', () => {
    modalBackground.classList.add('hidden');
    modalContent.classList.add('hidden');
});