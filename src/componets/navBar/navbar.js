const button = document.querySelector('.toggle_button')
const main = document.querySelector('.main')
const cross = document.querySelector('.cross')
if (button) {
    button.addEventListener('click', () => {
        main.classList.add('show-menu')
        console.log('test')
    })
}
if (cross) {
    cross.addEventListener('click', () => {
        main.classList.remove('show-menu')
        console.log('test')
    })
}