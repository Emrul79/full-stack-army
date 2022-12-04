const express= require('express');
const app= express();
const port=8000;

app.get('/',(req,res)=>{
    res.send("<h1>this is a heading,everything is perfect as you are</h1>")
})
function aboutpage(req,res){
    res.send(
      "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda est sed veniam reprehenderit consectetur, quae aliquid sequi iste placeat eos maxime alias maiores nulla quod! Quia consectetur quis aspernatur nam.</p>"
    );
}

function blog(req, res) {
  res.send(
    "<p>This is a blog page, amet consectetur adipisicing elit. Assumenda est sed veniam reprehenderit consectetur, quae aliquid sequi iste placeat eos maxime alias maiores nulla quod! Quia consectetur quis aspernatur nam.</p>"
  );
}
function innerRoute(req,res){
    //this function is contains for response genarator. it will just genarate response.
    //and pro
  res.send('<h1>this is simple inner route</h1>');
}
app.get('/blog',blog);
app.get("/about", aboutpage);
app.get("/about/inner", innerRoute);
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})