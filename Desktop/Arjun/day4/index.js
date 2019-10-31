/*-----------console.dir(document);  

console.log(document.URL);
console.log(document.title);
document.title="Document OM";
console.log(document.title);
console.log(document.all[7]);----------*/


// console.log(document.getElementById("intro"));  /* getting a partlcular id*/

// let store = document.getElementById("intro");
// console.log(store);
// store.textContent= "good morning";
// console.log(store.textContent);
// store.innerHTML= '<h2>hello-changed text style</h2>';
// console.log(store.textContent);


// let store = document.getElementById("paragr");
// store.innerHTML = '<h3>this is inputing through jscript</h3>';
// console.log(store);

//document.getElementById("paragr").innerHTML = '<h3>this is inputing through jscript</h3>';


// let hold = document.getElementsByClassName("heading");
// console.log(hold);
// hold[0].textContent= "hello";
// hold[1].textContent= "hai";


// /********change the style */
// hold[1].style.borderBottom = 'solid 3px black';
// hold[0].style.fontWeight = 'bold';
// // hold[0].style.backgroundcolor = "green";

// // var i = 0;
// // for(i=0; i<hold.length; i++){
// //     hold[i].style.backgroundColor ="yellow"; 
    
// // }

// let safe = document.getElementsByTagName('h1')
// console.log(safe);
// safe[1].textContent = 'Tag text content'; */

/***********query selector */

// let area = document.querySelector('input');
// // console.log(area);
// area.value = 'pliiiing!!!!!!!';

// let area = document.querySelector('#textClass');
// area.value = 'pliiiing!!!!!!!';

// let submit = document.querySelector('input[type= "submit"]');
// submit.value = 'send';

// let list = document.querySelector(".lichid");
// list.style.color = 'red';

// let lastitem = document.querySelector('.lichid:last-child');
// lastitem.style.color = 'blue';

// let seconditem = document.querySelector('.lichid:nth-child(2)');
// seconditem.style.color = 'green';

function myfunction(){
    let list = document.querySelector(".lichid");
list.style.color = 'red';

let lastitem = document.querySelector('.lichid:last-child');
lastitem.style.color = 'blue';

let seconditem = document.querySelector('.lichid:nth-child(2)');
seconditem.style.color = 'green';
}

function dontMyFunction(){

    let list = document.querySelector(".lichid");
list.style.color = 'black';

let lastitem = document.querySelector('.lichid:last-child');
lastitem.style.color = 'black';

let seconditem = document.querySelector('.lichid:nth-child(2)');
seconditem.style.color = 'black';
}


function onloadFunction(){

    alert("page is loaded");

}


function onChangeFunction(val) {
    alert("The input value has changed. The new value is: " + val);
  }

  function onSubmitFunction() {
    alert("The form was submitted");
  }