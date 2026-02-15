export interface ToolTranslation {
  name: string
  description: string
  hint?: string
}

export interface Translation {
  toolsHeading: string
  searchPlaceholder: string
  emptyState: string
  comingSoon: string
  notFound: string
  backToTools: string
  tabs: {
    alla: string
    dator: string
    mobil: string
    online: string
    offline: string
  }
  device: {
    dator: string
    mobil: string
    båda: string
  }
  connection: {
    online: string
    offline: string
  }
  theme: {
    light: string
    dark: string
    highContrast: string
  }
  journal: {
    heading: string
    description: string
    mission: string
    added: string
    changed: string
    fixed: string
  }
  textTools?: {
    characters: string
    charactersNoSpaces: string
    words: string
    lines: string
    placeholder: string
    copy: string
    copied: string
    clear: string
    transform: string
  }
  hashGenerator?: {
    input: string
    placeholder: string
    copy: string
    copied: string
  }
  base64?: {
    encode: string
    decode: string
    textInput: string
    textOutput: string
    encodePlaceholder: string
    decodePlaceholder: string
    copy: string
    copied: string
    swap: string
    invalidBase64: string
    encodingError: string
  }
  jsonFormatter?: {
    input: string
    output: string
    placeholder: string
    format: string
    minify: string
    copy: string
    copied: string
    clear: string
    indent: string
    error: string
  }
  tools: Record<string, ToolTranslation>
}

export const translations: Record<string, Translation> = {
  sv: {
    toolsHeading: 'Verktyg',
    searchPlaceholder: 'Sök verktyg...',
    emptyState: 'Inga verktyg matchar filtret.',
    comingSoon: 'Kommer snart',
    notFound: 'Verktyget hittades inte.',
    backToTools: 'Tillbaka till alla verktyg',
    tabs: {
      alla: 'Alla',
      dator: 'Dator',
      mobil: 'Mobil',
      online: 'Online',
      offline: 'Offline',
    },
    device: {
      dator: 'Bäst på dator',
      mobil: 'Bäst på mobil',
      båda: 'Alla enheter',
    },
    connection: {
      online: 'Kräver internet',
      offline: 'Funkar offline',
    },
    theme: {
      light: 'Ljust',
      dark: 'Mörkt',
      highContrast: 'Hög kontrast',
    },
    journal: {
      heading: 'Journal',
      description: 'Vad vi byggt och uppdaterat i varje version.',
      mission: 'Vi tror att datorer kan göra fantastiska saker — och att alla ska ha tillgång till dem. Teknik ska inte vara något man betalar för bara för att få tillgång till det andra redan byggt. Därför skapar vi dessa verktyg, fria och öppna, för alla.',
      added: 'Nytt',
      changed: 'Ändrat',
      fixed: 'Fixat',
    },
    textTools: {
      characters: 'Tecken',
      charactersNoSpaces: 'Utan mellanslag',
      words: 'Ord',
      lines: 'Rader',
      placeholder: 'Skriv eller klistra in text här...',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      clear: 'Rensa',
      transform: 'Transformera',
    },
    hashGenerator: {
      input: 'Text',
      placeholder: 'Skriv eller klistra in text att hasha...',
      copy: 'Kopiera',
      copied: 'Kopierat!',
    },
    base64: {
      encode: 'Koda',
      decode: 'Avkoda',
      textInput: 'Text',
      textOutput: 'Text',
      encodePlaceholder: 'Skriv text att koda...',
      decodePlaceholder: 'Klistra in Base64 att avkoda...',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      swap: 'Byt',
      invalidBase64: 'Ogiltig Base64-sträng',
      encodingError: 'Kunde inte koda texten',
    },
    jsonFormatter: {
      input: 'Indata',
      output: 'Resultat',
      placeholder: 'Klistra in JSON här...',
      format: 'Formatera',
      minify: 'Minifiera',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      clear: 'Rensa',
      indent: 'Indrag',
      error: 'Fel',
    },
    tools: {
      'png-till-svg': { name: 'PNG till SVG', description: 'Konvertera PNG-bilder till SVG-format' },
      'fargpalett': { name: 'Färgpalett', description: 'Skapa och hantera färgpaletter' },
      'filanalys': { name: 'Filanalys', description: 'Analysera filinnehåll och metadata' },
      'qr-kod': { name: 'QR-kod', description: 'Generera och skanna QR-koder' },
      'base64-kodare': { name: 'Base64-kodare', description: 'Koda och avkoda Base64-text', hint: 'Base64 används för att bädda in data i URL:er, e-post och API-anrop. Smidigt när du felsöker eller behöver skicka binärdata som text.' },
      'linjal': { name: 'Linjal', description: 'Mät avstånd på skärmen' },
      'enhetsomvandlare': { name: 'Enhetsomvandlare', description: 'Konvertera mellan olika måttenheter' },
      'tidszoner': { name: 'Tidszoner', description: 'Jämför tid i olika tidszoner' },
      'hash-generator': { name: 'Hash-generator', description: 'Generera SHA-256, SHA-512 och andra hash-värden', hint: 'Hash-värden används för att verifiera att filer inte ändrats, kontrollera dataintegritet och inom kryptografi. Klistra in valfri text och se dess hash direkt.' },
      'losenordsgenerator': { name: 'Lösenordsgenerator', description: 'Skapa starka och säkra lösenord', hint: 'Återanvända lösenord är en av de vanligaste säkerhetsriskerna. Generera unika, starka lösenord för varje tjänst — direkt i webbläsaren utan att skicka data någonstans.' },
      'textverktyg': { name: 'Textverktyg', description: 'Räkna ord, tecken och transformera text', hint: 'Perfekt när du behöver räkna ord i en uppsats, rensa bort dubbletter i en lista, eller snabbt göra om text till versaler — utan att öppna ett tungt program.' },
      'oversattare': { name: 'Översättare', description: 'Översätt text mellan olika språk' },
      'ip-info': { name: 'IP-info', description: 'Visa din IP-adress och nätverksinformation' },
      'bandbreddstest': { name: 'Bandbreddstest', description: 'Testa din internetanslutningshastighet' },
      'tangentbordstest': { name: 'Tangentbordstest', description: 'Testa tangentbordets knappar och funktioner' },
      'json-formaterare': { name: 'JSON-formaterare', description: 'Formatera och validera JSON-data', hint: 'API:er och konfigurationsfiler använder JSON. Klistra in rörig JSON här för att göra den läsbar, eller minifiera den för att spara plats.' },
      'text-till-tal': { name: 'Text till tal', description: 'Omvandla skriven text till talat ljud' },
      'tal-till-text': { name: 'Tal till text', description: 'Omvandla talat ljud till skriven text' },
      'regex-testare': { name: 'Regex-testare', description: 'Testa och felsök reguljära uttryck' },
      'bildkomprimering': { name: 'Bildkomprimering', description: 'Komprimera bilder utan att tappa kvalitet' },
      'markdown-forhandsgranskning': { name: 'Markdown-förhandsgranskning', description: 'Förhandsgranska och redigera Markdown-text' },
      'mediakonverterare': { name: 'Mediakonverterare', description: 'Konvertera mellan ljud- och videoformat — MP4, MP3, WAV, WebM, OGG och fler' },
      'brodyrkortsvisare': { name: 'Brodyrkortsvisare', description: 'Visa och förhandsgranska brodyrmönster från PES, DST, JEF och andra format' },
    },
  },
  en: {
    toolsHeading: 'Tools',
    searchPlaceholder: 'Search tools...',
    emptyState: 'No tools match the filter.',
    comingSoon: 'Coming soon',
    notFound: 'Tool not found.',
    backToTools: 'Back to all tools',
    tabs: {
      alla: 'All',
      dator: 'Desktop',
      mobil: 'Mobile',
      online: 'Online',
      offline: 'Offline',
    },
    device: {
      dator: 'Best on desktop',
      mobil: 'Best on mobile',
      båda: 'All devices',
    },
    connection: {
      online: 'Requires internet',
      offline: 'Works offline',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      highContrast: 'High contrast',
    },
    journal: {
      heading: 'Journal',
      description: 'What we built and updated in each version.',
      mission: 'We believe computers can do amazing things — and that everyone should have access to them. Technology shouldn\'t be something you pay for just because someone else built it. That\'s why we create these tools, free and open, for everyone.',
      added: 'Added',
      changed: 'Changed',
      fixed: 'Fixed',
    },
    textTools: {
      characters: 'Characters',
      charactersNoSpaces: 'No spaces',
      words: 'Words',
      lines: 'Lines',
      placeholder: 'Type or paste text here...',
      copy: 'Copy',
      copied: 'Copied!',
      clear: 'Clear',
      transform: 'Transform',
    },
    hashGenerator: {
      input: 'Text',
      placeholder: 'Type or paste text to hash...',
      copy: 'Copy',
      copied: 'Copied!',
    },
    base64: {
      encode: 'Encode',
      decode: 'Decode',
      textInput: 'Text',
      textOutput: 'Text',
      encodePlaceholder: 'Type text to encode...',
      decodePlaceholder: 'Paste Base64 to decode...',
      copy: 'Copy',
      copied: 'Copied!',
      swap: 'Swap',
      invalidBase64: 'Invalid Base64 string',
      encodingError: 'Could not encode text',
    },
    jsonFormatter: {
      input: 'Input',
      output: 'Result',
      placeholder: 'Paste JSON here...',
      format: 'Format',
      minify: 'Minify',
      copy: 'Copy',
      copied: 'Copied!',
      clear: 'Clear',
      indent: 'Indent',
      error: 'Error',
    },
    tools: {
      'png-till-svg': { name: 'PNG to SVG', description: 'Convert PNG images to SVG format' },
      'fargpalett': { name: 'Color Palette', description: 'Create and manage color palettes' },
      'filanalys': { name: 'File Analysis', description: 'Analyze file content and metadata' },
      'qr-kod': { name: 'QR Code', description: 'Generate and scan QR codes' },
      'base64-kodare': { name: 'Base64 Encoder', description: 'Encode and decode Base64 text', hint: 'Base64 is used to embed data in URLs, emails and API calls. Handy when debugging or when you need to send binary data as text.' },
      'linjal': { name: 'Ruler', description: 'Measure distances on screen' },
      'enhetsomvandlare': { name: 'Unit Converter', description: 'Convert between different units of measurement' },
      'tidszoner': { name: 'Time Zones', description: 'Compare time across different time zones' },
      'hash-generator': { name: 'Hash Generator', description: 'Generate SHA-256, SHA-512 and other hash values', hint: 'Hash values are used to verify files haven\'t been altered, check data integrity and in cryptography. Paste any text and see its hash instantly.' },
      'losenordsgenerator': { name: 'Password Generator', description: 'Create strong and secure passwords', hint: 'Reusing passwords is one of the most common security risks. Generate unique, strong passwords for every service — right in your browser without sending data anywhere.' },
      'textverktyg': { name: 'Text Tools', description: 'Count words, characters and transform text', hint: 'Perfect when you need to count words in an essay, remove duplicates from a list, or quickly convert text to uppercase — without opening a heavy application.' },
      'oversattare': { name: 'Translator', description: 'Translate text between different languages' },
      'ip-info': { name: 'IP Info', description: 'Show your IP address and network information' },
      'bandbreddstest': { name: 'Bandwidth Test', description: 'Test your internet connection speed' },
      'tangentbordstest': { name: 'Keyboard Test', description: 'Test keyboard keys and functions' },
      'json-formaterare': { name: 'JSON Formatter', description: 'Format and validate JSON data', hint: 'APIs and config files use JSON. Paste messy JSON here to make it readable, or minify it to save space.' },
      'text-till-tal': { name: 'Text to Speech', description: 'Convert written text to spoken audio' },
      'tal-till-text': { name: 'Speech to Text', description: 'Convert spoken audio to written text' },
      'regex-testare': { name: 'Regex Tester', description: 'Test and debug regular expressions' },
      'bildkomprimering': { name: 'Image Compression', description: 'Compress images without losing quality' },
      'markdown-forhandsgranskning': { name: 'Markdown Preview', description: 'Preview and edit Markdown text' },
      'mediakonverterare': { name: 'Media Converter', description: 'Convert between audio and video formats — MP4, MP3, WAV, WebM, OGG and more' },
      'brodyrkortsvisare': { name: 'Embroidery Viewer', description: 'View and preview embroidery patterns from PES, DST, JEF and other formats' },
    },
  },
  es: {
    toolsHeading: 'Herramientas',
    searchPlaceholder: 'Buscar herramientas...',
    emptyState: 'Ninguna herramienta coincide con el filtro.',
    comingSoon: 'Próximamente',
    notFound: 'Herramienta no encontrada.',
    backToTools: 'Volver a todas las herramientas',
    tabs: {
      alla: 'Todas',
      dator: 'Escritorio',
      mobil: 'Móvil',
      online: 'En línea',
      offline: 'Sin conexión',
    },
    device: {
      dator: 'Mejor en escritorio',
      mobil: 'Mejor en móvil',
      båda: 'Todos los dispositivos',
    },
    connection: {
      online: 'Requiere internet',
      offline: 'Funciona sin conexión',
    },
    theme: {
      light: 'Claro',
      dark: 'Oscuro',
      highContrast: 'Alto contraste',
    },
    journal: {
      heading: 'Diario',
      description: 'Lo que hemos construido y actualizado en cada versión.',
      mission: 'Creemos que las computadoras pueden hacer cosas increíbles — y que todos deberían tener acceso a ellas. La tecnología no debería ser algo por lo que se pague solo porque alguien más la construyó. Por eso creamos estas herramientas, libres y abiertas, para todos.',
      added: 'Añadido',
      changed: 'Cambiado',
      fixed: 'Corregido',
    },
    textTools: {
      characters: 'Caracteres',
      charactersNoSpaces: 'Sin espacios',
      words: 'Palabras',
      lines: 'Líneas',
      placeholder: 'Escribe o pega texto aquí...',
      copy: 'Copiar',
      copied: '¡Copiado!',
      clear: 'Limpiar',
      transform: 'Transformar',
    },
    hashGenerator: {
      input: 'Texto',
      placeholder: 'Escribe o pega texto para generar hash...',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    base64: {
      encode: 'Codificar',
      decode: 'Decodificar',
      textInput: 'Texto',
      textOutput: 'Texto',
      encodePlaceholder: 'Escribe texto para codificar...',
      decodePlaceholder: 'Pega Base64 para decodificar...',
      copy: 'Copiar',
      copied: '¡Copiado!',
      swap: 'Intercambiar',
      invalidBase64: 'Cadena Base64 no válida',
      encodingError: 'No se pudo codificar el texto',
    },
    jsonFormatter: {
      input: 'Entrada',
      output: 'Resultado',
      placeholder: 'Pega JSON aquí...',
      format: 'Formatear',
      minify: 'Minificar',
      copy: 'Copiar',
      copied: '¡Copiado!',
      clear: 'Limpiar',
      indent: 'Sangría',
      error: 'Error',
    },
    tools: {
      'png-till-svg': { name: 'PNG a SVG', description: 'Convertir imágenes PNG a formato SVG' },
      'fargpalett': { name: 'Paleta de colores', description: 'Crear y gestionar paletas de colores' },
      'filanalys': { name: 'Análisis de archivos', description: 'Analizar contenido y metadatos de archivos' },
      'qr-kod': { name: 'Código QR', description: 'Generar y escanear códigos QR' },
      'base64-kodare': { name: 'Codificador Base64', description: 'Codificar y decodificar texto Base64', hint: 'Base64 se usa para incrustar datos en URLs, correos y llamadas API. Útil para depurar o enviar datos binarios como texto.' },
      'linjal': { name: 'Regla', description: 'Medir distancias en la pantalla' },
      'enhetsomvandlare': { name: 'Conversor de unidades', description: 'Convertir entre diferentes unidades de medida' },
      'tidszoner': { name: 'Zonas horarias', description: 'Comparar la hora en diferentes zonas horarias' },
      'hash-generator': { name: 'Generador de hash', description: 'Generar valores SHA-256, SHA-512 y otros hash', hint: 'Los valores hash se usan para verificar que los archivos no han sido alterados y en criptografía. Pega cualquier texto y ve su hash al instante.' },
      'losenordsgenerator': { name: 'Generador de contraseñas', description: 'Crear contraseñas fuertes y seguras', hint: 'Reutilizar contraseñas es uno de los riesgos de seguridad más comunes. Genera contraseñas únicas y fuertes para cada servicio — directamente en tu navegador.' },
      'textverktyg': { name: 'Herramientas de texto', description: 'Contar palabras, caracteres y transformar texto', hint: 'Perfecto para contar palabras en un ensayo, eliminar duplicados de una lista o convertir texto a mayúsculas rápidamente.' },
      'oversattare': { name: 'Traductor', description: 'Traducir texto entre diferentes idiomas' },
      'ip-info': { name: 'Info IP', description: 'Mostrar tu dirección IP e información de red' },
      'bandbreddstest': { name: 'Test de ancho de banda', description: 'Probar la velocidad de tu conexión a Internet' },
      'tangentbordstest': { name: 'Test de teclado', description: 'Probar las teclas y funciones del teclado' },
      'json-formaterare': { name: 'Formateador JSON', description: 'Formatear y validar datos JSON', hint: 'Las APIs y archivos de configuración usan JSON. Pega JSON desordenado aquí para hacerlo legible, o minifícalo para ahorrar espacio.' },
      'text-till-tal': { name: 'Texto a voz', description: 'Convertir texto escrito en audio hablado' },
      'tal-till-text': { name: 'Voz a texto', description: 'Convertir audio hablado en texto escrito' },
      'regex-testare': { name: 'Probador de regex', description: 'Probar y depurar expresiones regulares' },
      'bildkomprimering': { name: 'Compresión de imágenes', description: 'Comprimir imágenes sin perder calidad' },
      'markdown-forhandsgranskning': { name: 'Vista previa de Markdown', description: 'Previsualizar y editar texto Markdown' },
      'mediakonverterare': { name: 'Conversor de medios', description: 'Convertir entre formatos de audio y video — MP4, MP3, WAV, WebM, OGG y más' },
      'brodyrkortsvisare': { name: 'Visor de bordado', description: 'Ver y previsualizar patrones de bordado de formatos PES, DST, JEF y otros' },
    },
  },
  fr: {
    toolsHeading: 'Outils',
    searchPlaceholder: 'Rechercher des outils...',
    emptyState: 'Aucun outil ne correspond au filtre.',
    comingSoon: 'Bientôt disponible',
    notFound: 'Outil introuvable.',
    backToTools: 'Retour à tous les outils',
    tabs: {
      alla: 'Tous',
      dator: 'Bureau',
      mobil: 'Mobile',
      online: 'En ligne',
      offline: 'Hors ligne',
    },
    device: {
      dator: 'Optimal sur ordi',
      mobil: 'Optimal sur mobile',
      båda: 'Tous les appareils',
    },
    connection: {
      online: 'Internet requis',
      offline: 'Fonctionne hors ligne',
    },
    theme: {
      light: 'Clair',
      dark: 'Sombre',
      highContrast: 'Contraste élevé',
    },
    journal: {
      heading: 'Journal',
      description: 'Ce que nous avons construit et mis à jour dans chaque version.',
      mission: 'Nous croyons que les ordinateurs peuvent faire des choses incroyables — et que tout le monde devrait y avoir accès. La technologie ne devrait pas être quelque chose pour lequel on paie simplement parce que quelqu\'un d\'autre l\'a créée. C\'est pourquoi nous créons ces outils, libres et ouverts, pour tous.',
      added: 'Ajouté',
      changed: 'Modifié',
      fixed: 'Corrigé',
    },
    textTools: {
      characters: 'Caractères',
      charactersNoSpaces: 'Sans espaces',
      words: 'Mots',
      lines: 'Lignes',
      placeholder: 'Tapez ou collez du texte ici...',
      copy: 'Copier',
      copied: 'Copié !',
      clear: 'Effacer',
      transform: 'Transformer',
    },
    hashGenerator: {
      input: 'Texte',
      placeholder: 'Tapez ou collez du texte à hacher...',
      copy: 'Copier',
      copied: 'Copié !',
    },
    base64: {
      encode: 'Encoder',
      decode: 'Décoder',
      textInput: 'Texte',
      textOutput: 'Texte',
      encodePlaceholder: 'Tapez du texte à encoder...',
      decodePlaceholder: 'Collez du Base64 à décoder...',
      copy: 'Copier',
      copied: 'Copié !',
      swap: 'Échanger',
      invalidBase64: 'Chaîne Base64 invalide',
      encodingError: 'Impossible d\'encoder le texte',
    },
    jsonFormatter: {
      input: 'Entrée',
      output: 'Résultat',
      placeholder: 'Collez du JSON ici...',
      format: 'Formater',
      minify: 'Minifier',
      copy: 'Copier',
      copied: 'Copié !',
      clear: 'Effacer',
      indent: 'Indentation',
      error: 'Erreur',
    },
    tools: {
      'png-till-svg': { name: 'PNG vers SVG', description: 'Convertir des images PNG en format SVG' },
      'fargpalett': { name: 'Palette de couleurs', description: 'Créer et gérer des palettes de couleurs' },
      'filanalys': { name: 'Analyse de fichiers', description: 'Analyser le contenu et les métadonnées des fichiers' },
      'qr-kod': { name: 'Code QR', description: 'Générer et scanner des codes QR' },
      'base64-kodare': { name: 'Encodeur Base64', description: 'Encoder et décoder du texte Base64', hint: 'Base64 est utilisé pour intégrer des données dans les URLs, e-mails et appels API. Pratique pour le débogage ou l\'envoi de données binaires sous forme de texte.' },
      'linjal': { name: 'Règle', description: "Mesurer les distances à l'écran" },
      'enhetsomvandlare': { name: 'Convertisseur d\'unités', description: 'Convertir entre différentes unités de mesure' },
      'tidszoner': { name: 'Fuseaux horaires', description: "Comparer l'heure dans différents fuseaux horaires" },
      'hash-generator': { name: 'Générateur de hash', description: 'Générer des valeurs MD5, SHA-256 et autres hash', hint: 'Vérifiez l\'intégrité des fichiers ou comparez des checksums. Les hash sont utilisés partout dans la sécurité, Git et la validation de téléchargements.' },
      'losenordsgenerator': { name: 'Générateur de mots de passe', description: 'Créer des mots de passe forts et sécurisés', hint: 'Réutiliser des mots de passe est l\'un des risques de sécurité les plus courants. Générez des mots de passe uniques et forts pour chaque service — directement dans votre navigateur.' },
      'textverktyg': { name: 'Outils de texte', description: 'Compter les mots, les caractères et transformer le texte', hint: 'Parfait pour compter les mots d\'un essai, supprimer les doublons d\'une liste ou convertir rapidement du texte en majuscules.' },
      'oversattare': { name: 'Traducteur', description: 'Traduire du texte entre différentes langues' },
      'ip-info': { name: 'Info IP', description: 'Afficher votre adresse IP et les informations réseau' },
      'bandbreddstest': { name: 'Test de bande passante', description: 'Tester la vitesse de votre connexion Internet' },
      'tangentbordstest': { name: 'Test de clavier', description: 'Tester les touches et les fonctions du clavier' },
      'json-formaterare': { name: 'Formateur JSON', description: 'Formater et valider des données JSON', hint: 'Les APIs et fichiers de configuration utilisent JSON. Collez du JSON brouillon ici pour le rendre lisible, ou minifiez-le pour gagner de la place.' },
      'text-till-tal': { name: 'Texte en parole', description: 'Convertir du texte écrit en audio parlé' },
      'tal-till-text': { name: 'Parole en texte', description: 'Convertir l\'audio parlé en texte écrit' },
      'regex-testare': { name: 'Testeur de regex', description: 'Tester et déboguer des expressions régulières' },
      'bildkomprimering': { name: "Compression d'images", description: 'Compresser des images sans perte de qualité' },
      'markdown-forhandsgranskning': { name: 'Aperçu Markdown', description: 'Prévisualiser et éditer du texte Markdown' },
      'mediakonverterare': { name: 'Convertisseur multimédia', description: 'Convertir entre formats audio et vidéo — MP4, MP3, WAV, WebM, OGG et plus' },
      'brodyrkortsvisare': { name: 'Visionneuse de broderie', description: 'Afficher et prévisualiser des motifs de broderie aux formats PES, DST, JEF et autres' },
    },
  },
  de: {
    toolsHeading: 'Werkzeuge',
    searchPlaceholder: 'Werkzeuge suchen...',
    emptyState: 'Keine Werkzeuge entsprechen dem Filter.',
    comingSoon: 'Demnächst verfügbar',
    notFound: 'Werkzeug nicht gefunden.',
    backToTools: 'Zurück zu allen Werkzeugen',
    tabs: {
      alla: 'Alle',
      dator: 'Desktop',
      mobil: 'Mobil',
      online: 'Online',
      offline: 'Offline',
    },
    device: {
      dator: 'Am besten am Desktop',
      mobil: 'Am besten am Handy',
      båda: 'Alle Geräte',
    },
    connection: {
      online: 'Internet nötig',
      offline: 'Funktioniert offline',
    },
    theme: {
      light: 'Hell',
      dark: 'Dunkel',
      highContrast: 'Hoher Kontrast',
    },
    journal: {
      heading: 'Journal',
      description: 'Was wir in jeder Version gebaut und aktualisiert haben.',
      mission: 'Wir glauben, dass Computer erstaunliche Dinge tun können — und dass alle Zugang dazu haben sollten. Technologie sollte nicht etwas sein, wofür man bezahlt, nur weil jemand anderes sie gebaut hat. Deshalb schaffen wir diese Werkzeuge, frei und offen, für alle.',
      added: 'Hinzugefügt',
      changed: 'Geändert',
      fixed: 'Behoben',
    },
    textTools: {
      characters: 'Zeichen',
      charactersNoSpaces: 'Ohne Leerzeichen',
      words: 'Wörter',
      lines: 'Zeilen',
      placeholder: 'Text hier eingeben oder einfügen...',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      clear: 'Löschen',
      transform: 'Transformieren',
    },
    hashGenerator: {
      input: 'Text',
      placeholder: 'Text zum Hashen eingeben oder einfügen...',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    base64: {
      encode: 'Kodieren',
      decode: 'Dekodieren',
      textInput: 'Text',
      textOutput: 'Text',
      encodePlaceholder: 'Text zum Kodieren eingeben...',
      decodePlaceholder: 'Base64 zum Dekodieren einfügen...',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      swap: 'Tauschen',
      invalidBase64: 'Ungültige Base64-Zeichenkette',
      encodingError: 'Text konnte nicht kodiert werden',
    },
    jsonFormatter: {
      input: 'Eingabe',
      output: 'Ergebnis',
      placeholder: 'JSON hier einfügen...',
      format: 'Formatieren',
      minify: 'Minifizieren',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      clear: 'Löschen',
      indent: 'Einzug',
      error: 'Fehler',
    },
    tools: {
      'png-till-svg': { name: 'PNG zu SVG', description: 'PNG-Bilder in SVG-Format konvertieren' },
      'fargpalett': { name: 'Farbpalette', description: 'Farbpaletten erstellen und verwalten' },
      'filanalys': { name: 'Dateianalyse', description: 'Dateiinhalte und Metadaten analysieren' },
      'qr-kod': { name: 'QR-Code', description: 'QR-Codes generieren und scannen' },
      'base64-kodare': { name: 'Base64-Kodierer', description: 'Base64-Text kodieren und dekodieren', hint: 'Base64 wird verwendet, um Daten in URLs, E-Mails und API-Aufrufen einzubetten. Praktisch beim Debuggen oder wenn Binärdaten als Text gesendet werden müssen.' },
      'linjal': { name: 'Lineal', description: 'Abstände auf dem Bildschirm messen' },
      'enhetsomvandlare': { name: 'Einheitenumrechner', description: 'Zwischen verschiedenen Maßeinheiten umrechnen' },
      'tidszoner': { name: 'Zeitzonen', description: 'Zeit in verschiedenen Zeitzonen vergleichen' },
      'hash-generator': { name: 'Hash-Generator', description: 'MD5, SHA-256 und andere Hash-Werte generieren', hint: 'Überprüfen Sie die Dateiintegrität oder vergleichen Sie Checksummen. Hashes werden überall in der Sicherheit, Git und bei der Download-Validierung verwendet.' },
      'losenordsgenerator': { name: 'Passwort-Generator', description: 'Starke und sichere Passwörter erstellen', hint: 'Passwörter wiederzuverwenden ist eines der häufigsten Sicherheitsrisiken. Generieren Sie einzigartige, starke Passwörter für jeden Dienst — direkt im Browser ohne Daten zu senden.' },
      'textverktyg': { name: 'Textwerkzeuge', description: 'Wörter, Zeichen zählen und Text transformieren', hint: 'Perfekt um Wörter in einem Aufsatz zu zählen, Duplikate aus einer Liste zu entfernen oder Text schnell in Großbuchstaben umzuwandeln.' },
      'oversattare': { name: 'Übersetzer', description: 'Text zwischen verschiedenen Sprachen übersetzen' },
      'ip-info': { name: 'IP-Info', description: 'Ihre IP-Adresse und Netzwerkinformationen anzeigen' },
      'bandbreddstest': { name: 'Bandbreitentest', description: 'Ihre Internetverbindungsgeschwindigkeit testen' },
      'tangentbordstest': { name: 'Tastaturtest', description: 'Tastaturtasten und Funktionen testen' },
      'json-formaterare': { name: 'JSON-Formatierer', description: 'JSON-Daten formatieren und validieren', hint: 'APIs und Konfigurationsdateien verwenden JSON. Fügen Sie unordentliches JSON ein, um es lesbar zu machen, oder minifizieren Sie es, um Platz zu sparen.' },
      'text-till-tal': { name: 'Text zu Sprache', description: 'Geschriebenen Text in gesprochenes Audio umwandeln' },
      'tal-till-text': { name: 'Sprache zu Text', description: 'Gesprochenes Audio in geschriebenen Text umwandeln' },
      'regex-testare': { name: 'Regex-Tester', description: 'Reguläre Ausdrücke testen und debuggen' },
      'bildkomprimering': { name: 'Bildkomprimierung', description: 'Bilder ohne Qualitätsverlust komprimieren' },
      'markdown-forhandsgranskning': { name: 'Markdown-Vorschau', description: 'Markdown-Text anzeigen und bearbeiten' },
      'mediakonverterare': { name: 'Medienkonverter', description: 'Zwischen Audio- und Videoformaten konvertieren — MP4, MP3, WAV, WebM, OGG und mehr' },
      'brodyrkortsvisare': { name: 'Stickdatei-Betrachter', description: 'Stickmuster aus PES, DST, JEF und anderen Formaten anzeigen und vorab ansehen' },
    },
  },
  pt: {
    toolsHeading: 'Ferramentas',
    searchPlaceholder: 'Pesquisar ferramentas...',
    emptyState: 'Nenhuma ferramenta corresponde ao filtro.',
    comingSoon: 'Em breve',
    notFound: 'Ferramenta não encontrada.',
    backToTools: 'Voltar para todas as ferramentas',
    tabs: {
      alla: 'Todas',
      dator: 'Desktop',
      mobil: 'Móvel',
      online: 'Online',
      offline: 'Offline',
    },
    device: {
      dator: 'Melhor no desktop',
      mobil: 'Melhor no celular',
      båda: 'Todos os dispositivos',
    },
    connection: {
      online: 'Requer internet',
      offline: 'Funciona offline',
    },
    theme: {
      light: 'Claro',
      dark: 'Escuro',
      highContrast: 'Alto contraste',
    },
    journal: {
      heading: 'Diário',
      description: 'O que construímos e atualizamos em cada versão.',
      mission: 'Acreditamos que os computadores podem fazer coisas incríveis — e que todos devem ter acesso a elas. A tecnologia não deveria ser algo pelo qual se paga apenas porque alguém a construiu. Por isso criamos estas ferramentas, livres e abertas, para todos.',
      added: 'Adicionado',
      changed: 'Alterado',
      fixed: 'Corrigido',
    },
    textTools: {
      characters: 'Caracteres',
      charactersNoSpaces: 'Sem espaços',
      words: 'Palavras',
      lines: 'Linhas',
      placeholder: 'Digite ou cole texto aqui...',
      copy: 'Copiar',
      copied: 'Copiado!',
      clear: 'Limpar',
      transform: 'Transformar',
    },
    hashGenerator: {
      input: 'Texto',
      placeholder: 'Digite ou cole texto para gerar hash...',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    base64: {
      encode: 'Codificar',
      decode: 'Decodificar',
      textInput: 'Texto',
      textOutput: 'Texto',
      encodePlaceholder: 'Digite texto para codificar...',
      decodePlaceholder: 'Cole Base64 para decodificar...',
      copy: 'Copiar',
      copied: 'Copiado!',
      swap: 'Trocar',
      invalidBase64: 'String Base64 inválida',
      encodingError: 'Não foi possível codificar o texto',
    },
    jsonFormatter: {
      input: 'Entrada',
      output: 'Resultado',
      placeholder: 'Cole JSON aqui...',
      format: 'Formatar',
      minify: 'Minificar',
      copy: 'Copiar',
      copied: 'Copiado!',
      clear: 'Limpar',
      indent: 'Recuo',
      error: 'Erro',
    },
    tools: {
      'png-till-svg': { name: 'PNG para SVG', description: 'Converter imagens PNG para formato SVG' },
      'fargpalett': { name: 'Paleta de cores', description: 'Criar e gerenciar paletas de cores' },
      'filanalys': { name: 'Análise de arquivos', description: 'Analisar conteúdo e metadados de arquivos' },
      'qr-kod': { name: 'Código QR', description: 'Gerar e escanear códigos QR' },
      'base64-kodare': { name: 'Codificador Base64', description: 'Codificar e decodificar texto Base64', hint: 'Base64 é usado para incorporar dados em URLs, e-mails e chamadas de API. Útil para depuração ou quando você precisa enviar dados binários como texto.' },
      'linjal': { name: 'Régua', description: 'Medir distâncias na tela' },
      'enhetsomvandlare': { name: 'Conversor de unidades', description: 'Converter entre diferentes unidades de medida' },
      'tidszoner': { name: 'Fusos horários', description: 'Comparar horários em diferentes fusos horários' },
      'hash-generator': { name: 'Gerador de hash', description: 'Gerar valores MD5, SHA-256 e outros hashes', hint: 'Verifique a integridade de arquivos ou compare checksums. Hashes são usados em segurança, Git e validação de downloads.' },
      'losenordsgenerator': { name: 'Gerador de senhas', description: 'Criar senhas fortes e seguras', hint: 'Reutilizar senhas é um dos riscos de segurança mais comuns. Gere senhas únicas e fortes para cada serviço — diretamente no navegador sem enviar dados a lugar nenhum.' },
      'textverktyg': { name: 'Ferramentas de texto', description: 'Contar palavras, caracteres e transformar texto', hint: 'Perfeito para contar palavras em uma redação, remover duplicatas de uma lista ou converter texto rapidamente para maiúsculas.' },
      'oversattare': { name: 'Tradutor', description: 'Traduzir texto entre diferentes idiomas' },
      'ip-info': { name: 'Info IP', description: 'Mostrar seu endereço IP e informações de rede' },
      'bandbreddstest': { name: 'Teste de largura de banda', description: 'Testar a velocidade da sua conexão com a Internet' },
      'tangentbordstest': { name: 'Teste de teclado', description: 'Testar teclas e funções do teclado' },
      'json-formaterare': { name: 'Formatador JSON', description: 'Formatar e validar dados JSON', hint: 'APIs e arquivos de configuração usam JSON. Cole JSON bagunçado aqui para torná-lo legível, ou minifique para economizar espaço.' },
      'text-till-tal': { name: 'Texto para fala', description: 'Converter texto escrito em áudio falado' },
      'tal-till-text': { name: 'Fala para texto', description: 'Converter áudio falado em texto escrito' },
      'regex-testare': { name: 'Testador de regex', description: 'Testar e depurar expressões regulares' },
      'bildkomprimering': { name: 'Compressão de imagens', description: 'Comprimir imagens sem perder qualidade' },
      'markdown-forhandsgranskning': { name: 'Pré-visualização Markdown', description: 'Pré-visualizar e editar texto Markdown' },
      'mediakonverterare': { name: 'Conversor de mídia', description: 'Converter entre formatos de áudio e vídeo — MP4, MP3, WAV, WebM, OGG e mais' },
      'brodyrkortsvisare': { name: 'Visualizador de bordado', description: 'Visualizar e pré-visualizar padrões de bordado em formatos PES, DST, JEF e outros' },
    },
  },
}
