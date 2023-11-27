/* !!! Sono riuscito a fare solo la versione desktop per mancanza di tempo */

// Ottieni il pulsante e la barra di navigazione
let pulsante = document.querySelector('.afterThis');
let getStarted = document.querySelector("nav ul li button");
let navbar = document.querySelector('nav');


// Funzione per cambiare il colore della barra di navigazione
let cambiaColoreNavbar = () => {
  // Ottieni la posizione del pulsante rispetto alla finestra
  const rect = pulsante.getBoundingClientRect();
  const pulsanteTop = rect.top;

  // Ottieni la posizione dello scroll
  const scrollTop = window.scrollY || window.scrollY;

  // Verifica se la posizione dello scroll è sopra il pulsante
  if (scrollTop <= pulsanteTop) {
    getStarted.style.backgroundColor = "black";
    navbar.style.backgroundColor = '#ffc017'; // Torna al colore originale
  } else {
    getStarted.style.backgroundColor = "green";
    navbar.style.backgroundColor = 'white'; // Cambia il colore a bianco
  }
}

// event listener per rilevare lo scroll della pagina
window.addEventListener('scroll', cambiaColoreNavbar);


//ANIMAZIONE DELLE M, NON RIUSCITA
/* 
let M = document.querySelectorAll('#M text'); // Seleziona tutte le lettere 'M'

// Funzione per animare le lettere 'M'
function animateLetters() {
    M.forEach((lettera, index) => {
    lettera.style.transition = `opacity 0.5s ${index * 0.1}s`; 
    lettera.style.opacity = '0';
  });

  // Avvia un timeout per mostrare nuovamente le lettere
  setTimeout(() => {
    M.forEach((lettera, index) => {
      lettera.style.opacity = '1'; // Mostra la lettera 'M'
    });
  }, M.length * 100 + 500); // Tempo totale dell'animazione con un margine di sicurezza
}

animateLetters(); */
