console.log("holla")


for(let j = 0; j<100; j++){
let dice = Math.floor(Math.random() * 6) + 1;
console.log (dice)
}

let dicenumber1 = 0
let dicenumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice2_btn = document.querySelector("#dice_p2")
let p1_result = document.querySelector("#p1_result")


 function diceRoll1(){
     dicenumber1 = 1+math.floor(math.random()*6)
     p1_result.innerHTML = dicenumber1
     console.log(dicenumber1)
 }

 function diceRoll2(){
    dicenumber2 = 1+math.floor(math.random()*6)
    p2_result.innerHTML = dicenumber1
    console.log(dicenumber1)
}