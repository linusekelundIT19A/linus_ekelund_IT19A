// skapar en variabel som heter name och tilldelar det värdet "Kokchun"
let name = "Linus" // sträng
let age = 17 // heltal, int 

console.log(`Hej ${name} du är ${age} år gammal`)

// if-sats - att göra val
if (age >= 18){console.log("Du är vuxen")} 
else 
{console.log("Du är barn")}

// DOM - Document Object Model
let text = document.querySelector("#text")
text.innerHTML = `${name} är ${age} år gammal`
// skapar variabler för p tagarna 
let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#divition")
let add = document.querySelector("#addtion")
let sub = document.querySelector("#subtrkation")

mult.innerHTML = `multiplikation`
div.innerHTML = `divition`
add.innerHTML = `addtion`
sub.innerHTML = `subtraktion`

let button = document.querySelector("#knapp")

button.addEventListener("click",Math)

function Math(event){
console.log("math-funktioner körs")

let num1 = parseFloat(document.querySelector("#number1").value )
let num2 = parseFloat(document.querySelector("#number2").value )

add.innerHTML = `${num1}+${num2}=${num1+num2}`
}


