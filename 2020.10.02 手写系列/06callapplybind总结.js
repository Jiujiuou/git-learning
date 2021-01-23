/**
 * 1、将方法挂载到传入的对象上
 * 2、执行对象的方法
 * 3、将这个方法从对象上删除
 */
Function.prototype.myCall = function (context, ...args) {
    // let fn = Symbol(1)
    // context[fn]
    // context[fn](...args)
    // delete context[fn]
    context.fn = this
    context.fn(...args)
    delete context.fn
}

Function.prototype.myApply = function (context, args = []) {
    if(args && args instanceof Array) {
        throw(`${args}is not a function`)
    }
    context.fn = this
    context.fn(...args)
    delete context.fn
}

Function.prototype.myBind = function (context, ...args1) {
    return (...args2) => {
        context.fn = this
        context.fn(...args1.concat(args2))
        delete context.fn
    }
}
