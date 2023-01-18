const students = {
  1: {
    name: "emrul hassan biplob",
    id: 1,
    nums: 32,
    email: "hemrul494@gmail.com",
  },
  2: {
    name: "nahidul shuvo",
    id: 2,
    nums: 322,
    email: "nahidul94@gmail.com",
  },
  3: {
    name: "nahidul nishad",
    id: 3,
    nums: 352,
    email: "nishad494@gmail.com",
  },
};

//complexity of creting a new obj is O(1);
const newStd = {
  name: "new name",
  id: 5,
  email: "newName23@gmail.com",
};

//complexity of updating an object  is O(1);
const IdtobeUpdated = 3;
const updatedData = {
  name: "azizu houqe",
  email: "azizul21@gmail.com",
};

students[IdtobeUpdated] = {
  ...students[IdtobeUpdated],
  ...updatedData,
};

//it's super easy  to delete something from an object;
////complexity of deleting something from an obj is O(1);
delete students[IdtobeUpdated];

//you can get anything  from an object if you have the id:

students[newStd.id] = newStd;
// console.log(students[2]);

//travering in an object:

//1.imperative way:
for (key in students) {
//   console.log(Object.keys(students));
//   console.log(Object.values(students));
}
//for work with every  single value:
//for geting keys:
Object.keys(students).forEach((key)=>{
    const student= students[key]
    console.log(student.name);
})
//for geting values:
Object.values(students).forEach((item)=>{
    console.log(item.email);
}) 



//ARRAY VS OBJECT:
const arr=[]
for(let i=0; i<5000000; i++){
    arr.push({
        id:i,
        value:i
    })
}

console.time('fing')
let id= 564565;
const obj=arr.find((item)=>item.id===id);
obj.value='emrul hassan biplob'
console.timeEnd('time-end')


//WHEN WE MUST MAINTAIN THE SICUENCCE OF A LIST,THEN WE SHOULD USE AN ARRAY INSTAD OF OBJECT.
const anArray=['apple','orange','guava','mango','chili','nuts','dates']
console.log(anArray.findIndex((item)=>{
    return item === 'mango'
}));