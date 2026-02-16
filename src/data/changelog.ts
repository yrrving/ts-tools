export interface ChangelogEntry {
  version: string
  date: string
  title: Record<string, string>
  changes: {
    type: 'added' | 'changed' | 'fixed'
    text: Record<string, string>
  }[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: '0.7.0',
    date: '2026-02-16',
    title: {
      sv: 'Enheter, Färger & Markdown',
      en: 'Units, Colors & Markdown',
      es: 'Unidades, Colores y Markdown',
      fr: 'Unités, Couleurs & Markdown',
      de: 'Einheiten, Farben & Markdown',
      pt: 'Unidades, Cores e Markdown',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Enhetsomvandlare med längd, vikt, temperatur, hastighet och datastorlek',
          en: 'Unit converter with length, weight, temperature, speed and data size',
          es: 'Conversor de unidades con longitud, peso, temperatura, velocidad y tamaño de datos',
          fr: 'Convertisseur d\'unités avec longueur, poids, température, vitesse et taille des données',
          de: 'Einheitenumrechner mit Länge, Gewicht, Temperatur, Geschwindigkeit und Datengröße',
          pt: 'Conversor de unidades com comprimento, peso, temperatura, velocidade e tamanho de dados',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Färgpalett med color picker, HEX/RGB/HSL-värden, slumpa och kopiera',
          en: 'Color palette with color picker, HEX/RGB/HSL values, randomize and copy',
          es: 'Paleta de colores con selector, valores HEX/RGB/HSL, aleatorio y copiar',
          fr: 'Palette de couleurs avec sélecteur, valeurs HEX/RGB/HSL, aléatoire et copier',
          de: 'Farbpalette mit Color Picker, HEX/RGB/HSL-Werten, Zufall und Kopieren',
          pt: 'Paleta de cores com seletor, valores HEX/RGB/HSL, aleatório e copiar',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Markdown-förhandsgranskning med delad vy, live-rendering och HTML-export',
          en: 'Markdown preview with split view, live rendering and HTML export',
          es: 'Vista previa de Markdown con vista dividida, renderizado en vivo y exportación HTML',
          fr: 'Aperçu Markdown avec vue partagée, rendu en direct et export HTML',
          de: 'Markdown-Vorschau mit geteilter Ansicht, Live-Rendering und HTML-Export',
          pt: 'Pré-visualização Markdown com vista dividida, renderização ao vivo e exportação HTML',
        },
      },
    ],
  },
  {
    version: '0.6.0',
    date: '2026-02-16',
    title: {
      sv: 'QR, Regex & Tangentbord',
      en: 'QR, Regex & Keyboard',
      es: 'QR, Regex y Teclado',
      fr: 'QR, Regex & Clavier',
      de: 'QR, Regex & Tastatur',
      pt: 'QR, Regex e Teclado',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Tre nya verktyg: QR-kodgenerator, Regex-testare, Tangentbordstest',
          en: 'Three new tools: QR Code Generator, Regex Tester, Keyboard Tester',
          es: 'Tres nuevas herramientas: Generador de QR, Probador de regex, Test de teclado',
          fr: 'Trois nouveaux outils : Générateur de QR, Testeur de regex, Test de clavier',
          de: 'Drei neue Werkzeuge: QR-Code-Generator, Regex-Tester, Tastaturtest',
          pt: 'Três novas ferramentas: Gerador de QR, Testador de regex, Teste de teclado',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'QR-kodgenerator med anpassningsbara färger, storlek och PNG-nedladdning',
          en: 'QR code generator with customizable colors, size and PNG download',
          es: 'Generador de códigos QR con colores personalizables, tamaño y descarga PNG',
          fr: 'Générateur de codes QR avec couleurs personnalisables, taille et téléchargement PNG',
          de: 'QR-Code-Generator mit anpassbaren Farben, Größe und PNG-Download',
          pt: 'Gerador de códigos QR com cores personalizáveis, tamanho e download PNG',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Regex-testare med live-matchning, flaggor och fångstgrupper',
          en: 'Regex tester with live matching, flags and capture groups',
          es: 'Probador de regex con coincidencias en vivo, banderas y grupos de captura',
          fr: 'Testeur de regex avec correspondance en direct, drapeaux et groupes de capture',
          de: 'Regex-Tester mit Live-Matching, Flags und Erfassungsgruppen',
          pt: 'Testador de regex com correspondência ao vivo, flags e grupos de captura',
        },
      },
    ],
  },
  {
    version: '0.5.0',
    date: '2026-02-13',
    title: {
      sv: 'Nya verktyg & språkreducering',
      en: 'New tools & language reduction',
      es: 'Nuevas herramientas y reducción de idiomas',
      fr: 'Nouveaux outils & réduction des langues',
      de: 'Neue Werkzeuge & Sprachreduzierung',
      pt: 'Novas ferramentas e redução de idiomas',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Fyra nya verktyg: Textverktyg, JSON-formaterare, Base64-kodare, Hash-generator',
          en: 'Four new tools: Text Tools, JSON Formatter, Base64 Encoder, Hash Generator',
          es: 'Cuatro nuevas herramientas: Herramientas de texto, Formateador JSON, Codificador Base64, Generador de hash',
          fr: 'Quatre nouveaux outils : Outils de texte, Formateur JSON, Encodeur Base64, Générateur de hash',
          de: 'Vier neue Werkzeuge: Textwerkzeuge, JSON-Formatierer, Base64-Kodierer, Hash-Generator',
          pt: 'Quatro novas ferramentas: Ferramentas de texto, Formatador JSON, Codificador Base64, Gerador de hash',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Beskrivande hints på varje verktygssida som förklarar användningsområdet',
          en: 'Descriptive hints on each tool page explaining what it\'s useful for',
          es: 'Descripciones en cada página de herramienta explicando para qué sirve',
          fr: 'Descriptions sur chaque page d\'outil expliquant son utilité',
          de: 'Beschreibende Hinweise auf jeder Werkzeugseite, die den Nutzen erklären',
          pt: 'Descrições em cada página de ferramenta explicando para que serve',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Reducerat från 12 till 6 språk (sv, en, es, fr, de, pt) för bättre underhåll',
          en: 'Reduced from 12 to 6 languages (sv, en, es, fr, de, pt) for better maintainability',
          es: 'Reducido de 12 a 6 idiomas (sv, en, es, fr, de, pt) para mejor mantenimiento',
          fr: 'Réduit de 12 à 6 langues (sv, en, es, fr, de, pt) pour une meilleure maintenabilité',
          de: 'Von 12 auf 6 Sprachen reduziert (sv, en, es, fr, de, pt) für bessere Wartbarkeit',
          pt: 'Reduzido de 12 para 6 idiomas (sv, en, es, fr, de, pt) para melhor manutenção',
        },
      },
    ],
  },
  {
    version: '0.4.0',
    date: '2026-02-13',
    title: {
      sv: 'UI & Badges',
      en: 'UI & Badges',
      es: 'UI y Badges',
      fr: 'UI & Badges',
      de: 'UI & Badges',
      pt: 'UI e Badges',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Footer med skapare och GitHub-länk',
          en: 'Footer with creator and GitHub link',
          es: 'Pie de página con creador y enlace a GitHub',
          fr: 'Pied de page avec créateur et lien GitHub',
          de: 'Footer mit Ersteller und GitHub-Link',
          pt: 'Rodapé com criador e link do GitHub',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Ljusare dark mode för bättre kontrast',
          en: 'Lighter dark mode for better contrast',
          es: 'Modo oscuro más claro para mejor contraste',
          fr: 'Mode sombre plus clair pour un meilleur contraste',
          de: 'Hellerer Dark Mode für besseren Kontrast',
          pt: 'Modo escuro mais claro para melhor contraste',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Tydligare badges med ikoner och förklarande text',
          en: 'Clearer badges with icons and descriptive text',
          es: 'Badges más claros con iconos y texto descriptivo',
          fr: 'Badges plus clairs avec icônes et texte descriptif',
          de: 'Deutlichere Badges mit Icons und beschreibendem Text',
          pt: 'Badges mais claros com ícones e texto descritivo',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Versionsnummer i footern',
          en: 'Version number in footer',
          es: 'Número de versión en el pie de página',
          fr: 'Numéro de version dans le pied de page',
          de: 'Versionsnummer im Footer',
          pt: 'Número da versão no rodapé',
        },
      },
    ],
  },
  {
    version: '0.3.0',
    date: '2026-01-28',
    title: {
      sv: 'Sök & Mission',
      en: 'Search & Mission',
      es: 'Búsqueda y Misión',
      fr: 'Recherche & Mission',
      de: 'Suche & Mission',
      pt: 'Pesquisa e Missão',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Sökfält för att filtrera verktyg efter namn och beskrivning',
          en: 'Search field to filter tools by name and description',
          es: 'Campo de búsqueda para filtrar herramientas por nombre y descripción',
          fr: 'Champ de recherche pour filtrer les outils par nom et description',
          de: 'Suchfeld zum Filtern von Werkzeugen nach Name und Beschreibung',
          pt: 'Campo de pesquisa para filtrar ferramentas por nome e descrição',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Mission-text på journalsidan om fria och öppna verktyg',
          en: 'Mission statement on journal page about free and open tools',
          es: 'Declaración de misión en la página del diario sobre herramientas libres y abiertas',
          fr: 'Déclaration de mission sur la page du journal concernant les outils libres et ouverts',
          de: 'Leitbild auf der Journalseite über freie und offene Werkzeuge',
          pt: 'Declaração de missão na página do diário sobre ferramentas livres e abertas',
        },
      },
      {
        type: 'added',
        text: {
          sv: '5 nya verktygsplatser: text till tal, tal till text, tolk, filmtranskribering, musiktranskribering',
          en: '5 new tool placeholders: text to speech, speech to text, interpreter, video transcription, music transcription',
          es: '5 nuevas herramientas: texto a voz, voz a texto, intérprete, transcripción de video, transcripción de música',
          fr: '5 nouveaux outils : texte en parole, parole en texte, interprète, transcription vidéo, transcription musicale',
          de: '5 neue Werkzeuge: Text zu Sprache, Sprache zu Text, Dolmetscher, Videotranskription, Musiktranskription',
          pt: '5 novas ferramentas: texto para fala, fala para texto, intérprete, transcrição de vídeo, transcrição de música',
        },
      },
    ],
  },
  {
    version: '0.2.0',
    date: '2026-01-28',
    title: {
      sv: 'Tema & Språk',
      en: 'Theme & Language',
      es: 'Tema e Idioma',
      fr: 'Thème & Langue',
      de: 'Design & Sprache',
      pt: 'Tema e Idioma',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Ljust/mörkt tema med toggle-knapp i headern',
          en: 'Light/dark theme with toggle button in header',
          es: 'Tema claro/oscuro con botón de alternancia en el encabezado',
          fr: 'Thème clair/sombre avec bouton de basculement dans l\'en-tête',
          de: 'Helles/dunkles Design mit Umschaltknopf im Header',
          pt: 'Tema claro/escuro com botão de alternância no cabeçalho',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Stöd för 6 språk',
          en: 'Support for 6 languages',
          es: 'Soporte para 6 idiomas',
          fr: 'Prise en charge de 6 langues',
          de: 'Unterstützung für 6 Sprachen',
          pt: 'Suporte para 6 idiomas',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Tema och språk sparas i webbläsarens localStorage',
          en: 'Theme and language saved in browser localStorage',
          es: 'Tema e idioma guardados en el localStorage del navegador',
          fr: 'Thème et langue sauvegardés dans le localStorage du navigateur',
          de: 'Design und Sprache werden im Browser-localStorage gespeichert',
          pt: 'Tema e idioma salvos no localStorage do navegador',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Journalsida med versionshistorik',
          en: 'Journal page with version history',
          es: 'Página de diario con historial de versiones',
          fr: 'Page de journal avec historique des versions',
          de: 'Journalseite mit Versionshistorie',
          pt: 'Página de diário com histórico de versões',
        },
      },
    ],
  },
  {
    version: '0.1.0',
    date: '2026-01-27',
    title: {
      sv: 'Första versionen',
      en: 'First release',
      es: 'Primera versión',
      fr: 'Première version',
      de: 'Erste Version',
      pt: 'Primeira versão',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: '16 verktygsplatser med ikoner och beskrivningar',
          en: '16 tool placeholders with icons and descriptions',
          es: '16 herramientas con iconos y descripciones',
          fr: '16 emplacements d\'outils avec icônes et descriptions',
          de: '16 Werkzeug-Platzhalter mit Icons und Beschreibungen',
          pt: '16 ferramentas com ícones e descrições',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Filtrering efter enhet (dator/mobil) och anslutning (online/offline)',
          en: 'Filtering by device (desktop/mobile) and connection (online/offline)',
          es: 'Filtrado por dispositivo (escritorio/móvil) y conexión (en línea/sin conexión)',
          fr: 'Filtrage par appareil (bureau/mobile) et connexion (en ligne/hors ligne)',
          de: 'Filterung nach Gerät (Desktop/Mobil) und Verbindung (Online/Offline)',
          pt: 'Filtragem por dispositivo (desktop/móvel) e conexão (online/offline)',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Responsiv layout med Tailwind CSS',
          en: 'Responsive layout with Tailwind CSS',
          es: 'Diseño responsivo con Tailwind CSS',
          fr: 'Mise en page responsive avec Tailwind CSS',
          de: 'Responsives Layout mit Tailwind CSS',
          pt: 'Layout responsivo com Tailwind CSS',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Routing med React Router',
          en: 'Routing with React Router',
          es: 'Enrutamiento con React Router',
          fr: 'Routage avec React Router',
          de: 'Routing mit React Router',
          pt: 'Roteamento com React Router',
        },
      },
    ],
  },
]
