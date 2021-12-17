let heightMark =170
let massMark =90
let heightJohn =1.90
let massjohn =80
function calculateBMIMark (mass,height) {
    return mass/(height*height);
    
}
console.log(Math.round(calculateBMIMark (90,1.70)));
function calculateBMIJohn (mass,height) {
    return massMark/(height*height);
    
}
console.log(Math.round(calculateBMIJohn(80,1.90)));
console.log("bu BMI John\'a ait " + Math.round(calculateBMIJohn(80,1.90)));
console.log("bu BMI Mark\'a ait " +Math.round(calculateBMIMark (90,1.70)))


function checkBmı (bmı,name) {
    if(bmı < 18.5) {
        return name +" is under weight"
    }else if (bmı>=18.5 && bmı<24.9) {
        return name +" is normal";
    }else if (bmı>=24.9 && bmı<=29.9) {
        return name+" is Overweight"
    }else if (bmı>29.9){
        return name+" is Obese"
    }else {
        return "try again"
    }
}
console.log(checkBmı(25,"selim"))