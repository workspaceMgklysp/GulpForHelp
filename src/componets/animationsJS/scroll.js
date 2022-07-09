let test = doucment.body
let selector = doucment.querySelector('.selector')[0]
let height = selector.getBoundingClientRect().height - 1
let speed = 0.04
let offset = 0

test.style.height = Math.floor(height) + "px"

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed
    let scroll = "translateY(-" + offset + "px) translateZ(0)";
    selector.style.transform = scroll
    callscroll = requestAnimationFrame(smoothScroll)
}
smoothScroll()