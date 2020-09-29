
let p_klass = document.querySelector("#klasslistan")
for(let i = 0; i<5; i++){
console.log (`${i}.i will not write all over the walls`)}

let p_talserie1 = document.querySelector("#talserie1")
p_talserie1.innerHTML = `bruh`
for(let i = 0; i<5; i++){
    p_talserie1.innerHTML += `${i} `
}
let p_talserie2 = document.querySelector("#talserie2")
p_talserie2.innerHTML = `cool`
for(let j = 10; j>0; j--){
    p_talserie2.innerHTML += `${j} `
}
let p_summa = document.querySelector("#summa")
let summa = 0
 for (let i=0; i<=10; i++){
   summa +=i;  
 } 
 p_summa.innerHTML += `1 + 2 + 3 +...+9+10 = ${summa}`   
console.log (summa)

let elever = ["Linus", "Maz", "Sebbe", "Elis", "Rasmus"]
p_klass.innerHTML = "klass IT 19A innhåller följande elever <br/>"

console.log(elever.length)

for (let k = 0; k < elever.length; k++){
p_klass.innerHTML += `${k+1} . ${elever[k]} <br/>` 
}

