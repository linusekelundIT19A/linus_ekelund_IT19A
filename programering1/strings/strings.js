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
 let alfabetet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"
 let bokstav1 = alfabetet[0]
 let bokstav5 = alfabetet [4]

 console.log(`bokstav på index 0 är: ${bokstav1}`)
 console.log(`bokstav på index 4 är: ${bokstav5}`)

 let antal_bokstäver = alfabetet.length
 console.log(`antal bokstäver i alfabetet är ${antal_bokstäver}`)

let mening = "Jag läser IT-programent på NTI kronhus i göteborg"
 function räkna_ord (ord){
    
     let res = ord.split(" ");
     let n = res.length;
     return n 
  }
  console.log (räkna_ord(mening))

  