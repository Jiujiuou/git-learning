// Function.prototype.myBind = function (context, ...args1 = []) {
//     const fn = this
//     return function newFn(...args2) {
//         if (this instanceof newFn) {
//             return new fn(...args1, ...args2)
//         }
//         return fn.apply(context, [...args1, ...args2])
//     }
// }


// Function.prototype.bind = function (context, ...args3 = []) {
//     var self = this
//     return function (...args4) {
//         return self.apply(context, ...args3.concat(args4))
//     }
// }


// Function.prototype.bind1 = function (context, ...args) {
//     const self = this
//     return function (...args2) {
//         return self.apply(context, [...args, ...args2])
//     }
// }



Function.prototype.bind2 = function(context, ...args) {
    let self = this
    return function (...args2) {
        return self.apply(context, [...args, ...args2])
    }
}



Function.prototype.call = function(context, ...args) {
    let self = this
    return self()
}
























