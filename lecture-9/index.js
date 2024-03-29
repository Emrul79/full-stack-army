/*ফাংশনাল প্রোগ্রামিং নিয়ে আলোচনা করতে গেলে আমাদের আগে জানতে হবে ফাংশনাল প্রোগ্রামিং কি? উইকিপিডিয়ার ভাষায়, 'In computer science, functional programming is a programming paradigm where programs are constructed by applying and composing functions.' মানে ফাংশনাল প্রোগ্রামিং এমন একটা প্যারাডাইম যেখানে প্রোগ্রাম, ফাংশন অ্যপ্লাই ও কম্পোজ করার মাধ্যমে কনস্ট্রাক্ট করা হয়। দুই ধরণের ফাংশনাল প্রোগ্রামিং ল্যাঙ্গুয়েজ আছে। Pure এবং Impure। যে প্রোগ্রামিং ল্যাঙ্গুয়েজে ফাংশনাল প্রোগ্রামিং ছাড়া অন্য কিছু সাপোর্ট করে না সেগুলোকে বলে পিওর ফাংশনাল প্রোগ্রামিং ল্যাঙ্গুয়েজ। আর যেগুলোতে ফাংশনাল প্রোগ্রামিং ছাড়াও OOP সাপোর্ট করে তাদের বলে ইমপিওর প্রোগ্রামিং ল্যাঙ্গুয়েজ। ফাংশনাল প্রোগ্রামিং এর কিছু কনসেপ্ট আছে। সেগুলো বুঝার আগে আমাদের ফাংশন কিভাবে লিখতে হয় তা একটু জানা দরকার। জাভাস্ক্রিপ্টে ফাংশন তিনভাবে লেখা যায়। ফাংশন স্টেটমেন্ট, ফাংশন এক্সপ্রেশন, ফ্যাট এরো ফাংশন (ইএস৬ ভার্সন থেকে)। এগুলোর স্ট্রাকচার একটু দেখা যাক। https://stacklearner.com/lecture-9-functional-programming-in-javascript */

//Higher order function
//Higher order function এই টার্ম যেখানে আসবে সেখানে এটার সাথে আরেকটা টার্ম যুক্ত হবে সেটা হলো ফার্স্ট ক্লাস সিটিজেন। ফার্স্ট ক্লাস সিটিজেন বলতে আমরা ফাংশনকে ভ্যালু হিসেবে ট্রিট করতে পারবো এটা বুঝায়। এটা সম্পর্কে আমরা আগে লেকচারে বুঝেছিলাম। সেটা থেকে এটা অন্তত প্রমাণিত যে জাভাস্ক্রিপ্টে ফাংশন একটা ভ্যালু।

//একটা ফাংশন হাইয়ার অর্ডার হওয়ার জন্য দুইটা শর্ত আছে।

//Function can be passed as an argument.
//Function can be returned from another function.

// এই দুইটা শর্তের কারণে জাভাস্ক্রিপ্ট ফাংশন যে কতটা পাওয়ারফুল তা যারা এক্সপার্ট হয়ে গেছেন তারা বুঝতে পারবেন।

// ফাংশনাল প্রোগ্রামিং নিয়ে কাজ করতে হলে অবশ্যই ফাংশন পিওর হতে হবে। সবার প্রথমে আমরা প্রথমে খুব সাধারণ একটা হাইয়ার অর্ডার ফাংশন তৈরি করে ফেলি। আমরা একটা যোগ করার ফাংশন তৈরি করবো।

function sum(a, b) {
  const r = a + b;
  return r;
}

// এটা যদিও পিওর ফাংশন, কিন্তু এটা মোটেও হাইয়ার অর্ডার ফাংশন না। কারণ এটা শর্তমতে কোনো ফাংশন রিটার্নও করছে না, আবার কোনো ফাংশনকে আর্গুমেন্ট আকারে পাসও করছে না। এখন এই ফাংশনকে হাইয়ার অর্ডার ফাংশন বানালে আমাদের কি উপকার হবে সেটা আমাদের বুঝতে হবে। আমরা কেন জোর করে একটা ফাংশনকে হাইয়ার অর্ডার ফাংশন বানাবো? ধরুন আমরা দুইটা র‍্যান্ডম নাম্বার জেনারেট করে সেই দুইটা নাম্বার দিয়ে কিছু ম্যাথমেটিকাল অপারেশন করার ফাংশন বানাবো। কিন্তু আর্গুমেন্ট আকারে আমি পাশ করবো একটা ভ্যালু।

const nyfunction = function (yourChoise) {
  const num1 = Math.floor(Math.random() *20 );
  const num2 = Math.floor(Math.random()* 40);
  
  const result= yourChoise(num1,num2);
//   console.log(result);
};

function mySum(num1,num2){
    return num1+num2;
}
function mySub(num1, num2) {
  return num1 - num2;
}
function mytimes(num1, num2) {
  return num1 * num2;
}
nyfunction(mySum);
nyfunction(mySub);
nyfunction(mytimes);


// function sumation(){
//     const {num1,num2}= nyfunction();
//     console.log(num1+num2);
// }
// sumation()




// যেহেতু আমাদের হাইয়ার অর্ডার ফাংশনের প্রথম শর্তমতে একটা ফাংশনকে আর্গুমেন্ট হিসেবে পাস করতে পারছি তাই এটা একটা হাইয়ার অর্ডার ফাংশন।

// এবার আসি আমাদের দ্বিতীয় শর্তে। এখন একটা ফাংশন থেকে আরেকটা ফাংশন রিটার্ন করার কি প্রয়োজন? আমরা একটু নিচের উদাহরণগুলো দেখি। ধরা যাক আমাদের একটা স্কয়ার করার ফাংশন বানাতে বলা হলো

function sqr(a) {
  return a * a;
}
//এবার যদি কিউব করতে বলার হয় তাহলে আমরা কিউব করার একতা ফাংশন বানাবো।

function cube(a) {
  return a * a * a;
}


// কিন্তু আসল কাজ হচ্ছে এখানে পাওয়ারের কাজ। তার মানে কোনো নাম্বারের কততম পাওয়ার আমরা বের করতে চাচ্ছি মূল কাজ হচ্ছে সেটা। সুতরাং আমরা এত ফাংশন না লিখে পাওয়ারের জন্যই একটা ফাংশন বানিয়ে ফেললে হয়ে যায়।

function power(p) {
  return function (n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= n;
    }
   console.log(result);
  };
}

power(3)(2)




//Scope
//আমরা যদি উপরের power ফাংশনের ভিতরের ফাংশনকে বাইরে বের করে এনে দেখি তাহলে কেমন দেখা যায় দেখি। 
const f = function (n) {
  let result = 1;
  for (let i = 1; i <= p; i++) {
    result *= n;
  }
  return result;
};
function power(p) {
  return f;
}
//এখানে একটা error throw করবে, Reference error: p is not defined। কারণ জাভাস্ক্রিপ্ট লেক্সিক্যাল স্কোপিং সাপোর্ট করে। মানে কোন ভ্যারিয়েবল কোথায় accessible, এটাকেই মূলত স্কোপ বলা হয়। এখন কোন ভ্যারিয়েবল বা কোন ফাংশন কোথায় এক্সেসিবল তা সেট করা হয় যখন lexing হয়। এখন lexing আবার কি? আমরা যে কোডগুলো লিখি কম্পিউটার তার কিছুই বুঝে না। কম্পিউটার বুঝে মেশিন কোড মানে বাইনারি। আমাদের লিখিত কোডকে ভেঙেচুরে মেশিন কোডে রূপান্তর করে কম্পিউটারের কাছে দিলেই কম্পিউটার তা বুঝতে পারবে। এই যে মেশিন কোডে রূপান্তরের প্রসেস, তার প্রথম ধাপই হলো parsing and lexing। অর্থাৎ আমরা যে ফাইলটা দিচ্ছি, সেটা জাভাস্ক্রিপ্ট ইঞ্জিন, অন্যান্য ল্যাঙ্গুয়েজের ক্ষেত্রে কম্পাইলার, lexing বা parsing করবে, এর মধ্যে কি কি আছে তা পড়ে ফেলবে। পড়ে সেই কোডগুলোকে টুকরো টুকরো করে ফেলবে। টুকরো টুকরো করে একটা Abstract Binary Tree (ABS) বানাবে। এই Tree বানানোর প্রসেসটাকেই বলা হচ্ছে lexing করা। আর এই lexing করার কাজটা হয় কম্পাইল করারও আগে। যেহেতু কম্পাইল করার আগে lexing হচ্ছে, তাই কাটাছেঁড়ার সময় যখন সে f ফাংশনে p পাচ্ছে না তখন সে error throw করবে। পাবে কিভাবে, সেতো কোড রান করছে না। জাস্ট পড়ছে। পড়ার সময় যদি এরর পায় সে সেটা আমাদের দিয়ে দিচ্ছে। এজন্য lexical scoping এর কিছু প্রব্লেম আছে। যদি কম্পাইল টাইমে scope সেট হতো তাহলে কম্পাইল করার সময় অনেক কিছু বুঝতে পারতো। যদি রানটাইমে scope সেট হতো তাহলে রান করার সময় আমরা ডায়নামিক্যালিভাবে scoping তৈরি করতে পারতাম। কিন্তু জাভাস্ক্রিপ্ট যেহেতু lexical scoping সাপোর্ট করে তাই এই কাজটা আমরা জাভাস্ক্রিপ্টে পারবো না। যদি f ফাংশনকে আমরা power এর মধ্যে রাখি তাহলে সে p যদি f এর কাছে না পায় তাহলে বাইরে দিয়ে দেখলে দেখবে প্যারেন্ট ফাংশনের কাছে p আছে। তাহলে আর কোনো সমস্যা নাই।


function power(p) {
  const f = function (n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= n;
    }
    return result;
  };
  return f;
}

//Closure
//Closure হলো একটি মেমোরি যা আমরা একটা ফাংশন নিঃশেষ হওয়ার পরে ব্যবহার করতে পারি। যেমন sqr ফাংশন কল করার পরে আমরা p এর ভ্যালু হিসেবে 2 পাই। এটা তখনই পাবো যখন ঐ ফাংশনটা পুরোপুরি শেষ হয়ে যাবে। এটাই ক্লোজার। আরো ভালভাবে বুঝতে আপনারা গল্পে গল্পে ক্লোজার এই ভিডিওটি দেখতে পারেন।
//Execution Context
//আমরা একটু আগে কিছু ফাংশন বানাই।
function A(a) {
    console.log('I am A');
}

function B() {
    A();
}

function C() {
    B();
    B();
}
function D() {
    C();
    A();
}

D();
/* 
I am A
I am A
I am A
*/
//কোন ফাংশনের পর কোন ফাংশন কল হবে ্তা নির্ভর করে কল স্ট্যাকের উপর। স্ট্যাক একটা ডাটা স্ট্রাকচার। এর নীতি হলো Last In First Out (LIFO)। মানে সবার শেষে যে আসবে সে সবার আগে বের হবে। আমরা যখন প্লেট ধুয়ে একটার উপর একটা রাখি তখন প্রথম প্লেট রাখি সবার নিচে আর শেষ প্লেট রাখি সবার উপরে। যখন আমরা প্লেট নিই তখন উপর থেকেই নিই, অর্থাৎ সবার শেষে যে প্লেটটা রেখেছিলাম সেটা নিই আগে। আর প্রথমে যেটা রেখেছিলাম সবার নিচে, সেটা নিই সবার শেষে। কল স্ট্যাক এভাবে কাজ করে। এই কোডে যখন D কল করা হলো তখন সে D এর ভিতর গিয়ে কল করবে C কে। এরপর D pause হয়ে যাবে। D এর উপর C চলে যাবে। এরপর C তে যাওয়ার পর সে কল করবে B কে। এবার B চলে যাবে C এর উপর। এবার B তে গিয়ে কল হবে A। তাহলে A চলে যাবে B এর উপর। A তে গিয়ে A কল করার পর কল স্ট্যাকের উপর থেকে A চলে যাবে। এরপর যেহেতু A কল হয়ে গেছে, সেহেতু B চলে যাবে স্ট্যাক থেকে। এরপর ফিরে আসবে C তে। C তে আসার পর দেখা গেলো B ফাংশনের কাজ আছে আরেকটা। সেটাও আগের মতো শেষ হয়ে আবার ফিরে আসবে C তে। এবার C এর কাজ শেষ। C স্ট্যাক থেকে চলে যাবে। এরপর ফিরে আসবে D তে। D তে আসার পর C এর কাজ শেষ। এবার যাবে A তে। A চলে যাবে স্ট্যাকে D এর উপর। A কল হয়ে আবার D তে ফিরে আসবে। এবার D এর কাজ শেষ। এরপর ফাইনালি স্ট্যাক থেকে D চলে যাবে।\


function randomSum(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  
  t();//undefined

  function t() {
    console.log(test);
  }
  var test = "something";
  t();//something

  console.log(random1 + random2);//random number 
}

const r = randomSum(15);
