function currying(fn, args) {
    let _this = this
    let len = fn.length
    let args = args || []

    return function () {
        let _args = Array.prototype.slice.call(arguments)
        args.push(..._args)
        if (args.length < len) {
            return currying.call(_this, fn, args)
        }
        return fn.apply(this, _args)
    }
}

function add () {
    // 定义数组存储参数
    let _args = Array.prototype.slice(arguments)
    
    // 在内部声明一个函数，利用闭包的特性保存_args并手机所有的参数值
    let _adder = function () {
        _args.push(...arguments)
        return _adder
    }
}