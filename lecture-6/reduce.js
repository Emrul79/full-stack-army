

// //implimentation of reduce fuction;


// function myRduce(array,callBack,iniialize){
//     let acc=iniialize;

//     for (let i=0; i<array.length; i++){
//         acc= callBack(acc,array[i],i,array)
//     }
//     return acc;
// }
// const myesult= myRduce([1,2,3,4,5,6,7,8,9],(a,b)=>{
//     return a+b;
// },1000)
// console.log(myesult);




// //again:
// function reduce(array,cb,initial){
//     let accum= initial;

//     for(let i=0;i<array.length; i++){
//         accum= cb(accum,array[i],array)
//     }
//     return accum
// }


const axios= require('axios');
const url = "https://jsonplaceholder.typicode.com/posts";

 async function myfunction(){
    const {deta}= await axios.get(url);
    console.log(deta);
}
myfunction()