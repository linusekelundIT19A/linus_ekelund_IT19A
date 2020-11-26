let textArea = document.querySelector("#textArea")
let knapp = document.querySelector("#knapp")
let p_diplaywords = document.querySelector("#displaywords")
 
knapp.addEventListener("click", countWords);

function countWords(){
  
  if (palindrome(textArea.value)){
    p_diplaywords.innerHTML = "Det är palindrom"
  } else {

    p_diplaywords.innerHTML = "det är inte palindrom"
  }

}


function palindrome(str){
    let reversed = str.split("").reverse().join("")
    console.log(reversed)
    if (reversed === str) 
      return true;
    
    return false;
}

