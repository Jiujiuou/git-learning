// 定时器节流1
function throttle(func, delay) {
    let timeout = null
    let context = this
    return function () {
        let args = arguments
        if (!timeout) {
            timeout = setTimeout(function () {
                func.call(context, args)
                timeout = null
            }, delay)
        }
    }
}

// 时间戳节流1
function throttle(fn, delay) {
    let previous = 0
    let context = this
    return function () {
        let now = Date.now()
        if (now >= previous + delay) {
            fn.call(context, arguments)
            previous = now
        }
    }
}

// 时间戳节流2
function throttle(fn, delay) {
    let previous = 0
    return arguments => {
        let now = Date.now()
        if (now >= previous + delay) {
            fn.call(this, arguments)
            previous = now
        }
    }
}