const URL = "https://cat-fact.herokuapp.com/facts";

 const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response); // json formate
    let data = await response.json();
    factPara.innerText = data[1].text;
};

// function getFacts () {
//     fetch (URL)
//     .then((Response) => {
//         return Response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[1].text;
//     });
// }

btn.addEventListener("click",getFacts);



























































































































































































