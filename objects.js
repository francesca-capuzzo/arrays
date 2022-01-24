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