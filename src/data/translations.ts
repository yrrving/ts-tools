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
  allCategories?: string
  categories?: {
    bild: string
    text: string
    ljud: string
    kod: string
    natverk: string
    berakning: string
    produktivitet: string
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
  calculator?: {
    error: string
  }
  percentCalc?: {
    modeOf: string
    modeIs: string
    modeChange: string
    percent: string
    value: string
    total: string
    from: string
    to: string
    result: string
  }
  randomNumber?: {
    min: string
    max: string
    count: string
    generate: string
    copy: string
    copied: string
  }
  stopwatch?: {
    start: string
    stop: string
    reset: string
    lap: string
    laps: string
  }
  countdown?: {
    hours: string
    minutes: string
    seconds: string
    start: string
    pause: string
    resume: string
    reset: string
    finished: string
  }
  pomodoro?: {
    work: string
    break: string
    start: string
    pause: string
    reset: string
    sessions: string
  }
  notepad?: {
    placeholder: string
    words: string
    characters: string
    clear: string
    autoSaved: string
  }
  randomPicker?: {
    listMode: string
    coinFlip: string
    placeholder: string
    choose: string
    flip: string
    heads: string
    tails: string
  }
  loremIpsum?: {
    paragraphs: string
    sentences: string
    words: string
    count: string
    generate: string
    copy: string
    copied: string
  }
  metronome?: {
    start: string
    stop: string
    tapTempo: string
  }
  userAgent?: {
    browser: string
    os: string
    device: string
    platform: string
    language: string
    screen: string
    window: string
    colorDepth: string
    pixelRatio: string
    touch: string
    cores: string
    cookies: string
    onlineStatus: string
    copy: string
    copied: string
    yes: string
    no: string
  }
  jwtDecoder?: {
    input: string
    placeholder: string
    invalid: string
    signature: string
    issuedAt: string
    expires: string
    notBefore: string
  }
  cronParser?: {
    expression: string
    meaning: string
    examples: string
    minute: string
    hour: string
    dayOfMonth: string
    month: string
    dayOfWeek: string
    every: string
    at: string
    minuteLabel: string
    minutesLabel: string
    hourLabel: string
    hoursLabel: string
    dayLabel: string
    on: string
    inMonth: string
    onDay: string
  }
  csvJson?: {
    input: string
    output: string
    convert: string
    copy: string
    copied: string
    error: string
    csvPlaceholder: string
    jsonPlaceholder: string
  }
  diffCompare?: {
    original: string
    modified: string
    placeholderA: string
    placeholderB: string
    compare: string
    linesAdded: string
    linesRemoved: string
  }
  whiteNoise?: {
    white: string
    pink: string
    brown: string
    volume: string
    play: string
    stop: string
  }
  pitchDetector?: {
    start: string
    stop: string
    detecting: string
    pressStart: string
    notSupported: string
  }
  codeMinifier?: {
    placeholder: string
    minify: string
    copy: string
    copied: string
    saved: string
  }
  cssGradient?: {
    linear: string
    radial: string
    angle: string
    colors: string
    addColor: string
    presets: string
  }
  asciiArt?: {
    upload: string
    widthLabel: string
    standard: string
    detailed: string
    blocks: string
    copy: string
    copied: string
  }
  dnsLookup?: {
    domainLabel: string
    typeLabel: string
    lookup: string
    looking: string
    results: string
    noResults: string
    noRecords: string
    error: string
    placeholder: string
    search: string
    loading: string
  }
  sslCheck?: {
    domainLabel: string
    check: string
    checking: string
    valid: string
    invalid: string
    issuer: string
    expires: string
    error: string
    placeholder: string
    loading: string
    unknownIssuer: string
    daysLeft: string
    subject: string
    validFrom: string
    validTo: string
    protocol: string
  }
  httpHeaders?: {
    urlLabel: string
    fetch: string
    fetching: string
    headers: string
    error: string
    placeholder: string
    loading: string
    copied: string
    copyAll: string
  }
  faviconGenerator?: {
    upload: string
    downloadIco: string
  }
  imageCropper?: {
    upload: string
    free: string
    crop: string
    newImage: string
    download: string
  }
  imageCollage?: {
    gap: string
    images: string
    generate: string
    download: string
  }
  pixelCounter?: {
    upload: string
    dimensions: string
    totalPixels: string
    distance: string
    newImage: string
  }
  cutFileGenerator?: {
    upload: string
    threshold: string
    offset: string
    generate: string
    downloadSvg: string
  }
  pdfTools?: {
    upload: string
    files: string
    merge: string
    merging: string
    download: string
  }
  ocrTool?: {
    upload: string
    extract: string
    processing: string
    result: string
    noText: string
    copy: string
    copied: string
  }
  backgroundRemover?: {
    upload: string
    tolerance: string
    remove: string
    processing: string
    download: string
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
    allCategories: 'Alla kategorier',
    categories: {
      bild: 'Bild & Media',
      text: 'Text & Dokument',
      ljud: 'Ljud & Tal',
      kod: 'Kod & Data',
      natverk: 'Nätverk & Säkerhet',
      berakning: 'Beräkning & Konvertering',
      produktivitet: 'Produktivitet & Verktyg',
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
    calculator: {
      error: 'Fel',
    },
    percentCalc: {
      modeOf: 'X% av Y',
      modeIs: 'X är ?% av Y',
      modeChange: '% förändring',
      percent: 'Procent',
      value: 'Värde',
      total: 'Totalt',
      from: 'Från',
      to: 'Till',
      result: 'Resultat',
    },
    randomNumber: {
      min: 'Min',
      max: 'Max',
      count: 'Antal',
      generate: 'Generera',
      copy: 'Kopiera',
      copied: 'Kopierat!',
    },
    stopwatch: {
      start: 'Start',
      stop: 'Stopp',
      reset: 'Nollställ',
      lap: 'Varv',
      laps: 'Varv',
    },
    countdown: {
      hours: 'Tim',
      minutes: 'Min',
      seconds: 'Sek',
      start: 'Starta',
      pause: 'Paus',
      resume: 'Fortsätt',
      reset: 'Nollställ',
      finished: 'Tiden är ute!',
    },
    pomodoro: {
      work: 'Arbete',
      break: 'Paus',
      start: 'Starta',
      pause: 'Paus',
      reset: 'Nollställ',
      sessions: 'Sessioner',
    },
    notepad: {
      placeholder: 'Skriv dina anteckningar här...',
      words: 'Ord',
      characters: 'Tecken',
      clear: 'Rensa',
      autoSaved: 'Sparas automatiskt i webbläsaren',
    },
    randomPicker: {
      listMode: 'Lista',
      coinFlip: 'Myntkast',
      placeholder: 'Skriv ett alternativ per rad...',
      choose: 'Välj',
      flip: 'Kasta',
      heads: 'Krona',
      tails: 'Klave',
    },
    loremIpsum: {
      paragraphs: 'Stycken',
      sentences: 'Meningar',
      words: 'Ord',
      count: 'Antal',
      generate: 'Generera',
      copy: 'Kopiera',
      copied: 'Kopierat!',
    },
    metronome: {
      start: 'Starta',
      stop: 'Stoppa',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Webbläsare',
      os: 'Operativsystem',
      device: 'Enhetstyp',
      platform: 'Plattform',
      language: 'Språk',
      screen: 'Skärmupplösning',
      window: 'Fönsterstorlek',
      colorDepth: 'Färgdjup',
      pixelRatio: 'Pixelförhållande',
      touch: 'Pekskärm',
      cores: 'CPU-kärnor',
      cookies: 'Cookies',
      onlineStatus: 'Online',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      yes: 'Ja',
      no: 'Nej',
    },
    jwtDecoder: {
      input: 'JWT-token',
      placeholder: 'Klistra in en JWT-token här...',
      invalid: 'Ogiltig JWT-token',
      signature: 'Signatur',
      issuedAt: 'Utfärdat',
      expires: 'Utgår',
      notBefore: 'Ej före',
    },
    cronParser: {
      expression: 'Cron-uttryck',
      meaning: 'Betydelse',
      examples: 'Exempel',
      minute: 'Minut',
      hour: 'Timme',
      dayOfMonth: 'Dag i månaden',
      month: 'Månad',
      dayOfWeek: 'Veckodag',
      every: 'Varje',
      at: 'Vid',
      minuteLabel: 'minut',
      minutesLabel: 'minuter',
      hourLabel: 'timme',
      hoursLabel: 'timmar',
      dayLabel: 'dag',
      on: 'på',
      inMonth: 'i',
      onDay: 'den',
    },
    csvJson: {
      input: 'Indata',
      output: 'Resultat',
      convert: 'Konvertera',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      error: 'Konverteringsfel — kontrollera indata',
      csvPlaceholder: 'namn,ålder,stad\nAnna,28,Stockholm',
      jsonPlaceholder: '[{"namn":"Anna","ålder":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Ändrad',
      placeholderA: 'Klistra in originaltext...',
      placeholderB: 'Klistra in ändrad text...',
      compare: 'Jämför',
      linesAdded: 'tillagda',
      linesRemoved: 'borttagna',
    },
    whiteNoise: {
      white: 'Vitt brus',
      pink: 'Rosa brus',
      brown: 'Brunt brus',
      volume: 'Volym',
      play: 'Spela',
      stop: 'Stoppa',
    },
    pitchDetector: {
      start: 'Starta',
      stop: 'Stoppa',
      detecting: 'Lyssnar...',
      pressStart: 'Tryck för att börja',
      notSupported: 'Mikrofon stöds inte i denna webbläsare',
    },
    codeMinifier: {
      placeholder: 'Klistra in kod här...',
      minify: 'Minifiera',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      saved: 'Sparat',
    },
    cssGradient: {
      linear: 'Linjär',
      radial: 'Radiell',
      angle: 'Vinkel',
      colors: 'Färger',
      addColor: 'Lägg till',
      presets: 'Förval',
    },
    asciiArt: {
      upload: 'Klicka eller dra hit en bild',
      widthLabel: 'Bredd',
      standard: 'Standard',
      detailed: 'Detaljerad',
      blocks: 'Block',
      copy: 'Kopiera',
      copied: 'Kopierat!',
    },
    dnsLookup: {
      domainLabel: 'Domännamn',
      typeLabel: 'Posttyp',
      lookup: 'Slå upp',
      looking: 'Söker...',
      results: 'Resultat',
      noResults: 'Inga poster hittades',
      noRecords: 'Inga poster hittades',
      error: 'Kunde inte slå upp domänen',
      placeholder: 'example.com',
      search: 'Sök',
      loading: 'Söker...',
    },
    sslCheck: {
      domainLabel: 'Domännamn',
      check: 'Kontrollera',
      checking: 'Kontrollerar...',
      valid: 'SSL-certifikatet är giltigt',
      invalid: 'SSL-certifikatet är ogiltigt',
      issuer: 'Utfärdare',
      expires: 'Utgår',
      error: 'Kunde inte kontrollera SSL',
      placeholder: 'example.com',
      loading: 'Kontrollerar...',
      unknownIssuer: 'Okänd (CORS-begränsning)',
      daysLeft: 'dagar kvar',
      subject: 'Domän',
      validFrom: 'Giltig från',
      validTo: 'Giltig till',
      protocol: 'Protokoll',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Hämta',
      fetching: 'Hämtar...',
      headers: 'Headers',
      error: 'Kunde inte hämta headers',
      placeholder: 'https://example.com',
      loading: 'Hämtar...',
      copied: 'Kopierat!',
      copyAll: 'Kopiera alla',
    },
    faviconGenerator: {
      upload: 'Klicka eller dra hit en bild',
      downloadIco: 'Ladda ner favicon.ico',
    },
    imageCropper: {
      upload: 'Klicka eller dra hit en bild',
      free: 'Fri',
      crop: 'Beskär',
      newImage: 'Ny bild',
      download: 'Ladda ner',
    },
    imageCollage: {
      gap: 'Mellanrum',
      images: 'bilder',
      generate: 'Skapa kollage',
      download: 'Ladda ner',
    },
    pixelCounter: {
      upload: 'Klicka eller dra hit en bild',
      dimensions: 'Dimensioner',
      totalPixels: 'Totalt',
      distance: 'Avstånd',
      newImage: 'Ny bild',
    },
    cutFileGenerator: {
      upload: 'Klicka eller dra hit en bild',
      threshold: 'Tröskel',
      offset: 'Offset (px)',
      generate: 'Generera skärfil',
      downloadSvg: 'Ladda ner SVG',
    },
    pdfTools: {
      upload: 'Klicka eller dra hit PDF-filer',
      files: 'filer',
      merge: 'Sammanfoga PDF-filer',
      merging: 'Sammanfogar...',
      download: 'Ladda ner sammanslagen PDF',
    },
    ocrTool: {
      upload: 'Klicka eller dra hit en bild',
      extract: 'Extrahera text',
      processing: 'Analyserar...',
      result: 'Resultat',
      noText: 'Ingen text kunde identifieras. Prova en bild med tydlig, mörk text på ljus bakgrund.',
      copy: 'Kopiera',
      copied: 'Kopierad!',
    },
    backgroundRemover: {
      upload: 'Klicka eller dra hit en bild',
      tolerance: 'Tolerans',
      remove: 'Ta bort bakgrund',
      processing: 'Bearbetar...',
      download: 'Ladda ner PNG',
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
      'bildbeskärare': { name: 'Bildbeskärare', description: 'Beskär bilder till önskad storlek och proportioner' },
      'bakgrundsborttagare': { name: 'Bakgrundsborttagare', description: 'Ta bort bakgrund från bilder automatiskt' },
      'favicon-generator': { name: 'Favicon-generator', description: 'Skapa favicons för webbplatser från valfri bild' },
      'bildkollage': { name: 'Bildkollage', description: 'Kombinera flera bilder till ett snyggt kollage' },
      'pixelraknare': { name: 'Pixelräknare', description: 'Räkna pixlar och mät avstånd i bilder' },
      'ascii-konst': { name: 'ASCII-konst', description: 'Konvertera bilder till ASCII-teckenkonst' },
      'skarfilsgenerator': { name: 'Skärfilsgenerator', description: 'Skapa skärfiler för lasergravering — rita skärlinjer runt bilder och exportera som SVG' },
      'diff-jamforare': { name: 'Diff-jämförare', description: 'Jämför två texter och se skillnaderna markerade' },
      'lorem-ipsum': { name: 'Lorem Ipsum', description: 'Generera Lorem Ipsum-platshållartext' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Konvertera mellan CSV- och JSON-format' },
      'pdf-verktyg': { name: 'PDF-verktyg', description: 'Slå ihop, dela och hantera PDF-filer' },
      'ocr': { name: 'OCR — Textigenkänning', description: 'Extrahera text från bilder med optisk teckenigenkänning' },
      'metronom': { name: 'Metronom', description: 'Håll takten med en digital metronom' },
      'tonhojdsmatare': { name: 'Tonhöjdsmätare', description: 'Mät tonhöjd och frekvens via mikrofonen' },
      'vit-brus': { name: 'Vitt brus', description: 'Spela upp vitt brus och andra bakgrundsljud för fokus' },
      'kodminifierare': { name: 'Kodminifierare', description: 'Minifiera JavaScript, CSS och HTML-kod' },
      'css-gradient': { name: 'CSS Gradient', description: 'Skapa CSS-gradienter visuellt med live-förhandsgranskning' },
      'cron-tolkare': { name: 'Cron-tolkare', description: 'Tolka och validera cron-uttryck i klartext' },
      'jwt-dekodare': { name: 'JWT-dekodare', description: 'Dekoda och inspektera JSON Web Tokens' },
      'dns-uppslagning': { name: 'DNS-uppslagning', description: 'Slå upp DNS-poster för domäner' },
      'ssl-kontroll': { name: 'SSL-kontroll', description: 'Kontrollera SSL-certifikat för webbplatser' },
      'http-headers': { name: 'HTTP Headers', description: 'Inspektera HTTP-svarshuvuden för valfri URL' },
      'useragent-info': { name: 'User Agent-info', description: 'Visa information om din webbläsare och enhet' },
      'miniraknare': { name: 'Miniräknare', description: 'En enkel kalkylator för snabba beräkningar' },
      'procent-raknare': { name: 'Procenträknare', description: 'Beräkna procent, ökning, minskning och andelar' },
      'slumptalsgenerator': { name: 'Slumptalsgenerator', description: 'Generera slumpmässiga tal inom valfritt intervall' },
      'pomodoro-timer': { name: 'Pomodoro-timer', description: 'Fokusera med Pomodoro-tekniken — 25 min arbete, 5 min paus' },
      'nedrakningstimer': { name: 'Nedräkningstimer', description: 'Ställ in en nedräkning till valfri tid' },
      'stoppur': { name: 'Stoppur', description: 'Mät tid med varv och mellantider' },
      'anteckningsblock': { name: 'Anteckningsblock', description: 'Snabba anteckningar som sparas i webbläsaren' },
      'slumpmassigt-val': { name: 'Slumpmässigt val', description: 'Låt slumpen välja — listor, hjul eller mynt' },
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
    allCategories: 'All categories',
    categories: {
      bild: 'Image & Media',
      text: 'Text & Documents',
      ljud: 'Audio & Speech',
      kod: 'Code & Data',
      natverk: 'Network & Security',
      berakning: 'Calculation & Conversion',
      produktivitet: 'Productivity & Tools',
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
    calculator: {
      error: 'Error',
    },
    percentCalc: {
      modeOf: 'X% of Y',
      modeIs: 'X is ?% of Y',
      modeChange: '% change',
      percent: 'Percent',
      value: 'Value',
      total: 'Total',
      from: 'From',
      to: 'To',
      result: 'Result',
    },
    randomNumber: {
      min: 'Min',
      max: 'Max',
      count: 'Count',
      generate: 'Generate',
      copy: 'Copy',
      copied: 'Copied!',
    },
    stopwatch: {
      start: 'Start',
      stop: 'Stop',
      reset: 'Reset',
      lap: 'Lap',
      laps: 'Laps',
    },
    countdown: {
      hours: 'Hours',
      minutes: 'Min',
      seconds: 'Sec',
      start: 'Start',
      pause: 'Pause',
      resume: 'Resume',
      reset: 'Reset',
      finished: 'Time\'s up!',
    },
    pomodoro: {
      work: 'Work',
      break: 'Break',
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
      sessions: 'Sessions',
    },
    notepad: {
      placeholder: 'Write your notes here...',
      words: 'Words',
      characters: 'Characters',
      clear: 'Clear',
      autoSaved: 'Auto-saved in your browser',
    },
    randomPicker: {
      listMode: 'List',
      coinFlip: 'Coin flip',
      placeholder: 'Write one option per line...',
      choose: 'Choose',
      flip: 'Flip',
      heads: 'Heads',
      tails: 'Tails',
    },
    loremIpsum: {
      paragraphs: 'Paragraphs',
      sentences: 'Sentences',
      words: 'Words',
      count: 'Count',
      generate: 'Generate',
      copy: 'Copy',
      copied: 'Copied!',
    },
    metronome: {
      start: 'Start',
      stop: 'Stop',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Browser',
      os: 'Operating system',
      device: 'Device type',
      platform: 'Platform',
      language: 'Language',
      screen: 'Screen resolution',
      window: 'Window size',
      colorDepth: 'Color depth',
      pixelRatio: 'Pixel ratio',
      touch: 'Touch screen',
      cores: 'CPU cores',
      cookies: 'Cookies',
      onlineStatus: 'Online',
      copy: 'Copy',
      copied: 'Copied!',
      yes: 'Yes',
      no: 'No',
    },
    jwtDecoder: {
      input: 'JWT token',
      placeholder: 'Paste a JWT token here...',
      invalid: 'Invalid JWT token',
      signature: 'Signature',
      issuedAt: 'Issued at',
      expires: 'Expires',
      notBefore: 'Not before',
    },
    cronParser: {
      expression: 'Cron expression',
      meaning: 'Meaning',
      examples: 'Examples',
      minute: 'Minute',
      hour: 'Hour',
      dayOfMonth: 'Day of month',
      month: 'Month',
      dayOfWeek: 'Day of week',
      every: 'Every',
      at: 'At',
      minuteLabel: 'minute',
      minutesLabel: 'minutes',
      hourLabel: 'hour',
      hoursLabel: 'hours',
      dayLabel: 'day',
      on: 'on',
      inMonth: 'in',
      onDay: 'the',
    },
    csvJson: {
      input: 'Input',
      output: 'Result',
      convert: 'Convert',
      copy: 'Copy',
      copied: 'Copied!',
      error: 'Conversion error — check your input',
      csvPlaceholder: 'name,age,city\nAnna,28,Stockholm',
      jsonPlaceholder: '[{"name":"Anna","age":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Modified',
      placeholderA: 'Paste original text...',
      placeholderB: 'Paste modified text...',
      compare: 'Compare',
      linesAdded: 'added',
      linesRemoved: 'removed',
    },
    whiteNoise: {
      white: 'White noise',
      pink: 'Pink noise',
      brown: 'Brown noise',
      volume: 'Volume',
      play: 'Play',
      stop: 'Stop',
    },
    pitchDetector: {
      start: 'Start',
      stop: 'Stop',
      detecting: 'Listening...',
      pressStart: 'Press to start',
      notSupported: 'Microphone not supported in this browser',
    },
    codeMinifier: {
      placeholder: 'Paste code here...',
      minify: 'Minify',
      copy: 'Copy',
      copied: 'Copied!',
      saved: 'Saved',
    },
    cssGradient: {
      linear: 'Linear',
      radial: 'Radial',
      angle: 'Angle',
      colors: 'Colors',
      addColor: 'Add',
      presets: 'Presets',
    },
    asciiArt: {
      upload: 'Click or drag an image here',
      widthLabel: 'Width',
      standard: 'Standard',
      detailed: 'Detailed',
      blocks: 'Blocks',
      copy: 'Copy',
      copied: 'Copied!',
    },
    dnsLookup: {
      domainLabel: 'Domain name',
      typeLabel: 'Record type',
      lookup: 'Lookup',
      looking: 'Looking up...',
      results: 'Results',
      noResults: 'No records found',
      noRecords: 'No records found',
      error: 'Could not look up domain',
      placeholder: 'example.com',
      search: 'Search',
      loading: 'Looking up...',
    },
    sslCheck: {
      domainLabel: 'Domain name',
      check: 'Check',
      checking: 'Checking...',
      valid: 'SSL certificate is valid',
      invalid: 'SSL certificate is invalid',
      issuer: 'Issuer',
      expires: 'Expires',
      error: 'Could not check SSL',
      placeholder: 'example.com',
      loading: 'Checking...',
      unknownIssuer: 'Unknown (CORS restriction)',
      daysLeft: 'days left',
      subject: 'Domain',
      validFrom: 'Valid from',
      validTo: 'Valid to',
      protocol: 'Protocol',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Fetch',
      fetching: 'Fetching...',
      headers: 'Headers',
      error: 'Could not fetch headers',
      placeholder: 'https://example.com',
      loading: 'Fetching...',
      copied: 'Copied!',
      copyAll: 'Copy all',
    },
    faviconGenerator: {
      upload: 'Click or drag an image here',
      downloadIco: 'Download favicon.ico',
    },
    imageCropper: {
      upload: 'Click or drag an image here',
      free: 'Free',
      crop: 'Crop',
      newImage: 'New image',
      download: 'Download',
    },
    imageCollage: {
      gap: 'Gap',
      images: 'images',
      generate: 'Create collage',
      download: 'Download',
    },
    pixelCounter: {
      upload: 'Click or drag an image here',
      dimensions: 'Dimensions',
      totalPixels: 'Total',
      distance: 'Distance',
      newImage: 'New image',
    },
    cutFileGenerator: {
      upload: 'Click or drag an image here',
      threshold: 'Threshold',
      offset: 'Offset (px)',
      generate: 'Generate cut file',
      downloadSvg: 'Download SVG',
    },
    pdfTools: {
      upload: 'Click or drag PDF files here',
      files: 'files',
      merge: 'Merge PDF files',
      merging: 'Merging...',
      download: 'Download merged PDF',
    },
    ocrTool: {
      upload: 'Click or drag an image here',
      extract: 'Extract text',
      processing: 'Analyzing...',
      result: 'Result',
      noText: 'No text could be identified. Try an image with clear, dark text on a light background.',
      copy: 'Copy',
      copied: 'Copied!',
    },
    backgroundRemover: {
      upload: 'Click or drag an image here',
      tolerance: 'Tolerance',
      remove: 'Remove background',
      processing: 'Processing...',
      download: 'Download PNG',
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
      'bildbeskärare': { name: 'Image Cropper', description: 'Crop images to desired size and aspect ratio' },
      'bakgrundsborttagare': { name: 'Background Remover', description: 'Automatically remove backgrounds from images' },
      'favicon-generator': { name: 'Favicon Generator', description: 'Create favicons for websites from any image' },
      'bildkollage': { name: 'Image Collage', description: 'Combine multiple images into a collage' },
      'pixelraknare': { name: 'Pixel Counter', description: 'Count pixels and measure distances in images' },
      'ascii-konst': { name: 'ASCII Art', description: 'Convert images to ASCII character art' },
      'skarfilsgenerator': { name: 'Cut File Generator', description: 'Create cut files for laser engraving — draw cut lines around images and export as SVG' },
      'diff-jamforare': { name: 'Diff Compare', description: 'Compare two texts and see the differences highlighted' },
      'lorem-ipsum': { name: 'Lorem Ipsum', description: 'Generate Lorem Ipsum placeholder text' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Convert between CSV and JSON formats' },
      'pdf-verktyg': { name: 'PDF Tools', description: 'Merge, split and manage PDF files' },
      'ocr': { name: 'OCR — Text Recognition', description: 'Extract text from images using optical character recognition' },
      'metronom': { name: 'Metronome', description: 'Keep the beat with a digital metronome' },
      'tonhojdsmatare': { name: 'Pitch Detector', description: 'Measure pitch and frequency via the microphone' },
      'vit-brus': { name: 'White Noise', description: 'Play white noise and other ambient sounds for focus' },
      'kodminifierare': { name: 'Code Minifier', description: 'Minify JavaScript, CSS and HTML code' },
      'css-gradient': { name: 'CSS Gradient', description: 'Create CSS gradients visually with live preview' },
      'cron-tolkare': { name: 'Cron Parser', description: 'Parse and validate cron expressions in plain text' },
      'jwt-dekodare': { name: 'JWT Decoder', description: 'Decode and inspect JSON Web Tokens' },
      'dns-uppslagning': { name: 'DNS Lookup', description: 'Look up DNS records for domains' },
      'ssl-kontroll': { name: 'SSL Check', description: 'Check SSL certificates for websites' },
      'http-headers': { name: 'HTTP Headers', description: 'Inspect HTTP response headers for any URL' },
      'useragent-info': { name: 'User Agent Info', description: 'View information about your browser and device' },
      'miniraknare': { name: 'Calculator', description: 'A simple calculator for quick calculations' },
      'procent-raknare': { name: 'Percentage Calculator', description: 'Calculate percentages, increases, decreases and ratios' },
      'slumptalsgenerator': { name: 'Random Number Generator', description: 'Generate random numbers within any range' },
      'pomodoro-timer': { name: 'Pomodoro Timer', description: 'Focus with the Pomodoro technique — 25 min work, 5 min break' },
      'nedrakningstimer': { name: 'Countdown Timer', description: 'Set a countdown to any time' },
      'stoppur': { name: 'Stopwatch', description: 'Measure time with laps and split times' },
      'anteckningsblock': { name: 'Notepad', description: 'Quick notes saved in your browser' },
      'slumpmassigt-val': { name: 'Random Picker', description: 'Let chance decide — lists, wheels or coin flips' },
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
    allCategories: 'Todas las categorías',
    categories: {
      bild: 'Imagen y Medios',
      text: 'Texto y Documentos',
      ljud: 'Audio y Voz',
      kod: 'Código y Datos',
      natverk: 'Red y Seguridad',
      berakning: 'Cálculo y Conversión',
      produktivitet: 'Productividad y Herramientas',
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
    calculator: {
      error: 'Error',
    },
    percentCalc: {
      modeOf: 'X% de Y',
      modeIs: 'X es ?% de Y',
      modeChange: '% de cambio',
      percent: 'Porcentaje',
      value: 'Valor',
      total: 'Total',
      from: 'De',
      to: 'A',
      result: 'Resultado',
    },
    randomNumber: {
      min: 'Min',
      max: 'Max',
      count: 'Cantidad',
      generate: 'Generar',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    stopwatch: {
      start: 'Iniciar',
      stop: 'Parar',
      reset: 'Reiniciar',
      lap: 'Vuelta',
      laps: 'Vueltas',
    },
    countdown: {
      hours: 'Horas',
      minutes: 'Min',
      seconds: 'Seg',
      start: 'Iniciar',
      pause: 'Pausa',
      resume: 'Continuar',
      reset: 'Reiniciar',
      finished: '¡Se acabó el tiempo!',
    },
    pomodoro: {
      work: 'Trabajo',
      break: 'Descanso',
      start: 'Iniciar',
      pause: 'Pausa',
      reset: 'Reiniciar',
      sessions: 'Sesiones',
    },
    notepad: {
      placeholder: 'Escribe tus notas aquí...',
      words: 'Palabras',
      characters: 'Caracteres',
      clear: 'Limpiar',
      autoSaved: 'Se guarda automáticamente en el navegador',
    },
    randomPicker: {
      listMode: 'Lista',
      coinFlip: 'Lanzar moneda',
      placeholder: 'Escribe una opción por línea...',
      choose: 'Elegir',
      flip: 'Lanzar',
      heads: 'Cara',
      tails: 'Cruz',
    },
    loremIpsum: {
      paragraphs: 'Párrafos',
      sentences: 'Oraciones',
      words: 'Palabras',
      count: 'Cantidad',
      generate: 'Generar',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    metronome: {
      start: 'Iniciar',
      stop: 'Parar',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Navegador',
      os: 'Sistema operativo',
      device: 'Tipo de dispositivo',
      platform: 'Plataforma',
      language: 'Idioma',
      screen: 'Resolución de pantalla',
      window: 'Tamaño de ventana',
      colorDepth: 'Profundidad de color',
      pixelRatio: 'Relación de píxeles',
      touch: 'Pantalla táctil',
      cores: 'Núcleos de CPU',
      cookies: 'Cookies',
      onlineStatus: 'En línea',
      copy: 'Copiar',
      copied: '¡Copiado!',
      yes: 'Sí',
      no: 'No',
    },
    jwtDecoder: {
      input: 'Token JWT',
      placeholder: 'Pega un token JWT aquí...',
      invalid: 'Token JWT no válido',
      signature: 'Firma',
      issuedAt: 'Emitido en',
      expires: 'Expira',
      notBefore: 'No antes de',
    },
    cronParser: {
      expression: 'Expresión cron',
      meaning: 'Significado',
      examples: 'Ejemplos',
      minute: 'Minuto',
      hour: 'Hora',
      dayOfMonth: 'Día del mes',
      month: 'Mes',
      dayOfWeek: 'Día de la semana',
      every: 'Cada',
      at: 'A las',
      minuteLabel: 'minuto',
      minutesLabel: 'minutos',
      hourLabel: 'hora',
      hoursLabel: 'horas',
      dayLabel: 'día',
      on: 'el',
      inMonth: 'en',
      onDay: 'el',
    },
    csvJson: {
      input: 'Entrada',
      output: 'Resultado',
      convert: 'Convertir',
      copy: 'Copiar',
      copied: '¡Copiado!',
      error: 'Error de conversión — comprueba los datos',
      csvPlaceholder: 'nombre,edad,ciudad\nAnna,28,Estocolmo',
      jsonPlaceholder: '[{"nombre":"Anna","edad":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Modificado',
      placeholderA: 'Pega el texto original...',
      placeholderB: 'Pega el texto modificado...',
      compare: 'Comparar',
      linesAdded: 'añadidas',
      linesRemoved: 'eliminadas',
    },
    whiteNoise: {
      white: 'Ruido blanco',
      pink: 'Ruido rosa',
      brown: 'Ruido marrón',
      volume: 'Volumen',
      play: 'Reproducir',
      stop: 'Parar',
    },
    pitchDetector: {
      start: 'Iniciar',
      stop: 'Parar',
      detecting: 'Escuchando...',
      pressStart: 'Pulsa para empezar',
      notSupported: 'Micrófono no soportado en este navegador',
    },
    codeMinifier: {
      placeholder: 'Pega código aquí...',
      minify: 'Minificar',
      copy: 'Copiar',
      copied: '¡Copiado!',
      saved: 'Ahorrado',
    },
    cssGradient: {
      linear: 'Lineal',
      radial: 'Radial',
      angle: 'Ángulo',
      colors: 'Colores',
      addColor: 'Añadir',
      presets: 'Preajustes',
    },
    asciiArt: {
      upload: 'Haz clic o arrastra una imagen aquí',
      widthLabel: 'Ancho',
      standard: 'Estándar',
      detailed: 'Detallado',
      blocks: 'Bloques',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    dnsLookup: {
      domainLabel: 'Nombre de dominio',
      typeLabel: 'Tipo de registro',
      lookup: 'Buscar',
      looking: 'Buscando...',
      results: 'Resultados',
      noResults: 'No se encontraron registros',
      noRecords: 'No se encontraron registros',
      error: 'No se pudo buscar el dominio',
      placeholder: 'example.com',
      search: 'Buscar',
      loading: 'Buscando...',
    },
    sslCheck: {
      domainLabel: 'Nombre de dominio',
      check: 'Verificar',
      checking: 'Verificando...',
      valid: 'El certificado SSL es válido',
      invalid: 'El certificado SSL no es válido',
      issuer: 'Emisor',
      expires: 'Expira',
      error: 'No se pudo verificar SSL',
      placeholder: 'example.com',
      loading: 'Verificando...',
      unknownIssuer: 'Desconocido (restricción CORS)',
      daysLeft: 'días restantes',
      subject: 'Dominio',
      validFrom: 'Válido desde',
      validTo: 'Válido hasta',
      protocol: 'Protocolo',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Obtener',
      fetching: 'Obteniendo...',
      headers: 'Headers',
      error: 'No se pudieron obtener los headers',
      placeholder: 'https://example.com',
      loading: 'Obteniendo...',
      copied: '¡Copiado!',
      copyAll: 'Copiar todo',
    },
    faviconGenerator: {
      upload: 'Haz clic o arrastra una imagen aquí',
      downloadIco: 'Descargar favicon.ico',
    },
    imageCropper: {
      upload: 'Haz clic o arrastra una imagen aquí',
      free: 'Libre',
      crop: 'Recortar',
      newImage: 'Nueva imagen',
      download: 'Descargar',
    },
    imageCollage: {
      gap: 'Espacio',
      images: 'imágenes',
      generate: 'Crear collage',
      download: 'Descargar',
    },
    pixelCounter: {
      upload: 'Haz clic o arrastra una imagen aquí',
      dimensions: 'Dimensiones',
      totalPixels: 'Total',
      distance: 'Distancia',
      newImage: 'Nueva imagen',
    },
    cutFileGenerator: {
      upload: 'Haz clic o arrastra una imagen aquí',
      threshold: 'Umbral',
      offset: 'Desplazamiento (px)',
      generate: 'Generar archivo de corte',
      downloadSvg: 'Descargar SVG',
    },
    pdfTools: {
      upload: 'Haz clic o arrastra archivos PDF aquí',
      files: 'archivos',
      merge: 'Fusionar archivos PDF',
      merging: 'Fusionando...',
      download: 'Descargar PDF fusionado',
    },
    ocrTool: {
      upload: 'Haz clic o arrastra una imagen aquí',
      extract: 'Extraer texto',
      processing: 'Analizando...',
      result: 'Resultado',
      noText: 'No se pudo identificar texto. Prueba con una imagen con texto oscuro claro sobre fondo claro.',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    backgroundRemover: {
      upload: 'Haz clic o arrastra una imagen aquí',
      tolerance: 'Tolerancia',
      remove: 'Eliminar fondo',
      processing: 'Procesando...',
      download: 'Descargar PNG',
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
      'bildbeskärare': { name: 'Recortador de imágenes', description: 'Recortar imágenes al tamaño y proporción deseados' },
      'bakgrundsborttagare': { name: 'Eliminador de fondo', description: 'Eliminar fondos de imágenes automáticamente' },
      'favicon-generator': { name: 'Generador de favicon', description: 'Crear favicons para sitios web desde cualquier imagen' },
      'bildkollage': { name: 'Collage de imágenes', description: 'Combinar varias imágenes en un collage' },
      'pixelraknare': { name: 'Contador de píxeles', description: 'Contar píxeles y medir distancias en imágenes' },
      'ascii-konst': { name: 'Arte ASCII', description: 'Convertir imágenes en arte de caracteres ASCII' },
      'skarfilsgenerator': { name: 'Generador de archivos de corte', description: 'Crear archivos de corte para grabado láser — dibujar líneas de corte alrededor de imágenes y exportar como SVG' },
      'diff-jamforare': { name: 'Comparador Diff', description: 'Comparar dos textos y ver las diferencias resaltadas' },
      'lorem-ipsum': { name: 'Lorem Ipsum', description: 'Generar texto de relleno Lorem Ipsum' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Convertir entre formatos CSV y JSON' },
      'pdf-verktyg': { name: 'Herramientas PDF', description: 'Fusionar, dividir y gestionar archivos PDF' },
      'ocr': { name: 'OCR — Reconocimiento de texto', description: 'Extraer texto de imágenes con reconocimiento óptico de caracteres' },
      'metronom': { name: 'Metrónomo', description: 'Mantén el ritmo con un metrónomo digital' },
      'tonhojdsmatare': { name: 'Detector de tono', description: 'Medir tono y frecuencia a través del micrófono' },
      'vit-brus': { name: 'Ruido blanco', description: 'Reproducir ruido blanco y otros sonidos ambientales para concentrarse' },
      'kodminifierare': { name: 'Minificador de código', description: 'Minificar código JavaScript, CSS y HTML' },
      'css-gradient': { name: 'Gradiente CSS', description: 'Crear gradientes CSS visualmente con vista previa en vivo' },
      'cron-tolkare': { name: 'Intérprete Cron', description: 'Interpretar y validar expresiones cron en texto plano' },
      'jwt-dekodare': { name: 'Decodificador JWT', description: 'Decodificar e inspeccionar JSON Web Tokens' },
      'dns-uppslagning': { name: 'Búsqueda DNS', description: 'Buscar registros DNS para dominios' },
      'ssl-kontroll': { name: 'Verificación SSL', description: 'Verificar certificados SSL de sitios web' },
      'http-headers': { name: 'Cabeceras HTTP', description: 'Inspeccionar cabeceras de respuesta HTTP para cualquier URL' },
      'useragent-info': { name: 'Info de User Agent', description: 'Ver información sobre tu navegador y dispositivo' },
      'miniraknare': { name: 'Calculadora', description: 'Una calculadora simple para cálculos rápidos' },
      'procent-raknare': { name: 'Calculadora de porcentajes', description: 'Calcular porcentajes, aumentos, disminuciones y proporciones' },
      'slumptalsgenerator': { name: 'Generador de números aleatorios', description: 'Generar números aleatorios dentro de cualquier rango' },
      'pomodoro-timer': { name: 'Temporizador Pomodoro', description: 'Concentrarse con la técnica Pomodoro — 25 min trabajo, 5 min descanso' },
      'nedrakningstimer': { name: 'Temporizador de cuenta regresiva', description: 'Establecer una cuenta regresiva a cualquier hora' },
      'stoppur': { name: 'Cronómetro', description: 'Medir tiempo con vueltas y parciales' },
      'anteckningsblock': { name: 'Bloc de notas', description: 'Notas rápidas guardadas en tu navegador' },
      'slumpmassigt-val': { name: 'Selector aleatorio', description: 'Deja que el azar decida — listas, ruletas o monedas' },
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
    allCategories: 'Toutes les catégories',
    categories: {
      bild: 'Image et Médias',
      text: 'Texte et Documents',
      ljud: 'Audio et Parole',
      kod: 'Code et Données',
      natverk: 'Réseau et Sécurité',
      berakning: 'Calcul et Conversion',
      produktivitet: 'Productivité et Outils',
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
    calculator: {
      error: 'Erreur',
    },
    percentCalc: {
      modeOf: 'X% de Y',
      modeIs: 'X est ?% de Y',
      modeChange: '% de variation',
      percent: 'Pourcentage',
      value: 'Valeur',
      total: 'Total',
      from: 'De',
      to: 'À',
      result: 'Résultat',
    },
    randomNumber: {
      min: 'Min',
      max: 'Max',
      count: 'Nombre',
      generate: 'Générer',
      copy: 'Copier',
      copied: 'Copié !',
    },
    stopwatch: {
      start: 'Démarrer',
      stop: 'Arrêter',
      reset: 'Réinitialiser',
      lap: 'Tour',
      laps: 'Tours',
    },
    countdown: {
      hours: 'Heures',
      minutes: 'Min',
      seconds: 'Sec',
      start: 'Démarrer',
      pause: 'Pause',
      resume: 'Reprendre',
      reset: 'Réinitialiser',
      finished: 'Le temps est écoulé !',
    },
    pomodoro: {
      work: 'Travail',
      break: 'Pause',
      start: 'Démarrer',
      pause: 'Pause',
      reset: 'Réinitialiser',
      sessions: 'Sessions',
    },
    notepad: {
      placeholder: 'Écrivez vos notes ici...',
      words: 'Mots',
      characters: 'Caractères',
      clear: 'Effacer',
      autoSaved: 'Sauvegardé automatiquement dans le navigateur',
    },
    randomPicker: {
      listMode: 'Liste',
      coinFlip: 'Pile ou face',
      placeholder: 'Écrivez une option par ligne...',
      choose: 'Choisir',
      flip: 'Lancer',
      heads: 'Face',
      tails: 'Pile',
    },
    loremIpsum: {
      paragraphs: 'Paragraphes',
      sentences: 'Phrases',
      words: 'Mots',
      count: 'Nombre',
      generate: 'Générer',
      copy: 'Copier',
      copied: 'Copié !',
    },
    metronome: {
      start: 'Démarrer',
      stop: 'Arrêter',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Navigateur',
      os: 'Système d\'exploitation',
      device: 'Type d\'appareil',
      platform: 'Plateforme',
      language: 'Langue',
      screen: 'Résolution d\'écran',
      window: 'Taille de la fenêtre',
      colorDepth: 'Profondeur de couleur',
      pixelRatio: 'Ratio de pixels',
      touch: 'Écran tactile',
      cores: 'Cœurs CPU',
      cookies: 'Cookies',
      onlineStatus: 'En ligne',
      copy: 'Copier',
      copied: 'Copié !',
      yes: 'Oui',
      no: 'Non',
    },
    jwtDecoder: {
      input: 'Token JWT',
      placeholder: 'Collez un token JWT ici...',
      invalid: 'Token JWT invalide',
      signature: 'Signature',
      issuedAt: 'Émis le',
      expires: 'Expire',
      notBefore: 'Pas avant',
    },
    cronParser: {
      expression: 'Expression cron',
      meaning: 'Signification',
      examples: 'Exemples',
      minute: 'Minute',
      hour: 'Heure',
      dayOfMonth: 'Jour du mois',
      month: 'Mois',
      dayOfWeek: 'Jour de la semaine',
      every: 'Chaque',
      at: 'À',
      minuteLabel: 'minute',
      minutesLabel: 'minutes',
      hourLabel: 'heure',
      hoursLabel: 'heures',
      dayLabel: 'jour',
      on: 'le',
      inMonth: 'en',
      onDay: 'le',
    },
    csvJson: {
      input: 'Entrée',
      output: 'Résultat',
      convert: 'Convertir',
      copy: 'Copier',
      copied: 'Copié !',
      error: 'Erreur de conversion — vérifiez les données',
      csvPlaceholder: 'nom,age,ville\nAnna,28,Stockholm',
      jsonPlaceholder: '[{"nom":"Anna","age":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Modifié',
      placeholderA: 'Collez le texte original...',
      placeholderB: 'Collez le texte modifié...',
      compare: 'Comparer',
      linesAdded: 'ajoutées',
      linesRemoved: 'supprimées',
    },
    whiteNoise: {
      white: 'Bruit blanc',
      pink: 'Bruit rose',
      brown: 'Bruit brun',
      volume: 'Volume',
      play: 'Jouer',
      stop: 'Arrêter',
    },
    pitchDetector: {
      start: 'Démarrer',
      stop: 'Arrêter',
      detecting: 'Écoute en cours...',
      pressStart: 'Appuyez pour commencer',
      notSupported: 'Microphone non pris en charge dans ce navigateur',
    },
    codeMinifier: {
      placeholder: 'Collez du code ici...',
      minify: 'Minifier',
      copy: 'Copier',
      copied: 'Copié !',
      saved: 'Économisé',
    },
    cssGradient: {
      linear: 'Linéaire',
      radial: 'Radial',
      angle: 'Angle',
      colors: 'Couleurs',
      addColor: 'Ajouter',
      presets: 'Préréglages',
    },
    asciiArt: {
      upload: 'Cliquez ou glissez une image ici',
      widthLabel: 'Largeur',
      standard: 'Standard',
      detailed: 'Détaillé',
      blocks: 'Blocs',
      copy: 'Copier',
      copied: 'Copié !',
    },
    dnsLookup: {
      domainLabel: 'Nom de domaine',
      typeLabel: 'Type d\'enregistrement',
      lookup: 'Rechercher',
      looking: 'Recherche...',
      results: 'Résultats',
      noResults: 'Aucun enregistrement trouvé',
      noRecords: 'Aucun enregistrement trouvé',
      error: 'Impossible de rechercher le domaine',
      placeholder: 'example.com',
      search: 'Rechercher',
      loading: 'Recherche...',
    },
    sslCheck: {
      domainLabel: 'Nom de domaine',
      check: 'Vérifier',
      checking: 'Vérification...',
      valid: 'Le certificat SSL est valide',
      invalid: 'Le certificat SSL n\'est pas valide',
      issuer: 'Émetteur',
      expires: 'Expire',
      error: 'Impossible de vérifier SSL',
      placeholder: 'example.com',
      loading: 'Vérification...',
      unknownIssuer: 'Inconnu (restriction CORS)',
      daysLeft: 'jours restants',
      subject: 'Domaine',
      validFrom: 'Valide à partir du',
      validTo: 'Valide jusqu\'au',
      protocol: 'Protocole',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Récupérer',
      fetching: 'Récupération...',
      headers: 'Headers',
      error: 'Impossible de récupérer les headers',
      placeholder: 'https://example.com',
      loading: 'Récupération...',
      copied: 'Copié !',
      copyAll: 'Tout copier',
    },
    faviconGenerator: {
      upload: 'Cliquez ou glissez une image ici',
      downloadIco: 'Télécharger favicon.ico',
    },
    imageCropper: {
      upload: 'Cliquez ou glissez une image ici',
      free: 'Libre',
      crop: 'Rogner',
      newImage: 'Nouvelle image',
      download: 'Télécharger',
    },
    imageCollage: {
      gap: 'Espacement',
      images: 'images',
      generate: 'Créer collage',
      download: 'Télécharger',
    },
    pixelCounter: {
      upload: 'Cliquez ou glissez une image ici',
      dimensions: 'Dimensions',
      totalPixels: 'Total',
      distance: 'Distance',
      newImage: 'Nouvelle image',
    },
    cutFileGenerator: {
      upload: 'Cliquez ou glissez une image ici',
      threshold: 'Seuil',
      offset: 'Décalage (px)',
      generate: 'Générer fichier de découpe',
      downloadSvg: 'Télécharger SVG',
    },
    pdfTools: {
      upload: 'Cliquez ou glissez des fichiers PDF ici',
      files: 'fichiers',
      merge: 'Fusionner les fichiers PDF',
      merging: 'Fusion...',
      download: 'Télécharger le PDF fusionné',
    },
    ocrTool: {
      upload: 'Cliquez ou glissez une image ici',
      extract: 'Extraire le texte',
      processing: 'Analyse...',
      result: 'Résultat',
      noText: 'Aucun texte n\'a pu être identifié. Essayez une image avec du texte sombre et clair sur fond clair.',
      copy: 'Copier',
      copied: 'Copié !',
    },
    backgroundRemover: {
      upload: 'Cliquez ou glissez une image ici',
      tolerance: 'Tolérance',
      remove: 'Supprimer l\'arrière-plan',
      processing: 'Traitement...',
      download: 'Télécharger PNG',
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
      'bildbeskärare': { name: 'Rogneur d\'images', description: 'Rogner des images à la taille et aux proportions souhaitées' },
      'bakgrundsborttagare': { name: 'Suppression d\'arrière-plan', description: 'Supprimer automatiquement l\'arrière-plan des images' },
      'favicon-generator': { name: 'Générateur de favicon', description: 'Créer des favicons pour sites web à partir de n\'importe quelle image' },
      'bildkollage': { name: 'Collage d\'images', description: 'Combiner plusieurs images en un collage' },
      'pixelraknare': { name: 'Compteur de pixels', description: 'Compter les pixels et mesurer les distances dans les images' },
      'ascii-konst': { name: 'Art ASCII', description: 'Convertir des images en art de caractères ASCII' },
      'skarfilsgenerator': { name: 'Générateur de fichiers de découpe', description: 'Créer des fichiers de découpe pour la gravure laser — dessiner des lignes de découpe autour des images et exporter en SVG' },
      'diff-jamforare': { name: 'Comparateur Diff', description: 'Comparer deux textes et voir les différences surlignées' },
      'lorem-ipsum': { name: 'Lorem Ipsum', description: 'Générer du texte de remplissage Lorem Ipsum' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Convertir entre les formats CSV et JSON' },
      'pdf-verktyg': { name: 'Outils PDF', description: 'Fusionner, diviser et gérer des fichiers PDF' },
      'ocr': { name: 'OCR — Reconnaissance de texte', description: 'Extraire du texte des images par reconnaissance optique de caractères' },
      'metronom': { name: 'Métronome', description: 'Gardez le rythme avec un métronome numérique' },
      'tonhojdsmatare': { name: 'Détecteur de tonalité', description: 'Mesurer la tonalité et la fréquence via le microphone' },
      'vit-brus': { name: 'Bruit blanc', description: 'Jouer du bruit blanc et d\'autres sons ambiants pour la concentration' },
      'kodminifierare': { name: 'Minifieur de code', description: 'Minifier du code JavaScript, CSS et HTML' },
      'css-gradient': { name: 'Dégradé CSS', description: 'Créer des dégradés CSS visuellement avec aperçu en direct' },
      'cron-tolkare': { name: 'Interpréteur Cron', description: 'Interpréter et valider des expressions cron en texte clair' },
      'jwt-dekodare': { name: 'Décodeur JWT', description: 'Décoder et inspecter des JSON Web Tokens' },
      'dns-uppslagning': { name: 'Recherche DNS', description: 'Rechercher des enregistrements DNS pour des domaines' },
      'ssl-kontroll': { name: 'Vérification SSL', description: 'Vérifier les certificats SSL des sites web' },
      'http-headers': { name: 'En-têtes HTTP', description: 'Inspecter les en-têtes de réponse HTTP pour n\'importe quelle URL' },
      'useragent-info': { name: 'Info User Agent', description: 'Afficher des informations sur votre navigateur et appareil' },
      'miniraknare': { name: 'Calculatrice', description: 'Une calculatrice simple pour des calculs rapides' },
      'procent-raknare': { name: 'Calculatrice de pourcentages', description: 'Calculer des pourcentages, augmentations, diminutions et proportions' },
      'slumptalsgenerator': { name: 'Générateur de nombres aléatoires', description: 'Générer des nombres aléatoires dans n\'importe quel intervalle' },
      'pomodoro-timer': { name: 'Minuteur Pomodoro', description: 'Concentrez-vous avec la technique Pomodoro — 25 min de travail, 5 min de pause' },
      'nedrakningstimer': { name: 'Compte à rebours', description: 'Définir un compte à rebours jusqu\'à n\'importe quelle heure' },
      'stoppur': { name: 'Chronomètre', description: 'Mesurer le temps avec des tours et des temps intermédiaires' },
      'anteckningsblock': { name: 'Bloc-notes', description: 'Notes rapides sauvegardées dans votre navigateur' },
      'slumpmassigt-val': { name: 'Sélecteur aléatoire', description: 'Laissez le hasard décider — listes, roues ou pile ou face' },
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
    allCategories: 'Alle Kategorien',
    categories: {
      bild: 'Bild & Medien',
      text: 'Text & Dokumente',
      ljud: 'Audio & Sprache',
      kod: 'Code & Daten',
      natverk: 'Netzwerk & Sicherheit',
      berakning: 'Berechnung & Umrechnung',
      produktivitet: 'Produktivität & Werkzeuge',
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
    calculator: {
      error: 'Fehler',
    },
    percentCalc: {
      modeOf: 'X% von Y',
      modeIs: 'X ist ?% von Y',
      modeChange: '% Veränderung',
      percent: 'Prozent',
      value: 'Wert',
      total: 'Gesamt',
      from: 'Von',
      to: 'Bis',
      result: 'Ergebnis',
    },
    randomNumber: {
      min: 'Min',
      max: 'Max',
      count: 'Anzahl',
      generate: 'Generieren',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    stopwatch: {
      start: 'Start',
      stop: 'Stopp',
      reset: 'Zurücksetzen',
      lap: 'Runde',
      laps: 'Runden',
    },
    countdown: {
      hours: 'Std',
      minutes: 'Min',
      seconds: 'Sek',
      start: 'Starten',
      pause: 'Pause',
      resume: 'Fortsetzen',
      reset: 'Zurücksetzen',
      finished: 'Die Zeit ist um!',
    },
    pomodoro: {
      work: 'Arbeit',
      break: 'Pause',
      start: 'Starten',
      pause: 'Pause',
      reset: 'Zurücksetzen',
      sessions: 'Sitzungen',
    },
    notepad: {
      placeholder: 'Schreiben Sie Ihre Notizen hier...',
      words: 'Wörter',
      characters: 'Zeichen',
      clear: 'Löschen',
      autoSaved: 'Automatisch im Browser gespeichert',
    },
    randomPicker: {
      listMode: 'Liste',
      coinFlip: 'Münzwurf',
      placeholder: 'Schreiben Sie eine Option pro Zeile...',
      choose: 'Wählen',
      flip: 'Werfen',
      heads: 'Kopf',
      tails: 'Zahl',
    },
    loremIpsum: {
      paragraphs: 'Absätze',
      sentences: 'Sätze',
      words: 'Wörter',
      count: 'Anzahl',
      generate: 'Generieren',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    metronome: {
      start: 'Starten',
      stop: 'Stoppen',
      tapTempo: 'Tap Tempo',
    },
    userAgent: {
      browser: 'Browser',
      os: 'Betriebssystem',
      device: 'Gerätetyp',
      platform: 'Plattform',
      language: 'Sprache',
      screen: 'Bildschirmauflösung',
      window: 'Fenstergröße',
      colorDepth: 'Farbtiefe',
      pixelRatio: 'Pixelverhältnis',
      touch: 'Touchscreen',
      cores: 'CPU-Kerne',
      cookies: 'Cookies',
      onlineStatus: 'Online',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      yes: 'Ja',
      no: 'Nein',
    },
    jwtDecoder: {
      input: 'JWT-Token',
      placeholder: 'JWT-Token hier einfügen...',
      invalid: 'Ungültiges JWT-Token',
      signature: 'Signatur',
      issuedAt: 'Ausgestellt am',
      expires: 'Läuft ab',
      notBefore: 'Nicht vor',
    },
    cronParser: {
      expression: 'Cron-Ausdruck',
      meaning: 'Bedeutung',
      examples: 'Beispiele',
      minute: 'Minute',
      hour: 'Stunde',
      dayOfMonth: 'Tag des Monats',
      month: 'Monat',
      dayOfWeek: 'Wochentag',
      every: 'Jede',
      at: 'Um',
      minuteLabel: 'Minute',
      minutesLabel: 'Minuten',
      hourLabel: 'Stunde',
      hoursLabel: 'Stunden',
      dayLabel: 'Tag',
      on: 'am',
      inMonth: 'im',
      onDay: 'den',
    },
    csvJson: {
      input: 'Eingabe',
      output: 'Ergebnis',
      convert: 'Konvertieren',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      error: 'Konvertierungsfehler — Eingabe überprüfen',
      csvPlaceholder: 'Name,Alter,Stadt\nAnna,28,Stockholm',
      jsonPlaceholder: '[{"Name":"Anna","Alter":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Geändert',
      placeholderA: 'Originaltext einfügen...',
      placeholderB: 'Geänderten Text einfügen...',
      compare: 'Vergleichen',
      linesAdded: 'hinzugefügt',
      linesRemoved: 'entfernt',
    },
    whiteNoise: {
      white: 'Weißes Rauschen',
      pink: 'Rosa Rauschen',
      brown: 'Braunes Rauschen',
      volume: 'Lautstärke',
      play: 'Abspielen',
      stop: 'Stoppen',
    },
    pitchDetector: {
      start: 'Starten',
      stop: 'Stoppen',
      detecting: 'Hört zu...',
      pressStart: 'Drücken zum Starten',
      notSupported: 'Mikrofon wird in diesem Browser nicht unterstützt',
    },
    codeMinifier: {
      placeholder: 'Code hier einfügen...',
      minify: 'Minifizieren',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      saved: 'Gespart',
    },
    cssGradient: {
      linear: 'Linear',
      radial: 'Radial',
      angle: 'Winkel',
      colors: 'Farben',
      addColor: 'Hinzufügen',
      presets: 'Voreinstellungen',
    },
    asciiArt: {
      upload: 'Klicken oder Bild hierher ziehen',
      widthLabel: 'Breite',
      standard: 'Standard',
      detailed: 'Detailliert',
      blocks: 'Blöcke',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    dnsLookup: {
      domainLabel: 'Domainname',
      typeLabel: 'Eintragstyp',
      lookup: 'Nachschlagen',
      looking: 'Suche...',
      results: 'Ergebnisse',
      noResults: 'Keine Einträge gefunden',
      noRecords: 'Keine Einträge gefunden',
      error: 'Domain konnte nicht nachgeschlagen werden',
      placeholder: 'example.com',
      search: 'Suchen',
      loading: 'Suche...',
    },
    sslCheck: {
      domainLabel: 'Domainname',
      check: 'Prüfen',
      checking: 'Prüfe...',
      valid: 'SSL-Zertifikat ist gültig',
      invalid: 'SSL-Zertifikat ist ungültig',
      issuer: 'Aussteller',
      expires: 'Läuft ab',
      error: 'SSL konnte nicht geprüft werden',
      placeholder: 'example.com',
      loading: 'Prüfe...',
      unknownIssuer: 'Unbekannt (CORS-Einschränkung)',
      daysLeft: 'Tage verbleibend',
      subject: 'Domain',
      validFrom: 'Gültig ab',
      validTo: 'Gültig bis',
      protocol: 'Protokoll',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Abrufen',
      fetching: 'Abrufen...',
      headers: 'Headers',
      error: 'Headers konnten nicht abgerufen werden',
      placeholder: 'https://example.com',
      loading: 'Abrufen...',
      copied: 'Kopiert!',
      copyAll: 'Alle kopieren',
    },
    faviconGenerator: {
      upload: 'Klicken oder Bild hierher ziehen',
      downloadIco: 'Favicon.ico herunterladen',
    },
    imageCropper: {
      upload: 'Klicken oder Bild hierher ziehen',
      free: 'Frei',
      crop: 'Zuschneiden',
      newImage: 'Neues Bild',
      download: 'Herunterladen',
    },
    imageCollage: {
      gap: 'Abstand',
      images: 'Bilder',
      generate: 'Collage erstellen',
      download: 'Herunterladen',
    },
    pixelCounter: {
      upload: 'Klicken oder Bild hierher ziehen',
      dimensions: 'Abmessungen',
      totalPixels: 'Gesamt',
      distance: 'Abstand',
      newImage: 'Neues Bild',
    },
    cutFileGenerator: {
      upload: 'Klicken oder Bild hierher ziehen',
      threshold: 'Schwellenwert',
      offset: 'Versatz (px)',
      generate: 'Schnittdatei generieren',
      downloadSvg: 'SVG herunterladen',
    },
    pdfTools: {
      upload: 'Klicken oder PDF-Dateien hierher ziehen',
      files: 'Dateien',
      merge: 'PDF-Dateien zusammenführen',
      merging: 'Zusammenführen...',
      download: 'Zusammengeführte PDF herunterladen',
    },
    ocrTool: {
      upload: 'Klicken oder Bild hierher ziehen',
      extract: 'Text extrahieren',
      processing: 'Analysiere...',
      result: 'Ergebnis',
      noText: 'Kein Text konnte identifiziert werden. Versuchen Sie ein Bild mit deutlichem, dunklem Text auf hellem Hintergrund.',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    backgroundRemover: {
      upload: 'Klicken oder Bild hierher ziehen',
      tolerance: 'Toleranz',
      remove: 'Hintergrund entfernen',
      processing: 'Verarbeite...',
      download: 'PNG herunterladen',
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
      'bildbeskärare': { name: 'Bildzuschnitt', description: 'Bilder auf gewünschte Größe und Proportionen zuschneiden' },
      'bakgrundsborttagare': { name: 'Hintergrundentferner', description: 'Hintergründe automatisch aus Bildern entfernen' },
      'favicon-generator': { name: 'Favicon-Generator', description: 'Favicons für Websites aus beliebigen Bildern erstellen' },
      'bildkollage': { name: 'Bildcollage', description: 'Mehrere Bilder zu einer Collage kombinieren' },
      'pixelraknare': { name: 'Pixelzähler', description: 'Pixel zählen und Abstände in Bildern messen' },
      'ascii-konst': { name: 'ASCII-Kunst', description: 'Bilder in ASCII-Zeichenkunst umwandeln' },
      'skarfilsgenerator': { name: 'Schnittdatei-Generator', description: 'Schnittdateien für Lasergravur erstellen — Schnittlinien um Bilder zeichnen und als SVG exportieren' },
      'diff-jamforare': { name: 'Diff-Vergleicher', description: 'Zwei Texte vergleichen und Unterschiede hervorgehoben sehen' },
      'lorem-ipsum': { name: 'Lorem Ipsum', description: 'Lorem Ipsum-Platzhaltertext generieren' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Zwischen CSV- und JSON-Formaten konvertieren' },
      'pdf-verktyg': { name: 'PDF-Werkzeuge', description: 'PDF-Dateien zusammenführen, teilen und verwalten' },
      'ocr': { name: 'OCR — Texterkennung', description: 'Text aus Bildern mit optischer Zeichenerkennung extrahieren' },
      'metronom': { name: 'Metronom', description: 'Den Takt halten mit einem digitalen Metronom' },
      'tonhojdsmatare': { name: 'Tonhöhenmesser', description: 'Tonhöhe und Frequenz über das Mikrofon messen' },
      'vit-brus': { name: 'Weißes Rauschen', description: 'Weißes Rauschen und andere Hintergrundgeräusche zur Konzentration abspielen' },
      'kodminifierare': { name: 'Code-Minifizierer', description: 'JavaScript, CSS und HTML-Code minifizieren' },
      'css-gradient': { name: 'CSS-Gradient', description: 'CSS-Gradienten visuell mit Live-Vorschau erstellen' },
      'cron-tolkare': { name: 'Cron-Interpreter', description: 'Cron-Ausdrücke in Klartext interpretieren und validieren' },
      'jwt-dekodare': { name: 'JWT-Decoder', description: 'JSON Web Tokens dekodieren und inspizieren' },
      'dns-uppslagning': { name: 'DNS-Abfrage', description: 'DNS-Einträge für Domains nachschlagen' },
      'ssl-kontroll': { name: 'SSL-Prüfung', description: 'SSL-Zertifikate von Websites überprüfen' },
      'http-headers': { name: 'HTTP-Header', description: 'HTTP-Antwort-Header für beliebige URLs inspizieren' },
      'useragent-info': { name: 'User-Agent-Info', description: 'Informationen über Ihren Browser und Ihr Gerät anzeigen' },
      'miniraknare': { name: 'Taschenrechner', description: 'Ein einfacher Taschenrechner für schnelle Berechnungen' },
      'procent-raknare': { name: 'Prozentrechner', description: 'Prozentsätze, Zunahmen, Abnahmen und Verhältnisse berechnen' },
      'slumptalsgenerator': { name: 'Zufallszahlengenerator', description: 'Zufallszahlen in beliebigem Bereich generieren' },
      'pomodoro-timer': { name: 'Pomodoro-Timer', description: 'Fokussieren mit der Pomodoro-Technik — 25 Min Arbeit, 5 Min Pause' },
      'nedrakningstimer': { name: 'Countdown-Timer', description: 'Einen Countdown auf beliebige Zeit einstellen' },
      'stoppur': { name: 'Stoppuhr', description: 'Zeit mit Runden und Zwischenzeiten messen' },
      'anteckningsblock': { name: 'Notizblock', description: 'Schnelle Notizen im Browser gespeichert' },
      'slumpmassigt-val': { name: 'Zufallsauswahl', description: 'Lassen Sie den Zufall entscheiden — Listen, Räder oder Münzwurf' },
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
    allCategories: 'Todas as categorias',
    categories: {
      bild: 'Imagem e Midia',
      text: 'Texto e Documentos',
      ljud: 'Audio e Fala',
      kod: 'Codigo e Dados',
      natverk: 'Rede e Seguranca',
      berakning: 'Calculo e Conversao',
      produktivitet: 'Produtividade e Ferramentas',
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
    calculator: {
      error: 'Erro',
    },
    percentCalc: {
      modeOf: 'X% de Y',
      modeIs: 'X é ?% de Y',
      modeChange: '% de mudança',
      percent: 'Porcentagem',
      value: 'Valor',
      total: 'Total',
      from: 'De',
      to: 'Para',
      result: 'Resultado',
    },
    randomNumber: {
      min: 'Min',
      max: 'Max',
      count: 'Quantidade',
      generate: 'Gerar',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    stopwatch: {
      start: 'Iniciar',
      stop: 'Parar',
      reset: 'Reiniciar',
      lap: 'Volta',
      laps: 'Voltas',
    },
    countdown: {
      hours: 'Horas',
      minutes: 'Min',
      seconds: 'Seg',
      start: 'Iniciar',
      pause: 'Pausa',
      resume: 'Continuar',
      reset: 'Reiniciar',
      finished: 'O tempo acabou!',
    },
    pomodoro: {
      work: 'Trabalho',
      break: 'Pausa',
      start: 'Iniciar',
      pause: 'Pausa',
      reset: 'Reiniciar',
      sessions: 'Sessões',
    },
    notepad: {
      placeholder: 'Escreva suas notas aqui...',
      words: 'Palavras',
      characters: 'Caracteres',
      clear: 'Limpar',
      autoSaved: 'Salvo automaticamente no navegador',
    },
    randomPicker: {
      listMode: 'Lista',
      coinFlip: 'Cara ou coroa',
      placeholder: 'Escreva uma opção por linha...',
      choose: 'Escolher',
      flip: 'Lançar',
      heads: 'Cara',
      tails: 'Coroa',
    },
    loremIpsum: {
      paragraphs: 'Parágrafos',
      sentences: 'Frases',
      words: 'Palavras',
      count: 'Quantidade',
      generate: 'Gerar',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    metronome: {
      start: 'Iniciar',
      stop: 'Parar',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Navegador',
      os: 'Sistema operacional',
      device: 'Tipo de dispositivo',
      platform: 'Plataforma',
      language: 'Idioma',
      screen: 'Resolução da tela',
      window: 'Tamanho da janela',
      colorDepth: 'Profundidade de cor',
      pixelRatio: 'Proporção de pixels',
      touch: 'Tela sensível ao toque',
      cores: 'Núcleos de CPU',
      cookies: 'Cookies',
      onlineStatus: 'Online',
      copy: 'Copiar',
      copied: 'Copiado!',
      yes: 'Sim',
      no: 'Não',
    },
    jwtDecoder: {
      input: 'Token JWT',
      placeholder: 'Cole um token JWT aqui...',
      invalid: 'Token JWT inválido',
      signature: 'Assinatura',
      issuedAt: 'Emitido em',
      expires: 'Expira',
      notBefore: 'Não antes de',
    },
    cronParser: {
      expression: 'Expressão cron',
      meaning: 'Significado',
      examples: 'Exemplos',
      minute: 'Minuto',
      hour: 'Hora',
      dayOfMonth: 'Dia do mês',
      month: 'Mês',
      dayOfWeek: 'Dia da semana',
      every: 'Cada',
      at: 'Às',
      minuteLabel: 'minuto',
      minutesLabel: 'minutos',
      hourLabel: 'hora',
      hoursLabel: 'horas',
      dayLabel: 'dia',
      on: 'no',
      inMonth: 'em',
      onDay: 'o',
    },
    csvJson: {
      input: 'Entrada',
      output: 'Resultado',
      convert: 'Converter',
      copy: 'Copiar',
      copied: 'Copiado!',
      error: 'Erro de conversão — verifique os dados',
      csvPlaceholder: 'nome,idade,cidade\nAnna,28,Estocolmo',
      jsonPlaceholder: '[{"nome":"Anna","idade":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Modificado',
      placeholderA: 'Cole o texto original...',
      placeholderB: 'Cole o texto modificado...',
      compare: 'Comparar',
      linesAdded: 'adicionadas',
      linesRemoved: 'removidas',
    },
    whiteNoise: {
      white: 'Ruído branco',
      pink: 'Ruído rosa',
      brown: 'Ruído marrom',
      volume: 'Volume',
      play: 'Reproduzir',
      stop: 'Parar',
    },
    pitchDetector: {
      start: 'Iniciar',
      stop: 'Parar',
      detecting: 'Ouvindo...',
      pressStart: 'Pressione para começar',
      notSupported: 'Microfone não suportado neste navegador',
    },
    codeMinifier: {
      placeholder: 'Cole código aqui...',
      minify: 'Minificar',
      copy: 'Copiar',
      copied: 'Copiado!',
      saved: 'Economizado',
    },
    cssGradient: {
      linear: 'Linear',
      radial: 'Radial',
      angle: 'Ângulo',
      colors: 'Cores',
      addColor: 'Adicionar',
      presets: 'Predefinições',
    },
    asciiArt: {
      upload: 'Clique ou arraste uma imagem aqui',
      widthLabel: 'Largura',
      standard: 'Padrão',
      detailed: 'Detalhado',
      blocks: 'Blocos',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    dnsLookup: {
      domainLabel: 'Nome de domínio',
      typeLabel: 'Tipo de registro',
      lookup: 'Pesquisar',
      looking: 'Pesquisando...',
      results: 'Resultados',
      noResults: 'Nenhum registro encontrado',
      noRecords: 'Nenhum registro encontrado',
      error: 'Não foi possível pesquisar o domínio',
      placeholder: 'example.com',
      search: 'Pesquisar',
      loading: 'Pesquisando...',
    },
    sslCheck: {
      domainLabel: 'Nome de domínio',
      check: 'Verificar',
      checking: 'Verificando...',
      valid: 'O certificado SSL é válido',
      invalid: 'O certificado SSL não é válido',
      issuer: 'Emissor',
      expires: 'Expira',
      error: 'Não foi possível verificar SSL',
      placeholder: 'example.com',
      loading: 'Verificando...',
      unknownIssuer: 'Desconhecido (restrição CORS)',
      daysLeft: 'dias restantes',
      subject: 'Domínio',
      validFrom: 'Válido desde',
      validTo: 'Válido até',
      protocol: 'Protocolo',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Buscar',
      fetching: 'Buscando...',
      headers: 'Headers',
      error: 'Não foi possível buscar os headers',
      placeholder: 'https://example.com',
      loading: 'Buscando...',
      copied: 'Copiado!',
      copyAll: 'Copiar tudo',
    },
    faviconGenerator: {
      upload: 'Clique ou arraste uma imagem aqui',
      downloadIco: 'Baixar favicon.ico',
    },
    imageCropper: {
      upload: 'Clique ou arraste uma imagem aqui',
      free: 'Livre',
      crop: 'Recortar',
      newImage: 'Nova imagem',
      download: 'Baixar',
    },
    imageCollage: {
      gap: 'Espaçamento',
      images: 'imagens',
      generate: 'Criar colagem',
      download: 'Baixar',
    },
    pixelCounter: {
      upload: 'Clique ou arraste uma imagem aqui',
      dimensions: 'Dimensões',
      totalPixels: 'Total',
      distance: 'Distância',
      newImage: 'Nova imagem',
    },
    cutFileGenerator: {
      upload: 'Clique ou arraste uma imagem aqui',
      threshold: 'Limiar',
      offset: 'Deslocamento (px)',
      generate: 'Gerar arquivo de corte',
      downloadSvg: 'Baixar SVG',
    },
    pdfTools: {
      upload: 'Clique ou arraste arquivos PDF aqui',
      files: 'arquivos',
      merge: 'Mesclar arquivos PDF',
      merging: 'Mesclando...',
      download: 'Baixar PDF mesclado',
    },
    ocrTool: {
      upload: 'Clique ou arraste uma imagem aqui',
      extract: 'Extrair texto',
      processing: 'Analisando...',
      result: 'Resultado',
      noText: 'Nenhum texto pôde ser identificado. Tente uma imagem com texto escuro e claro em fundo claro.',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    backgroundRemover: {
      upload: 'Clique ou arraste uma imagem aqui',
      tolerance: 'Tolerância',
      remove: 'Remover fundo',
      processing: 'Processando...',
      download: 'Baixar PNG',
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
      'bildbeskärare': { name: 'Recortador de imagens', description: 'Recortar imagens no tamanho e proporção desejados' },
      'bakgrundsborttagare': { name: 'Removedor de fundo', description: 'Remover fundos de imagens automaticamente' },
      'favicon-generator': { name: 'Gerador de favicon', description: 'Criar favicons para sites a partir de qualquer imagem' },
      'bildkollage': { name: 'Colagem de imagens', description: 'Combinar várias imagens em uma colagem' },
      'pixelraknare': { name: 'Contador de pixels', description: 'Contar pixels e medir distâncias em imagens' },
      'ascii-konst': { name: 'Arte ASCII', description: 'Converter imagens em arte de caracteres ASCII' },
      'skarfilsgenerator': { name: 'Gerador de arquivo de corte', description: 'Criar arquivos de corte para gravação a laser — desenhar linhas de corte ao redor de imagens e exportar como SVG' },
      'diff-jamforare': { name: 'Comparador Diff', description: 'Comparar dois textos e ver as diferenças destacadas' },
      'lorem-ipsum': { name: 'Lorem Ipsum', description: 'Gerar texto de preenchimento Lorem Ipsum' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Converter entre formatos CSV e JSON' },
      'pdf-verktyg': { name: 'Ferramentas PDF', description: 'Mesclar, dividir e gerenciar arquivos PDF' },
      'ocr': { name: 'OCR — Reconhecimento de texto', description: 'Extrair texto de imagens com reconhecimento óptico de caracteres' },
      'metronom': { name: 'Metrônomo', description: 'Mantenha o ritmo com um metrônomo digital' },
      'tonhojdsmatare': { name: 'Detector de tom', description: 'Medir tom e frequência pelo microfone' },
      'vit-brus': { name: 'Ruído branco', description: 'Reproduzir ruído branco e outros sons ambientes para foco' },
      'kodminifierare': { name: 'Minificador de código', description: 'Minificar código JavaScript, CSS e HTML' },
      'css-gradient': { name: 'Gradiente CSS', description: 'Criar gradientes CSS visualmente com pré-visualização ao vivo' },
      'cron-tolkare': { name: 'Interpretador Cron', description: 'Interpretar e validar expressões cron em texto simples' },
      'jwt-dekodare': { name: 'Decodificador JWT', description: 'Decodificar e inspecionar JSON Web Tokens' },
      'dns-uppslagning': { name: 'Consulta DNS', description: 'Consultar registros DNS para domínios' },
      'ssl-kontroll': { name: 'Verificação SSL', description: 'Verificar certificados SSL de sites' },
      'http-headers': { name: 'Cabeçalhos HTTP', description: 'Inspecionar cabeçalhos de resposta HTTP para qualquer URL' },
      'useragent-info': { name: 'Info User Agent', description: 'Ver informações sobre seu navegador e dispositivo' },
      'miniraknare': { name: 'Calculadora', description: 'Uma calculadora simples para cálculos rápidos' },
      'procent-raknare': { name: 'Calculadora de porcentagem', description: 'Calcular porcentagens, aumentos, diminuições e proporções' },
      'slumptalsgenerator': { name: 'Gerador de números aleatórios', description: 'Gerar números aleatórios em qualquer intervalo' },
      'pomodoro-timer': { name: 'Temporizador Pomodoro', description: 'Concentre-se com a técnica Pomodoro — 25 min trabalho, 5 min pausa' },
      'nedrakningstimer': { name: 'Temporizador regressivo', description: 'Definir uma contagem regressiva para qualquer hora' },
      'stoppur': { name: 'Cronômetro', description: 'Medir tempo com voltas e parciais' },
      'anteckningsblock': { name: 'Bloco de notas', description: 'Notas rápidas salvas no seu navegador' },
      'slumpmassigt-val': { name: 'Seletor aleatório', description: 'Deixe o acaso decidir — listas, roletas ou cara ou coroa' },
    },
  },
}
