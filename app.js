// let val;

// val = document;
// val = document.all;
// val = document.all[5];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// // val = document.links[0].id;
// // val = document.links[0].className;
// // val = document.links[0].classList[0];

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);//converting to an array

// scriptsArr.forEach(scripts => {
//     console.log(scripts);
// });
// console.log(val)

// console.log(document.getElementById('well'));

// console.log(document.getElementById('well').id);
// console.log(document.getElementById('well').className);

// const well = document.getElementById('well')

// well.style.background = 'black';
// well.style.color = 'white';

// well.textContent = 'Hack Academy'
// well.innerText = 'black';
// well.innerHTML = '<span style = "color:white"> Black</span>';

// // document.querySelector()
// console.log(document.querySelector('#well'))
// console.log(document.querySelector('.form-group'))
// console.log(document.querySelector('input'))

// document.getElementsByClassName

// const items = document.getElementsByClassName('form-control')
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[2].textContent = 'Hello';  

// const listitem = document.querySelector('form').getElementsByClassName('form-control');

// console.log(listitem);

// let forms = document.getElementsByTagName('form')
// console.log(forms);
// console.log(forms[0]);
// forms[0].style.color = 'red';
// forms[1].createTextNode('Hello');  

// const listitem = document.querySelector('form').getElementsByClassName('form-control');
// forms = Array.from(forms)

// forms.reverse();

// forms.forEach((form)=>{
//     console.log(form.Id)
// })

// console.log(forms);

// document.querySelectorAll()

// const liOdd = document.querySelectorAll('.form-group:nth-child(odd)');
// const liEven = document.querySelectorAll('.form-group:nth-child(even)');

// liOdd.forEach(formgroup =>{
//     formgroup.style.background = '#ccc';
// });

// for (let i =0; i < liEven.length; i++){
//     liEven[i].style.background = ' #f4f4f4'
// }


// // Creating Elements
// const input = document.createElement('input');

// //Add Class
// input.className = 'form-control'; 

// // Add ID
// input.id = 'my-input5';

// //Add Attribute
// input.setAttribute('name', 'password')

// //Create TEXT NODE AND APPEND
// // input.appendChild(document.createTextNode("Hello WORLD"));

// let former = document.querySelectorAll('.form-group');

// former[former.length-1].appendChild(input)


// console.log(former[former.length-1]);

// REPLACE ELEMENT

// const newHeading = document.createElement('h1');
// newHeading.id=hh;
// newHeading.textContent='Are you ready!';

// //Get the old content
// const oldHeading = document.querySelector('#hh');
// // Parent
// const h4 = document.querySelector('#h4');

// //Replace
// h4.replaceChild(newHeading, oldHeading);
// console.log(newHeading);

// // REMOVE ELEMENT
// const inputs = document.querySelectorAll('input');
// const forms = document.querySelector('.form-group'); 
// //Removing thr element
// inputs[0].remove();


// //classes
// let val;
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test')
// link.classList.remove('test')
// val=link;

// //attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com')

// console.log(val)
