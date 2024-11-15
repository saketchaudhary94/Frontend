let btn = document.querySelector("button");

btn.addEventListener("click" , ()=>{
    let red = Math.floor(Math.random() * 250);
    let green = Math.floor(Math.random() * 250);
    let blue = Math.floor(Math.random() * 250);

    let color = `rgb(${red} , ${green} , ${blue})`;
    let body = document.querySelector("body");
    body.style.backgroundColor = color;
});