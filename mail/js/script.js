// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// chiediamo all'utente la sua mail tramite un form con un input e un tasto button per la ricerca : quindi ci sarà un function con dentro una ricerca for e una condizione if ovvero se l'email inserita dall'utente è vera avrà un esito altrimenti ne avrà un altro.

// Chiediamo all'utente la sua mail

// Creiamo la nostra array

var email = ["Christian@boolean.com","Marco@boolean.com","Giovanni@boolean.com","Paolo@boolean.com","Daniele@boolean.com"];
console.log(email);

// Variabile per il bottone
button = document.getElementById('button');

// Scriviamo la funzione associata al click pulsante

button.addEventListener('click',

   function() {

      // emailInserita sarà uguale a ciò che l'utente inserirà nell'input
      emailInserita = document.getElementById('email').value;
         // controlla se l'email inserita è uguale alla nostra lista email
             for (var i = 0; i < email.length; i++) {
               var emailRisultato = email[i];
             }
             // fine ciclo for
              console.log(emailRisultato);
              // dopo aver creato un ciclo di controllo mail andiamo a dettare le condizioni
                 if ( emailInserita = emailRisultato ) {
                   alert("Benvenuto")
                 } else {
                   alert("vai via")
                 }
                 // fine condizione if
   }
   // fine function




);
