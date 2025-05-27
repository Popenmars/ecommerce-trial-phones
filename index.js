window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');

    const mainBelow = main.offsetTop + main.offsetHeight;

    if (window.scrollY >= mainBelow) {
        nav.style.backgroundColor = 'rgb(51, 178, 228)';
    } else {
        nav.style.backgroundColor = 'black'
    }
})
