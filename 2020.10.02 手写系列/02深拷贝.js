function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) return obj
    let result
    result = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}


let obj = {
    "a": 1,
    "b": undefined,
    "c": {
        child: 'child'
    },
    "d": [2, 4, 8]
};
console.log(deepClone(obj));

let str = "12avc"