let body = document.querySelector('body');

let redP = document.createElement('p');
redP.innerText = "Hey i am red";
redP.classList.add('red');
body.appendChild(redP);

let h3 = document.createElement('h3');
h3.innerText = "hey i am blue";
h3.classList.add('blue');
body.appendChild(h3);

let div = document.createElement('div');
div.classList.add('box');
let h1 = document.createElement('h1');
h1.innerText = "i am in div";
let p = document.createElement('p');
p.innerText = "me too ";
div.appendChild(h1);
div.appendChild(p);

body.appendChild(div);