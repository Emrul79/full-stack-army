



//prove: function is a value
function testFunction(){
    console.log('i am a test function');
}
const fn = testFunction;
console.log(fn);
fn();

const arr= [fn,testFunction];

const obj={
    fn:testFunction
}