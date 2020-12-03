console.log("holla")


for(let j = 0; j<100; j++){
let dice = Math.floor(Math.random() * 6) + 1;
console.log (dice)
}

let totalt = []
for(let j = 0; j<100; j++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    if(dice === 6) {
        totalt.push(6)
    }
    console.log(dice)
    if(j+1 === 100) {
        console.log(totalt.length)
    }
}


function flipcoiner(){

    let randomtal = Math.random()

console.log(randomtal)

let coinflip = Math.round(randomtal)
console.log(`coin flip: ${coinflip}`)
    if (coinflip < 1){
      console.log("tails")
    } else {
  
      console.log("head")
    }
  
  }

flipcoiner()