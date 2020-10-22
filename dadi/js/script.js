// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creiamo variabile per un button che genererà una funzione.

var button = document.getElementById('button');

// all'interno della funzione ci saranno delle variabili giocatore e cpu che genereranno dei numeri
// random e all'interno delle condizioni per stabilire il punteggio vittoria, sconfitta, pareggio.

button.addEventListener('click',

   function() {

     // Lancia dadi e ottieni numero da 1 a 6
     user = Math.floor(Math.random() * 6) + 1;
     // console.log(user);
     document.getElementById('punteggiouser').innerHTML = user;
     // Cpu
     cpu = Math.floor(Math.random() * 6) + 1;
     // console.log(cpu);
     document.getElementById('punteggiocpu').innerHTML = cpu;

     // esito della giocata
     document.getElementById('esito').innerHTML = esito;

      // creiamo delle condizioni
     if (user > cpu) {

        esito.innerHTML = "Hai vinto";
        punteggiouser.className = "bg-green";
        punteggiocpu.className = "bg-red";
        esito.className = "bg-green";

     } else if (user < cpu) {

       esito.innerHTML = "Hai perso";
       punteggiocpu.className = "bg-green";
       punteggiouser.className = "bg-red";
       esito.className = "bg-red";

     } else {

       esito.innerHTML = "Pareggio";
       punteggiouser.className = "bg-yellow";
       punteggiocpu.className = "bg-yellow";
       esito.className = "bg-yellow";
     }

     // console.log(esito);

   }
);
