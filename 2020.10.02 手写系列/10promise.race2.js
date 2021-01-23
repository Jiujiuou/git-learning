function promiseRace (promises) {
    if (!Array.isArray(Promises)) throw new Error("promises must be a funciton")

    return new Promise((resolve, reject) => {
        promises.forEach(item => {
            Promise.resolve(item).then(data => {
                resolve(data)
            }, err => {
                reject(err)
            })
        })
    })
}