/* script.js – logique du MVP */
const lessons = [
  {
    title: "Niveau 1 – HTML de base",
    code: `<h1>Hello, world !</h1>`,
    explanation: "La balise <code>&lt;h1&gt;</code> crée un titre principal. Elle se place à l’intérieur du corps du document (<code>&lt;body&gt;</code>).",
    run: () => {
      preview.innerHTML = lessons[current].code;
    }
  },
  {
    title: "Niveau 2 – CSS simple",
    code: `h1 { color: var(--c1); font-family: 'Comic Sans MS', cursive; }`,
    explanation: "Ce CSS cible le <code>h1</code> et change sa couleur. Nous utilisons la variable <code>--c1</code> de notre palette Pride.",
    run: () => {
      // Crée ou remplace une balise <style>
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
    title: "Niveau 3 – Interaction JavaScript",
    code: `document.querySelector('h1').addEventListener('click',()=>{ alert('Bravo !'); });`,
    explanation: "On ajoute un écouteur d’événement au titre : lorsqu’on clique dessus, une alerte apparaît.",
    run: () => {
      // Évalue le code en toute sécurité (sandbox limité)
      try { eval(lessons[current].code); }
      catch(e){ console.error(e); }
    }
  },
  {
  title: "Niveau 4 – Images & texte alternatif",
  code: `<img src="https://picsum.photos/300/200" alt="Photo aléatoire représentant la diversité des couleurs du drapeau Pride">`,
  explanation: "L’élément `<img>` insère une image. L’attribut `alt` décrit l’image aux lecteurs d’écran ; il est indispensable pour l’accessibilité.",
  run: () => {
    preview.innerHTML = lessons[current].code;
  }
},
{
  title: "Niveau 5 – Liens hypertexte",
  code: `<a href="https://proton.me/support/lgbtq" target="_blank" rel="noopener noreferrer">En savoir plus sur les drapeaux LGBTQ+</a>`,
  explanation: "Le tag `<a>` crée un lien. `target=\"_blank\"` ouvre le lien dans un nouvel onglet, et `rel=\"noopener noreferrer\"` améliore la sécurité.",
  run: () => {
    preview.innerHTML = lessons[current].code;
  }
},
{
  title: "Niveau 6 – Listes",
  code: `<h3>Couleurs du drapeau Pride</h3>
<ul>
  <li>#E40303 – Rouge</li>
  <li>#FF8C00 – Orange</li>
  <li>#FFED00 – Jaune</li>
  <li>#008026 – Vert</li>
  <li>#004CFF – Bleu</li>
  <li>#732982 – Violet</li>
</ul>`,
  explanation: "Les listes `<ul>` (non‑ordonnée) et `<ol>` (ordonnée) structurent des groupes d’éléments. Elles sont faciles à lire pour les technologies d’assistance.",
  run: () => {
    preview.innerHTML = lessons[current].code;
  }
},
{
  title: "Niveau 7 – Formulaire d’inscription",
  code: `<form id="signupForm">
  <label for="name">Nom :</label>
  <input type="text" id="name" name="name" required aria-required="true">  

  <label for="email">Email :</label>
  <input type="email" id="email" name="email" required aria-required="true">  

  <button type="submit">Envoyer</button>
</form>

<script>
document.getElementById('signupForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Formulaire reçu ! Merci, ' + document.getElementById('name').value);
});
</script>`,
  explanation: "Le formulaire collecte des données. L’attribut `required` oblige l’utilisateur à remplir le champ ; `type=\"email\"` vérifie le format. Le script montre comment intercepter la soumission.",
  run: () => {
    preview.innerHTML = lessons[current].code;
  }
},
{
  title: "Niveau 8 – Flexbox pour aligner les cartes",
  code: `<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  .card {
    background: var(--c2);
    color: white;
    padding: 1rem;
    width: 150px;
    text-align: center;
    border-radius: 8px;
  }
</style>

<div class="container">
  <div class="card">🏳️‍🌈 Pride</div>
  <div class="card">🏳️‍⚧️ Trans</div>
  <div class="card">🏳️‍⚧️ Non‑binaire</div>
</div>`,
  explanation: "`display:flex` crée un conteneur flexible. `flex-wrap` permet aux cartes de passer à la ligne suivante quand l’espace manque, rendant la mise en page responsive.",
  run: () => {
    preview.innerHTML = lessons[current].code;
  }
},
{
  title: "Niveau 9 – CSS Grid",
  code: `<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .grid div {
    background: var(--c4);
    color: white;
    padding: 1rem;
    text-align: center;
    border-radius: 4px;
  }
</style>

<div class="grid">
  <div>🔴 Rouge</div>
  <div>🟠 Orange</div>
  <div>🟡 Jaune</div>
  <div>🟢 Vert</div>
</div>`,
  explanation: "`display:grid` crée une grille. `grid-template-columns: repeat(2, 1fr)` définit deux colonnes de largeur égale. Le système de grille simplifie les mises en page complexes.",
  run: () => {
    preview.innerHTML = lessons[current].code;
  }
},
{
  title: "Niveau 10 – Récupérer des données avec fetch",
  code: `<button id="loadData">Charger les drapeaux</button>
<ul id="flagList"></ul>

<script>
document.getElementById('loadData').addEventListener('click', async () => {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
  const countries = await res.json();

  // Filtrer quelques pays représentatifs des drapeaux LGBTQ+ (exemple)
  const sample = countries.filter(c => ['Canada','France','Brazil','South Africa'].includes(c.name.common));

  const ul = document.getElementById('flagList');
  ul.innerHTML = '';
  sample.forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = \`<img src="\${c.flags.svg}" alt="Drapeau de \${c.name.common}" width="30"> \${c.name.common}\`;
    ul.appendChild(li);
  });
});
</script>`,
  explanation: "`fetch` permet de récupérer des ressources sur le réseau. Ici on charge les drapeaux de quelques pays et on les affiche dans une liste. Le code montre l’usage d’`async/await` et la manipulation du DOM.",
  run: () => {
    preview.innerHTML = lessons[current].code;
  }
},
];

let current = -1;
const welcome = document.getElementById('welcome');
const lessonSection = document.getElementById('lesson');
const lessonTitle = document.getElementById('lessonTitle');
const codeBlock = document.getElementById('codeBlock');
const explanation = document.getElementById('explanation');
const preview = document.getElementById('preview');
const runBtn = document.getElementById('runBtn');

document.getElementById('startBtn').addEventListener('click', () => {
  welcome.classList.add('hidden');
  nextLesson();
});

function nextLesson() {
  current++;
  if (current >= lessons.length) {
    lessonTitle.textContent = "Félicitations ! Vous avez terminé le cours.";
    codeBlock.textContent = "";
    runBtn.style.display = "none";
    explanation.textContent = "";
    return;
  }
  const l = lessons[current];
  lessonTitle.textContent = l.title;
  codeBlock.textContent = l.code;
  explanation.textContent = l.explanation;
  lessonSection.classList.remove('hidden');
}

// Exécuter le code du niveau actuel
runBtn.addEventListener('click', () => {
  lessons[current].run();
});

function setPalette(name){
  document.body.setAttribute('data-palette', name);
}
// Exemple d’appel :
setPalette('bisexual');   // ou 'trans', 'lesbian', …

function speak(text){
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
}

// Lire le titre et l’explication quand le niveau apparaît
function showLesson(){
  // … (code précédent)
  speak(`${l.title}. ${l.explanation}`);
}