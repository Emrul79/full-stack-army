


//function for getting random id:
// function randomId(){
//     return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/{xy}/g,(c)=>{
//         const r= (Math.random()*16) | 0;
//         const v= c==='x' ? r: (r & 0*3) | 0 * 8;
//         return v.toString(16)
//     })
// }
// console.log(randomId());

const students = [
  {
    name: "emrul hassan biplob",
    id: 1,
    email: "hemrul494@gmail.com",
  },
  {
    name: "nahidul shuvo",
    id: 2,
    email: "nahidul94@gmail.com",
  },
  {
    name: "nahidul nishad",
    id:3,
    email: "nishad494@gmail.com",
  },
];

    //by using array we will get benefited by those facilities:
    // 1.Easyly Traverse;
    //2.Filter;
    //3.Delete; (medium)[splice->O(n), fiter-O(n)]
    //4.Update;(medium) (easy) [push->O(n)]
    //5.create a new one. [push-> O(1),unshift->O(n)]


//task: create a new object and push this into our previous array:
// let newStudents1={
//     name:'kawser jony',
//     id:4,
//     email:'kawser@GMAIL.com'
// }

function Newfunction(name,id,email){
    return {
        name,
        id, 
        email
    }
}
students.push(Newfunction("rocky", 9, "rocky67@gmail.com"));


//update operations:
students.map((student)=>{
    if(student.id===3){
        student.name='my name is rakibul hassan'
        student.email='rakibjr34@gmail.com'
    }
})


//another way to do this:
 const IdtoUpdate=2;
 const updatedData={
    name:" i am modified name",
   

 }
const updatedIndex= students.findIndex((item)=>item.id===IdtoUpdate)
students[updatedIndex]={
    ...students[updatedIndex],
    ...updatedData
}
console.log("updtaed ",students);
students.splice(updatedIndex,1)

console.log("deleted ", students);




//ARRAY TRAVERSING:
//1.forEach
//2.map(return new array)
//filter
//every
//reduce
//some
//find
//findIndex


//if we try to trverse an array in imperaive way instad of declearative way,then we can use for(of) or for(in) loop;

//for loop
for(let i=0;i<students.length; i++){
  console.log(students[i].name);
}
//for in [for geting index]
for(let i in students){
  console.log(students[i].email);
}

//for of [for getting value]
for(let i of students){
  console.log(i.id);
}


