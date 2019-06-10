const buttonEl = document.querySelector("button");
const inputEl = document.querySelectorAll("input");
const errors = document.querySelector("#error-message")

// const details = JSON.parse(localStorage.getItem('details')) || {};

// document.addEventListener('DOMContentLoaded', getInput)
// const IUserInterface = require("./iuserData.json")
// const IUserInterface ={
//     fullname: "",
//     username: "",
//     email: "",
//     password: ""
// }
const userData = {
    fullname: "",
    username: "",
    email: "",
    password: ""
};

// for(let data in userData ){
//     if(data.trim().length === 0){
//         console.log(data)
//     }
// }

// console.log(IUserInterface)
buttonEl.addEventListener('click', (e) => {
    // console.log(e.target.textContent)
    e.preventDefault();
    //buttonEl.style.backgroundColor="green";
    // console.log(userData)
    for(let data in userData ){
        if(userData[data].length === 0){
            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.textContent = `${data} is required`;
            errors.appendChild(listItem);
            setTimeout(() => {
                errors.style.display = "none";
                
            }, 3000);
            return;
        }
    }
    storeDetailsinLS();

    location.assign("continue.html");
})

// NodeList.prototype.map = Array.prototype.map;


inputEl.forEach(input => {
    input.addEventListener("input", (e) =>{
       userData[e.target.name] = e.target.value;
    })
});

function storeDetailsinLS(){
    // let details = JSON.parse(localStorage.getItem('details')) || [];
    // details.userDetail = userData;
    localStorage.setItem('details', JSON.stringify(userData));
}
