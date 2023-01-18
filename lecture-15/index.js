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
const books = [
  {
    name: "Pother Pachali",
    id: 1,
    description: "this is books number one(1)",
    pricing: 2545,
  },
  {
    name: "Ekattorer Dinguli",
    id: 2,
    description: "this is books number two(2)",
    pricing: 545,
  },
  ,
  {
    name: "Dakumar juli",
    id: 3,
    description: "this is books number three(3)",
    pricing: 645,
  },
  {
    name: "Pother Pachali",
    id: 4,
    description: "this is books number one(1)",
    pricing: 345,
  },
  {
    name: "Pother Pachali",
    id: 5,
    description: "this is books number one(1)",
    pricing: 745,
  },

  {
    name: "Pother Pachali",
    id: 1,
    description: "this is books number one(1)",
    pricing: 560,
  },
];

app.get('/books',(req,res)=>{
  const filtered= books.filter((book)=>book.pricing<500)
  res.json(filtered);
})

function blog(req, res) {
  res.send(
    // "<p>i love you too This is a blog page, amet consectetur adipisicing elit. Assumenda est sed veniam reprehenderit consectetur, quae aliquid sequi iste placeat eos maxime alias maiores nulla quod! Quia consectetur quis aspernatur nam.</p>"
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
    console.log(`app is running on port ${port}`);
})