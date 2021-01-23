function Foo() {
    getName = function () {
        alert(1);
    };
    return this;
}
Foo.getName = function () {
    alert(2);
};
Foo.prototype.getName = function () {
    alert(3);
};
var getName = function () {
    alert(4);
};

function getName() {
    alert(5);
}
Foo.getName()
getName();
Foo().getName()



// function deepClone(obj) {
//     if (typeof obj !== 'object' || obj === null) return obj
//     let result = obj instanceof Array ? [] : {}

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result[key] = deepClone(obj[key])
//         }
//     }
//     return result
// }

// const p1 = new Promise((resolve, reject) => {
//         resolve('hello')
//     }).then(result => result)
//     .catch(e => e)

// const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了')
// }).then(result => result)

// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(e => console.log(e))


// const p1 = new Promise((resolve, reject) => {
//         resolve('hello')
//     }).then(result => result)
//     .catch(e => e)

// const p2 = new Promise((resolve, reject) => {
//         throw new Error('报错了')
//     }).then(result => {
//         result
//     })
//     .catch(e => e)

// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(e => console.log(e))