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
    version: '0.10.1',
    date: '2026-02-18',
    title: {
      sv: 'Skärfilsgeneratoruppdatering & navigeringsfix',
      en: 'Cut File Generator update & navigation fix',
      es: 'Actualización del generador de corte y corrección de navegación',
      fr: 'Mise à jour du générateur de découpe et correction de navigation',
      de: 'Schnittdatei-Generator-Update & Navigationskorrektur',
      pt: 'Atualização do gerador de corte e correção de navegação',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Skärfilsgeneratorn: flytta-verktyg (handikon) — dra om former efter att du ritat dem, fungerar med touch',
          en: 'Cut File Generator: move tool (hand icon) — reposition shapes after drawing, works with touch',
          es: 'Generador de corte: herramienta mover (icono de mano) — reposicionar formas, funciona con táctil',
          fr: 'Générateur de découpe : outil déplacer (icône main) — repositionner les formes, fonctionne au toucher',
          de: 'Schnittdatei-Generator: Verschieben-Werkzeug (Hand-Symbol) — Formen nachträglich verschieben, Touch-unterstützt',
          pt: 'Gerador de corte: ferramenta mover (ícone de mão) — reposicionar formas, funciona com toque',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Skärfilsgeneratorn: SVG exporteras nu med mått i mm (96 dpi-standard) istället för pixlar — lasermjukvara som Glowforge läser rätt fysisk storlek direkt',
          en: 'Cut File Generator: SVG now exports with mm dimensions (96 dpi standard) instead of pixels — laser software like Glowforge reads correct physical size directly',
          es: 'Generador de corte: SVG ahora exporta con dimensiones en mm (estándar 96 dpi) en lugar de píxeles',
          fr: 'Générateur de découpe : le SVG est maintenant exporté avec des dimensions en mm (standard 96 dpi) au lieu de pixels',
          de: 'Schnittdatei-Generator: SVG wird jetzt mit mm-Abmessungen (96-dpi-Standard) statt Pixeln exportiert',
          pt: 'Gerador de corte: SVG agora exporta com dimensões em mm (padrão 96 dpi) em vez de pixels',
        },
      },
      {
        type: 'fixed',
        text: {
          sv: 'Tillbaka-knappen i alla verktyg använder nu webbläsarhistoriken (navigate(-1)) — backar till rätt kategorilista istället för startsidan',
          en: 'Back button in all tools now uses browser history (navigate(-1)) — returns to correct category list instead of the home page',
          es: 'El botón atrás en todas las herramientas ahora usa el historial del navegador — regresa a la lista de categoría correcta',
          fr: 'Le bouton retour dans tous les outils utilise maintenant l\'historique du navigateur — revient à la bonne liste de catégorie',
          de: 'Zurück-Schaltfläche in allen Werkzeugen nutzt jetzt den Browser-Verlauf — kehrt zur richtigen Kategorieliste zurück',
          pt: 'O botão voltar em todas as ferramentas agora usa o histórico do navegador — retorna à lista de categoria correta',
        },
      },
      {
        type: 'fixed',
        text: {
          sv: 'Uppdatering av sidan på direkt-URL ger inte längre "File not found" på GitHub Pages',
          en: 'Refreshing the page on a direct URL no longer shows "File not found" on GitHub Pages',
          es: 'Recargar la página en una URL directa ya no muestra "File not found" en GitHub Pages',
          fr: 'Actualiser la page sur une URL directe n\'affiche plus "File not found" sur GitHub Pages',
          de: 'Das Aktualisieren der Seite unter einer direkten URL zeigt auf GitHub Pages nicht mehr "File not found"',
          pt: 'Atualizar a página numa URL direta não mostra mais "File not found" no GitHub Pages',
        },
      },
    ],
  },
  {
    version: '0.10.0',
    date: '2026-02-17',
    title: {
      sv: 'Kategorier & 31 nya verktygsplatser',
      en: 'Categories & 31 new tool placeholders',
      es: 'Categorías y 31 nuevas herramientas',
      fr: 'Catégories et 31 nouveaux outils',
      de: 'Kategorien & 31 neue Werkzeuge',
      pt: 'Categorias e 31 novas ferramentas',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: '7 kategorier med sektionsrubriker: Bild & Media, Text & Dokument, Ljud & Tal, Kod & Data, Nätverk & Säkerhet, Beräkning & Konvertering, Produktivitet & Verktyg',
          en: '7 categories with section headers: Image & Media, Text & Documents, Audio & Speech, Code & Data, Network & Security, Calculation & Conversion, Productivity & Tools',
          es: '7 categorías con encabezados: Imagen y Medios, Texto y Documentos, Audio y Voz, Código y Datos, Red y Seguridad, Cálculo y Conversión, Productividad y Herramientas',
          fr: '7 catégories avec en-têtes : Image et Médias, Texte et Documents, Audio et Parole, Code et Données, Réseau et Sécurité, Calcul et Conversion, Productivité et Outils',
          de: '7 Kategorien mit Überschriften: Bild & Medien, Text & Dokumente, Audio & Sprache, Code & Daten, Netzwerk & Sicherheit, Berechnung & Umrechnung, Produktivität & Werkzeuge',
          pt: '7 categorias com cabeçalhos: Imagem e Mídia, Texto e Documentos, Áudio e Fala, Código e Dados, Rede e Segurança, Cálculo e Conversão, Produtividade e Ferramentas',
        },
      },
      {
        type: 'added',
        text: {
          sv: '31 nya verktygsplatser: Bildbeskärare, Bakgrundsborttagare, Favicon-generator, Bildkollage, Pixelräknare, ASCII-konst, Skärfilsgenerator, Diff-jämförare, Lorem Ipsum, CSV ↔ JSON, PDF-verktyg, OCR, Metronom, Tonhöjdsmätare, Vitt brus, Kodminifierare, CSS Gradient, Cron-tolkare, JWT-dekodare, DNS-uppslagning, SSL-kontroll, HTTP Headers, User Agent-info, Miniräknare, Procenträknare, Slumptalsgenerator, Pomodoro-timer, Nedräkningstimer, Stoppur, Anteckningsblock, Slumpmässigt val',
          en: '31 new tool placeholders: Image Cropper, Background Remover, Favicon Generator, Image Collage, Pixel Counter, ASCII Art, Cut File Generator, Diff Compare, Lorem Ipsum, CSV ↔ JSON, PDF Tools, OCR, Metronome, Pitch Detector, White Noise, Code Minifier, CSS Gradient, Cron Parser, JWT Decoder, DNS Lookup, SSL Check, HTTP Headers, User Agent Info, Calculator, Percentage Calculator, Random Number Generator, Pomodoro Timer, Countdown Timer, Stopwatch, Notepad, Random Picker',
          es: '31 nuevas herramientas: Recortador de imágenes, Eliminador de fondo, Generador de favicon, Collage, Contador de píxeles, Arte ASCII, Generador de corte, Comparador Diff, Lorem Ipsum, CSV ↔ JSON, Herramientas PDF, OCR, Metrónomo, Detector de tono, Ruido blanco, Minificador, Gradiente CSS, Intérprete Cron, Decodificador JWT, Búsqueda DNS, Verificación SSL, Cabeceras HTTP, User Agent, Calculadora, Porcentajes, Números aleatorios, Pomodoro, Cuenta regresiva, Cronómetro, Bloc de notas, Selector aleatorio',
          fr: '31 nouveaux outils : Rogneur, Suppression d\'arrière-plan, Favicon, Collage, Compteur de pixels, Art ASCII, Fichier de découpe, Comparateur Diff, Lorem Ipsum, CSV ↔ JSON, Outils PDF, OCR, Métronome, Détecteur de tonalité, Bruit blanc, Minifieur, Dégradé CSS, Cron, JWT, DNS, SSL, En-têtes HTTP, User Agent, Calculatrice, Pourcentages, Nombres aléatoires, Pomodoro, Compte à rebours, Chronomètre, Bloc-notes, Sélecteur aléatoire',
          de: '31 neue Werkzeuge: Bildzuschnitt, Hintergrundentferner, Favicon, Bildcollage, Pixelzähler, ASCII-Kunst, Schnittdatei, Diff-Vergleicher, Lorem Ipsum, CSV ↔ JSON, PDF-Werkzeuge, OCR, Metronom, Tonhöhenmesser, Weißes Rauschen, Code-Minifizierer, CSS-Gradient, Cron, JWT, DNS, SSL, HTTP-Header, User-Agent, Taschenrechner, Prozentrechner, Zufallszahlen, Pomodoro, Countdown, Stoppuhr, Notizblock, Zufallsauswahl',
          pt: '31 novas ferramentas: Recortador, Removedor de fundo, Favicon, Colagem, Contador de pixels, Arte ASCII, Arquivo de corte, Comparador Diff, Lorem Ipsum, CSV ↔ JSON, Ferramentas PDF, OCR, Metrônomo, Detector de tom, Ruído branco, Minificador, Gradiente CSS, Cron, JWT, DNS, SSL, Cabeçalhos HTTP, User Agent, Calculadora, Porcentagem, Números aleatórios, Pomodoro, Contagem regressiva, Cronômetro, Bloco de notas, Seletor aleatório',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Översättningar för alla 31 nya verktyg i alla 6 språk',
          en: 'Translations for all 31 new tools in all 6 languages',
          es: 'Traducciones para las 31 nuevas herramientas en los 6 idiomas',
          fr: 'Traductions pour les 31 nouveaux outils dans les 6 langues',
          de: 'Übersetzungen für alle 31 neuen Werkzeuge in allen 6 Sprachen',
          pt: 'Traduções para as 31 novas ferramentas nos 6 idiomas',
        },
      },
    ],
  },
  {
    version: '0.9.0',
    date: '2026-02-16',
    title: {
      sv: 'Sex nya verktyg: Översättare, Bandbreddstest, Linjal, PNG till SVG, Mediakonverterare & Brodyrkortsvisare',
      en: 'Six new tools: Translator, Bandwidth Test, Ruler, PNG to SVG, Media Converter & Embroidery Viewer',
      es: 'Seis nuevas herramientas: Traductor, Test de ancho de banda, Regla, PNG a SVG, Conversor de medios y Visor de bordado',
      fr: 'Six nouveaux outils : Traducteur, Test de bande passante, Règle, PNG vers SVG, Convertisseur multimédia et Visionneuse de broderie',
      de: 'Sechs neue Werkzeuge: Übersetzer, Bandbreitentest, Lineal, PNG zu SVG, Medienkonverter & Stickdatei-Betrachter',
      pt: 'Seis novas ferramentas: Tradutor, Teste de largura de banda, Régua, PNG para SVG, Conversor de mídia e Visualizador de bordado',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Översättare med stöd för 19 språk, språkbyte och kopiering',
          en: 'Translator with support for 19 languages, language swap and copy',
          es: 'Traductor con soporte para 19 idiomas, intercambio de idiomas y copia',
          fr: 'Traducteur avec prise en charge de 19 langues, échange de langues et copie',
          de: 'Übersetzer mit Unterstützung für 19 Sprachen, Sprachwechsel und Kopieren',
          pt: 'Tradutor com suporte para 19 idiomas, troca de idiomas e cópia',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Bandbreddstest med nedladdningshastighet, latens, visuell mätare och historik',
          en: 'Bandwidth test with download speed, latency, visual gauge and history',
          es: 'Test de ancho de banda con velocidad de descarga, latencia, indicador visual e historial',
          fr: 'Test de bande passante avec vitesse de téléchargement, latence, jauge visuelle et historique',
          de: 'Bandbreitentest mit Download-Geschwindigkeit, Latenz, visueller Anzeige und Verlauf',
          pt: 'Teste de largura de banda com velocidade de download, latência, indicador visual e histórico',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Linjal med cm/tum, kalibrering via kreditkort och klicka-dra-mätning',
          en: 'Ruler with cm/inch, credit card calibration and click-drag measurement',
          es: 'Regla con cm/pulgadas, calibración con tarjeta de crédito y medición por arrastre',
          fr: 'Règle avec cm/pouces, calibration par carte bancaire et mesure par glisser-déposer',
          de: 'Lineal mit cm/Zoll, Kreditkarten-Kalibrierung und Klick-Zieh-Messung',
          pt: 'Régua com cm/polegadas, calibração com cartão de crédito e medição por arrastar',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'PNG till SVG med svartvitt/färgläge, tröskel och upplösningsreglage',
          en: 'PNG to SVG with black & white/color mode, threshold and resolution controls',
          es: 'PNG a SVG con modo blanco y negro/color, umbral y controles de resolución',
          fr: 'PNG vers SVG avec mode noir et blanc/couleur, seuil et contrôles de résolution',
          de: 'PNG zu SVG mit Schwarz-Weiß/Farbmodus, Schwellenwert und Auflösungsreglern',
          pt: 'PNG para SVG com modo preto e branco/cor, limiar e controles de resolução',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Mediakonverterare med WAV, WebM och ljudextraktion — allt lokalt i webbläsaren',
          en: 'Media converter with WAV, WebM and audio extraction — all local in browser',
          es: 'Conversor de medios con WAV, WebM y extracción de audio — todo local en el navegador',
          fr: 'Convertisseur multimédia avec WAV, WebM et extraction audio — tout local dans le navigateur',
          de: 'Medienkonverter mit WAV, WebM und Audioextraktion — alles lokal im Browser',
          pt: 'Conversor de mídia com WAV, WebM e extração de áudio — tudo local no navegador',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Brodyrkortsvisare för PES- och DST-filer med trådfärger, stygnantal och zoom',
          en: 'Embroidery viewer for PES and DST files with thread colors, stitch count and zoom',
          es: 'Visor de bordado para archivos PES y DST con colores de hilo, conteo de puntadas y zoom',
          fr: 'Visionneuse de broderie pour fichiers PES et DST avec couleurs de fil, nombre de points et zoom',
          de: 'Stickdatei-Betrachter für PES- und DST-Dateien mit Fadenfarben, Stichanzahl und Zoom',
          pt: 'Visualizador de bordado para arquivos PES e DST com cores de linha, contagem de pontos e zoom',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Beskrivande hints tillagda för alla nya verktyg på alla 6 språk',
          en: 'Descriptive hints added for all new tools in all 6 languages',
          es: 'Descripciones añadidas para todas las nuevas herramientas en los 6 idiomas',
          fr: 'Descriptions ajoutées pour tous les nouveaux outils dans les 6 langues',
          de: 'Beschreibende Hinweise für alle neuen Werkzeuge in allen 6 Sprachen hinzugefügt',
          pt: 'Descrições adicionadas para todas as novas ferramentas nos 6 idiomas',
        },
      },
    ],
  },
  {
    version: '0.8.0',
    date: '2026-02-16',
    title: {
      sv: 'Bilder, Tidszoner & Filanalys',
      en: 'Images, Time Zones & File Analysis',
      es: 'Imágenes, Zonas horarias y Análisis',
      fr: 'Images, Fuseaux horaires & Analyse',
      de: 'Bilder, Zeitzonen & Dateianalyse',
      pt: 'Imagens, Fusos horários e Análise',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Bildkomprimering med kvalitetsreglage, max bredd och jämförelsevy',
          en: 'Image compression with quality slider, max width and comparison view',
          es: 'Compresión de imágenes con control de calidad, ancho máximo y vista comparativa',
          fr: 'Compression d\'images avec curseur de qualité, largeur max et vue comparative',
          de: 'Bildkomprimierung mit Qualitätsregler, maximaler Breite und Vergleichsansicht',
          pt: 'Compressão de imagens com controle de qualidade, largura máxima e vista comparativa',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Tidszoner med live-klocka, lägg till/ta bort städer',
          en: 'Time zones with live clock, add/remove cities',
          es: 'Zonas horarias con reloj en vivo, añadir/eliminar ciudades',
          fr: 'Fuseaux horaires avec horloge en direct, ajouter/supprimer des villes',
          de: 'Zeitzonen mit Live-Uhr, Städte hinzufügen/entfernen',
          pt: 'Fusos horários com relógio ao vivo, adicionar/remover cidades',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Filanalys med metadata, bildförhandsgranskning och textinnehåll',
          en: 'File analysis with metadata, image preview and text content',
          es: 'Análisis de archivos con metadatos, vista previa de imagen y contenido de texto',
          fr: 'Analyse de fichiers avec métadonnées, aperçu d\'image et contenu texte',
          de: 'Dateianalyse mit Metadaten, Bildvorschau und Textinhalt',
          pt: 'Análise de arquivos com metadados, pré-visualização de imagem e conteúdo de texto',
        },
      },
    ],
  },
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
