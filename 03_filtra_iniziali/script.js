/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function letterSearch(names){
    const matches = [];
    var letter = prompt("Inserire lettera iniziale da cercare");
    letter.toUpperCase;
    if(letter.length !== 1) {
        console.log("Inserire solo una lettera");
    }
    if(/[A-Z]/.test(letter) === false){
        console.log("Inserire una lettera dell'alfabeto");
    }
    for(var i = 0; i < names.length; i++){
        if(names[i].charAt(0) === letter){
            matches.push(names[i]);
        }
    }
    return matches;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(letterSearch(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
