// const student = {
//     fullName: "jaysingh gautam",
//     marks : 94.,
//     printMarks: function () {
//         console.log("marks = ",this.marks); //  student.marks
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
 
// };

// const karanArjun =  {
//     salary:5000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     },

// };


// karanArjun._ = employee;


// class ToyotaCar{

//     constructor(brand ,mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//         start () {
//             console.log("start");
//         }
//         stop () {
//             console.log("stop");
//         }

//         setBrand(brand) {
//             this.brandName = brand;

//         }
// }

// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner);
// // fortuner.setBrand("fortuner");
// let lexis = new ToyotaCar("lexis",12);
// // lexis.setBrand("lexis");
// console.log(lexis);

// class Parent {
//     hello() {
//         console.log("hello");    
//     }
// }

// class Child extends Parent {}
// let object = new Child();
     

// class Person {
//     constructor () {
//         this.species = "home sapiense";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep () {
//         console.log("sleep");
//     }
// }
//     class Engineer extends Person  {
//         work () {
//             console.log("solve  problems, build something");
//         }
//     }

//     class Doctor extends Person  {
//         work () {
//             console.log("treat patients:");
//         }
//     }
//     let shradhaObj = new Engineer();


// class Person {
//     constructor (name) {
        
//         this.species = "home sapiense";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
// }
//     class Engineer extends Person  {
//         constructor(name) {

//             super(name); // to invoke parent class constructor
//         }
//         work () {
//             super.eat();
//             console.log("solve  problems, build something");
//         }
//     }
//     let engObj = new Engineer("shradha");

 // practice question-1;
 
// let DATA = "secret information";

// class User {
//     constructor(name,email) {
//         this.name = name;
//         this.email = email;

//     }

// viewData() {
//     console.log("data =",DATA);
//   } 
// }

// class Admin extends User {
//     constructor(name,email) {
//         super(name,email);
//     }
//     editData() {
//         DATA = "some new value";
//     }
// }


// let student1 = new User("jaysingh","gjaysingh53@gmail.com");
// let student2 = new User("sooraj","gjaysingh05@gmail.com");
// let wife = new User("manisha","manisha454@gmail.com");

//  let Admin1 = new Admin("admin","admincollege.com");


  let a=5; 
  let b = 9;
  console.log("a=",a);
  console.log("b=",b);
  console.log("a+b=",a+b);

 try {
    console.log("a+b=",a+c);// error
 } catch (err) {
    console.log("err");

 }

  console.log("a+b=",a+b);
  console.log("a+b=",a+b);
  console.log("a+b=",a+b);
  console.log("a+b=",a+b);
  console.log("a+b=",a+b);
  console.log("a+b=",a+b);
  console.log("a+b=",a+b);
  console.log("a+b=",a+b);
  
  





































































































