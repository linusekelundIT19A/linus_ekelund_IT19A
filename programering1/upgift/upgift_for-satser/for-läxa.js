let p_lektioner = document.querySelector("#lektioner")












let lektioner = ["Svenska", "Engelska", "Programmering", "Matematik", "Idrott"]
p_lektioner.innerHTML = "Mina lektioner är: <br/>"

console.log(lektioner.length)

for (let k = 0; k < lektioner.length; k++){
p_lektioner.innerHTML += `${k+1} . ${lektioner[k]} <br/>` 
}