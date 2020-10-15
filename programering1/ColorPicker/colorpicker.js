let colorpicker = document.querySelector("#colorpicker")
let rektangel = document.querySelector("#rektangel")

rektangel.style.backgroundcolor ="pink"

colorpicker.addEventListener("change", colorchanger)
function colorchanger(event){
 let color = e.target.value;
 console.log(color)   
}