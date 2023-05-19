/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

*/

window.addEventListener("load", function(){
    //Genero gli utenti
    let utente = ``;
    for(i in utenti){
        if(i!=0){
            utente += `<li onclick="cambiaIcona(${i})"><div class="material-symbols-outlined icone">`;
            
            utente += utenti[i].genereUt == "m"? "face": "face_3";

            utente += `</div>
                        ${utenti[i].nomeUtenti} ${utenti[i].cognomeUtenti.substring(0,1)}.
                    </li>
            `;
        }
    }

    document.getElementById("listUtenti").innerHTML += utente;
    creaChat(1);
});

function cambiaIcona(i){
    //cambio icona
    document.getElementById("faceChat").innerText = utenti[i].genereUt == "m"? "face": "face_3";
    
    //cambio nome
    document.getElementById("divNome").innerText = utenti[i].nomeUtenti + " " + utenti[i].cognomeUtenti;

    //cambio ora
    document.getElementById("divUltimoMes").innerText = utenti[i].ora;

    creaChat(i);
}

function creaChat(i){
    let chat = ``;
    for(let j in messaggi){
        if(messaggi[j].mittenti == i)
            chat += `<article class="mes ut1">${messaggi[j].messaggio}</article>`;
        else if(messaggi[j].destinatari == i)
            chat += `<article class="mes ut2">${messaggi[j].messaggio}</article>`;
    }
    document.getElementById("zonaMessaggi").innerHTML = chat;
}

function invia(){
    //invio del testo quando clicco il bottone invia
    let testo = document.getElementById("testoInput").value;
    if(testo != ""){
        document.getElementById("zonaMessaggi").innerHTML += '<article class="mes ut2">' + testo + '</article>';
        document.getElementById("testoInput").value = "";
    }
}