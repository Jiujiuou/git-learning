function promiseRace(promises) {
    if (!Array.isArray(promises)) throw new Error("promises must be an array")

    return new Promise((resolve, reject) => {
        promises.forEach(item => {
            Promise.resolve(item).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    })
}