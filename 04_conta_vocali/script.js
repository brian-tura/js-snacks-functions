/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function isThereVowels(word){
    let v = 0;
    const check = ["a", "e", "i", "o", "u"];
    for(var i = 0; i < word.length; i++){
        for(var j = 0; j < check.length; j++){
            if(word.charAt(i) === check[j]){
                v += 1;
            }
        }
    }
    return v;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(isThereVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)