const numbersAray=[1,52,552,5,52,NaN,'undefined',false];
const newArray=numbersAray.map((V)=>{
    if(typeof V === 'number'){
        return V.toString()
    }else{
        return 0
    }
})

const filteredArray= numbersAray.filter((data)=>{
   return (typeof data === 'number')
})

const strs= filteredArray.map((v)=>{
    return v.toString()
})

// console.log(strs);

const myNumbers=[3,2,32,3,43,2,4,2,undefined,false, ,2,322,431,2]

const sum=myNumbers.reduce((a,b)=>a+b,'1000')
// = myNumbers.reduce((a,b)=>{
//     return a+b 

// },1000)
const sumaton= myNumbers.reduce((acc,curr,index)=>{
     if (index === 0) acc += "[";
    if(curr){
        acc += curr + (index< myNumbers.length-1 ? ' , ' : ' ')
    }
    
     if (index === myNumbers.length-1) acc += "]";
    return acc
   
},'')


// console.log(sumaton);
const arrays= myNumbers.reduce((acc,curr)=>{
    if(curr){
        acc.push(curr.toString())
    }
    return acc
},[])
console.log(arrays);


const array1=[];
for (let i=0; i<50000; i++){
    if(i%2===0){
    array1.push(i * 2) 
    }
}
console.log(array1);
/*
    uses of built in js array method:
    1.map:[same length of the original array];
    2.filter:[return the filtered item only];
    3.reduce:[no one knows what it will return (only author knows)->number,string,true,false,function,object,array . it means we can return every possible value by using reduce.];
    
*/