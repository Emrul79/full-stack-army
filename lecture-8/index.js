//prove: function is a value
function testFunction() {
  // console.log('i am a test function');
}
const fn = testFunction;
console.log(fn);
fn();

const arr = [fn, testFunction];

const obj = {
  fn: testFunction,
};

function strToString(str) {
  let obj = {};
  for (let s of str) {
    if (s !== " ") {
      obj[s] = s;
    }
  }
  return obj;
}

// console.log(strToString('emrul hassan biplob'));

//function consttractor:
// const greetings = new Function(
//   "name",
//   "email",
//   `
// const fName= name.split(' ')[0];
// console.log('hello,' , fName, "is that your email? ", email);
// console.log("yeah, this is mine");


// `
// );
// console.log(typeof greetings);
// console.log(greetings.toString());
// greetings('hemrul hassan', 'hemrul494@gmail.com')
// console.log(greetings());



// const allOperations = [
//   {
//     args: [100, 212],
//     param: ["a", "b"],
//     body: `console.log("a+b = ", a + b)`,
//   },
//   {
//     args: [10, 21],
//     param: ["a", "b"],
//     body: `console.log("a+b = " , a + b)`,
//   },
//   {
//     args: [10, 212],
//     param: ["a", "b"],
//     body: `console.log("a+b = ", a + b)`,
//   },
//   {
//     args: [10, 212],
//     param: ["a", "b"],
//     body: `console.log("a*b = ", a * b)`,
//   },
//   {
//     args: [10, 212],
//     param: ["a", "b"],
//     body: `console.log("a/b = ", a / b)`,
//   },
// ];

// allOperations.forEach((operation)=>{
//     const fn= new Function(...operation.param,operation.body)
//    fn(...operation.args);
// })


//box create using 2d array:

function box(n){
    for (let i=0; i<n; i++){
        line='';
        for(let j=i+1; j<n;j++){
            line += " * "
        }
        console.log(line);
    }
    
}
box(8)