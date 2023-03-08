// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21



// create varibles = promt message

let nome = prompt("inserisci nome");
let cognome = prompt("inserisci cognome");
let colore = prompt("inserisci colore");
let eta = prompt("inserisci la tua età");

// append promt output in a new variables
const password = `${nome}${cognome}${colore}${eta}`;





// take document element by id "text-body" 
let createPassword = document.getElementById("text-body")

// take document element by id "text-title" 
let titleBody = document.getElementById("text-title").innerHTML = "La tua nuova password è:";



let textH = document.getElementById("text-h3").innerHTML = "I tuoi dati:";
let textInput = document.getElementById("text-input");
let textli_1 = document.getElementById("li-1").innerHTML = `Nome: ${nome}`;
let textli_2 = document.getElementById("li-2").innerHTML = `Cognome: ${cognome}`;
let textli_3 = document.getElementById("li-3").innerHTML = `Colore: ${colore}`;
let textli_4 = document.getElementById("li-4").innerHTML = `Età: ${eta}`;

if(isNaN(nome) && isNaN(cognome) && isNaN(colore) && parseInt(eta)) {
    createPassword.innerHTML = `Password:<span class="italic"> ${password}</span>`;
} else {
    createPassword.innerText = "I campi non sono stati correttamente compilati";
    
    if(!isNaN(nome)){
        textli_1 = document.getElementById("li-1").innerText = "Nome: Hai inserito un valore non corretto";
    }
    if(!isNaN(cognome)){
        textli_2 = document.getElementById("li-2").innerText = "Nome: Hai inserito un valore non corretto";
    }
    if(!isNaN(colore)){
        textli_3 = document.getElementById("li-3").innerText = "Nome: Hai inserito un valore non corretto";
    }
    if(isNaN(eta)){
        textli_4 = document.getElementById("li-4").innerText = "Nome: Hai inserito un valore non corretto";
    }
}






















