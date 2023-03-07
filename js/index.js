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

// create algorithm for a correct output
if(isNaN(nome) && isNaN(cognome) && isNaN(colore) && parseInt(eta)) {
    createPassword.innerHTML = `Password:<span class="italic"> ${password}</span>`;
} else {
    createPassword.innerText = "I campi non sono stati correttamente compilati";
    textInput.style.display = "none";
}



let textH = document.getElementById("text-h3").innerHTML = "I tuoi dati:";
let textInput = document.getElementById("text-input").innerHTML = `<ul id="text-input" class="list-style">
<li class="mb-5">Nome:<span class="italic"> ${nome}</span></li>
<li class="mb-5">Cognome:<span class="italic"> ${cognome}</span></li>
<li class="mb-5">Colore:<span class="italic"> ${colore}</span></li>
<li class="mb-5">Età:<span class="italic"> ${eta}</span></li>
</ul>`











