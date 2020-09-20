var critFail;
critFail = 0;

//conditional statemsnt
//function reRoll() {
//    if (critFail == 0 ) {
//        console.log ("zero");
//    } 
//}



//Number between 1-20
console.log(Math.floor(Math.random() * 20)) + 1;

//Number between 1-10
console.log(Math.floor(Math.random() * 10)) + 1;

//Number between 1-8
console.log(Math.floor(Math.random() * 8)) + 1;

//Number between 1-6
console.log(Math.floor(Math.random() * 6)) + 1;

//Number between 1-4
console.log(Math.floor(Math.random() * 4)) + 1;

//Number between 1-100
console.log(Math.floor(Math.random() * 100)) + 1;


document.getElementById("disp").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}




//var for (let index = 0; index < array.length; index++) {
//    const element = array[index];
    
//}



//Display roll result
//alert("You are " + userAge );


//let upper = 20
//let lower = 1

//let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower

//console.log(myRandom);



