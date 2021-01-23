Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let dataArr = new Array(promises.length)
        let count = 0

        promises.forEach((item, index) => {
            item.then(res => {
                dataArr[index] = res
                count++
                if (count == promises.length) resolve(dataArr)
            }).catch(err => {
                reject({
                    message: err,
                    index
                })
            })
        })
    })
}