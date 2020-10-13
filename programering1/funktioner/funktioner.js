let namn = "Linus"

function sayhello () {
    let ålder = 17 
    console.log(`hej ${namn}, du är ${ålder} år gammal`)
}

sayhello()
sayhello()

function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera(2,5)}`)


function subtraktion(tal1, tal2){
    let summa = tal1-tal2
    return summa
}

console.log(`2-5=${subtraktion(2,5)}`)

function dividerar(tal1, tal2){
    let summa = tal1/tal2
    return summa
}

console.log(`2/5=${dividerar(2,5)}`)

function multiplikation(tal1, tal2){
    let summa = tal1*tal2
    return summa
}

console.log(`2*5=${multiplikation(2,5)}`)