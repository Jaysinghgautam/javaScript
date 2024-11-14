//   function hello () {
//     console.log("hello");
//   }

//   console.log("one");
//   console.log("two");
 
//  setTimeout( () =>{
//     console.log("hello");
//  },4000); // timeout

// console.log("three");
// console.log("four");

// function sum(a,b) {
//     console.log(a+b);
// }  

// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
//   }

// calculator(1,2,sum);


// const hello = () => {
//     console.log("hello");

// };
//  setTimeout(hello,3000);

// let age = 19;
// if (age >=18) {
//     if(age >=60) {
//         console.log("senior");
//     } else {
//         console.log("middle")
//     }
// } else {
//     console.log("child");
// }

// function getData(dataId,getNextData) {
//     setTimeout (() => {
//           console.log("data",dataId);
//           if(getNextData) {
//             getNextData();
//           }
//      },2000);
// }

// getData(1, () => {
//     getData(2,() => {
//         getData(3,() => {
//             getData(4);
//         });
//     });
// });

 
//  let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     reject("some error occurred");
//  });

// function getData(dataId,getNextData) {
//     return new Promise((resolve,reject) => {
//         setTimeout (() => {
//             // console.log("data",dataId);
//             // resolve("success");
//             reject("error");
//             if(getNextData) {
//                 getNextData();
//             }
//         },5000);
//     });

// }

// const getPromise = () => {
//    return new Promise ((resolve,reject) => {
//         console.log("I am a promise");
//        // resolve("success");
//         reject("error");
//     });
// };
 
// let promise = getPromise();
//  promise.then((res) => {
//     console.log("promise fulfilled");
//  });

//  promise.catch((err) => {
//     console.log("rejected",err);
//  });



// function  asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function  asyncFunc2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1");
// asyncFunc1().then((res) => {
//     console.log("fetching data2...");
//  asyncFunc2().then((res) => {
//    });
// });
    
 // async fucntion 

//  function api() {
//   return new Promise((resolve,reject) => {
//    setTimeout(() => {
//     console.log("weather data");
//     resolve("200");
//    },2000);
//   } );
//  }

//  async function getWheatherDAta() {
//     await api();
//     await api();
//  }

function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

// async function getAllDAta() {
// console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);
//     console.log("getting data6...");
//     await getData(6);

// }

function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
 
(async function ()  {
    console.log('getting data1.....');
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
} () )
























































































































































































































































































