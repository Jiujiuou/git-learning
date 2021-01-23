/**
 * @param {*} context 
 *      this指向
 * @param  {...any} args
 *      参数
 * 1、改变this指向
 * 2、执行函数
 * 3、返回执行结果
 */


Function.prototype.myCall = function (context, ...args) {
    context = context || window
    args = args || []
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}



function add() {
    return Array.prototype.slice.myCall(arguments);
}

let result = add(1, 2, 3); 
console.log(result);

Function.prototype.call1 = function (context, ...args) {
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}
Function.prototype.apply1 = function (context, arr) {
    context.fn = this
    const result = context.fn(...arr)
    delete context.fn
    return result
}