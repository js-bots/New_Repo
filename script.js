const btn = document.querySelector(".main-text-button");
const popup = document.querySelector('.pop-up-bg');

btn.addEventListener('click', (e) => {
    popup.classList.add('show')
})

popup.addEventListener('click', () => {
    popup.classList.remove('show')
})
