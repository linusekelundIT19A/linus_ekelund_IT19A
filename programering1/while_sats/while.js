

let h1_titel = document.querySelector("#titel");
let p_talserie1 = document.querySelector("#talserie1");
let p_talserie2 = document.querySelector("#talserie2");

h1_titel.innerHTML = "while-sats"

let n = 10
while (n >= 0){
    p_talserie1.innerHTML += `${n},`
    n--
}
let k = 10
while (k >=-10){
p_talserie2.innerHTML += `${k},`
k--
}