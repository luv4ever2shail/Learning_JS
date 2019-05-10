const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']

console.log(days[0]);


days.forEach(function (day, index) {
    console.log(`Starts with ${index + 1} -- ${day}`);

})

for (let index = days.length - 1; index >= 0; index--) {
    const element = days[index];
    console.log(element);
}



const myTodos = []

myTodos.push('Buy bread')
myTodos.push('Go shopping')
myTodos.push('Go to gym')
myTodos.push('Do lots of flutter')
myTodos.push('Spend so much money but first make lots of money')


myTodos.forEach(function (todo, index) {
    console.log(`My todo name ${todo} is at index ${index}`);

})