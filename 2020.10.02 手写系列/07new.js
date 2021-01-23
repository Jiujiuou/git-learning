/**
 * 1、创建一个新对象
 * 2、将新对象的_proto_指向构造函数的prototype对象
 * 3、将构造函数的this，指向新的对象
 * 4、执行构造函数中的代码（为这个新对象添加属性）
 * 5、返回新的对象
 */


function myNew1(fn, ...args) {
    let obj = {}
    let constructor = fn
    obj.__proto__ = constructor.prototype
    let result = constructor.call(obj, ...args)
    return typeof result === 'object' ? result || obj : obj;
}

function myNew2(fn, ...args) {
    let obj = {}
    obj.__proto__ = fn.prototype
    fn.call(obj, ...args)
    return obj
}

function myNew3() {
    let obj = {}
    construct = [].shift.call(arguments); // 得到构造函数 Array.protptype原型上的方法对传入参数进行操作    
    obj.__proto__ = construct.prototype;
    //访问方法    
    const result = construct.apply(obj, arguments); // 让obj拥有Construct中的属性    
    return typeof result === 'object' ? result || obj : obj;
}

function jiujiuNew(construct, ...args) {
    let obj = {}
    obj.__proto__ = construct.prototype
    let result = construct.call(obj, ...args)
    return typeof result === 'object' ? result || obj : ojb
}


function Student(name, age) {
    // this.name = name;
    // this.age = age;
    return {
        "a": 1
    }
}

Student.prototype.id = '110'
// let hanson = new Student('hanson', 18);
let jiujiu = myNew1(Student, 'jiujiu', 18)
console.log(jiujiu.name); // 'hanson'
console.log(jiujiu.age) //110


function New() {
    let obj = {}; // 创建对象

    let constructor = [].shift.call(arguments); // 获取构造函数

    if (constructor.prototype !== null) {
        obj.__proto__ = constructor.prototype; // 构造函数链接到新对象
    }
    let ret = constructor.apply(obj, [].slice.call(arguments)); // 改变this指向

    if (ret !== null && (typeof ret === "object" || typeof ret === "function")) {
        return ret;
    }
    return obj; // 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。
}

function new4 (fn, ...args) {
    let obj = Object.create(fn.prototype)
    let result = fn.call(obj, ...args)
    return typeof result == "object" ? result : obj
}