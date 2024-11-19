// let inp = document.querySelector("input");
// inp.addEventListener("keydown" , (event)=>{
//     if(event.code == "ArrowUp"){
//         console.log("moving up");
//     }
//     else if(event.code == "ArrowLeft"){
//         console.log("moving left ");
//     }
//     else if(event.code == "ArrowRight"){
//         console.log("moving Right ");
//     }
//     else if(event.code == "ArrowDown"){
//         console.log("moving down ");
//     }
//     else{
//         console.log("you pressed wrong button ");
//     }
// });

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let inp = document.querySelector("input").value;
    const n = parseInt(inp);
    printFibonacci(n);
});

function printFibonacci(n) {
    if (n < 0) {
        alert("Please enter a non-negative number.");
        return;
    }

    let a = 0, b = 1;
    console.log(a); 
    if (n > 0) console.log(b); 

    while (true) {
        let next = a + b;
        if (next > n) break; 
        console.log(next);
        a = b;
        b = next;
    }
}
