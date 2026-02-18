/* script.js – Logique corrigée */
/* -------------------------------------------------
   Tableau complet des leçons (1 – 10)
   Copie‑colle ce bloc dans ton script.js
------------------------------------------------- */
const lessons = [
  /* ==================== LEÇON 1 ==================== */
  {
    title: "Niveau 1 – HTML de base",
    fullExplanation: `
      <p>Dans cette leçon, nous allons créer le tout premier élément d’une page web : un titre. 
      <strong>Qu’est‑ce qu’un titre ?</strong> C’est le texte le plus important, celui qui apparaît en haut de la page. 
      En HTML, on utilise la balise <code>&lt;h1&gt;</code> pour le créer. Le chiffre « 1 » signifie « titre principal ». 
      Si on voulait un sous‑titre, on utiliserait <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc.</p>

      <p>Voici ce que nous voulons obtenir :</p>
      <pre><code>&lt;h1>Hello, world !&lt;/h1&gt;</code></pre>

      <p>Ta mission : réarranger les morceaux de code dans le bon ordre, puis cliquer sur <strong>Vérifier</strong>. 
      Si tout est correct, le titre apparaîtra dans la zone de prévisualisation.</p>
    `,
    codeParts: [
      "&lt;h1&gt;",
      "Hello, world !",
      "&lt;/h1&gt;"
    ],
    orderedCode: "<h1>Hello, world !</h1>"
  },

  /* ==================== LEÇON 2 ==================== */
  {
    title: "Niveau 2 – CSS simple",
    fullExplanation: `
      <p>Maintenant que nous avons un titre, nous allons le colorer. Le CSS (Cascading Style Sheets) est le langage qui dit à la page comment les éléments doivent être affichés : couleur, police, taille, etc.</p>

      <p>Nous allons appliquer une couleur tirée de la palette Pride (rouge vif). Pour cela, on écrit une règle CSS :</p>
      <pre><code>h1 { color: var(--c1); }</code></pre>

      <p>Le mot <code>var(--c1)</code> indique que l’on veut utiliser la variable CSS <code>--c1</code> que nous avons définie dans le fichier <code>style.css</code>. Ainsi, si on change la palette, toutes les couleurs changent automatiquement !</p>

      <p>Réorganise les morceaux ci‑dessous, puis clique sur <strong>Vérifier</strong> :</p>
    `,
    codeParts: [
      "h1 {",
      "color:",
      "var(--c1);",
      "}"
    ],
    orderedCode: "h1 { color: var(--c1); }"
  },

  /* ==================== LEÇON 3 ==================== */
  {
    title: "Niveau 3 – Interaction JavaScript",
    fullExplanation: `
      <p>Super ! Maintenant que notre titre apparaît, on va le rendre <strong>interactif</strong>. 
      Le JavaScript, c’est le langage qui fait bouger les choses : il écoute ce que l’utilisateur fait (un clic, un clavier…) et répond.</p>

      <p>Dans cet exercice, on veut que le titre réagisse lorsqu’on le <em>clique</em>. 
      Quand on clique, une petite fenêtre d’alerte doit s’ouvrir avec le message « Bravo ! ».</p>

      <p>Voici ce que le code doit faire :</p>
      <ul>
        <li>chercher le titre avec <code>document.querySelector('h1')</code></li>
        <li>attacher un <strong>écouteur d’événement</strong> <code>click</code></li>
        <li>lors du clic, appeler <code>alert('Bravo !')</code></li>
      </ul>

      <p>Ta mission : réassemble les morceaux de code dans le bon ordre, puis clique sur <strong>Vérifier</strong>. 
      Si tout est correct, le titre deviendra magique : un clic affichera l’alerte.</p>
    `,
    codeParts: [
      "document.querySelector('h1')",
      ".addEventListener('click',",
      "()=>{",
      "alert('Bravo !')",
      "});"
    ],
    orderedCode: "document.querySelector('h1').addEventListener('click',()=>{ alert('Bravo !') });"
  },

  /* ==================== LEÇON 4 ==================== */
  {
    title: "Niveau 4 – Images & texte alternatif (accessibilité)",
    fullExplanation: `
      <p>Les images rendent les sites plus jolis, mais elles doivent aussi être compréhensibles pour les personnes qui ne voient pas l’écran.</p>

      <p>Le texte alternatif, appelé <code>alt</code>, décrit l’image à haute voix grâce aux lecteurs d’écran. 
      C’est comme un petit commentaire qui explique « Qu’est‑ce que je vois ? ».</p>

      <p>Dans cet exercice, on veut afficher une image aléatoire et ajouter un texte <code>alt</code> qui parle du drapeau Pride.</p>

      <p>Le code final doit ressembler à :</p>
      <pre><code>&lt;img src="https://picsum.photos/300/200" alt="Photo aléatoire représentant la diversité des couleurs du drapeau Pride"&gt;</code></pre>

      <p>Réordonne les morceaux, clique sur <strong>Vérifier</strong>, et regarde l’image apparaître dans la zone de prévisualisation. 
      Si le texte <code>alt</code> est présent, le site sera plus accessible ! 🎉</p>
    `,
    codeParts: [
      "&lt;img src=\"https://picsum.photos/300/200\"",
      "alt=\"Photo aléatoire représentant la diversité des couleurs du drapeau Pride\"",
      "&gt;"
    ],
    orderedCode: '<img src="https://picsum.photos/300/200" alt="Photo aléatoire représentant la diversité des couleurs du drapeau Pride">'
  },

  /* ==================== LEÇON 5 ==================== */
  {
    title: "Niveau 5 – Liens hypertexte",
    fullExplanation: `
      <p>Un lien (ou <code>&lt;a&gt;</code>) permet de voyager d’une page à une autre, comme un pont magique.</p>

      <p>Nous allons créer un lien qui ouvre la page d’information sur les drapeaux LGBTQ+ dans un nouvel onglet. 
      L’attribut <code>target="_blank"</code> indique au navigateur d’ouvrir le lien ailleurs, sans quitter notre page.</p>

      <p>Voici le résultat attendu :</p>
      <pre><code>&lt;a href="https://proton.me/support/lgbtq" target="_blank" rel="noopener noreferrer"&gt;En savoir plus sur les drapeaux LGBTQ+&lt;/a&gt;</code></pre>

      <p>Les morceaux sont mélangés ; réassemble‑les, puis clique sur <strong>Vérifier</strong>. 
      Quand c’est bon, le lien apparaîtra dans la zone de prévisualisation : essaie de cliquer dessus ! (Il ouvrira une nouvelle page.)</p>
    `,
    codeParts: [
      "&lt;a href=\"https://proton.me/support/lgbtq\"",
      "target=\"_blank\"",
      "rel=\"noopener noreferrer\"&gt;",
      "En savoir plus sur les drapeaux LGBTQ+",
      "&lt;/a&gt;"
    ],
    orderedCode: '<a href="https://proton.me/support/lgbtq" target="_blank" rel="noopener noreferrer">En savoir plus sur les drapeaux LGBTQ+</a>'
  },

  /* ==================== LEÇON 6 ==================== */
  {
    title: "Niveau 6 – Listes (ul / li)",
    fullExplanation: `
      <p>Les listes permettent d’organiser des informations sous forme de puces. 
      En HTML, on utilise la balise <code>&lt;ul&gt;</code> pour une liste « non‑ordonnée » (avec des puces) et <code>&lt;li&gt;</code> pour chaque élément.</p>

      <p>Dans cet exercice, on veut présenter les six couleurs du drapeau Pride sous forme de liste.</p>

      <p>Le code final doit ressembler à :</p>
      <pre><code>&lt;h3&gt;Couleurs du drapeau Pride&lt;/h3&gt;
&lt;ul&gt;
  &lt;li&gt;Rouge&lt;/li&gt;
  &lt;li&gt;Orange&lt;/li&gt;
  &lt;li&gt;Jaune&lt;/li&gt;
  &lt;li&gt;Vert&lt;/li&gt;
  &lt;li&gt;Bleu&lt;/li&gt;
  &lt;li&gt;Violet&lt;/li&gt;
&lt;/ul&gt;</code></pre>

      <p>Réordonne les morceaux, clique sur <strong>Vérifier</strong>. 
      Si tout est correct, la liste apparaîtra dans la prévisualisation : chaque couleur sera bien séparée par une puce.</p>
    `,
    codeParts: [
      "&lt;h3&gt;Couleurs du drapeau Pride&lt;/h3&gt;",
      "&lt;ul&gt;",
      "&lt;li&gt;Rouge&lt;/li&gt;",
      "&lt;li&gt;Orange&lt;/li&gt;",
      "&lt;li&gt;Jaune&lt;/li&gt;",
      "&lt;li&gt;Vert&lt;/li&gt;",
      "&lt;li&gt;Bleu&lt;/li&gt;",
      "&lt;li&gt;Violet&lt;/li&gt;",
      "&lt;/ul&gt;"
    ],
    orderedCode: `<h3>Couleurs du drapeau Pride</h3><ul><li>Rouge</li><li>Orange</li><li>Jaune</li><li>Vert</li><li>Bleu</li><li>Violet</li></ul>`
  },

  /* ==================== LEÇON 7 ==================== */
  {
    title: "Niveau 7 – Formulaire simple",
    fullExplanation: `
      <p>Un formulaire recueille des informations auprès de l’utilisateur : nom, adresse e‑mail, etc. 
      Lorsque l’on appuie sur le bouton « Envoyer », le navigateur envoie les données à un serveur. 
      Dans notre version ultra‑simple, on empêche l’envoi réel et on montre une petite alerte : « Formulaire reçu ! ».</p>

      <p>Le code final doit contenir :</p>
      <ul>
        <li>un <code>&lt;form&gt;</code> avec un champ texte <code>&lt;input type="text"&gt;</code> (placeholder « Nom »)</li>
        <li>un bouton <code>&lt;button type="submit"&gt;</code></li>
        <li>un petit script qui intercepte l’événement <code>submit</code>, empêche le comportement par défaut et affiche <code>alert('Formulaire reçu !')</code></li>
      </ul>

      <p>Résultat attendu :</p>
      <pre><code>&lt;form id="signupForm"&gt;
  &lt;input type="text" placeholder="Nom" required&gt;
  &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
  document.getElementById('signupForm').addEventListener('submit', e =&gt; {
    e.preventDefault();
    alert('Formulaire reçu !');
  });
&lt;/script&gt;</code></pre>

      <p>Réordonne les morceaux, clique sur <strong>Vérifier</strong>. 
      Quand c’est bon, le formulaire apparaîtra : teste‑le ! (Clique sur Envoyer et regarde l’alerte.)</p>
    `,
    codeParts: [
      "&lt;form id=\"signupForm\"&gt;",
      "&lt;input type=\"text\" placeholder=\"Nom\" required&gt;",
      "&lt;button type=\"submit\"&gt;Envoyer&lt;/button&gt;",
      "&lt;/form&gt;",
      "&lt;script&gt;",
      "document.getElementById('signupForm').addEventListener('submit', e => {",
      "e.preventDefault();",
      "alert('Formulaire reçu !');",
      "});",
      "&lt;/script&gt;"
    ],
    orderedCode: `<form id="signupForm"><input type="text" placeholder="Nom" required><button type="submit">Envoyer</button></form><script>document.getElementById('signupForm').addEventListener('submit', e => { e.preventDefault(); alert('Formulaire reçu !'); });</script>`
  },

  /* ==================== LEÇON 8 ==================== */
  {
    title: "Niveau 8 – Flexbox (mise en page simple)",
    fullExplanation: `
      <p>Flexbox est un outil puissant qui permet d’aligner facilement des éléments côte à côte, même quand la taille de l’écran change.</p>

      <p>Dans cet exercice, on crée deux « cartes » colorées qui se placent l’une à côté de l’autre avec un petit espace entre elles.</p>

      <p>Le code final ressemble à :</p>
      <pre><code>&lt;div style="display:flex; gap:10px;"&gt;
  &lt;div style="background:var(--c2); padding:10px;"&gt;Carte 1&lt;/div&gt;
  &lt;div style="background:var(--c3); padding:10px;"&gt;Carte 2&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <p>Les morceaux sont mélangés ; réassemble‑les, puis clique sur <strong>Vérifier</strong>. 
      Si tout est correct, les deux cartes apparaîtront côte à côte dans la prévisualisation. 
      Essaie de redimensionner la fenêtre : Flexbox s’adapte tout seul ! 🎨</p>
    `,
    codeParts: [
      "display:flex;",
      "gap:10px;",
      "background:var(--c2);",
      "padding:10px;",
      "Carte 1",
      "background:var(--c3);",
      "Carte 2"
    ],
    orderedCode: `<div style="display:flex; gap:10px;"><div style="background:var(--c2); padding:10px;">Carte 1</div><div style="background:var(--c3); padding:10px;">Carte 2</div></div>`
  },

  /* ==================== LEÇON 9 ==================== */
  {
    title: "Niveau 9 – CSS Grid (grille 2 × 2)",
    fullExplanation: `
      <p>CSS Grid est une autre façon de disposer les éléments, idéale quand on veut créer des tableaux ou des grilles.</p>

      <p>Nous allons construire une petite grille de deux colonnes et deux lignes : quatre carrés numérotés A, B, C et D.</p>

      <p>Le code attendu :</p>
      <pre><code>&lt;div style="display:grid; grid-template-columns:1fr 1fr; gap:5px;"&gt;
  &lt;div style="background:var(--c4); padding:10px;"&gt;A&lt;/div&gt;
  &lt;div style="background:var(--c5); padding:10px;"&gt;B&lt;/div&gt;
  &lt;div style="background:var(--c6); padding:10px;"&gt;C&lt;/div&gt;
  &lt;div style="background:var(--c1); padding:10px;"&gt;D&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <p>Réordonne les morceaux, clique sur <strong>Vérifier</strong>. 
      Quand c’est bon, la grille apparaîtra : chaque case aura sa couleur et sera bien alignée.</p>
    `,
    codeParts: [
      "display:grid;",
      "grid-template-columns:1fr 1fr;",
      "gap:5px;",
      "background:var(--c4);",
      "background:var(--c5);",
      "background:var(--c6);",
      "background:var(--c1);",
      "A",
      "B",
      "C",
      "D"
    ],
    orderedCode: `<div style="display:grid; grid-template-columns:1fr 1fr; gap:5px;"><div style="background:var(--c4); padding:10px;">A</div><div style="background:var(--c5); padding:10px;">B</div><div style="background:var(--c6); padding:10px;">C</div><div style="background:var(--c1); padding:10px;">D</div></div>`
  },

  /* ==================== LEÇON 10 ==================== */
  {
  title: "Niveau 10 – Fetch API (récupérer des données)",
  fullExplanation: `
    <p>Le monde d’Internet regorge de données : on peut les demander à un serveur et les afficher sur notre page. 
    Le <code>fetch()</code> est la façon moderne de le faire en JavaScript.</p>

    <p>Dans cet exercice, on crée un bouton « Charger ». Quand on le clique, on simule le chargement de données 
    et on affiche le texte « Données chargées ! » dans la zone prévue à cet effet.</p>

    <p>Le code final doit contenir :</p>
    <ul>
      <li>un bouton <code>&lt;button id="load"&gt;Charger&lt;/button&gt;</code></li>
      <li>un conteneur <code>&lt;div id="out"&gt;&lt;/div&gt;</code> où le résultat sera affiché</li>
      <li>un petit script qui, au clic, utilise <code>fetch</code> (ou, pour simplifier, une fonction factice) 
          et écrit le texte dans le conteneur</li>
    </ul>

    <p>Version simplifiée (sans vraie requête ; parfaite pour un premier pas) :</p>
    <pre><code>&lt;button id="load"&gt;Charger&lt;/button&gt;
&lt;div id="out"&gt;&lt;/div&gt;

&lt;script&gt;
  document.getElementById('load').addEventListener('click', () =&gt; {
    // Ici on simulerait un appel réseau
    document.getElementById('out').innerText = 'Données chargées !';
  });
&lt;/script&gt;</code></pre>

    <p>Réordonne les morceaux, clique sur <strong>Vérifier</strong>. 
    Quand c’est bon, le bouton apparaîtra ; clique dessus et regarde le message apparaître. 
    C’est le premier pas vers des applications qui parlent réellement à Internet ! 🌐</p>
  `,
  codeParts: [
    "&lt;button id=\"load\"&gt;Charger&lt;/button&gt;",
    "&lt;div id=\"out\"&gt;&lt;/div&gt;",
    "&lt;script&gt;",
    "document.getElementById('load').addEventListener('click', () => {",
    "document.getElementById('out').innerText = 'Données chargées !';",
    "});",
    "&lt;/script&gt;"
  ],
  orderedCode: `<button id="load">Charger</button><div id="out"></div><script>document.getElementById('load').addEventListener('click', () => { document.getElementById('out').innerText = 'Données chargées !'; });</script>`}
      ];

/* --------- VARIABLES GLOBALES --------- */
let current = -1;
const welcome = document.getElementById('welcome');
const lessonSection = document.getElementById('lesson');
const lessonTitle = document.getElementById('lessonTitle');
const fullExplanation = document.getElementById('fullExplanation');
const dragArea = document.getElementById('dragArea');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const preview = document.getElementById('preview');
const startBtn = document.getElementById('startBtn');
const autoReadToggle = document.getElementById('autoRead');

// Fonction pour lire le texte
function speak(text) {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'fr-FR';
    speechSynthesis.speak(utter);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Retourne un tableau ordonné de toutes les tuiles présentes dans #dragArea
function getTiles() {
  return Array.from(dragArea.querySelectorAll('.tile'));
}

// Déplace une tuile d'un index à un autre (indexTarget = position désirée)
function moveTile(tile, indexTarget) {
  const tiles = getTiles();
  if (indexTarget < 0 || indexTarget >= tiles.length) return;

  if (indexTarget === 0) {
    dragArea.prepend(tile);
  } else if (indexTarget >= tiles.length - 1) {
    dragArea.append(tile);
  } else {
    // Si on déplace vers la droite, on insère après la cible
    const referenceNode = (indexTarget >= tiles.indexOf(tile)) 
      ? tiles[indexTarget].nextSibling 
      : tiles[indexTarget];
    dragArea.insertBefore(tile, referenceNode);
  }
}

// Met à jour l’état des flèches (activées / désactivées) selon la position de la tuile
function updateArrowState(tile) {
  const tiles = getTiles();
  const idx = tiles.indexOf(tile);
  const leftBtn  = tile.querySelector('.arrow-btn:first-child');
  const rightBtn = tile.querySelector('.arrow-btn:last-child');

  leftBtn.disabled  = idx === 0;                     // pas de déplacement à gauche si on est le premier
  rightBtn.disabled = idx === tiles.length - 1;      // pas de déplacement à droite si on est le dernier
}

// Réinitialise les flèches quand la tuile perd le focus (on les désactive)
function resetArrowState(tile) {
  const leftBtn  = tile.querySelector('.arrow-btn:first-child');
  const rightBtn = tile.querySelector('.arrow-btn:last-child');
  leftBtn.disabled  = true;
  rightBtn.disabled = true;
}

function renderDragTiles(parts) {
  dragArea.innerHTML = '';
  const shuffled = shuffle([...parts]);

  shuffled.forEach(txt => {
    /* ----- Tuile principale ----- */
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.draggable = true;
    tile.tabIndex = 0;                     // rend la tuile focusable
    tile.innerHTML = txt;                  // le fragment de code
    tile.dataset.code = txt;

    /* ----- Contrôles (flèches) ----- */
    const controls = document.createElement('div');
    controls.className = 'tile-controls';

    const leftBtn = document.createElement('button');
    leftBtn.className = 'arrow-btn';
    leftBtn.type = 'button';
    leftBtn.title = 'Déplacer à gauche';
    leftBtn.setAttribute('aria-label', 'Déplacer à gauche');
    leftBtn.innerHTML = '←';
    leftBtn.disabled = true;               // désactivé tant qu’on ne sait pas où il est

    const rightBtn = document.createElement('button');
    rightBtn.className = 'arrow-btn';
    rightBtn.type = 'button';
    rightBtn.title = 'Déplacer à droite';
    rightBtn.setAttribute('aria-label', 'Déplacer à droite');
    rightBtn.innerHTML = '→';
    rightBtn.disabled = true;

    controls.append(leftBtn, rightBtn);
    tile.appendChild(controls);
    dragArea.appendChild(tile);

    /* ----- Mise à jour du statut des flèches quand la tuile reçoit le focus ----- */
    tile.addEventListener('focus', () => updateArrowState(tile));
    tile.addEventListener('blur', () => resetArrowState(tile));

/* ----- Clic sur les flèches ----- */
    leftBtn.addEventListener('click', e => {
      e.stopPropagation();
      const tiles = getTiles();
      const idx = tiles.indexOf(tile);
      if (idx > 0) {
        moveTile(tile, idx - 1);
        tile.focus(); // Garder le focus pour continuer au clavier
        getTiles().forEach(updateArrowState);
      }
    });

    rightBtn.addEventListener('click', e => {
      e.stopPropagation();
      const tiles = getTiles();
      const idx = tiles.indexOf(tile);
      if (idx < tiles.length - 1) {
        moveTile(tile, idx + 1);
        tile.focus();
        getTiles().forEach(updateArrowState);
      }
    });
    /* ----- Drag‑and‑Drop natif (déplacement à la souris) ----- */
    tile.addEventListener('dragstart', () => tile.classList.add('dragging'));
    tile.addEventListener('dragend', () => tile.classList.remove('dragging'));

    tile.addEventListener('dragover', e => e.preventDefault()); // autorise le drop
tile.addEventListener('drop', e => {
  e.preventDefault();
  const dragging = dragArea.querySelector('.dragging');
  if (!dragging || dragging === tile) return;
  const targetIdx = getTiles().indexOf(tile);
  moveTile(dragging, targetIdx);
  // Rafraîchit les flèches après le déplacement
  getTiles().forEach(updateArrowState);
});
  });
}

/* Vérifie l’ordre */
function checkOrder() {
  const tiles = Array.from(dragArea.querySelectorAll('.tile'));
  
  // Correction : On ne prend que le texte du premier nœud (le code) 
  // et on ignore les boutons de contrôle.
  const assembled = tiles.map(t => {
    return t.childNodes[0].textContent; 
  }).join('');

  const expected = lessons[current].orderedCode.replace(/\s+/g, '');
  const got = assembled.replace(/\s+/g, '');

  tiles.forEach(t => t.classList.remove('correct', 'wrong'));

  if (got === expected) {
    tiles.forEach(t => t.classList.add('correct'));
    preview.innerHTML = lessons[current].orderedCode;
    
    // Exécution des scripts (ex: alertes)
    const scripts = preview.querySelectorAll('script');
    scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        newScript.text = oldScript.text;
        document.body.appendChild(newScript).parentNode.removeChild(newScript);
    });

    nextBtn.classList.remove('hidden');
    checkBtn.classList.add('hidden');
  } else {
    tiles.forEach(t => t.classList.add('wrong'));
  }
}

function showLesson() {
  const l = lessons[current];
  
  // MISE À JOUR : On a supprimé la ligne codeBlock.textContent qui faisait planter le script
  lessonTitle.textContent = l.title;
  fullExplanation.innerHTML = l.fullExplanation;
  
  renderDragTiles(l.codeParts);
  preview.innerHTML = '';
  nextBtn.classList.add('hidden');
  checkBtn.classList.remove('hidden');
  
  if (autoReadToggle.checked) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = l.fullExplanation;
    speak(`${l.title}. ${tempDiv.textContent}`);
  }
}

function nextLesson() {
  current++;
  if (current >= lessons.length) {
    lessonTitle.textContent = "🎉 Félicitations !";
    fullExplanation.innerHTML = "<p>Vous avez terminé toutes les leçons. Bravo !</p>";
    dragArea.innerHTML = "";
    checkBtn.classList.add('hidden');
    nextBtn.classList.add('hidden');
    preview.innerHTML = "";
    return;
  }
  showLesson();
}

/* ----- ÉVÉNEMENTS ----- */
startBtn.addEventListener('click', () => {
  welcome.classList.add('hidden');
  lessonSection.classList.remove('hidden');
  nextLesson();
});
checkBtn.addEventListener('click', checkOrder);
nextBtn.addEventListener('click', nextLesson);

// Gestion globale du clavier sur le dragArea
dragArea.addEventListener('keydown', e => {
  const focused = document.activeElement;
  if (!focused.classList.contains('tile')) return;

  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    const idx = getTiles().indexOf(focused);
    if (idx > 0) moveTile(focused, idx - 1);
    updateArrowState(focused);
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    const idx = getTiles().indexOf(focused);
    if (idx < getTiles().length - 1) moveTile(focused, idx + 1);
    updateArrowState(focused);
  }
});

