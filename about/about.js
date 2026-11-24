// About Pip: who made him, why he is free, a coffee for his maker if a player wants to buy one, and what others made that
// he ships. Only the texts (English and French): privacy/privacy.js, loaded after this, sets them as a page of his book.
// No browser API: the same files are the page on Pip's site (tools/build-site.py copies them to docs/about/).
(() => {
  // The same address and name as rules.js's SUPPORT_URL and MAKER (tools/support-test.js checks they agree): this page
  // loads no game script. An empty address leaves the coffee's section out.
  const SUPPORT_URL = 'https://ko-fi.com/lriviere';
  const MAKER = 'lriviere';
  // Printed with [at] so that address harvesters don't pick it up (as the privacy policy does).
  const MAIL = 'lriviere.mail [at] gmail.com';

  // A section: h (its title), p (paragraphs), list ([name, what is said of it]), after (paragraphs after the list),
  // link ({ text, href }: a button), end (small lines under it).
  const TEXT = {
    en: {
      title: 'About Pip',
      sub: 'A small companion who plays on the words you read.',
      date: '',
      foot: 'Pip, the browser extension and the app for Android.',
      sections: [
        {
          h: 'Who made him',
          p: [
            `Pip is made by one person, ${MAKER}, with the help of Claude: the code, the pixels, the scrolls and the words, in the evenings and at weekends.`,
            'He began as a little knight who climbed the lines of a page. He grew into much more than that.',
          ],
        },
        {
          h: 'Free, and he stays free',
          p: ['Pip costs nothing. There is no advertising, nothing to buy inside the game and nothing held back for those who pay. He does not watch you either: what he reads stays on your device (his privacy policy says how).'],
        },
        {
          h: 'A coffee for the scribe',
          p: [
            'The scribes who copied the old books often ended them with a line of their own: pray for the scribe, or pour him a drink. If Pip brightened your reading and you feel like it, you can buy his maker a coffee.',
          ],
          link: { text: 'Buy the scribe a coffee', href: SUPPORT_URL },
          end: ['It unlocks nothing: everyone gets all of Pip. It only helps him keep growing.'],
        },
        {
          h: 'What others made',
          p: ['Pip carries the work of others, each under its own licence:'],
          list: [
            ['IM Fell English', 'the book’s type, by Igino Marini, from the Fell types of the seventeenth century (SIL Open Font License).'],
            ['Silkscreen', 'the camp’s small lettering, by The Silkscreen Project Authors (SIL Open Font License).'],
            ['PDF.js', 'Mozilla’s PDF renderer, which Pip’s reader uses (Apache License 2.0).'],
            ['The stars', 'of the telescope, from d3-celestial by Olaf Frohn, built on the Hipparcos catalogue (BSD licence).'],
          ],
        },
        {
          h: 'Write to me',
          p: ['A bug, an idea, a word Pip should know? Write to ' + MAIL + '.'],
        },
      ],
    },
    fr: {
      title: 'À propos de Pip',
      sub: 'Un petit compagnon qui joue avec les mots que vous lisez.',
      date: '',
      foot: 'Pip, l’extension de navigateur et l’application pour Android.',
      sections: [
        {
          h: 'Qui l’a fait',
          p: [
            `Pip est l’œuvre d’une seule personne, ${MAKER}, avec l’aide de Claude : le code, les pixels, les parchemins et les mots, le soir et le week-end.`,
            'Il a commencé en petit chevalier qui grimpait sur les lignes d’une page. Puis il est devenu bien plus que cela.',
          ],
        },
        {
          h: 'Gratuit, et il le restera',
          p: ['Pip ne coûte rien. Pas de publicité, rien à acheter dans le jeu, rien de réservé à ceux qui paient. Il ne vous observe pas non plus : ce qu’il lit reste sur votre appareil (sa politique de confidentialité dit comment).'],
        },
        {
          h: 'Un café pour le scribe',
          p: [
            'Les scribes qui copiaient les vieux livres les finissaient souvent par une ligne à eux : priez pour le scribe, ou servez-lui à boire. Si Pip a égayé vos lectures et que le cœur vous en dit, vous pouvez offrir un café à son auteur.',
          ],
          link: { text: 'Offrir un café au scribe', href: SUPPORT_URL },
          end: ['Cela ne débloque rien : tout le monde a tout Pip. Cela l’aide seulement à grandir.'],
        },
        {
          h: 'Ce que d’autres ont fait',
          p: ['Pip emporte le travail d’autres personnes, chacun sous sa propre licence :'],
          list: [
            ['IM Fell English', 'les caractères du livre, par Igino Marini, d’après les caractères Fell du XVIIᵉ siècle (SIL Open Font License).'],
            ['Silkscreen', 'les petites lettres du camp, par The Silkscreen Project Authors (SIL Open Font License).'],
            ['PDF.js', 'le moteur PDF de Mozilla, dont se sert le lecteur de Pip (Apache License 2.0).'],
            ['Les étoiles', 'du télescope, tirées de d3-celestial d’Olaf Frohn, d’après le catalogue Hipparcos (licence BSD).'],
          ],
        },
        {
          h: 'M’écrire',
          p: ['Un bogue, une idée, un mot que Pip devrait connaître ? Écrivez à ' + MAIL + '.'],
        },
      ],
    },
  };

  globalThis.PIP_PAGE = { text: TEXT, key: 'pip:about:lang' };
})();
