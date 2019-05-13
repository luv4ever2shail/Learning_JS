let getMyGrade = function (currentMarks, totalMarks) {

    let myPercent = (currentMarks / totalMarks) * 100;
    let myGrade = '';
    if (myPercent > 100) {
        console.log('please enter a valid marks');

    }
    else if (myPercent >= 90 && myPercent <= 100) {
        myGrade = 'A'
        console.log('You scored grade A');

    }
    else if (myPercent >= 80 && myPercent < 90) {
        myGrade = 'B'
        console.log('You scored grade B');

    }
    else if (myPercent >= 70 && myPercent < 80) {
        myGrade = 'C'
        console.log('You scored grade C');

    }
    else if (myPercent >= 60 && myPercent < 70) {
        myGrade = 'D'
        console.log('You scored grade D');

    }
    else {
        myGrade = 'F'
        console.log('You dont qualify to pass this course. You failed pretty much');

    }

    return `Your grade is ${myGrade} and percentage is ${myPercent}.`;
}

let yourResult = getMyGrade(92, 200);

console.log(yourResult);
