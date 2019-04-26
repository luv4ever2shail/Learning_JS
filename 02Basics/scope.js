let iAmGlobal = 'Some Global Value'

if (true) {

    let iamLocal = 'Some Local Value'

    // Difference between Let and var to declare variable
    console.log(iAmGlobal);
    console.log(iamLocal);
    
}

console.log(iamLocal); // will receive error if the local variable is declared using let

// Always try to use let when declaring variables.
console.log(iAmGlobal);
