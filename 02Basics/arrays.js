const Mynames = ['Shail', 'Shaeeel', 'Saeeel', 'Riya', 'Rieyaaa', 'Rea']

console.log(Mynames);
console.log(Mynames[1]);
console.log(Mynames[Mynames.length - 1]);

console.log(`I have ${Mynames.length} names`);

Mynames[Mynames.length] = 'Riyaaaaaaa'

console.log(Mynames);

// Start
Mynames.shift(); // removes the first element

Mynames.unshift('New Item'); // adds new item at zero position


// End
Mynames.pop(); // removed the last element

Mynames.push('Riyeeaee'); // add the element at last

console.log(Mynames);


// Middle

Mynames.splice(2,1,'testing'); // removes the element at pos 2 , take away 1 element and add string