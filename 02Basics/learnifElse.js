if(false){
    console.log('I m inside')
}
else if(true){
    console.log('I m inside')
}
else{

}

// LCO -  A website learn code online

var whoIsHere = 'user'

if(whoIsHere === 'user'){
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
}
else if(whoIsHere === 'teacher'){
     console.log('Greeting message for teacher')
     console.log('Allow access to his courses')
}
else{
    console.log('Please send email for verification')
    console.log('Please verify your email')
}


// Grade problem
// match student marks : 
// 10 - amazing
// 5 - Good
// 3  - poor
// 0  - fail

var studentGrade = 14

if(studentGrade >= 10){
    console.log('Amazing')
}
else if(studentGrade >= 5 && studentGrade < 10){
    console.log('Good')
}
else if(studentGrade >=3 && studentGrade < 5){
    console.log('Poor')
}
else{
    console.log('Failed')
}

