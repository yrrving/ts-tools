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
  regexTester?: {
    pattern: string
    patternPlaceholder: string
    flags: string
    testString: string
    testPlaceholder: string
    result: string
    matches: string
    groups: string
    index: string
    copy: string
    copied: string
  }
  qrCode?: {
    input: string
    placeholder: string
    size: string
    foreground: string
    background: string
    output: string
    download: string
  }
  keyboardTester?: {
    pressAnyKey: string
    lastKey: string
    location: string
    standard: string
    left: string
    right: string
    numpad: string
    history: string
    clear: string
  }
  unitConverter?: {
    length: string
    weight: string
    temperature: string
    speed: string
    data: string
  }
  colorPalette?: {
    addColor: string
    randomize: string
    copyAll: string
    copied: string
  }
  markdownPreview?: {
    edit: string
    split: string
    preview: string
    copyHtml: string
    copied: string
    clear: string
    placeholder: string
  }
  imageCompressor?: {
    upload: string
    quality: string
    smaller: string
    better: string
    maxWidth: string
    original: string
    compressed: string
    compress: string
    processing: string
    download: string
  }
  timeZones?: {
    yourTime: string
    addZone: string
    selectZone: string
    cancel: string
  }
  fileAnalyzer?: {
    upload: string
    anyFile: string
    fileName: string
    fileSize: string
    fileType: string
    extension: string
    modified: string
    dimensions: string
    preview: string
    contentPreview: string
  }
  ipInfo?: {
    ipAddress: string
    city: string
    region: string
    country: string
    isp: string
    timezone: string
    coordinates: string
    yourIp: string
    copy: string
    copied: string
    refresh: string
    error: string
    retry: string
  }
  textToSpeech?: {
    input: string
    placeholder: string
    voice: string
    speed: string
    pitch: string
    play: string
    pause: string
    resume: string
    stop: string
  }
  speechToText?: {
    language: string
    start: string
    stop: string
    transcript: string
    copy: string
    copied: string
    clear: string
    empty: string
    notSupported: string
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
    regexTester: {
      pattern: 'Mönster',
      patternPlaceholder: 'Skriv regex här...',
      flags: 'Flaggor',
      testString: 'Teststräng',
      testPlaceholder: 'Skriv text att testa mot...',
      result: 'Resultat',
      matches: 'Matchningar',
      groups: 'Grupper',
      index: 'index',
      copy: 'Kopiera',
      copied: 'Kopierat!',
    },
    qrCode: {
      input: 'Text eller URL',
      placeholder: 'Skriv text eller klistra in en URL...',
      size: 'Storlek',
      foreground: 'Förgrund',
      background: 'Bakgrund',
      output: 'QR-kod',
      download: 'Ladda ner PNG',
    },
    keyboardTester: {
      pressAnyKey: 'Tryck på valfri tangent...',
      lastKey: 'Senaste tangent',
      location: 'plats',
      standard: 'Standard',
      left: 'Vänster',
      right: 'Höger',
      numpad: 'Numpad',
      history: 'Historik',
      clear: 'Rensa',
    },
    unitConverter: {
      length: 'Längd',
      weight: 'Vikt',
      temperature: 'Temperatur',
      speed: 'Hastighet',
      data: 'Data',
    },
    colorPalette: {
      addColor: 'Lägg till färg',
      randomize: 'Slumpa',
      copyAll: 'Kopiera alla',
      copied: 'Kopierat!',
    },
    markdownPreview: {
      edit: 'Redigera',
      split: 'Delad',
      preview: 'Förhandsgranskning',
      copyHtml: 'Kopiera HTML',
      copied: 'Kopierat!',
      clear: 'Rensa',
      placeholder: 'Skriv Markdown här...',
    },
    imageCompressor: {
      upload: 'Klicka eller dra hit en bild',
      quality: 'Kvalitet',
      smaller: 'Mindre fil',
      better: 'Bättre kvalitet',
      maxWidth: 'Max bredd',
      original: 'Original',
      compressed: 'Komprimerad',
      compress: 'Komprimera',
      processing: 'Komprimerar...',
      download: 'Ladda ner',
    },
    timeZones: {
      yourTime: 'Din tid',
      addZone: 'Lägg till tidszon',
      selectZone: 'Välj tidszon',
      cancel: 'Avbryt',
    },
    fileAnalyzer: {
      upload: 'Klicka eller dra hit en fil',
      anyFile: 'Alla filtyper stöds',
      fileName: 'Filnamn',
      fileSize: 'Storlek',
      fileType: 'MIME-typ',
      extension: 'Filändelse',
      modified: 'Senast ändrad',
      dimensions: 'Dimensioner',
      preview: 'Förhandsgranskning',
      contentPreview: 'Innehåll (förhandsgranskning)',
    },
    tools: {
      'png-till-svg': { name: 'PNG till SVG', description: 'Konvertera PNG-bilder till SVG-format', hint: 'Konvertera pixelbilder till skalbar vektorgrafik. Välj svartvitt eller färgläge, justera tröskel och upplösning — allt sker lokalt i webbläsaren.' },
      'fargpalett': { name: 'Färgpalett', description: 'Skapa och hantera färgpaletter', hint: 'Skapa färgpaletter för dina projekt. Välj färger med en color picker, se HEX/RGB/HSL-värden och kopiera dem direkt.' },
      'filanalys': { name: 'Filanalys', description: 'Analysera filinnehåll och metadata', hint: 'Dra in valfri fil och se namn, storlek, MIME-typ, filändelse och senast ändrad. Bilder visar dimensioner, textfiler visar innehållet.' },
      'qr-kod': { name: 'QR-kod', description: 'Generera och skanna QR-koder', hint: 'Skapa QR-koder för URL:er, Wi-Fi-lösenord eller valfri text. Välj färger och storlek, ladda ner som PNG — allt sker lokalt i webbläsaren.' },
      'base64-kodare': { name: 'Base64-kodare', description: 'Koda och avkoda Base64-text', hint: 'Base64 används för att bädda in data i URL:er, e-post och API-anrop. Smidigt när du felsöker eller behöver skicka binärdata som text.' },
      'linjal': { name: 'Linjal', description: 'Mät avstånd på skärmen', hint: 'Mät avstånd direkt på skärmen i cm eller tum. Kalibrera med ett kreditkort för exakta mått. Klicka och dra för att mäta.' },
      'enhetsomvandlare': { name: 'Enhetsomvandlare', description: 'Konvertera mellan olika måttenheter', hint: 'Konvertera snabbt mellan metriska och imperiala enheter — längd, vikt, temperatur, hastighet och datastorlek.' },
      'tidszoner': { name: 'Tidszoner', description: 'Jämför tid i olika tidszoner', hint: 'Se aktuell tid i flera städer samtidigt med live-uppdatering. Perfekt för att planera möten över tidszoner.' },
      'hash-generator': { name: 'Hash-generator', description: 'Generera SHA-256, SHA-512 och andra hash-värden', hint: 'Hash-värden används för att verifiera att filer inte ändrats, kontrollera dataintegritet och inom kryptografi. Klistra in valfri text och se dess hash direkt.' },
      'losenordsgenerator': { name: 'Lösenordsgenerator', description: 'Skapa starka och säkra lösenord', hint: 'Återanvända lösenord är en av de vanligaste säkerhetsriskerna. Generera unika, starka lösenord för varje tjänst — direkt i webbläsaren utan att skicka data någonstans.' },
      'textverktyg': { name: 'Textverktyg', description: 'Räkna ord, tecken och transformera text', hint: 'Perfekt när du behöver räkna ord i en uppsats, rensa bort dubbletter i en lista, eller snabbt göra om text till versaler — utan att öppna ett tungt program.' },
      'oversattare': { name: 'Översättare', description: 'Översätt text mellan olika språk', hint: 'Översätt text mellan 19 språk direkt i webbläsaren. Byt snabbt språkriktning med en knapptryckning. Drivs av MyMemory Translation API.' },
      'ip-info': { name: 'IP-info', description: 'Visa din IP-adress och nätverksinformation' },
      'bandbreddstest': { name: 'Bandbreddstest', description: 'Testa din internetanslutningshastighet', hint: 'Mät din nedladdningshastighet och latens med en enkel knapptryckning. Resultat visas i Mbps med en visuell mätare och historik.' },
      'tangentbordstest': { name: 'Tangentbordstest', description: 'Testa tangentbordets knappar och funktioner', hint: 'Kontrollera att alla tangenter fungerar. Visar key, code och position — perfekt vid felsökning eller test av nya tangentbord.' },
      'json-formaterare': { name: 'JSON-formaterare', description: 'Formatera och validera JSON-data', hint: 'API:er och konfigurationsfiler använder JSON. Klistra in rörig JSON här för att göra den läsbar, eller minifiera den för att spara plats.' },
      'text-till-tal': { name: 'Text till tal', description: 'Omvandla skriven text till talat ljud' },
      'tal-till-text': { name: 'Tal till text', description: 'Omvandla talat ljud till skriven text' },
      'regex-testare': { name: 'Regex-testare', description: 'Testa och felsök reguljära uttryck', hint: 'Skriv ett regex-mönster och se matchningar markeras live i din text. Visar fångstgrupper och index — perfekt för att bygga och felsöka mönster.' },
      'bildkomprimering': { name: 'Bildkomprimering', description: 'Komprimera bilder utan att tappa kvalitet', hint: 'Minska filstorleken på bilder utan att tappa för mycket kvalitet. Välj komprimeringsnivå och max bredd — allt sker lokalt.' },
      'markdown-forhandsgranskning': { name: 'Markdown-förhandsgranskning', description: 'Förhandsgranska och redigera Markdown-text', hint: 'Skriv Markdown och se resultatet live. Perfekt för README-filer, dokumentation eller blogginlägg — med delad vy och HTML-export.' },
      'mediakonverterare': { name: 'Mediakonverterare', description: 'Konvertera mellan ljud- och videoformat — MP4, MP3, WAV, WebM, OGG och fler', hint: 'Konvertera ljud- och videofiler direkt i webbläsaren utan att ladda upp till någon server. Stöder WAV, WebM och ljudextraktion från video.' },
      'brodyrkortsvisare': { name: 'Brodyrkortsvisare', description: 'Visa och förhandsgranska brodyrmönster från PES, DST, JEF och andra format', hint: 'Ladda in brodyrifiler och se mönstret renderat med trådfärger, stygnantal och dimensioner. Stöder PES- och DST-format.' },
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
    regexTester: {
      pattern: 'Pattern',
      patternPlaceholder: 'Type regex here...',
      flags: 'Flags',
      testString: 'Test string',
      testPlaceholder: 'Type text to test against...',
      result: 'Result',
      matches: 'Matches',
      groups: 'Groups',
      index: 'index',
      copy: 'Copy',
      copied: 'Copied!',
    },
    qrCode: {
      input: 'Text or URL',
      placeholder: 'Type text or paste a URL...',
      size: 'Size',
      foreground: 'Foreground',
      background: 'Background',
      output: 'QR Code',
      download: 'Download PNG',
    },
    keyboardTester: {
      pressAnyKey: 'Press any key...',
      lastKey: 'Last key',
      location: 'location',
      standard: 'Standard',
      left: 'Left',
      right: 'Right',
      numpad: 'Numpad',
      history: 'History',
      clear: 'Clear',
    },
    unitConverter: {
      length: 'Length',
      weight: 'Weight',
      temperature: 'Temperature',
      speed: 'Speed',
      data: 'Data',
    },
    colorPalette: {
      addColor: 'Add color',
      randomize: 'Randomize',
      copyAll: 'Copy all',
      copied: 'Copied!',
    },
    markdownPreview: {
      edit: 'Edit',
      split: 'Split',
      preview: 'Preview',
      copyHtml: 'Copy HTML',
      copied: 'Copied!',
      clear: 'Clear',
      placeholder: 'Write Markdown here...',
    },
    imageCompressor: {
      upload: 'Click or drag an image here',
      quality: 'Quality',
      smaller: 'Smaller file',
      better: 'Better quality',
      maxWidth: 'Max width',
      original: 'Original',
      compressed: 'Compressed',
      compress: 'Compress',
      processing: 'Compressing...',
      download: 'Download',
    },
    timeZones: {
      yourTime: 'Your time',
      addZone: 'Add time zone',
      selectZone: 'Select time zone',
      cancel: 'Cancel',
    },
    fileAnalyzer: {
      upload: 'Click or drag a file here',
      anyFile: 'All file types supported',
      fileName: 'File name',
      fileSize: 'Size',
      fileType: 'MIME type',
      extension: 'Extension',
      modified: 'Last modified',
      dimensions: 'Dimensions',
      preview: 'Preview',
      contentPreview: 'Content (preview)',
    },
    tools: {
      'png-till-svg': { name: 'PNG to SVG', description: 'Convert PNG images to SVG format', hint: 'Convert pixel images to scalable vector graphics. Choose black & white or color mode, adjust threshold and resolution — everything happens locally in your browser.' },
      'fargpalett': { name: 'Color Palette', description: 'Create and manage color palettes', hint: 'Create color palettes for your projects. Pick colors with a color picker, see HEX/RGB/HSL values and copy them directly.' },
      'filanalys': { name: 'File Analysis', description: 'Analyze file content and metadata', hint: 'Drop any file and see name, size, MIME type, extension and last modified. Images show dimensions, text files show content.' },
      'qr-kod': { name: 'QR Code', description: 'Generate and scan QR codes', hint: 'Create QR codes for URLs, Wi-Fi passwords or any text. Choose colors and size, download as PNG — everything happens locally in your browser.' },
      'base64-kodare': { name: 'Base64 Encoder', description: 'Encode and decode Base64 text', hint: 'Base64 is used to embed data in URLs, emails and API calls. Handy when debugging or when you need to send binary data as text.' },
      'linjal': { name: 'Ruler', description: 'Measure distances on screen', hint: 'Measure distances directly on your screen in cm or inches. Calibrate with a credit card for accurate measurements. Click and drag to measure.' },
      'enhetsomvandlare': { name: 'Unit Converter', description: 'Convert between different units of measurement', hint: 'Quickly convert between metric and imperial units — length, weight, temperature, speed and data size.' },
      'tidszoner': { name: 'Time Zones', description: 'Compare time across different time zones', hint: 'See current time in multiple cities simultaneously with live updates. Perfect for planning meetings across time zones.' },
      'hash-generator': { name: 'Hash Generator', description: 'Generate SHA-256, SHA-512 and other hash values', hint: 'Hash values are used to verify files haven\'t been altered, check data integrity and in cryptography. Paste any text and see its hash instantly.' },
      'losenordsgenerator': { name: 'Password Generator', description: 'Create strong and secure passwords', hint: 'Reusing passwords is one of the most common security risks. Generate unique, strong passwords for every service — right in your browser without sending data anywhere.' },
      'textverktyg': { name: 'Text Tools', description: 'Count words, characters and transform text', hint: 'Perfect when you need to count words in an essay, remove duplicates from a list, or quickly convert text to uppercase — without opening a heavy application.' },
      'oversattare': { name: 'Translator', description: 'Translate text between different languages', hint: 'Translate text between 19 languages directly in your browser. Quickly swap language direction with one click. Powered by MyMemory Translation API.' },
      'ip-info': { name: 'IP Info', description: 'Show your IP address and network information' },
      'bandbreddstest': { name: 'Bandwidth Test', description: 'Test your internet connection speed', hint: 'Measure your download speed and latency with a single click. Results shown in Mbps with a visual gauge and history.' },
      'tangentbordstest': { name: 'Keyboard Test', description: 'Test keyboard keys and functions', hint: 'Check that all keys work. Shows key, code and position — perfect for troubleshooting or testing new keyboards.' },
      'json-formaterare': { name: 'JSON Formatter', description: 'Format and validate JSON data', hint: 'APIs and config files use JSON. Paste messy JSON here to make it readable, or minify it to save space.' },
      'text-till-tal': { name: 'Text to Speech', description: 'Convert written text to spoken audio' },
      'tal-till-text': { name: 'Speech to Text', description: 'Convert spoken audio to written text' },
      'regex-testare': { name: 'Regex Tester', description: 'Test and debug regular expressions', hint: 'Write a regex pattern and see matches highlighted live in your text. Shows capture groups and index — perfect for building and debugging patterns.' },
      'bildkomprimering': { name: 'Image Compression', description: 'Compress images without losing quality', hint: 'Reduce image file size without losing too much quality. Choose compression level and max width — everything happens locally.' },
      'markdown-forhandsgranskning': { name: 'Markdown Preview', description: 'Preview and edit Markdown text', hint: 'Write Markdown and see the result live. Perfect for README files, documentation or blog posts — with split view and HTML export.' },
      'mediakonverterare': { name: 'Media Converter', description: 'Convert between audio and video formats — MP4, MP3, WAV, WebM, OGG and more', hint: 'Convert audio and video files directly in your browser without uploading to any server. Supports WAV, WebM and audio extraction from video.' },
      'brodyrkortsvisare': { name: 'Embroidery Viewer', description: 'View and preview embroidery patterns from PES, DST, JEF and other formats', hint: 'Load embroidery files and see the pattern rendered with thread colors, stitch count and dimensions. Supports PES and DST formats.' },
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
    regexTester: {
      pattern: 'Patrón',
      patternPlaceholder: 'Escribe regex aquí...',
      flags: 'Banderas',
      testString: 'Cadena de prueba',
      testPlaceholder: 'Escribe texto para probar...',
      result: 'Resultado',
      matches: 'Coincidencias',
      groups: 'Grupos',
      index: 'índice',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    qrCode: {
      input: 'Texto o URL',
      placeholder: 'Escribe texto o pega una URL...',
      size: 'Tamaño',
      foreground: 'Primer plano',
      background: 'Fondo',
      output: 'Código QR',
      download: 'Descargar PNG',
    },
    keyboardTester: {
      pressAnyKey: 'Pulsa cualquier tecla...',
      lastKey: 'Última tecla',
      location: 'ubicación',
      standard: 'Estándar',
      left: 'Izquierda',
      right: 'Derecha',
      numpad: 'Numpad',
      history: 'Historial',
      clear: 'Limpiar',
    },
    unitConverter: {
      length: 'Longitud',
      weight: 'Peso',
      temperature: 'Temperatura',
      speed: 'Velocidad',
      data: 'Datos',
    },
    colorPalette: {
      addColor: 'Añadir color',
      randomize: 'Aleatorio',
      copyAll: 'Copiar todos',
      copied: '¡Copiado!',
    },
    markdownPreview: {
      edit: 'Editar',
      split: 'Dividido',
      preview: 'Vista previa',
      copyHtml: 'Copiar HTML',
      copied: '¡Copiado!',
      clear: 'Limpiar',
      placeholder: 'Escribe Markdown aquí...',
    },
    imageCompressor: {
      upload: 'Haz clic o arrastra una imagen aquí',
      quality: 'Calidad',
      smaller: 'Archivo más pequeño',
      better: 'Mejor calidad',
      maxWidth: 'Ancho máximo',
      original: 'Original',
      compressed: 'Comprimida',
      compress: 'Comprimir',
      processing: 'Comprimiendo...',
      download: 'Descargar',
    },
    timeZones: {
      yourTime: 'Tu hora',
      addZone: 'Añadir zona horaria',
      selectZone: 'Seleccionar zona horaria',
      cancel: 'Cancelar',
    },
    fileAnalyzer: {
      upload: 'Haz clic o arrastra un archivo aquí',
      anyFile: 'Todos los tipos de archivo soportados',
      fileName: 'Nombre del archivo',
      fileSize: 'Tamaño',
      fileType: 'Tipo MIME',
      extension: 'Extensión',
      modified: 'Última modificación',
      dimensions: 'Dimensiones',
      preview: 'Vista previa',
      contentPreview: 'Contenido (vista previa)',
    },
    tools: {
      'png-till-svg': { name: 'PNG a SVG', description: 'Convertir imágenes PNG a formato SVG', hint: 'Convierte imágenes de píxeles a gráficos vectoriales escalables. Elige modo blanco y negro o color, ajusta el umbral y la resolución — todo ocurre localmente.' },
      'fargpalett': { name: 'Paleta de colores', description: 'Crear y gestionar paletas de colores', hint: 'Crea paletas de colores para tus proyectos. Elige colores con un selector, ve valores HEX/RGB/HSL y cópialos directamente.' },
      'filanalys': { name: 'Análisis de archivos', description: 'Analizar contenido y metadatos de archivos', hint: 'Arrastra cualquier archivo y ve nombre, tamaño, tipo MIME, extensión y última modificación. Las imágenes muestran dimensiones, los archivos de texto muestran contenido.' },
      'qr-kod': { name: 'Código QR', description: 'Generar y escanear códigos QR', hint: 'Crea códigos QR para URLs, contraseñas Wi-Fi o cualquier texto. Elige colores y tamaño, descarga como PNG — todo ocurre localmente en tu navegador.' },
      'base64-kodare': { name: 'Codificador Base64', description: 'Codificar y decodificar texto Base64', hint: 'Base64 se usa para incrustar datos en URLs, correos y llamadas API. Útil para depurar o enviar datos binarios como texto.' },
      'linjal': { name: 'Regla', description: 'Medir distancias en la pantalla', hint: 'Mide distancias directamente en tu pantalla en cm o pulgadas. Calibra con una tarjeta de crédito para medidas exactas.' },
      'enhetsomvandlare': { name: 'Conversor de unidades', description: 'Convertir entre diferentes unidades de medida', hint: 'Convierte rápidamente entre unidades métricas e imperiales — longitud, peso, temperatura, velocidad y tamaño de datos.' },
      'tidszoner': { name: 'Zonas horarias', description: 'Comparar la hora en diferentes zonas horarias', hint: 'Ve la hora actual en múltiples ciudades simultáneamente con actualizaciones en vivo. Perfecto para planificar reuniones entre zonas horarias.' },
      'hash-generator': { name: 'Generador de hash', description: 'Generar valores SHA-256, SHA-512 y otros hash', hint: 'Los valores hash se usan para verificar que los archivos no han sido alterados y en criptografía. Pega cualquier texto y ve su hash al instante.' },
      'losenordsgenerator': { name: 'Generador de contraseñas', description: 'Crear contraseñas fuertes y seguras', hint: 'Reutilizar contraseñas es uno de los riesgos de seguridad más comunes. Genera contraseñas únicas y fuertes para cada servicio — directamente en tu navegador.' },
      'textverktyg': { name: 'Herramientas de texto', description: 'Contar palabras, caracteres y transformar texto', hint: 'Perfecto para contar palabras en un ensayo, eliminar duplicados de una lista o convertir texto a mayúsculas rápidamente.' },
      'oversattare': { name: 'Traductor', description: 'Traducir texto entre diferentes idiomas', hint: 'Traduce texto entre 19 idiomas directamente en tu navegador. Cambia la dirección del idioma con un clic.' },
      'ip-info': { name: 'Info IP', description: 'Mostrar tu dirección IP e información de red' },
      'bandbreddstest': { name: 'Test de ancho de banda', description: 'Probar la velocidad de tu conexión a Internet', hint: 'Mide tu velocidad de descarga y latencia con un solo clic. Resultados en Mbps con indicador visual e historial.' },
      'tangentbordstest': { name: 'Test de teclado', description: 'Probar las teclas y funciones del teclado', hint: 'Comprueba que todas las teclas funcionan. Muestra key, code y posición — perfecto para diagnosticar o probar teclados nuevos.' },
      'json-formaterare': { name: 'Formateador JSON', description: 'Formatear y validar datos JSON', hint: 'Las APIs y archivos de configuración usan JSON. Pega JSON desordenado aquí para hacerlo legible, o minifícalo para ahorrar espacio.' },
      'text-till-tal': { name: 'Texto a voz', description: 'Convertir texto escrito en audio hablado' },
      'tal-till-text': { name: 'Voz a texto', description: 'Convertir audio hablado en texto escrito' },
      'regex-testare': { name: 'Probador de regex', description: 'Probar y depurar expresiones regulares', hint: 'Escribe un patrón regex y ve las coincidencias resaltadas en vivo en tu texto. Muestra grupos de captura e índice — perfecto para construir y depurar patrones.' },
      'bildkomprimering': { name: 'Compresión de imágenes', description: 'Comprimir imágenes sin perder calidad', hint: 'Reduce el tamaño de archivo de imágenes sin perder demasiada calidad. Elige nivel de compresión y ancho máximo — todo ocurre localmente.' },
      'markdown-forhandsgranskning': { name: 'Vista previa de Markdown', description: 'Previsualizar y editar texto Markdown', hint: 'Escribe Markdown y ve el resultado en vivo. Perfecto para archivos README, documentación o publicaciones de blog — con vista dividida y exportación HTML.' },
      'mediakonverterare': { name: 'Conversor de medios', description: 'Convertir entre formatos de audio y video — MP4, MP3, WAV, WebM, OGG y más', hint: 'Convierte archivos de audio y video directamente en tu navegador sin subir a ningún servidor. Soporta WAV, WebM y extracción de audio.' },
      'brodyrkortsvisare': { name: 'Visor de bordado', description: 'Ver y previsualizar patrones de bordado de formatos PES, DST, JEF y otros', hint: 'Carga archivos de bordado y ve el patrón renderizado con colores de hilo, conteo de puntadas y dimensiones.' },
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
    regexTester: {
      pattern: 'Motif',
      patternPlaceholder: 'Tapez un regex ici...',
      flags: 'Drapeaux',
      testString: 'Chaîne de test',
      testPlaceholder: 'Tapez du texte à tester...',
      result: 'Résultat',
      matches: 'Correspondances',
      groups: 'Groupes',
      index: 'index',
      copy: 'Copier',
      copied: 'Copié !',
    },
    qrCode: {
      input: 'Texte ou URL',
      placeholder: 'Tapez du texte ou collez une URL...',
      size: 'Taille',
      foreground: 'Premier plan',
      background: 'Arrière-plan',
      output: 'Code QR',
      download: 'Télécharger PNG',
    },
    keyboardTester: {
      pressAnyKey: 'Appuyez sur une touche...',
      lastKey: 'Dernière touche',
      location: 'emplacement',
      standard: 'Standard',
      left: 'Gauche',
      right: 'Droite',
      numpad: 'Pavé numérique',
      history: 'Historique',
      clear: 'Effacer',
    },
    unitConverter: {
      length: 'Longueur',
      weight: 'Poids',
      temperature: 'Température',
      speed: 'Vitesse',
      data: 'Données',
    },
    colorPalette: {
      addColor: 'Ajouter une couleur',
      randomize: 'Aléatoire',
      copyAll: 'Tout copier',
      copied: 'Copié !',
    },
    markdownPreview: {
      edit: 'Éditer',
      split: 'Divisé',
      preview: 'Aperçu',
      copyHtml: 'Copier HTML',
      copied: 'Copié !',
      clear: 'Effacer',
      placeholder: 'Écrivez du Markdown ici...',
    },
    imageCompressor: {
      upload: 'Cliquez ou glissez une image ici',
      quality: 'Qualité',
      smaller: 'Fichier plus petit',
      better: 'Meilleure qualité',
      maxWidth: 'Largeur max',
      original: 'Original',
      compressed: 'Compressé',
      compress: 'Compresser',
      processing: 'Compression...',
      download: 'Télécharger',
    },
    timeZones: {
      yourTime: 'Votre heure',
      addZone: 'Ajouter un fuseau horaire',
      selectZone: 'Sélectionner un fuseau horaire',
      cancel: 'Annuler',
    },
    fileAnalyzer: {
      upload: 'Cliquez ou glissez un fichier ici',
      anyFile: 'Tous les types de fichiers supportés',
      fileName: 'Nom du fichier',
      fileSize: 'Taille',
      fileType: 'Type MIME',
      extension: 'Extension',
      modified: 'Dernière modification',
      dimensions: 'Dimensions',
      preview: 'Aperçu',
      contentPreview: 'Contenu (aperçu)',
    },
    tools: {
      'png-till-svg': { name: 'PNG vers SVG', description: 'Convertir des images PNG en format SVG', hint: 'Convertissez des images pixelisées en graphiques vectoriels. Choisissez le mode noir et blanc ou couleur, ajustez le seuil et la résolution — tout se passe localement.' },
      'fargpalett': { name: 'Palette de couleurs', description: 'Créer et gérer des palettes de couleurs', hint: 'Créez des palettes de couleurs pour vos projets. Choisissez des couleurs, voyez les valeurs HEX/RGB/HSL et copiez-les directement.' },
      'filanalys': { name: 'Analyse de fichiers', description: 'Analyser le contenu et les métadonnées des fichiers', hint: 'Déposez n\'importe quel fichier et voyez le nom, la taille, le type MIME, l\'extension et la dernière modification. Les images affichent les dimensions, les fichiers texte affichent le contenu.' },
      'qr-kod': { name: 'Code QR', description: 'Générer et scanner des codes QR', hint: 'Créez des codes QR pour des URLs, mots de passe Wi-Fi ou tout texte. Choisissez couleurs et taille, téléchargez en PNG — tout se passe localement dans votre navigateur.' },
      'base64-kodare': { name: 'Encodeur Base64', description: 'Encoder et décoder du texte Base64', hint: 'Base64 est utilisé pour intégrer des données dans les URLs, e-mails et appels API. Pratique pour le débogage ou l\'envoi de données binaires sous forme de texte.' },
      'linjal': { name: 'Règle', description: "Mesurer les distances à l'écran", hint: "Mesurez les distances directement sur votre écran en cm ou pouces. Calibrez avec une carte bancaire pour des mesures précises." },
      'enhetsomvandlare': { name: 'Convertisseur d\'unités', description: 'Convertir entre différentes unités de mesure', hint: 'Convertissez rapidement entre unités métriques et impériales — longueur, poids, température, vitesse et taille des données.' },
      'tidszoner': { name: 'Fuseaux horaires', description: "Comparer l'heure dans différents fuseaux horaires", hint: 'Voyez l\'heure actuelle dans plusieurs villes simultanément avec mise à jour en direct. Parfait pour planifier des réunions entre fuseaux horaires.' },
      'hash-generator': { name: 'Générateur de hash', description: 'Générer des valeurs MD5, SHA-256 et autres hash', hint: 'Vérifiez l\'intégrité des fichiers ou comparez des checksums. Les hash sont utilisés partout dans la sécurité, Git et la validation de téléchargements.' },
      'losenordsgenerator': { name: 'Générateur de mots de passe', description: 'Créer des mots de passe forts et sécurisés', hint: 'Réutiliser des mots de passe est l\'un des risques de sécurité les plus courants. Générez des mots de passe uniques et forts pour chaque service — directement dans votre navigateur.' },
      'textverktyg': { name: 'Outils de texte', description: 'Compter les mots, les caractères et transformer le texte', hint: 'Parfait pour compter les mots d\'un essai, supprimer les doublons d\'une liste ou convertir rapidement du texte en majuscules.' },
      'oversattare': { name: 'Traducteur', description: 'Traduire du texte entre différentes langues', hint: 'Traduisez du texte entre 19 langues directement dans votre navigateur. Changez la direction de la langue en un clic.' },
      'ip-info': { name: 'Info IP', description: 'Afficher votre adresse IP et les informations réseau' },
      'bandbreddstest': { name: 'Test de bande passante', description: 'Tester la vitesse de votre connexion Internet', hint: 'Mesurez votre vitesse de téléchargement et latence en un clic. Résultats en Mbps avec jauge visuelle et historique.' },
      'tangentbordstest': { name: 'Test de clavier', description: 'Tester les touches et les fonctions du clavier', hint: 'Vérifiez que toutes les touches fonctionnent. Affiche key, code et position — parfait pour le dépannage ou le test de nouveaux claviers.' },
      'json-formaterare': { name: 'Formateur JSON', description: 'Formater et valider des données JSON', hint: 'Les APIs et fichiers de configuration utilisent JSON. Collez du JSON brouillon ici pour le rendre lisible, ou minifiez-le pour gagner de la place.' },
      'text-till-tal': { name: 'Texte en parole', description: 'Convertir du texte écrit en audio parlé' },
      'tal-till-text': { name: 'Parole en texte', description: 'Convertir l\'audio parlé en texte écrit' },
      'regex-testare': { name: 'Testeur de regex', description: 'Tester et déboguer des expressions régulières', hint: 'Écrivez un motif regex et voyez les correspondances surlignées en direct dans votre texte. Affiche les groupes de capture et l\'index — parfait pour construire et déboguer des motifs.' },
      'bildkomprimering': { name: "Compression d'images", description: 'Compresser des images sans perte de qualité', hint: 'Réduisez la taille des fichiers image sans perdre trop de qualité. Choisissez le niveau de compression et la largeur max — tout se passe localement.' },
      'markdown-forhandsgranskning': { name: 'Aperçu Markdown', description: 'Prévisualiser et éditer du texte Markdown', hint: 'Écrivez du Markdown et voyez le résultat en direct. Parfait pour les fichiers README, la documentation ou les articles de blog — avec vue partagée et export HTML.' },
      'mediakonverterare': { name: 'Convertisseur multimédia', description: 'Convertir entre formats audio et vidéo — MP4, MP3, WAV, WebM, OGG et plus', hint: 'Convertissez des fichiers audio et vidéo directement dans votre navigateur sans envoyer de fichiers. Supporte WAV, WebM et extraction audio.' },
      'brodyrkortsvisare': { name: 'Visionneuse de broderie', description: 'Afficher et prévisualiser des motifs de broderie aux formats PES, DST, JEF et autres', hint: 'Chargez des fichiers de broderie et voyez le motif rendu avec les couleurs de fil, le nombre de points et les dimensions.' },
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
    regexTester: {
      pattern: 'Muster',
      patternPlaceholder: 'Regex hier eingeben...',
      flags: 'Flags',
      testString: 'Testzeichenkette',
      testPlaceholder: 'Text zum Testen eingeben...',
      result: 'Ergebnis',
      matches: 'Treffer',
      groups: 'Gruppen',
      index: 'Index',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    qrCode: {
      input: 'Text oder URL',
      placeholder: 'Text eingeben oder URL einfügen...',
      size: 'Größe',
      foreground: 'Vordergrund',
      background: 'Hintergrund',
      output: 'QR-Code',
      download: 'PNG herunterladen',
    },
    keyboardTester: {
      pressAnyKey: 'Beliebige Taste drücken...',
      lastKey: 'Letzte Taste',
      location: 'Position',
      standard: 'Standard',
      left: 'Links',
      right: 'Rechts',
      numpad: 'Ziffernblock',
      history: 'Verlauf',
      clear: 'Löschen',
    },
    unitConverter: {
      length: 'Länge',
      weight: 'Gewicht',
      temperature: 'Temperatur',
      speed: 'Geschwindigkeit',
      data: 'Daten',
    },
    colorPalette: {
      addColor: 'Farbe hinzufügen',
      randomize: 'Zufällig',
      copyAll: 'Alle kopieren',
      copied: 'Kopiert!',
    },
    markdownPreview: {
      edit: 'Bearbeiten',
      split: 'Geteilt',
      preview: 'Vorschau',
      copyHtml: 'HTML kopieren',
      copied: 'Kopiert!',
      clear: 'Löschen',
      placeholder: 'Markdown hier schreiben...',
    },
    imageCompressor: {
      upload: 'Klicken oder Bild hierher ziehen',
      quality: 'Qualität',
      smaller: 'Kleinere Datei',
      better: 'Bessere Qualität',
      maxWidth: 'Max. Breite',
      original: 'Original',
      compressed: 'Komprimiert',
      compress: 'Komprimieren',
      processing: 'Komprimiere...',
      download: 'Herunterladen',
    },
    timeZones: {
      yourTime: 'Ihre Zeit',
      addZone: 'Zeitzone hinzufügen',
      selectZone: 'Zeitzone auswählen',
      cancel: 'Abbrechen',
    },
    fileAnalyzer: {
      upload: 'Klicken oder Datei hierher ziehen',
      anyFile: 'Alle Dateitypen unterstützt',
      fileName: 'Dateiname',
      fileSize: 'Größe',
      fileType: 'MIME-Typ',
      extension: 'Erweiterung',
      modified: 'Zuletzt geändert',
      dimensions: 'Abmessungen',
      preview: 'Vorschau',
      contentPreview: 'Inhalt (Vorschau)',
    },
    tools: {
      'png-till-svg': { name: 'PNG zu SVG', description: 'PNG-Bilder in SVG-Format konvertieren', hint: 'Konvertieren Sie Pixelbilder in skalierbare Vektorgrafiken. Wählen Sie Schwarz-Weiß oder Farbmodus, passen Sie Schwellenwert und Auflösung an — alles geschieht lokal.' },
      'fargpalett': { name: 'Farbpalette', description: 'Farbpaletten erstellen und verwalten', hint: 'Erstellen Sie Farbpaletten für Ihre Projekte. Wählen Sie Farben, sehen Sie HEX/RGB/HSL-Werte und kopieren Sie sie direkt.' },
      'filanalys': { name: 'Dateianalyse', description: 'Dateiinhalte und Metadaten analysieren', hint: 'Ziehen Sie eine beliebige Datei hinein und sehen Sie Name, Größe, MIME-Typ, Erweiterung und letzte Änderung. Bilder zeigen Dimensionen, Textdateien zeigen den Inhalt.' },
      'qr-kod': { name: 'QR-Code', description: 'QR-Codes generieren und scannen', hint: 'Erstellen Sie QR-Codes für URLs, WLAN-Passwörter oder beliebigen Text. Wählen Sie Farben und Größe, laden Sie als PNG herunter — alles geschieht lokal in Ihrem Browser.' },
      'base64-kodare': { name: 'Base64-Kodierer', description: 'Base64-Text kodieren und dekodieren', hint: 'Base64 wird verwendet, um Daten in URLs, E-Mails und API-Aufrufen einzubetten. Praktisch beim Debuggen oder wenn Binärdaten als Text gesendet werden müssen.' },
      'linjal': { name: 'Lineal', description: 'Abstände auf dem Bildschirm messen', hint: 'Messen Sie Abstände direkt auf Ihrem Bildschirm in cm oder Zoll. Kalibrieren Sie mit einer Kreditkarte für genaue Messungen.' },
      'enhetsomvandlare': { name: 'Einheitenumrechner', description: 'Zwischen verschiedenen Maßeinheiten umrechnen', hint: 'Schnell zwischen metrischen und imperialen Einheiten umrechnen — Länge, Gewicht, Temperatur, Geschwindigkeit und Datengröße.' },
      'tidszoner': { name: 'Zeitzonen', description: 'Zeit in verschiedenen Zeitzonen vergleichen', hint: 'Sehen Sie die aktuelle Uhrzeit in mehreren Städten gleichzeitig mit Live-Updates. Perfekt für die Planung von Meetings über Zeitzonen hinweg.' },
      'hash-generator': { name: 'Hash-Generator', description: 'MD5, SHA-256 und andere Hash-Werte generieren', hint: 'Überprüfen Sie die Dateiintegrität oder vergleichen Sie Checksummen. Hashes werden überall in der Sicherheit, Git und bei der Download-Validierung verwendet.' },
      'losenordsgenerator': { name: 'Passwort-Generator', description: 'Starke und sichere Passwörter erstellen', hint: 'Passwörter wiederzuverwenden ist eines der häufigsten Sicherheitsrisiken. Generieren Sie einzigartige, starke Passwörter für jeden Dienst — direkt im Browser ohne Daten zu senden.' },
      'textverktyg': { name: 'Textwerkzeuge', description: 'Wörter, Zeichen zählen und Text transformieren', hint: 'Perfekt um Wörter in einem Aufsatz zu zählen, Duplikate aus einer Liste zu entfernen oder Text schnell in Großbuchstaben umzuwandeln.' },
      'oversattare': { name: 'Übersetzer', description: 'Text zwischen verschiedenen Sprachen übersetzen', hint: 'Übersetzen Sie Text zwischen 19 Sprachen direkt im Browser. Wechseln Sie die Sprachrichtung mit einem Klick.' },
      'ip-info': { name: 'IP-Info', description: 'Ihre IP-Adresse und Netzwerkinformationen anzeigen' },
      'bandbreddstest': { name: 'Bandbreitentest', description: 'Ihre Internetverbindungsgeschwindigkeit testen', hint: 'Messen Sie Ihre Download-Geschwindigkeit und Latenz mit einem Klick. Ergebnisse in Mbps mit visueller Anzeige und Verlauf.' },
      'tangentbordstest': { name: 'Tastaturtest', description: 'Tastaturtasten und Funktionen testen', hint: 'Prüfen Sie, ob alle Tasten funktionieren. Zeigt Key, Code und Position — perfekt zur Fehlersuche oder zum Testen neuer Tastaturen.' },
      'json-formaterare': { name: 'JSON-Formatierer', description: 'JSON-Daten formatieren und validieren', hint: 'APIs und Konfigurationsdateien verwenden JSON. Fügen Sie unordentliches JSON ein, um es lesbar zu machen, oder minifizieren Sie es, um Platz zu sparen.' },
      'text-till-tal': { name: 'Text zu Sprache', description: 'Geschriebenen Text in gesprochenes Audio umwandeln' },
      'tal-till-text': { name: 'Sprache zu Text', description: 'Gesprochenes Audio in geschriebenen Text umwandeln' },
      'regex-testare': { name: 'Regex-Tester', description: 'Reguläre Ausdrücke testen und debuggen', hint: 'Schreiben Sie ein Regex-Muster und sehen Sie Treffer live in Ihrem Text hervorgehoben. Zeigt Erfassungsgruppen und Index — perfekt zum Erstellen und Debuggen von Mustern.' },
      'bildkomprimering': { name: 'Bildkomprimierung', description: 'Bilder ohne Qualitätsverlust komprimieren', hint: 'Reduzieren Sie die Dateigröße von Bildern ohne zu viel Qualitätsverlust. Wählen Sie Komprimierungsstufe und maximale Breite — alles geschieht lokal.' },
      'markdown-forhandsgranskning': { name: 'Markdown-Vorschau', description: 'Markdown-Text anzeigen und bearbeiten', hint: 'Schreiben Sie Markdown und sehen Sie das Ergebnis live. Perfekt für README-Dateien, Dokumentation oder Blog-Posts — mit geteilter Ansicht und HTML-Export.' },
      'mediakonverterare': { name: 'Medienkonverter', description: 'Zwischen Audio- und Videoformaten konvertieren — MP4, MP3, WAV, WebM, OGG und mehr', hint: 'Konvertieren Sie Audio- und Videodateien direkt im Browser ohne Upload. Unterstützt WAV, WebM und Audioextraktion aus Videos.' },
      'brodyrkortsvisare': { name: 'Stickdatei-Betrachter', description: 'Stickmuster aus PES, DST, JEF und anderen Formaten anzeigen und vorab ansehen', hint: 'Laden Sie Stickdateien und sehen Sie das Muster mit Fadenfarben, Stichanzahl und Abmessungen gerendert.' },
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
    regexTester: {
      pattern: 'Padrão',
      patternPlaceholder: 'Digite regex aqui...',
      flags: 'Flags',
      testString: 'String de teste',
      testPlaceholder: 'Digite texto para testar...',
      result: 'Resultado',
      matches: 'Correspondências',
      groups: 'Grupos',
      index: 'índice',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    qrCode: {
      input: 'Texto ou URL',
      placeholder: 'Digite texto ou cole uma URL...',
      size: 'Tamanho',
      foreground: 'Primeiro plano',
      background: 'Fundo',
      output: 'Código QR',
      download: 'Baixar PNG',
    },
    keyboardTester: {
      pressAnyKey: 'Pressione qualquer tecla...',
      lastKey: 'Última tecla',
      location: 'localização',
      standard: 'Padrão',
      left: 'Esquerda',
      right: 'Direita',
      numpad: 'Teclado numérico',
      history: 'Histórico',
      clear: 'Limpar',
    },
    unitConverter: {
      length: 'Comprimento',
      weight: 'Peso',
      temperature: 'Temperatura',
      speed: 'Velocidade',
      data: 'Dados',
    },
    colorPalette: {
      addColor: 'Adicionar cor',
      randomize: 'Aleatório',
      copyAll: 'Copiar todos',
      copied: 'Copiado!',
    },
    markdownPreview: {
      edit: 'Editar',
      split: 'Dividido',
      preview: 'Pré-visualização',
      copyHtml: 'Copiar HTML',
      copied: 'Copiado!',
      clear: 'Limpar',
      placeholder: 'Escreva Markdown aqui...',
    },
    imageCompressor: {
      upload: 'Clique ou arraste uma imagem aqui',
      quality: 'Qualidade',
      smaller: 'Arquivo menor',
      better: 'Melhor qualidade',
      maxWidth: 'Largura máxima',
      original: 'Original',
      compressed: 'Comprimida',
      compress: 'Comprimir',
      processing: 'Comprimindo...',
      download: 'Baixar',
    },
    timeZones: {
      yourTime: 'Sua hora',
      addZone: 'Adicionar fuso horário',
      selectZone: 'Selecionar fuso horário',
      cancel: 'Cancelar',
    },
    fileAnalyzer: {
      upload: 'Clique ou arraste um arquivo aqui',
      anyFile: 'Todos os tipos de arquivo suportados',
      fileName: 'Nome do arquivo',
      fileSize: 'Tamanho',
      fileType: 'Tipo MIME',
      extension: 'Extensão',
      modified: 'Última modificação',
      dimensions: 'Dimensões',
      preview: 'Pré-visualização',
      contentPreview: 'Conteúdo (pré-visualização)',
    },
    tools: {
      'png-till-svg': { name: 'PNG para SVG', description: 'Converter imagens PNG para formato SVG', hint: 'Converta imagens de pixels para gráficos vetoriais escaláveis. Escolha modo preto e branco ou cor, ajuste o limiar e a resolução — tudo acontece localmente.' },
      'fargpalett': { name: 'Paleta de cores', description: 'Criar e gerenciar paletas de cores', hint: 'Crie paletas de cores para seus projetos. Escolha cores com um seletor, veja valores HEX/RGB/HSL e copie-os diretamente.' },
      'filanalys': { name: 'Análise de arquivos', description: 'Analisar conteúdo e metadados de arquivos', hint: 'Arraste qualquer arquivo e veja nome, tamanho, tipo MIME, extensão e última modificação. Imagens mostram dimensões, arquivos de texto mostram o conteúdo.' },
      'qr-kod': { name: 'Código QR', description: 'Gerar e escanear códigos QR', hint: 'Crie códigos QR para URLs, senhas Wi-Fi ou qualquer texto. Escolha cores e tamanho, baixe como PNG — tudo acontece localmente no seu navegador.' },
      'base64-kodare': { name: 'Codificador Base64', description: 'Codificar e decodificar texto Base64', hint: 'Base64 é usado para incorporar dados em URLs, e-mails e chamadas de API. Útil para depuração ou quando você precisa enviar dados binários como texto.' },
      'linjal': { name: 'Régua', description: 'Medir distâncias na tela', hint: 'Meça distâncias diretamente na sua tela em cm ou polegadas. Calibre com um cartão de crédito para medidas exatas.' },
      'enhetsomvandlare': { name: 'Conversor de unidades', description: 'Converter entre diferentes unidades de medida', hint: 'Converta rapidamente entre unidades métricas e imperiais — comprimento, peso, temperatura, velocidade e tamanho de dados.' },
      'tidszoner': { name: 'Fusos horários', description: 'Comparar horários em diferentes fusos horários', hint: 'Veja a hora atual em múltiplas cidades simultaneamente com atualizações ao vivo. Perfeito para planejar reuniões entre fusos horários.' },
      'hash-generator': { name: 'Gerador de hash', description: 'Gerar valores MD5, SHA-256 e outros hashes', hint: 'Verifique a integridade de arquivos ou compare checksums. Hashes são usados em segurança, Git e validação de downloads.' },
      'losenordsgenerator': { name: 'Gerador de senhas', description: 'Criar senhas fortes e seguras', hint: 'Reutilizar senhas é um dos riscos de segurança mais comuns. Gere senhas únicas e fortes para cada serviço — diretamente no navegador sem enviar dados a lugar nenhum.' },
      'textverktyg': { name: 'Ferramentas de texto', description: 'Contar palavras, caracteres e transformar texto', hint: 'Perfeito para contar palavras em uma redação, remover duplicatas de uma lista ou converter texto rapidamente para maiúsculas.' },
      'oversattare': { name: 'Tradutor', description: 'Traduzir texto entre diferentes idiomas', hint: 'Traduza texto entre 19 idiomas diretamente no seu navegador. Troque a direção do idioma com um clique.' },
      'ip-info': { name: 'Info IP', description: 'Mostrar seu endereço IP e informações de rede' },
      'bandbreddstest': { name: 'Teste de largura de banda', description: 'Testar a velocidade da sua conexão com a Internet', hint: 'Meça sua velocidade de download e latência com um clique. Resultados em Mbps com indicador visual e histórico.' },
      'tangentbordstest': { name: 'Teste de teclado', description: 'Testar teclas e funções do teclado', hint: 'Verifique se todas as teclas funcionam. Mostra key, code e posição — perfeito para diagnóstico ou teste de novos teclados.' },
      'json-formaterare': { name: 'Formatador JSON', description: 'Formatar e validar dados JSON', hint: 'APIs e arquivos de configuração usam JSON. Cole JSON bagunçado aqui para torná-lo legível, ou minifique para economizar espaço.' },
      'text-till-tal': { name: 'Texto para fala', description: 'Converter texto escrito em áudio falado' },
      'tal-till-text': { name: 'Fala para texto', description: 'Converter áudio falado em texto escrito' },
      'regex-testare': { name: 'Testador de regex', description: 'Testar e depurar expressões regulares', hint: 'Escreva um padrão regex e veja as correspondências destacadas ao vivo no seu texto. Mostra grupos de captura e índice — perfeito para construir e depurar padrões.' },
      'bildkomprimering': { name: 'Compressão de imagens', description: 'Comprimir imagens sem perder qualidade', hint: 'Reduza o tamanho de arquivos de imagem sem perder muita qualidade. Escolha nível de compressão e largura máxima — tudo acontece localmente.' },
      'markdown-forhandsgranskning': { name: 'Pré-visualização Markdown', description: 'Pré-visualizar e editar texto Markdown', hint: 'Escreva Markdown e veja o resultado ao vivo. Perfeito para arquivos README, documentação ou posts de blog — com vista dividida e exportação HTML.' },
      'mediakonverterare': { name: 'Conversor de mídia', description: 'Converter entre formatos de áudio e vídeo — MP4, MP3, WAV, WebM, OGG e mais', hint: 'Converta arquivos de áudio e vídeo diretamente no navegador sem enviar a nenhum servidor. Suporta WAV, WebM e extração de áudio.' },
      'brodyrkortsvisare': { name: 'Visualizador de bordado', description: 'Visualizar e pré-visualizar padrões de bordado em formatos PES, DST, JEF e outros', hint: 'Carregue arquivos de bordado e veja o padrão renderizado com cores de linha, contagem de pontos e dimensões.' },
    },
  },
}
