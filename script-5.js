// console.log("hello!");
//  function myFunction() {
//     console.log("welcome to apna college");
//     console.log("we are leaerning JS");
//  }

// myFunction();
 
// function myFunction (msg) {
//     //parameter -> input
//     console.log(msg);
// }

// myFunction("I Love You");  // argument

// function sum(x,y) {
//    s = x + y ;
//    return s;
// }
  
// let val = sum(3,4);
// console.log(val);

// function sum(x,y) {
//     // local variables -> scope
//     s=x+y;
//     console.log(s)
//     return s;

// }

// let val = sum(2,5);
// console.log(s);
 
// // sum function 
// function sum(a,b) {
//     return a+b;
// }

// const x=5;

// const arrowSum = (a,b)=> {
//     console.log(a+b);
// };

// // multiple function 
// const  arrowMul = (a,b)=>{
//     return a*b ;
// }

//  function countVowels(str) {
//     let count = 0;
//     for(const char of str) {
//         if(
//             char === "a" || 
//             char === "e" || 
//             char === "i" ||
//         char === "o" || 
//     char === "u"     ) {
//         count++;
//     }
//     }
//     console.log(count);
//  }

// const countVow = (str) => {
// let count = 0;
// for(const char of str) {
//     if(
//         char === "a" || 
//         char === "e" || 
//         char === "i" ||
//     char === "o" || 
// char === "u"     ) {
//     count++;
// }
// }
// console.log(count);
// }

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// let arr = ["pune","delhi","mumbai"];
// arr.forEach((val ,idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr)
// });

// let nums = [2,3,4,5,6];

// nums.forEach((num) => {
//     console.log(num*num); // num**2
// });
 
// let nums = [67,34,63,62];

// let newArr = nums.map((val) => {
//     return val*2;
// })

// console.log(newArr);

// let calcSquare = (num) => {
//     console.log(num*num);
// };

// filter method 
// let arr = [1,2,3,4,5,6];

// let evenArr = arr.filter((val) => {
//     return val % 2 ===0;

// });

// console.log(evenArr);
  
// let arr = [1,2,3,4];

// const output = arr.reduce((res,curr) => {
//     return res + curr;

// });

// console.log(output);

// let arr = [1,2,3,4,5,6];

// const output = arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr;

// });

// console.log(output);


// practice questionn 
// let marks = [97,64,32,49,99,96,86];

//  let toppers = marks.filter((val) => {
//     return val > 90 ;

// })

// console.log(toppers);


let n = prompt("enter a number : ");

let arr = [];

for(let i=1; i<n; i++) {
    arr[i-1] = i; // 1(0),

}

console.log(arr);

 let sum = arr.reduce((res,curr) => {
    return res + curr;

 });

 console.log("sum",sum);

 let factorial = arr.reduce((res,curr) => {
    return res * curr ;
 });

 console.log("factorial",factorial);








































































































































































































































































































































