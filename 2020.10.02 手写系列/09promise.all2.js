function promiseAll(promises) {
    if (!Array.isArray(promise)) throw new Error("promises must be an array")

    return new Promise((resolve, reject) => {
        let length = promises.length
        let count = 0
        let arr = new Array(length)

        for (let i = 0; i < length; i++) {
            Promise.resolve(promises[i]).then(res => {
                arr[i] = res
                count++
                if (count == length) return resolve(arr)
            }).catch(err => {
                reject({
                    message: err,
                    index: i
                })
            })
        }
    })
}