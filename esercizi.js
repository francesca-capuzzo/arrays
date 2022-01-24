let n = +Infinity;                              
function minNumber(...numbers){
    for (let i = 0; i < numbers.length; i++) { 
        const element = numbers[i];  
        if (n > element)  { 
            n = element;
        }
    }
    return n;
}
console.log(minNumber(-100, -12, -3, -1001));



//**********ESERCIZIO 2******************/

function range(maxNumber) {
    let array1 = [];
    for (let i = 0; i <= maxNumber; i++) {
        array1.push(i);
    }
    return array1;
}
console.log(range(5));




//********ESERCIZIO 3*************/

let strings = ["Cosenza", "Genova", "Alessandria", ""];
let initials = []

for (let i = 0; i < strings.length; i++) {
    const element = strings[i];
    if (strings[i] === ""){
        break;
    } else {
        initials.push(strings[i][0]);                          //oppure if (string !== "") --> initials.push(element[0]);
    }  
}

console.log(initials);