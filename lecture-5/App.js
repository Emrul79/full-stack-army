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
  'iyh8yh',
  323,
  undefined
];

//create new array with numbers only(without creating a new array):

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

//we can do the same thing in single line:

const filteredArray= array.filter((value,index)=>typeof value === "number");


//but when we campare this two solution , the efficient solution is use for loop;(first solution)!



//fibonacchi using recursion:

function fibonacchi(number){
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * fibonacchi(number-1)
}


//updating array element:

const arr= [
{id:1, name:'biplob'},
{id:2, name:'emrul'},
{id:3, name:'hassan'},
{id:4, name:'nishad'},
{id:5, name:'nahim'}
];

//find and finIndex method are mutable; find return the whole value,and fincIndex return the Index;

//practing is the key

//deleted something from an array:
const index= arr.find((value)=>{
  return value.name === 'hassan';
}) 
const deleted= arr.forEach((val,ind)=>{
  if(val.id ===3){
    arr.splice(ind,2,{id:235525,name:'nahodul alam shuvo'})
  }
})

index.name='i am emrul hassan biplob,i am a mern stack web developer'
index.id=6842;
index.name='i am changed'
// arr[index]={id:index+1, name:'my name is emrul hassan biplob'}
console.log(arr);

//we can do the same thing using filter and splice method:
//1.spilce method is muted,namely when we make changes it will change our orginal array;
//2.filter method is unmuted,namely when we make change something it will never touched our main array;
