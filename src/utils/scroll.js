// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let keys = {37: 1, 38: 1, 39: 1, 40: 1};

let preventDefault = e => {
    e = e || window.event
    if (e.preventDefault) e.preventDefault()
    e.returnValue = false
}

let preventDefaultForScrollKeys = e => {
    if (keys[e.keyCode]) {
        preventDefault(e)
        return false
    }
}

let disableScroll = () => {
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', preventDefault, false)
    window.onwheel = preventDefault // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault // older browsers, IE
    window.ontouchmove  = preventDefault // mobile
    document.onkeydown  = preventDefaultForScrollKeys
}

let enableScroll = () => {
    if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false)
    window.onmousewheel = document.onmousewheel = null
    window.onwheel = null 
    window.ontouchmove = null
    document.onkeydown = null
}

export {
    enableScroll,
    disableScroll,
}