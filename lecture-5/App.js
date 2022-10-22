//Array Operations(traverse):

//Imperative Traverse:When we traverse an array using loop,then it is called Imperative traverse.

const numbers = [2, 3, 1, 4, 90, 5, 21, 1, 32, 1, 3];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
// console.log(sum); =>this is called imperative traverse;

// Decleartive Traverse: when we traverse an array using built in array method ,then it called Decleartive traverse..
//forEach function does the same thing what for loop did;
//so it will never return anything;
let newSum = 0;
numbers.forEach((value, index, array) => {
  if (value % 2 === 0) {
    // console.log(value);
  }
});
//console.log(newSum); =>this is called Decleartive traverse;

//those built in function(forEach,map,filter) call itself in every iteration;
//most of the array method gives us 3 arguments; it an array like object;

const array = [
  undefined,
  2,
  4,
  3,
  21,
  243,
  34,
  351,
  null,
  null,
  90,
  undefined,
  8696,
  "",
  64,
  90,
  "emrul",
  "oujoik",
  "uhiuj",
  120,
  undefined,
];

//create new array with numbers only(without creating a new array);
let count=0;
for(let i=0; i<array.length; i++){
  for(let j=i; j<array.length-1; j++){
    if(!array[j] || typeof array[j] !== "number"){
      array[j]=array[j+1];
      array[j+1]=undefined;
    }
  }
  if(array[i] === undefined){
    count++;
  }
}
array.length -= count;
console.log(array);
