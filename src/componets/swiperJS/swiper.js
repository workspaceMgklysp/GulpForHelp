//defolt Swiper
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     allowTouchMove: false,
//     spaceBetween: 10,
//     autoplay: {
//         delay: 1000
//     },

//     loop: true,
//     speed: 990,
//     breakpoints: {
//         1024: {

//         },
//         600: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//             centeredSlides: true,
//         }
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     //pagiantion
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//     }
// });

//optional parameters(most important)
//1. allowTouchMove(true:false) = if we need block touch moove
//2. breakpoints
// breakpoints = {
//     320: {
//         slidesPerView: 3,
//         spaceBetween: 20
//     },
//     640: {
// ...
//     },
//     1024: {
// ...
//     }
// }
//3. centeredSlides(true:false) => centrable slide
//4. effect:('slide', 'fade', 'cube', 'coverflow', 'flip' or 'creative')
//5.  grabCursor:(true:false)
//6.initialSlide(number) => start with slide in number
//7.loop
//8.observer
//9. on = Register event handlers
//10. preloadImages
//11. spaceBetween
//12. slideClass

/*methods
swiper.destroy()
swiper.enable()
swiper.disable()
swiper.on() Add event handler
swiper.update()
swiper.slideTo(index)
*/
//Events
/*
on:{
    init:() =>{
        console.log('test init event)
    }
}
OR
swiper.on('event',()=>{
    console.log('ok)
})
activeIndexChange
breakpoint
click
destroy
doubleTap
doubleClick
observerUpdate
progress
reachEnd //Event will be fired when Swiper reach last slide
realIndexChange
slideChange
transitionEnd
transitionStart
touchMove
//modules
Lazy loading
 lazy: {
    loadPrevNext: true,
  },
  also we can change settings in effects as
  'fade' 'cube', 'coverflow', 'flip' 'creative'
*/

/**
 * Plugin Definition
 **/
/*
function MyPlugin({ swiper, extendParams, on }) {
  extendParams({
    myPluginParameter: false,
  });
  swiper.myPlugin = {
    doSomething() {
      console.log('my plugin does something');
    },
  };
  on('init', (_swiper) => {
    if (!swiper.params.myPluginParameter) return;
    console.log('my plugin init');
  });
}

 * Plugin Usage8

const swiper = new Swiper('.my-swiper', {
  modules: [MyPlugin],
  myPluginParameter: true,
});

swiper.myPlugin.doSomething();
*/
//do examles with swiper js/
//write plugin for swiper js
//UI casrd component
const CardSLider = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 66,
    speed: 1000,
    autoplay: {
        delay: 1000
    },
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    allowTouchMove: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,

    }
})
const defolt = new Swiper('.swiper_1', {
    speed: 1000,
    // autoplay: {
    //     delay: 5000
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
const coverflow = new Swiper('.swiper_2', {
    speed: 1000,
    // spaceBetween: 50,
    slidesPerView: 3,
    autoplay: {
        delay: 1000
    },
    loop: true,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 35,
        slideShadows: true,
        // depth: 500,
        scale: 0.9,
    },

})