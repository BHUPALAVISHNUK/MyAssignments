function Students(score){
    switch (true) {
        case (score >=90):
            return "A";
        case (score>= 65):
            return "B";
        case (score>=35):
            return "C";
        default:
            return "Fail"
    }
   
}
let score = 58
console.log (Students(score)); // as used returne in above , need to enter console.log