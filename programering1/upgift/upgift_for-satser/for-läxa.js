let p_lektioner = document.querySelector("#lektioner")
let p_tal1 = document.querySelector("#tal1")
let p_tal2 = document.querySelector("#tal2")


for (let i=2 ; i<=100 ; i++){
p_tal1.innerHTML +=`${i} `
i++
}
for (let l=1 ; l<=100 ; l++){
    p_tal2.innerHTML +=`${l} `
    l++ 
    }


let lektioner = ["Svenska", "Engelska", "Programmering", "Matematik", "Idrott"]
p_lektioner.innerHTML = "Mina lektioner är: <br/>"

console.log(lektioner.length)

for (let k = 0; k < lektioner.length; k++){
p_lektioner.innerHTML += `${k+1} . ${lektioner[k]} <br/>` 
}