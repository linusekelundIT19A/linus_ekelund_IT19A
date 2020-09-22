// bagage //
// vikt
let vikt = prompt ("hur mycket kg väger ditt bagage")
if(vikt > 8){
    console.log("ditt bage är för tungt")
}else if (vikt ==8){
    console.log ("den väger precis")
}
else {
    console.log("du kan ha ditt bagage i vårat flygg")
}
// (längd x bredd x höjd)//
//  55cm x 40cm x 23cm //
let längd = prompt ("hur många cm är ditt dagage i cm")
let bredd = prompt ("hur bredd är ditt bagage i cm")
let höjd = prompt ("hur hög är ditt bagage i cm")

if(längd < 55 && bredd < 40 && höjd < 23){
    console.log("du kan använda ditt bagage")
} else if (längd == 55 && bredd == 40 && höjd == 23){
    console.log ("ditt bagage passar precis")
}
 else {
    console.log ("ditt bagage är för stort")
}

