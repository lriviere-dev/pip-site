// Pip's privacy policy: its texts (English and French, in TEXT: the one place to change what it says) and its dress,
// the page of a finely bound book: a Gilded capital opens it, a Painted one opens each section, and the vine of a
// Masterpiece runs down the margin, all drawn by content/illum.js. No browser API: the same files are the page the
// stores link to (tools/build-site.py copies them to docs/privacy/).
(() => {
  // Printed with [at] so that address harvesters don't pick it up.
  const MAIL = 'lriviere.mail [at] gmail.com';

  // A section: h (its title), p (paragraphs before the list), list ([name, what is said of it]), after (paragraphs after it).
  const TEXT = {
    en: {
      title: 'Pip’s privacy policy',
      sub: 'What Pip reads, what he keeps, and what never leaves your device.',
      date: 'Last changed on 12 November 2026',
      foot: 'Pip, the browser extension and the app for Android.',
      sections: [
        {
          h: 'In short',
          p: [
            'Pip is a game that plays on the text you read, so he has to read it. He reads it on your own device, uses it for the game, and forgets it.',
            'There is no account, no advertising, no analytics and no tracker. Pip has no server: his maker receives nothing from you, not even a count of who plays.',
          ],
        },
        {
          h: 'What Pip reads',
          list: [
            ['In the browser', 'the text of the pages you open, to find lines to stand on and words to turn into monsters and letters. It is read inside the tab and dropped when you leave the page. He reads what the page shows, not what you type, and he looks away from password and card number fields.'],
            ['On Android', 'the text that is visible on screen (never password fields), through an accessibility service you turn on yourself. Pip is a game companion, not an assistive tool. The text stays in memory for the moment it is read: never written to a file, never logged, never sent. He stays out of banking, payment and password apps, and out of any app you list.'],
            ['The camera', 'on Android, for the telescope and to scan a code when you welcome a friend’s Pip. Pictures are read on the phone and are never kept or sent.'],
            ['Your steps', 'on Android and only if you turn it on: the phone’s own step counter, of which only the day’s total is kept.'],
            ['Your most visited sites', 'in the browser and only if you allow it: read to draw their tiles under the camp, each time the camp opens.'],
          ],
        },
        {
          h: 'What Pip keeps',
          p: ['Everything Pip keeps is kept on your device, in the browser’s storage for extensions or in the app’s private storage:'],
          list: [
            ['His save', 'level, letters, gear, your other Pips, the library of scrolls and the pages you write in his book.'],
            ['Your settings', 'among them the sites and the apps where you turned him off.'],
            ['What you ask him to keep', 'notes, highlights and words you had him paint (with the address of the page they are on) and the inks you usually paint with (counts only, to propose them again), words you saved, reminders, the sites you hid from the camp.'],
          ],
          after: ['You can export it or import it from the camp, under Pip’s save. Uninstalling Pip deletes it.'],
        },
        {
          h: 'What leaves your device',
          p: ['Nothing goes to Pip’s maker. A few things go elsewhere, each for one reason, and most only when you ask:'],
          list: [
            ['The backup in your browser account', 'on by default in the browser. Pip’s save, your settings, the daily word and your other Pips are copied to the browser’s own sync storage, so they survive a reinstall. If you are signed in to the browser with sync on, the browser’s maker (Google, Mozilla…) carries that copy between your computers, under its own privacy policy. Choose “This computer only” under Pip’s save to stop it.'],
            ['The dictionary', 'off by default. When it is on, a word you save is sent to Wiktionary (the Wikimedia Foundation) to fetch its meaning. Only that word. In Firefox, the browser asks for your consent when you turn it on.'],
            ['The search box', 'what you type in the camp’s search box goes to your browser’s search engine, as if typed in the address bar.'],
            ['The PDF reader', 'fetches a PDF from its own address, as the browser would.'],
            ['Meetings between phones', 'Pip’s card (his name, looks, class, level, stats, worn gear and fighting moves, and the name you typed as his owner), what he feels for the other Pip, the picks you make in the meeting and a letter given as a gift go to the friend’s phone, on your local network and not through the internet. Nothing else of your save. Your phone remembers what Pip feels for each Pip he met, with that Pip’s name, class, looks, level and owner’s name.'],
            ['Reading the telescope’s pictures', 'is done on the phone by Google’s ML Kit, a library inside the app. Google says the library may send it diagnostics on how it runs, with an identifier for this installation of the app (not for you or your phone). The pictures and their text stay on the phone.'],
          ],
        },
        {
          h: 'Your choices',
          list: [
            ['Turn Pip off', 'for one site or everywhere from his toolbar button; on Android with the switch in the app, by dragging him onto the X, or by turning the accessibility service off.'],
            ['Keep the save on one device', 'with “This computer only”.'],
            ['Take everything away', 'export the save if you want it, then uninstall. Nothing is left anywhere else, except the browser account’s copy, which the browser removes with the extension’s data.'],
          ],
          after: ['Because nothing reaches Pip’s maker, there is nothing he could show you, correct, hand over or delete: all of it is already in your hands.'],
        },
        {
          h: 'Children',
          p: ['Pip is not aimed at children, and he gathers nothing about anyone, child or adult.'],
        },
        {
          h: 'Changes and questions',
          p: [
            'If Pip ever does something new with what he reads or keeps, this page will say so before he does, with a new date at the top.',
            'Pip is made by one person. Write to ' + MAIL + '.',
          ],
        },
      ],
    },
    fr: {
      title: 'La confidentialité selon Pip',
      sub: 'Ce que Pip lit, ce qu’il garde, et ce qui ne quitte jamais votre appareil.',
      date: 'Dernière modification le 12 novembre 2026',
      foot: 'Pip, l’extension de navigateur et l’application pour Android.',
      sections: [
        {
          h: 'En bref',
          p: [
            'Pip est un jeu qui se joue sur le texte que vous lisez : il doit donc le lire. Il le lit sur votre appareil, s’en sert pour le jeu, puis l’oublie.',
            'Il n’y a ni compte, ni publicité, ni mesure d’audience, ni traceur. Pip n’a pas de serveur : son auteur ne reçoit rien de vous, pas même le nombre de joueurs.',
          ],
        },
        {
          h: 'Ce que Pip lit',
          list: [
            ['Dans le navigateur', 'le texte des pages que vous ouvrez, pour y trouver des lignes où se tenir et des mots à changer en monstres et en lettres. Il est lu dans l’onglet et oublié quand vous quittez la page. Pip lit ce que la page affiche, pas ce que vous tapez, et il détourne les yeux des champs de mot de passe et de numéro de carte.'],
            ['Sur Android', 'le texte visible à l’écran (jamais les champs de mot de passe), par un service d’accessibilité que vous activez vous-même. Pip est un compagnon de jeu, pas un outil d’assistance. Le texte reste en mémoire le temps d’être lu : jamais écrit dans un fichier, jamais journalisé, jamais envoyé. Il se tient à l’écart des applications de banque, de paiement et de mots de passe, et de celles que vous indiquez.'],
            ['L’appareil photo', 'sur Android, pour le télescope et pour lire un code quand vous accueillez le Pip d’un ami. Les images sont lues sur le téléphone et ne sont ni gardées ni envoyées.'],
            ['Vos pas', 'sur Android et seulement si vous l’activez : le compteur de pas du téléphone, dont seul le total du jour est gardé.'],
            ['Vos sites les plus visités', 'dans le navigateur et seulement si vous l’autorisez : lus pour dessiner leurs tuiles sous le camp, à chaque ouverture du camp.'],
          ],
        },
        {
          h: 'Ce que Pip garde',
          p: ['Tout ce que Pip garde reste sur votre appareil, dans le stockage du navigateur pour les extensions ou dans le stockage privé de l’application :'],
          list: [
            ['Sa sauvegarde', 'niveau, lettres, équipement, vos autres Pips, la bibliothèque de parchemins et les pages que vous écrivez dans son livre.'],
            ['Vos réglages', 'dont les sites et les applications où vous l’avez désactivé.'],
            ['Ce que vous lui confiez', 'notes, surlignages et mots que vous lui avez fait peindre (avec l’adresse de la page où ils se trouvent) et les encres que vous y mettez d’habitude (des comptes seulement, pour vous les reproposer), mots enregistrés, citations gardées (avec l’adresse et le titre de la page, ou sur Android le nom de l’application d’où elles viennent), rappels, sites masqués du camp.'],
          ],
          after: ['Vous pouvez l’exporter ou l’importer depuis le camp, dans la sauvegarde de Pip. Désinstaller Pip l’efface.'],
        },
        {
          h: 'Ce qui quitte votre appareil',
          p: ['Rien ne va à l’auteur de Pip. Quelques données vont ailleurs, chacune pour une seule raison, et la plupart seulement à votre demande :'],
          list: [
            ['La copie dans votre compte de navigateur', 'activée par défaut dans le navigateur. La sauvegarde de Pip, vos réglages, le mot du jour et vos autres Pips sont copiés dans le stockage synchronisé du navigateur, pour survivre à une réinstallation. Si vous êtes connecté au navigateur avec la synchronisation activée, son éditeur (Google, Mozilla…) transporte cette copie entre vos ordinateurs, selon sa propre politique de confidentialité. Choisissez « This computer only » dans la sauvegarde de Pip pour l’arrêter.'],
            ['Le dictionnaire', 'désactivé par défaut. Activé, il envoie un mot que vous enregistrez à Wiktionary (la fondation Wikimedia) pour en chercher le sens. Ce mot seulement. Dans Firefox, le navigateur vous demande votre accord quand vous l’activez.'],
            ['La recherche', 'ce que vous tapez dans la recherche du camp va au moteur de recherche de votre navigateur, comme si vous l’aviez tapé dans la barre d’adresse.'],
            ['Le lecteur de PDF', 'va chercher un PDF à son adresse, comme le ferait le navigateur.'],
            ['Les rencontres entre téléphones', 'la carte de Pip (son nom, son apparence, sa classe, son niveau, ses caractéristiques, son équipement porté et ses gestes de combat, et le nom que vous avez tapé comme son propriétaire), ce qu’il ressent pour l’autre Pip, les choix que vous faites pendant la rencontre et une lettre offerte en cadeau vont au téléphone de l’ami, sur votre réseau local et pas par Internet. Rien d’autre de votre sauvegarde. Votre téléphone garde ce que Pip ressent pour chaque Pip rencontré, avec son nom, sa classe, son apparence, son niveau et le nom de son propriétaire.'],
            ['La lecture des images du télescope', 'se fait sur le téléphone avec ML Kit de Google, une bibliothèque incluse dans l’application. Google indique qu’elle peut lui envoyer des diagnostics sur son fonctionnement, avec un identifiant propre à cette installation de l’application (pas à vous ni à votre téléphone). Les images et leur texte restent sur le téléphone.'],
          ],
        },
        {
          h: 'Vos choix',
          list: [
            ['Désactiver Pip', 'pour un site ou partout depuis son bouton dans la barre d’outils ; sur Android avec l’interrupteur de l’application, en le déposant sur la croix, ou en coupant le service d’accessibilité.'],
            ['Garder la sauvegarde sur un seul appareil', 'avec « This computer only ».'],
            ['Tout retirer', 'exportez la sauvegarde si vous y tenez, puis désinstallez. Il ne reste rien ailleurs, sauf la copie du compte de navigateur, que le navigateur retire avec les données de l’extension.'],
          ],
          after: ['Puisque rien ne parvient à l’auteur de Pip, il n’a rien à vous montrer, à corriger, à transmettre ou à effacer : tout est déjà entre vos mains.'],
        },
        {
          h: 'Les enfants',
          p: ['Pip ne s’adresse pas spécialement aux enfants, et il ne recueille rien sur personne, enfant ou adulte.'],
        },
        {
          h: 'Changements et questions',
          p: [
            'Si Pip fait un jour autre chose de ce qu’il lit ou garde, cette page le dira avant, avec une nouvelle date en haut.',
            'Pip est l’œuvre d’une seule personne. Écrivez à ' + MAIL + '.',
          ],
        },
      ],
    },
  };

  const I = globalThis.WC && WC.illum;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  };
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // A paragraph that opens with an illuminated capital: the canvas, and the letter itself kept for a reader that
  // cannot see pictures. `big` is the page's first: Gilded, the 40-pixel drop cap; the others are Painted capitals.
  let gilded = null; // the Gilded capital's canvas and letter, for its glint
  function opening(text, big) {
    const p = el('p');
    const ch = text[0];
    if (!I || !/[A-Za-z]/.test(ch)) {
      p.textContent = text;
      return p;
    }
    const c = I.canvas(I.rows(ch, big ? 'cap' : 'upper', big ? 4 : 3), big ? 2 : 3);
    c.className = big ? 'cap big' : 'cap';
    c.style.width = c.width + 'px';
    c.setAttribute('aria-hidden', 'true');
    if (big) gilded = { c, ch };
    p.append(c, el('span', 'sr', ch), text.slice(1));
    return p;
  }

  function render(lang) {
    const T = TEXT[lang] || TEXT.en;
    document.documentElement.lang = lang;
    document.title = T.title;
    $('title').textContent = T.title;
    $('sub').textContent = T.sub;
    $('date').textContent = T.date;
    $('foot').textContent = T.foot;
    for (const b of $('lang').querySelectorAll('button')) b.setAttribute('aria-pressed', String(b.dataset.v === lang));
    const root = $('text');
    root.textContent = '';
    gilded = null;
    T.sections.forEach((s, i) => {
      const sec = el('section');
      sec.append(el('h2', '', s.h));
      // The capital opens the section's first words: a paragraph's, or else the first list entry's name.
      let opened = false;
      for (const t of s.p || []) {
        sec.append(opened ? el('p', '', t) : opening(t, i === 0));
        opened = true;
      }
      if (s.list) {
        const ul = el('ul');
        for (const [name, what] of s.list) {
          const li = el('li');
          li.append(el('b', '', name), ': ' + what);
          ul.append(li);
        }
        sec.append(ul);
      }
      for (const t of s.after || []) sec.append(el('p', '', t));
      root.append(sec);
    });
    decorate();
  }

  // ----- the margin: the vine of a Masterpiece down the left and along the foot, its two miniatures by the title; on a
  // narrow page, the plain red rule of a Fair copy -----
  function decorate() {
    const cv = $('deco');
    const page = $('page');
    if (!I || !cv) return;
    const pr = page.getBoundingClientRect();
    const at = (e) => {
      const r = e.getBoundingClientRect();
      return { l: r.left - pr.left, r: r.right - pr.left, t: r.top - pr.top, b: r.bottom - pr.top };
    };
    const text = at($('text'));
    const foot = at($('foot'));
    const narrow = pr.width < 620;
    cv.width = Math.round(pr.width);
    cv.height = Math.round(pr.height);
    cv.style.width = cv.width + 'px';
    cv.style.height = cv.height + 'px';
    const ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, cv.width, cv.height);
    const title = at($('title'));
    const box = { l: text.l - (narrow ? 2 : 14), t: text.t, r: text.r, b: foot.b + (narrow ? 0 : 8), W: cv.width, H: cv.height, title };
    for (const d of I.margins('virtue', narrow ? 1 : 4, box)) I.paint(ctx, d.g, d.x, d.y, d.s);
  }

  // ----- the glint that sweeps the Gilded capital now and then -----
  function glint() {
    if (!gilded || still || document.hidden) return;
    const { c, ch } = gilded;
    const steps = I.glintSteps('cap');
    let i = 0;
    const tick = () => {
      if (!gilded || gilded.c !== c) return;
      I.canvas(I.rows(ch, 'cap', 4, steps[i]), 2, c);
      if (++i < steps.length) setTimeout(tick, 45);
      else I.canvas(I.rows(ch, 'cap', 4), 2, c);
    };
    tick();
  }

  // The language: ?lang=fr, else the one chosen here before, else the browser's.
  const asked = new URLSearchParams(location.search).get('lang');
  let kept = null;
  try {
    kept = localStorage.getItem('pip:privacy:lang');
  } catch {}
  let lang = [asked, kept, (navigator.language || 'en').slice(0, 2)].find((l) => TEXT[l]) || 'en';
  $('lang').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !TEXT[b.dataset.v]) return;
    lang = b.dataset.v;
    try {
      localStorage.setItem('pip:privacy:lang', lang);
    } catch {}
    render(lang);
  });
  render(lang);
  // The text's size changes the page's (the fonts arriving, the window): the margin is drawn again to fit.
  addEventListener('resize', decorate);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(decorate);
  if (I && !still) {
    setTimeout(glint, 1200);
    setInterval(glint, 9000);
  }

  // For tools/privacy-test.js.
  globalThis.PIP_PRIVACY = TEXT;
})();
