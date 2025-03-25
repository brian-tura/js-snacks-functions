/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter(names) {
    const nameInitals = [];
    var holder;
    for(var i = 0; i < names.length; i++){
        holder = names[i];
        nameInitals.push(holder.charAt(0));
    }
    return nameInitals;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]