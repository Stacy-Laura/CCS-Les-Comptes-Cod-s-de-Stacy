/* script.js – Logique corrigée */
const lessons = [
  {
    title: "Niveau 1 – HTML de base",
    code: `<h1>Hello, world !</h1>`,
    explanation: "La balise <h1> crée un titre principal. Elle se place à l'intérieur du corps du document (<body>).",
    run: () => {
      preview.innerHTML = lessons[current].code;
    }
  },
  {
    title: "Niveau 2 – CSS simple",
    code: `h1 { color: var(--c1); font-family: 'Comic Sans MS', cursive; }`,
    explanation: "Ce CSS cible le h1 et change sa couleur. Nous utilisons la variable --c1 de notre palette Pride.",
    run: () => {
      let styleTag = document.getElementById('dynamicStyle');
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamicStyle';
        document.head.appendChild(styleTag);
      }
      styleTag.textContent = lessons[current].code;
    }
  },
  {
    title: "Niveau 3 – Interaction JavaScript",
    code: `document.querySelector('h1').addEventListener('click',()=>{ alert('Bravo !'); });`,
    explanation: "On ajoute un écouteur d’événement au titre : lorsqu’on clique dessus, une alerte apparaît.",
    run: () => {
      try { eval(lessons[current].code); }
      catch(e){ console.error(e); }
    }
  },
  {
    title: "Niveau 4 – Images & texte alternatif",
    code: `<img src="https://picsum.photos/300/200" alt="Photo aléatoire">`,
    explanation: "L’élément <img> insère une image. L’attribut alt est indispensable pour l’accessibilité.",
    run: () => { preview.innerHTML = lessons[current].code; }
  },
  {
    title: "Niveau 5 – Liens hypertexte",
    code: `<a href="https://proton.me/support/lgbtq" target="_blank" rel="noopener noreferrer">En savoir plus</a>`,
    explanation: "Le tag <a> crée un lien. target='_blank' ouvre dans un nouvel onglet.",
    run: () => { preview.innerHTML = lessons[current].code; }
  },
  {
    title: "Niveau 6 – Listes",
    code: `<h3>Couleurs Pride</h3><ul><li>Rouge</li><li>Orange</li><li>Jaune</li></ul>`,
    explanation: "Les listes <ul> structurent des groupes d’éléments.",
    run: () => { preview.innerHTML = lessons[current].code; }
  },
  {
    title: "Niveau 7 – Formulaire",
    code: `<form id="signupForm"><input type="text" placeholder="Nom" required><button type="submit">Envoyer</button></form>`,
    explanation: "Le formulaire collecte des données. Le script intercepte la soumission.",
    run: () => {
      preview.innerHTML = lessons[current].code;
      document.getElementById('signupForm').addEventListener('submit', e => {
        e.preventDefault();
        alert('Formulaire reçu !');
      });
    }
  },
  {
    title: "Niveau 8 – Flexbox",
    code: `<div style="display:flex; gap:10px;"><div style="background:var(--c2);padding:10px;">Card 1</div><div style="background:var(--c3);padding:10px;">Card 2</div></div>`,
    explanation: "Flexbox permet d'aligner les éléments facilement.",
    run: () => { preview.innerHTML = lessons[current].code; }
  },
  {
    title: "Niveau 9 – CSS Grid",
    code: `<div style="display:grid; grid-template-columns: 1fr 1fr; gap:5px;"><div>A</div><div>B</div></div>`,
    explanation: "Grid est idéal pour les mises en page en colonnes.",
    run: () => { preview.innerHTML = lessons[current].code; }
  },
  {
    title: "Niveau 10 – Fetch API",
    code: `<button id="load">Charger</button><div id="out"></div>`,
    explanation: "Fetch permet de récupérer des données dynamiquement.",
    run: () => {
      preview.innerHTML = lessons[current].code;
      document.getElementById('load').addEventListener('click', () => {
        document.getElementById('out').innerText = "Données chargées !";
      });
    }
  }
];

let current = -1;

// Sélection des éléments DOM
const welcome = document.getElementById('welcome');
const lessonSection = document.getElementById('lesson');
const lessonTitle = document.getElementById('lessonTitle');
const codeBlock = document.getElementById('codeBlock');
const explanation = document.getElementById('explanation');
const preview = document.getElementById('preview');
const runBtn = document.getElementById('runBtn');
const nextBtn = document.getElementById('nextBtn');
const startBtn = document.getElementById('startBtn');
const autoReadToggle = document.getElementById('autoRead');

// Fonction pour lire le texte (Accessibilité)
function speak(text) {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel(); // Arrête la lecture en cours
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'fr-FR';
    speechSynthesis.speak(utter);
  }
}

function showLesson() {
  const l = lessons[current];
  lessonTitle.textContent = l.title;
  codeBlock.textContent = l.code;
  explanation.innerHTML = l.explanation;
  preview.innerHTML = '';
  nextBtn.classList.add('hidden');
  
  // Lecture vocale conditionnelle
  if (autoReadToggle.checked) {
    speak(`${l.title}. ${explanation.textContent}`);
  }
}
function nextLesson() {
  current++;
  if (current >= lessons.length) {
    lessonTitle.textContent = "🎉 Félicitations !";
    codeBlock.textContent = "";
    explanation.textContent = "Vous avez terminé le cours.";
    runBtn.classList.add('hidden');
    nextBtn.classList.add('hidden');
    preview.innerHTML = "";
    return;
  }
  showLesson();
}

/* ----- ÉVÉNEMENTS ----- */

startBtn.addEventListener('click', () => {
  welcome.classList.add('hidden');
  lessonSection.classList.remove('hidden'); // On affiche la section des leçons
  nextLesson();
});

runBtn.addEventListener('click', () => {
  if (current >= 0 && current < lessons.length) {
    lessons[current].run();
    nextBtn.classList.remove('hidden'); // On débloque le bouton suivant
  }
});

nextBtn.addEventListener('click', () => {
  nextLesson();
});