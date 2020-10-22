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
     document.getElementById('user').innerHTML = user;
     // Cpu
     cpu = Math.floor(Math.random() * 6) + 1;
     // console.log(cpu);
     document.getElementById('cpu').innerHTML = cpu;

     // esito della giocata
     document.getElementById('esito').innerHTML = esito;

      // creiamo delle condizioni
     if (user > cpu) {

        esito.innerHTML = "Hai vinto";
        user.className = "bg-green";
        cpu.className = "bg-red";

     } else if (user < cpu) {

       esito.innerHTML = "Hai perso";
       cpu.className = "bg-green";
       user.className = "bg-red";

     } else {

       esito.innerHTML = "Pareggio";
       user.className = "bg-yellow";
       cpu.className = "bg-yellow";
     }

     // console.log(esito);

   }
);
