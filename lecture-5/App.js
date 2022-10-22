//Array Operations(traverse):

//Imperative Traverse:When we traverse an array using loop,then it is called Imperative traverse.

const numbers = [2, 3, 1, 4, 90, 5, 21, 1, 32, 1, 3];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
// console.log(sum); =>this is called imperative traverse;



// Decleartive Traverse: when we traverse an array using built in array method ,then it called Decleartive traverse..

let newSum = 0;
numbers.forEach((value, index, array) => {
  return (newSum += value);
  
});
//console.log(newSum); =>this is called Decleartive traverse;

//those built in function(forEach,map,filter) call itself in every iteration;
//most of the array method gives us 3 arguments; it an array like object;

