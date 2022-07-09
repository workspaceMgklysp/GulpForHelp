//animation with lib AnimeJS
let loge = document.querySelector('.batter-log')
let obj = {
    charged: '10%',
    circle: 0
}
anime({
    targets: [obj,
        '.input'
    ],
    value: [0, 1000],
    charged: '100%',
    circle: 3,
    delay: 1000,
    round: 1,
    easting: 'linear',
    update: function() {
        loge.innerHTML = JSON.stringify(obj)
    }
})
anime({
    targets: '.e',
    translateX: {
        value: 250,
        duration: 4000
    },


    rotate: 360,
    endDelay: function(el, i, l) {
        return (l + i) * 100;

    },
    delay: function(el, i, l) {
        return i * 1000;
    },

})
const arr = 'text'
let spllit = arr.split('');
console.log(spllit)
const arrray = ['t', 'e', 's', 't']
arrray.forEach((element, index) => {
    console.log(`${element} in ${index}`)
});
let cubick = anime({
    targets: '#div',
    translateY: {
        value: 230,
        duration: 5000,
    },
    autoplay: true,
    easing: 'easeInOutExpo',
    easting: 'linear',
    duration: 5000,
    rotate: 360,
    borderRadius: 20,
    width: {
        value: 330,
        delay: 4000,
    },
    background: 'rgb(169, 87, 207)',

    // update: function() {
    //     let coord = div.getBoundingClientRect();
    //     if (coord.y == 285) {
    //         anime({
    //             targets: ['el'],
    //             delay: 0,
    //             background: 'rgb(16, 17, 007)',
    //         })
    //         console.log(coord.y)
    //     } else {
    //         console.log('test else')
    //         anime({
    //             targets: '#div',
    //         })
    //     }
    // },
})
let paramets = {
    progress: 0,
    updates: 0,
    completed: 0,
    begin: 0,
    loopCompleted: 0,
    loopbegan: 0,
    change: 0,

}
const testStagger = document.createElement('div');
testStagger.className = 'stagger'
document.body.appendChild(testStagger);
console.log(testStagger)
anime({
    targets: '.el',
    background: 'rgb(rgb(94, 226, 226)',
    duration: 5000,
    scale: [
        { value: anime.random(0.1, 2), easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1000 }
    ],
    delay: anime.stagger(500, {
        from: 'center',
        grid: [9, 7]
    })
});
const animationFn = anime.timeline({
    targets: '.ts',
    direction: 'alternate',
    loop: 1,
    duration: 200,
    easing: 'easeInOutSine',
    delay: function(el, i, l) {
        return i * 200
    },
    update: function(ev) {
        paramets.updates++;
        paramets.progress = Math.round(ev.progress) + '%'
        show('.show', paramets)
    },
    begin: function(anim) {
        paramets.begin = anim.began;
        show('.show', paramets)
    },
    complete: function(anim) {
        paramets.completed = anim.completed;
        show('.show', paramets)
    },
    loopBegin: function(anim) {
        let loopBegan = 0;
        paramets.loopbegan++;
        paramets.loopbegan.value = 'loop began : ' + loopBegan;
        show('.show', paramets)
    },
    loopComplete: function(anim) {
        let loopCompleted = 0;
        paramets.loopCompleted++;
        paramets.loopCompleted.value = loopCompleted;
        show('.show', paramets)
    },
    change: function() {
        let changes = 0;
        paramets.change++;
        paramets.change.value = changes;
    },
})
animationFn
    .add({
        translateX: 250,
        easing: 'spring',
    })
    .add({
        scale: 2,
        opacity: .5
    })
    .add({
        targets: '.treygol',
        rotate: 180
    })
    .add({
        translateX: 0,
        scale: 1
    })
let st = document.querySelector('.pause')
st.addEventListener('click', animationFn.pause)
let play = document.querySelector('.play').addEventListener('click', animationFn.play)
let rev = document.querySelector('.reverse').addEventListener('click', animationFn.reverse)
let res = document.querySelector('.restart').addEventListener('click', animationFn.restart)
let range = document.querySelector('.range-input')
range.addEventListener('input', (e) => {
    animationFn.seek(animationFn.duration * (range.value / 1000));
});
console.log(range.value)
    //animation on scroll page in webpage
    /*document.body.addEventListener('scrol',(e)=>{
        animationFn.seek(animationFn.duration * (window.pageYOffset / 1000));
        })*/
    //callbacks and promise in anime_js


function show(selector, obj) {
    document.querySelector(selector).innerHTML = JSON.stringify(obj, null, '');
}
show('.show', paramets)
const ts = document.querySelectorAll('.squerie, .circle')
let finishedLogE = document.querySelector('.h3')

function finish() {
    anime.set(ts, { backgroundColor: '#18FF92' });
    anime.set(finishedLogE, { innerHTML: 'Promise resolved' });
}
animationFn.finished.then(finish);