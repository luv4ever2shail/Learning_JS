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


// Kings Problem


let King = 'Shail'

if (true) {
    let King = 'Rahul'

    console.log(King);

    if (true) {
        let King = 'Ram'
        console.log(King);
    }
    
}

// The closet variable is going to execute

// If you dont mention let  and just king it becomes global same as var


if (true) {
    console.log(King);
    
}