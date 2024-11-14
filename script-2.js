 /* This is a code that prints hello world
 on our console widndow*/
//  console.log("hello world!");

 //Arithmetic Operation
//  let a = 5;
//  let b = 2;
// console.log("a=",a,"& b=",b);
//  console.log("a+b",a+b);
//  console.log("a-b",a-b);
//  console.log("a*b",a*b);
//  console.log("a/b",a/b);
//  console.log("a%b",a%b);
//  console.log("a**b",a**b); 

//Unary Operator
// let a = 5;
// let b = 2;
// console.log("a=",a,"& b=",b);
// a++;
// console.log("a=",a);

// console.log("a++ =" ,a++);
// console.log("a =" ,a);

// console.log("++a =" ,++a);
// console.log("a =" ,a);

// console.log("--a =" ,--a);
// console.log("a =" ,a);

// console.log("a-- =" ,a--);
// console.log("a =" ,a);

// let a = 5;
// let b = 2;
// a=4; // a=a**4
//  console.log("a=",a); //1
// a+=4; // a=a+4
// console.log("a=",a); //9
// a*=4; // a=a*4
// console.log("a=",a); //20
// a/=4; // a=a/4
// console.log("a=",a); //1
// a%=4; // a=a%4
// console.log("a=",a); //1
// a**=4; // a=a**4
// console.log("a=",a); //

// let a = 5; // Number
// let b = "5"; // string

// // console.log("5==2",a==b); //false
// // console.log("5!=2",a!=b); //true

// console.log("5===5",a===b); //false
// console.log("5!==2",a!==b); //true

// let a = 5;
// let b = 3;

// console.log("5<3",a<b);
// console.log("5<=3",a<=b);
// console.log("5>3",a>b);
// console.log("5>=3",a>=b);

//Logical Operator
// let a = 6;
// let b = 5;
// console.log("cond1 && cond2 =",a<b && a===6);
// console.log("cond1 || cond2 =",a<b || a===6);
// console.log("!(6<5)=",!a<b);

// Conditionial statement
// let age = 16;

// if(age>=18) {
//     console.log("You can vote");
// }

// if(age<18) {
//     console.log("You cann't vote");
// }

// let mode = "dark"
// let color;

// if( mode==="dark") {
//     color = "black";
// }

// if(mode==="light") {
//     color = "white";
// }

// console.log(color);

// if-else statement
// let mode = "blue";
// let color;
//  if(mode==="dark") {
//     color = "black"
//  } else {
//     color = "white";
//  }

//  console.log(color);

//  let age = 25;
  
//  if(age>=18) {
//     console.log("vote");
//  } else {
//     console.log("Not vote");
//  }

//  let num = 10;

//  if (num % 2 === 0) {
//     console.log("is even")
//  } else {
//     console.log("is odd");
//  }

// else-if statement

//  let mode = "dark";
//  let color;

//  if (mode === "dark") {
//     color = "black";
//  } else if (mode === "blue") {
//     color = "blue";
//  } else if (mode === "pink") {
//     color = "pink";
//  } else {
//     color = "white";
//  }

//  console.log(color);

// if(mode==="dark") {
//     console.log(mode);
// }

// let age = 25;
//  let result = age>18 ? "adult" : " not adult";
//   console.log(result);

 // Practice Question
 //alert("hello!");  .//create pop up on webpage

// let num = prompt("enter a number");
// if(num % 5 === 0) {
//     console.log(num,"is multiple of 5");
// } else {
//     console.log(num,"is NOT a multiple of 5");
// }

let score = 96;
let grade;

if (score>=90 && score <= 100) {
    grade = "A";
} else if (score >=70 && score <= 89) {
    grade = "B";
} else if ( score >=60 && score <=69) {
    grade = "C";
} else if (score >=50 && score <=59) {
    grade = "D";
} else if (score >=0 && score <=49) {
    grade = "F";
} 

console.log("according to your scores, your grade was : ",grade);
