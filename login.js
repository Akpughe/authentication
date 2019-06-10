const buttonEls = document.querySelector("button");
const firstD = document.querySelector('#user');
const secondD =  document.querySelector('#pass')
const errors = document.querySelector("#error-message")


const details = JSON.parse(localStorage.getItem('details')) || {};

// console.log(details)


buttonEls.addEventListener('click', (go)=>{
    go.preventDefault();
    if (firstD.value === details.username.toLowerCase() && secondD.value === details.password.toLowerCase()){
        location.assign('welcome.html')
    }else{
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = "Invalid Data";
        errors.appendChild(listItem);
        setTimeout(() => {
            errors.style.display = "none";
            
        }, 3000);
    }
        // localStorage.removeItem('details');
})


window.onbeforeunload = function() {
    // localStorage.removeItem('details');
    // return '';
};









