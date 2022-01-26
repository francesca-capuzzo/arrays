//********* LINKED LISTS **********/

let firstElement = {value: 5, nextElement: null, previusElement: null};

let secondElement = {value: 9, nextElement: null, previusElement: firstElement};

firstElement.nextElement = secondElement;

let thirdElement = {value: 8, nextElement: null, previusElement: secondElement};

secondElement.nextElement = thirdElement;

let fourthElement = {value: 2, nextElement: null, previusElement: thirdElement};

thirdElement.nextElement = fourthElement;

//per ciclare una lista di questo tipo non posso usare il for loop perchè non ho indici ma devo usare il ciclo while:

let node = firstElement; 

while(true) {
    console.log(node.value);                       //RISULTATO: 5, 9, 8, 2

    if(node.nextElement !== null) {
        node = node.nextElement;
    } else {
        break;
    }
}


//oppure DO WHILE:

while (node !== null) {                          //finchè c'è node:
    console.log(node.value);                     //logga la value:
    node = node.nextElement;                     //prendi il successivo finchè arriva a (node == null) e finische il ciclo.
}
//RISULTATO: 5, 9, 8, 2

let node2 = fourthElement;

while (node2 !== null) {                          //finchè c'è node:
    console.log(node2.value);                     //logga la value:
    node2 = node2.previusElement;                 //prendi il precedente finchè arriva a (node == null) e finische il ciclo.
}
//RISULTATO: 2, 8, 9, 5


let myFirstNode = {};                                 //risulterà undefined.

function addElementToLinkedList(firstNode, value) {
    if (firstNode.value === undefined){               //oppure linkedList === {} o undefined                
        firstNode.value = value;
        firstNode.nextElement = null;
        firstNode.previusElement = null;              //creo il primo nodo.
    }else {

        let lastNode = firstNode;                      //
        
        while (lastNode.nextElement !== null) {        //se l'elemento succesivo c'è: lastnode è uguale al successivo finchè non arrivo a null (ultimo elemento)
        
            lastNode = lastNode.nextElement;
            
        }
        let node = {value: value, previusElement: lastNode, nextElement: null};

        lastNode.nextElement = node;

    }
}

addElementToLinkedList(myFirstNode, 6)
console.log(myFirstNode);


addElementToLinkedList(myFirstNode, 16)
console.log(myFirstNode);


addElementToLinkedList(myFirstNode, 116)
console.log(myFirstNode);
//NB MANO A MANO CHE RICHIAMO LA FUNZIONE, myFirstNode aumenta di 1 elemento!!


//*******************************************/


//Creare un array vuoto e andarlo a popolare con i valori che arrivano dal ciclo while:
function linkedListToArray(linkedList) {
    
}

console.log(linkedListToArray(firstElement));  // --> [5, 9, 8, 2]


//***************************************/

let array = [7, 8, 12, 5]

function arrayToLinkedList(array) {
    
}

console.log(arrayToLinkedList(firstElement));