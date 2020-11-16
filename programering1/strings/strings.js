console.log (`hej`)



let fornamn = `linus`
let efternamn = `Ekelund`
let namn = fornamn + " " + efternamn
let adress = `Adress: videgårdvägen 103`
let telefon = `telefon: 5555`
let ålder = `ålder: 17`
console.log ("namn:" + namn +"\n" +"ålder" + ålder  +"\n" + "telefon:" + telefon +"\n" +"adress" + adress)

let p_personuppgifter = document.querySelector ("#personuppgifter")
 p_personuppgifter.innerHTML = "namn:" + namn +"<br>" +"ålder" + ålder  +"<br>" + "telefon:" + telefon +"<br>" +"adress" + adress
 let alfabetet = " ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"
 let bokstav = alfabetet[0]
 console.log(`bokstav på index 0 är: ${bokstav}`)