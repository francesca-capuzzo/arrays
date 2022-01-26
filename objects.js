//************************************************/
//OBJECTS:


//elementi atomici : NUMERI - BOOLEANS - STRINGS ----> non tutto quello che serve può essere ridotto ad uno di questi elementi, a volte in un software ci sono insiemi di valori.
//per raggrupparli in un unico elemento, si introduce il concetto di OGGETTO. ---> ovvero un DICTIONARY (key : value pairs) ---> key è sempre una STRINGA mentre value può essere number - stringa - boolean - object - array!!!

let point = {x: 2, y: 3}              //POINT = object -- KEYS = x, y -- VALUES = 2, 3

let student = {name: "Francesca", surname: "Capuzzo", yob: 1996, married: false};

let student1 = {name: "Alessandro", surname: "Capogreco", yob: 2002, married: false};

let classe = {name: "programmatore fron-end", students: [student, student1]};

let andrea = {name: "Andrea", surname: "Asioli", class: classe};

console.log(andrea);           //il console.log di questo elemento avrà all'interno tutti gli altri grazie alla class: classe dentro cui sono contenuti gli altri 2 studenti!!

console.log(andrea.surname);   //risultato = Alioli ---> chiamata con nome dell'oggetto (andrea) . key (surname)

let andrea = {name: "Andrea", surname: "Asioli", "classe di cui è docente": classe}; 

console.log(andrea["classe di cui è docente"]);    //quando ho spazi nella key, viene chiamata usando le [] e le ""

let nomeStudente1 = student1.name;      

console.log(nomeStudente1);       //risultato: Alessandro

student1.name = "pippo";          

console.log(student1);           //risultato: (Alessandro diventa Pippo =) Pippo

console.log(student1.titoloDiStudio);  //titolo di studio non è una propietà quindi avrà risultato = undefined ma posso cambiarlo:

student1.titoloDiStudio = "Diploma di maturità".replace;

console.log(student1);

//*************************************************/
//FOR IN LOOP:

for (const key in student) {                                  //prende tutte le key nell'oggetto in questione (student)
    if (Object.hasOwnProperty.call(student1, key)) {          //controlla che l'oggetto abbia effettivamente una key (non serve questa linea)
        const element = student1[key];                        //verifica tutte le key e li logga una dopo l'altra.
        console.log(element);
    }
}


for (const key in student) {                                  
    if (Object.hasOwnProperty.call(student1, key)) {          
        const element = student1[key];                        //logga le key una dopo l'altra ma in un modo più sensato ovvero key : value.
        console.log(key + ": " + element);
    }
}


//*****************************************************************/
//TRASFORMARE OGGETTI IN STRINGA CON JSON:

console.log(JSON.stringify(andrea));                         //risultato: Una lista ordinata con key: value pairs formata da insiemi e sottoinsiemi --> stringa

let oggettoInStringa = "quello che la console da come risultato di key:value pairs"

let adreaCopy = JSON.parse(oggettoInStringa)                //risultato: ritorna un oggetto.


//******************************************************************/

function calcolaTriangoloRettangolo(catetoMaggiore, catetoMinore, ipotenusa) {
    
    let perimetro1 = catetoMaggiore + catetoMinore + ipotenusa;
    let area1 = (catetoMaggiore * catetoMinore) /2;

    return{perimetro: perimetro1, area: area1}                   //il return normale non permette di ritornare più di un valore. con l'oggetto invece si. 
}

let dimensioniTriangolo = calcolaTriangoloRettangolo(4, 3, 5);

console.log("il triangolo ha il perimetro di: "+ dimensioniTriangolo.perimetro + " e l'area: " + dimensioniTriangolo.area);


//***********************************************************************/

let firstNumber = 5

function addOne(number) {

    return number + 1;
}

let secondNumber = addOne(firstNumber);

console.log(firstNumber);    //RESULT: 5
console.log(secondNumber);   //RESULT: 6



let firstNumber = 5

function addOne(number) {

    number = number + 1;
    return number;
}

let secondNumber = addOne(firstNumber);

console.log(firstNumber);    //RESULT: 5
console.log(secondNumber);   //RESULT: 6




let firstNumber = 5

function addOne() {

    firstNumber = firstNumber + 1;
    return firstNumber;
}

let secondNumber = addOne();

console.log(firstNumber);    //RESULT: 6 (SIDE EFFECT)
console.log(secondNumber);   //RESULT: 6





//********************************************************/
//STESSA SITUAZIONE CHE C'E' IN SCRIPT.JS SUGLI ARRAY:


let myAccount = {name: "Andrea Asioli", balace: 100}

function addMoney(moneyToAdd, account) {
    
    account.balance = account.balance + moneyToAdd;
    return account;
}

let updatedAccount = addMoney(50, myAccount)

console.log(myAccount);       //RESULT: myAccount = {name: "Andrea Asioli", balace: 150} -->lavora sulla variabile e cambia l'originale che aveva già in memoria.
console.log(updatedAccount);  //RESULT: myAccount = {name: "Andrea Asioli", balace: 150}





let myAccount = {name: "Andrea Asioli", balace: 100}

function addMoney(moneyToAdd, account) {
    let tempAccount = {};                                    //va prima creato un oggetto vuoto e poi modificato.
    tempAccount = Object.assign(tempAccount, account);       //questo crea un'altra zona di memoria uguale a quella di partenza e va a modificare quella
    tempAccount.balance = tempAccount.balance + moneyToAdd;
    return tempAccount;
}

let updatedAccount = addMoney(50, myAccount);

console.log(myAccount);       //RESULT: myAccount = {name: "Andrea Asioli", balace: 100}
console.log(updatedAccount);  //RESULT: myAccount = {name: "Andrea Asioli", balace: 150}






let myAccount = {name: "Andrea Asioli", balace: 100}

function addMoney(moneyToAdd, account) {
    
    let tempAccount = {...account};       //identico a sopra ma più veloce!! come può togliere le [] toglie anche le {};
    tempAccount.balance = tempAccount.balance + moneyToAdd;
    return tempAccount;
}

let updatedAccount = addMoney(50, myAccount);

console.log(myAccount);       //RESULT: myAccount = {name: "Andrea Asioli", balace: 100}
console.log(updatedAccount);  //RESULT: myAccount = {name: "Andrea Asioli", balace: 150}






let userAndrea = {name: "Andrea Asioli", age: 43}

let myAccount = {user: userAndrea, balace: 100}      //oggetto dentro un oggetto

console.log(myAccount);                              //RISULTATO: myAccount = {user: userAndrea, balace: 100} e user = {name: "Andrea Asioli", age: 43} 

function changeAge(newAge, account) {
    
    let tempAccount = {...account};       
    tempAccount.user.age = newAge;
    return tempAccount;
}

let updatedAccount = changeAge(50, myAccount);

console.log(myAccount);       //RESULT: myAccount.user = {name: "Andrea Asioli", age: 50} -->NB: NONOSTANTE LA COPIA ALL'ACCOUNT, L'ORIGINALE E' CAMBIATO COMUNQUE!!
console.log(updatedAccount);  //RESULT: myAccount.user = {name: "Andrea Asioli", age: 50}

//{user: reference, balance: number} -->non cambio il clone di user ma lo stesso user perchè è sottoelemento di un elemento di base --> devo quindi fare una DEEP COPY:



//DEEP COPY IN 2 MODI:

let userAndrea = {name: "Andrea Asioli", age: 43}

let myAccount = {user: userAndrea, balace: 100}     

console.log(myAccount);                             

function changeAge(newAge, account) {
    
    let tempAccount = JSON.parse(JSON.stringify(account));     //trasformo un oggetto in stringa (json.stringify) e lo ri-trasformo in oggetto (json.parse) così da creare una copia di tutto!!

    tempAccount.user.age = newAge;
    return tempAccount;
}

let updatedAccount = changeAge(50, myAccount);

console.log(myAccount);       //RESULT: myAccount.user = {name: "Andrea Asioli", age: 43}
console.log(updatedAccount);  //RESULT: myAccount.user = {name: "Andrea Asioli", age: 50}



//OFF TOPIC:
let userAndrea = {name: "Andrea Asioli", age: 43}

let myAccount = {user: userAndrea, balace: 100}   


function chageAge(newAge, account) {
    account.user.age = newAge;
}

changeAge(50, myAccount);
console.log(myAccount.user.age); //RESULT: myAccount.user = {name: "Andrea Asioli", age: 50} 
//in questo caso cambia l'oggetto di partenza ma nella maggior parte delle volte andrà bene così e non ci servirà una copia dell'orignale


//3 MODI PER CICLARE LE KEY DI UN OGGETTO E TUTTI HANNO LO STESSO RISULTATO

let student = {name: "Simone", surname: "Aloia", age: 24};

console.log(Object.keys(student));   //RESULT: {name, surname, age}


for (const key of Object.keys(student)) {
    console.log();                            //RESULT: {name, surname, age}
}



for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);                  //RESULT: {name, surname, age}
    }
}


for (let i = 0; i < Object.keys(student).length; i++) {
    const element = Object.keys(student)[i];

    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);                    //RESULT: {name, surname, age}
    }
}


//*******************************************************************/

let pippo = {name: "pippo", city: "topolinia"};

let pippo1 = pippo;

let pippo2 = {name: "pippo", city: "topolinia"};

console.log(pippo === pippo1);    //RESULT: TRUE
console.log(pippo === pippo2);    //RESULT: FALSE --> nonostante siano uguali in key:value pairs, l'uguaglianza va a vedere la reference (zona di memoria del computer) dell'oggetto ma non il suo contenuto.


//*****************************************************************/

const age = 5;
const name1 = "Osvaldo";
let baby = {age, name1}

console.log(baby);   //RESULT: {age: 5, name1: Osvaldo} --> posso creare un oggetto dandogli valori assegnati a variabili esterne. --> name1 fa schifo quindi:

let baby = {age, name: name1}

console.log(baby);   //RESULT: {age: 5, name: Osvaldo}


//***************************************************************/

