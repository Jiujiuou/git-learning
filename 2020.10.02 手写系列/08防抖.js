function debounce(fun, delay, immediate) {
    let timeout = null
    let context = this
    return function () {
        let args = arguments
        clearTimeout(timeout)
        if (immediate) {
            let doNow = !timeout
            timeout = setTimeout(function () {
                timeout = null
            }, delay)

            if (doNow) {
                fun.call(context, args)
            }
        } else {
            timeout = setTimeout(function () {
                fun.call(context, args)
            }, delay)
        }
    }
}