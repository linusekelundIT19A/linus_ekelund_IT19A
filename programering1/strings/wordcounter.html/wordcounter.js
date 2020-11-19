let textArea = document.querySelector("#textArea")
let knapp = document.querySelector("#knapp")
let p_diplaywords = document.querySelector("#displaywords")
 
knapp.addEventListener("click", countWords);

function countWords(){
console.log("kör funktion countword")
let text = textArea.value
console.log(text)
let word = text.split(" ")
 console.log(word.length)
 p_diplaywords.innerHTML = word.length
}