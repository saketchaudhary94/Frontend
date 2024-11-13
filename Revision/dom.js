let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function() {
    console.log("btn was clicked");
};

function sayHello(){
    alert("hello every one !");
};

btn.onclick = sayHello;
btn.onmouseenter = ()=>{
    console.log("you entered a button");
};