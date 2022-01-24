//ARRAY: ******************************************//
//Gli array possono avere qualsiasi contenuto senza distinzione di tipo:

let firstArray = [1, true, "pippo"];

console.log(firstArray);

//risultato:  NB --> solitamente gli array/liste dovrebbero avere gli stessi elementi per tipologia al loro interno ma Javascript consente multi-type arrays.
// 0: 1
// 1: true
// 2: "pippo"
// length: 3

//*************************************************************************/
//FOR LOOP (2 MODI):

let secondArray = ["pippo", "pluto", "paperino"];

console.log(secondArray.length);

for (let i = 0; i < secondArray.length; i++) {
    const element = secondArray[i];             //di default il for loop da la possibilità di andare a trovare l'elemento all'indice i salvato nella costante "element".
    console.log(element);
}



for (const element of secondArray) {           //è lo stesso modo di scrivere il for loop precedente ma senza indicare l'indice a cui sono.
    console.log(element);
}


//****************************************************************************/
//LIFO - LAST IN FIRST OUT:

secondArray.push("topolino");   //push = aggiungo un elemento alla fine

console.log(secondArray);

secondArray.pop();              //pop = tolgo l'ultimo elemento inserito

console.log(secondArray);

let ultimoElemento = secondArray.pop()   //in questo caso vado ad inserire l'ultimo elemento in una variabile così da poterlo recuperare se serve.

console.log(ultimoElemento);

//****************************************************************************/
//FIFO - FIRST IN FIRST OUT:

let primoElemento = secondArray.shift();   //PUSH funziona allo stesso modo con i FIFO ma per prendere il primo della stack anzichè l'ultimo, utilizzo SHIFT()

console.log(primoElemento);

secondArray.unshift("paperone");           //UNSHIFT mette alla prima posizione "paperone"

console.log(secondArray);

//*****************************************************************************/
//INDICE E UTILIZZO:

console.log(secondArray[1]);              //va a trovare l'elemento a quell'indice specifico. (senza cambiarlo)

secondArray[1] = "paperina"               //va a cambiare l'elemnto a quell'indice specifico.

console.log(secondArray);

//****************************************************************************/
//CONCATENAZIONE DI ARRAYS:

let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let subArray = thirdArray.slice(2, 3);    //prende il numero di partenza (compreso) e indice finale (NON compreso) --> risultato: [2]
                                          //senza intaccare l'array originale
console.log(subArray);

console.log(thirdArray);

let subArray2 = thirdArray.splice(2, 3);  //prende il numero di partenza (2)(compreso) e tanti elementi dopo quello quanti ne scrivo nel secondo numero (3)

console.log(subArray2);

console.log(thirdArray);

let subArray3 = thirdArray.splice(2, 3, 12, 13, 14);  //in questo caso toglie dall'array 2, 3, 4 e li rimpiazza con 12, 13, 14.

console.log(subArray3);

console.log(thirdArray);

//************************************************************************/
//

let numeroPiuGrande = Math.max(5, 10, 2);           //risultato --> 10 ovvero sempre il numero più grande

console.log(numeroPiuGrande);

let numeroPiuGrandeArray = Math.max(...thirdArray);  //i ... distribuiscono l'array e lo trasformano in valori così da restituire il valore maggiore.

console.log(numeroPiuGrandeArray);

function stringaPiuLunga(...stringhe) {              //tutti i parametri inseriti vengono re-impacchettati come array
    let strPiuLunga = ""             
    for (let i = 0; i < stringhe.length; i++) {
        const element = stringhe[i];
        if (strPiuLunga.length < element.length){
            strPiuLunga = element;
        }
    }
    return strPiuLunga;
}
console.log(stringaPiuLunga("pippo", "topolino", "pluto"));





let n = -Infinity;                               //funziona con i numeri negativi ponendo n = -infinity (il numero più piccolo in assoluto) oppure ponendo n = numbers[0] perchè il primo numero che verrà passato sarà sempre il più piccolo (o più grande)
function maxNumber(...numbers){
    for (let i = 0; i < numbers.length; i++) {   //.length si riferisce alla lunghezza dell'array dentro cui sono stati impacchettati i numbers con la funzione ...
        const element = numbers[i];
        if (n < element)  { 
            n = element;
        }
    }
    return n;
}
console.log(maxNumber(-100, -12, -3, -1001));


