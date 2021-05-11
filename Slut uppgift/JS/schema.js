console.log("hej")
let bamba = document.querySelector("#bamba")

fetch("../JS/bamba.txt")
  .then(Response => Response.text())
  .then (text =>  {
    text = text.split("\n")
    console.log(text)
    for (let i = 0; i <=4; i++){
      console.log(text[i])
      bamba.innerHTML += `${text[i]}<br>`
    }
  })