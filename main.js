/**
 *  OGGETTI: lista NON ordinata di elementi
 *  - Gli elementi sono rappresentati da una coppia CHIAVE: VALORE
 *      - Chiave: stringhe oppure Symbol
 *      - Valore: puo' essere qualsiasi cosa
 *   
 *  - PROPRIETA': tutte le chiavi il cui valore associato sono qualsiasi cosa tranne una funzione
 *  - METODI: tutte le chiavi il cui valore associato e' una funzione
 */

// Vogliamo rappresentare una PERSONA
let person = {
    // PROPRIETA'
    'firstname': 'Nicola',
    'age': 39,
    'hardSkills': ['HTML', 'CSS', 'Javascript'],
    'hair': false,

    // METODO
    'sayHello': function () {
        return `Ciao a tutti mi chiamo ${this.firstname}`;
    }
}

// Accedere ad una proprieta' di un oggetto, utilizzare la DOT SYNTAX
console.log( person.firstname );

// Invocare un metodo' di un oggetto, utilizzare la DOT SYNTAX
console.log( person.sayHello() );

// Inserire una nuova Proprieta' all'interno di un oggetto
person.height = 1.82;

console.log(`${person.sayHello()}, sono alto ${person.height} metri e ho ${person.age} anni`);

person.hardSkills.forEach(skill => console.log(skill));

console.log(person);

/** RUBRICA
 *  Scrivere un programma che rappresenti una rubrica di un cellulare.
 *  Implementare le seguenti funzionalita':
 *      1- mostrare tutti i contatti
 *      2- mostare un singolo contatto
 *      3- aggiungere un nuovo contatto
 *      4- rimuovere un contatto esistente
 */
let rubrica = {
    'contacts': [
        {'name': 'Carmine', 'number': 33311111},
        {'name': 'Valerio', 'number': 33322222},
        {'name': 'Serena', 'number': 33333333},
        {'name': 'Giulia', 'number': 33344444}
    ],
    // 1- mostrare tutti i contatti
    'showContacts': function () {
        this.contacts.forEach(element => console.log(`Nome: ${element.name} - Numero: ${element.number}`));
    },
    // 2- mostare un singolo contatto
    'showSingleContact': function (searchName) {
        let filtered = this.contacts.filter(element => searchName == element.name);

        console.log(filtered);

        // Abbiamo trovato un SOLO contatto
        if (filtered.length == 1) {
            console.log(`Il contatto trovato e': ${filtered[0].name} con il numero ${filtered[0].number}`);
        } else if(filtered.length > 1) { // se troviamo casi di omonimia
            console.log(`Sono stati trovati ${filtered.length} contatti`);
            filtered.forEach(element => console.log(`Nome: ${element.name}, Numero: ${element.number}`));
        }
        else { // NON e' stato trovato
            console.log(`Il contatto ${searchName} che stai cercando non e' presente in rubrica`);
        }
    },
    // 3- aggiungere un nuovo contatto
    'addContact': function(contactName, contactNumber) {
        this.contacts.push( {'name': contactName, 'number': contactNumber} );
    },
    // 4- rimuovere un contatto esistente
    'removeContact': function(nome) {
        // Primo approccio
        // let filtered = this.contacts.filter(element => element.name !== nome);
        // this.contacts = filtered;

        // Secondo approcio: dobbiamo fare un clone dei contatti che contenga solo i NOMI
        let mapped = this.contacts.map(el => el.name); // clone dei contatti con solo i NOMI
        let index = mapped.indexOf(nome); // trovo l'indice del nome che voglio rimuovere
        
        if(index > -1) {
            this.contacts.splice(index, 1);
        } else {
            console.log(`Contatto non presente in rubrica`);
        }        
    },
    
}

let newName = prompt('Inserisci il nome del contatto:');
let newNumber = prompt('Inserisci il numero del contatto:');


// 3- aggiungere un nuovo contatto
rubrica.addContact(newName, newNumber);

rubrica.addContact('Michele', 33355555);

// 2- mostare un singolo contatto
rubrica.showSingleContact('Nicola');

// 4- rimuovere un contatto esistente
rubrica.removeContact('Valerio');

// 1- mostrare tutti i contatti
rubrica.showContacts();


/**
 *  Scrivere un programma che rappresenti il gioco del Bowling.
 *  Implementare le seguenti funzionalita':
 *      1- impostare i punteggi che ottengono i singoli giocatori in modo casuale
 *      2- impostare il punteggio finale per ogni giocatore
 *      3- determinare il vincitore
 *      4- aggiungere un nuovo giocatore
 * 
 */
let bowling = {
    'players': [
        {'name': 'Giuseppe', 'scores': [] },
        {'name': 'Michele', 'scores': [] },
        {'name': 'Serena', 'scores': [] },
        {'name': 'Alessia', 'scores': [] }
    ],
    // 1- impostare i punteggi che ottengono i singoli giocatori in modo casuale
    'setScores': function() {
        this.players.forEach(element => {
            for(let i = 1; i <= 10; i++) {
                element.scores.push(Math.floor(Math.random() * (10 - 0) + 0));
            }
        })
    },
    // 2- impostare il punteggio finale per ogni giocatore
    'setFinalScore': function() {
        this.players.forEach(element => element.finalScore = element.scores.reduce( (acc, el) => acc + el, 0));
    },
    //  3- determinare il vincitore
    'setWinner': function() {

        // Ordiniare la lista dei giocatori in base al punteggio finale in ordine DECRESCENTE
        this.players.sort((a, b) => b.finalScore - a.finalScore);

       // Confrontare il risultato finale del primo giocatore con il secondo
       if (this.players[0].finalScore > this.players[1].finalScore) {
            let winner = this.players[0];
            console.log(`Il vincitore della partita e' ${winner.name} con un punteggio finale di ${winner.finalScore} punti`);
       } else { // Quando c'e' il pareggio
            let winner1 = this.players[0];
            let winner2 = this.players[1];
            console.log(`C'e' stato un pareggio tra ${winner1.name} e ${winner2.name} che hanno totalizzato entrambi ${winner1.finalScore} punti`);
       }
    }
}

bowling.setScores();

bowling.setFinalScore();

bowling.setWinner();

console.log(bowling.players);




