// let h1 = document.querySelector("h1");

// function changeColor(color , delay, nextColorChange){
//     setTimeout(function () {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     } , delay);
// }

// changeColor("orange" , 1000 , function() {
//     changeColor("red" , 1000 , function(){
//        changeColor("green", 1000 );

//     });
// });

function saveDb(data){
    return new Promise(function(resolve , reject){
        let internetSpeed  = Math.floor(Math.random() * 10);
        if(internetSpeed > 4){
            resolve("success : data was save successfully ");
        }
        else{
            reject("reject : poor connection ");
        }
    });
}

saveDb("saket chaudhary ")
 .then((result)=>{
    console.log("Data 1 saved ");
    console.log("result of promise is =" , result);
    return saveDb("Soni baby ");
 })
 .then((result)=>{
    console.log("Data 2 saved ")
    console.log("result of promise is =" , result);
    return saveDb("Ankit chaudhary ");
 })
 .then((result)=>{
    console.log("Data 3 saved ");
    console.log("result of promise is =" , result);
 })
 .catch((error)=>{
    console.log("Promise was rejected :");
    console.log("error of promise is =" , error);
 });

