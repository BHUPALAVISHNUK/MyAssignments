function Numbertype(number) {
    if (number === 0) {
        return "Zero"
    }
    else if (number > 0){
        return "Positve"
    }
    else {
        return "Negative"
    }
}
let num = 1974673892
console.log(Numbertype(num))