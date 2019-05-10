let sayHello = function (name) {
    console.log('Greeting for user');
    console.log(`Hey ${name}`);
}

sayHello('Riya')

function total(num1, num2) {
    return num1 + num2
}

let result = total(2, 4)

console.log(result);


console.log(total(2, 4));


let guestUser = function (name = 'NoName', count = 0) {
    return 'Hello ' + name + ' and your course count is : ' + count
    
}

console.log(guestUser('Shail', 1));
