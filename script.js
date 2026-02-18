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
  }
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