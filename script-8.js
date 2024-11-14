// let fullName="jaysingh";
// console.log( fullName); 

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// }

 

// let btn1 = document.querySelector("#btn1");

// // btn1.onclick = (evt) => {
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     console.log(evt.clientX,evt.clientY);
// // };

// btn1.addEventListener("click", () => {
//     console.log("button was clicked");
     
     
// });

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler1`");
// });
// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler2");
// });

// const handler3 = () => {
//     console.log("button was clicked-handler3");
// };

// btn1.addEventListener("click", () => {
//     console.log("button was clicked-handler3");
// });
// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler4");
// });

// btn1.removeEventListener("click",handler3);


//  let div = document.querySelector("div");
//  div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//  };

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
   if(currMode === "light") {
    currMode = "dark";
     body.classList.add("dark");
    body.classList.remove("light");
   } else {
    currMode = "light";
    body.classList.add("light");
   body.classList.remove("dark");
   }

   console.log(currMode);
});
















































































































































































































































