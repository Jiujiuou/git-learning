Function.prototype.myApply = function(context, arr) {
    context = context || window
    context.fn = this
    arr = arr ? arr : []
    let result = context.fn(...arr)

    delete context.fn
    return result
}

let arr = [1,2,3]
console.log(Math.max.myApply(arr,arr)) 
