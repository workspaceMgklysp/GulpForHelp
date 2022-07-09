// function Mob() {
//     if (window.innerWidth <= 600 && sldier.dataset.mobile == 'false') {
//         Myswp = new Swiper(sldier, {
//             slidesPerview: 1,
//             spaceBetween: 50,
//             autoplay: {
//                 delay: 2000
//             },
//             speed: 1000,
//             loop: true,
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//         })
//         sldier.dataset.mobile = 'true';
//     }
//     if (window.innerWidth > 600) {
//         sldier.dataset.mobile = 'false'
//         Myswp.destroy();
//     }
// }
// Mob()
// window.addEventListener('resize', () => {
//     Mob()
// })

function MyPlugin({ swiper, extendParams, on }) {
    const sldier = document.querySelector('.swiper');
    let Myswp;
    extendParams({
        myPluginParameter: false,
        width: 0,
    });

    function Mob(width) {
        if (window.innerWidth <= `${width}` && sldier.dataset.mobile == 'false') {
            Myswp = new Swiper(sldier, {
                slidesPerview: 1,
                spaceBetween: 50,
                autoplay: {
                    delay: 2000
                },
                speed: 1000,
                loop: true,
                slideClass: 'slide',

            })
            sldier.dataset.mobile = 'true';
            let card = document.querySelector('.swiper');
            card.style.width = 90 + '%'

        }
        if (window.innerWidth > `${width}`) {
            console.log('destroy')
            sldier.dataset.mobile = 'false'
            Myswp.destroy();
        }
    }
    on('init', (_swiper) => {
        if (!swiper.params.myPluginParameter) return;
        console.log('my plugin init');
        Mob(swiper.params.width)
    });
    on('resize', (_swiper) => {
        if (!swiper.params.myPluginParameter) return;
        console.log('resize');
        Mob(swiper.params.width)
    });
}
let test = new Swiper('.swiper', {
    modules: [MyPlugin],
    myPluginParameter: true,
    width: 600
});