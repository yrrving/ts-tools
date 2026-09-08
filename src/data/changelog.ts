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
    version: '0.26.1',
    date: '2026-09-08',
    title: {
      sv: 'TrainCells: fokusläge för iPad och kiosk',
      en: 'TrainCells: focus mode for iPad and kiosks',
      es: 'TrainCells: modo enfoque para iPad y quioscos',
      fr: 'TrainCells : mode focus pour iPad et bornes',
      de: 'TrainCells: Fokusmodus für iPad und Kiosk',
      pt: 'TrainCells: modo de foco para iPad e quiosques',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Ny knapp "Fokusläge" på TrainCells-sidan som lämnar ByteBox helt och visar bara TrainCells på sin egen webbadress — ingen ByteBox-ram kvar bakom. Tänkt för en iPad i skärmlåst kioskläge, eller för barn som annars kan tycka det är rörigt med en hel hemsida runt själva verktyget.',
          en: 'New "Focus mode" button on the TrainCells page that leaves ByteBox entirely and shows only TrainCells at its own web address — no ByteBox frame left behind it. Meant for an iPad in locked kiosk mode, or for kids who might otherwise find a whole website around the tool distracting.',
          es: 'Nuevo botón "Modo enfoque" en la página de TrainCells que abandona ByteBox por completo y muestra solo TrainCells en su propia dirección web — sin el marco de ByteBox detrás. Pensado para un iPad en modo quiosco bloqueado, o para niños a quienes un sitio web entero alrededor de la herramienta les puede resultar confuso.',
          fr: 'Nouveau bouton « Mode focus » sur la page TrainCells qui quitte entièrement ByteBox et n\'affiche que TrainCells à sa propre adresse web — plus aucun cadre ByteBox derrière. Pensé pour un iPad en mode borne verrouillé, ou pour les enfants que tout un site web autour de l\'outil pourrait distraire.',
          de: 'Neuer „Fokusmodus"-Button auf der TrainCells-Seite, der ByteBox komplett verlässt und nur TrainCells unter seiner eigenen Webadresse zeigt — kein ByteBox-Rahmen mehr dahinter. Gedacht für ein iPad im gesperrten Kioskmodus oder für Kinder, die eine ganze Website rund um das Werkzeug sonst ablenkend finden könnten.',
          pt: 'Novo botão "Modo de foco" na página do TrainCells que sai completamente do ByteBox e mostra apenas o TrainCells no seu próprio endereço web — sem a moldura do ByteBox por trás. Pensado para um iPad em modo quiosque bloqueado, ou para crianças que possam achar todo um site à volta da ferramenta uma distração.',
        },
      },
    ],
  },
  {
    version: '0.26.0',
    date: '2026-09-07',
    title: {
      sv: 'TrainCells: nybörjarläge med steg-för-steg-guidning',
      en: 'TrainCells: beginner mode with step-by-step guidance',
      es: 'TrainCells: modo principiante con guía paso a paso',
      fr: 'TrainCells : mode débutant avec guidage pas à pas',
      de: 'TrainCells: Anfängermodus mit Schritt-für-Schritt-Anleitung',
      pt: 'TrainCells: modo iniciante com orientação passo a passo',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Efter feedback om att TrainCells var svårt att komma igång med som nybörjare finns nu tre tydliga lägen att välja mellan på startsidan. "Blankt läge" (det gamla enda läget) för den som vill bygga helt fritt. "Handlett läge" (nytt) börjar i ett färdigt, spelbart exempelspel — testa det direkt, sen guidas du genom att ändra figurens färg, byta en bricka och lägga till en stjärna på banan, med tydliga pilar som visar exakt vad du ska klicka på och en knapp som visar var du testar din ändring. "Super handlett läge" (nytt) guidar dig genom att bygga ett helt spel från grunden, steg för steg: rita din figur, bygg golvet, välj att lägga till mynt eller en fiende (eller båda) — aldrig utan vägledning, men i din egen takt.',
          en: 'After feedback that TrainCells was hard to get started with as a beginner, the home screen now offers three clear modes. "Blank mode" (the old single mode) for building completely freely. "Guided mode" (new) starts you in a finished, playable example game — try it right away, then get guided through changing the character\'s color, changing a tile, and adding a star to the level, with clear arrows showing exactly what to click and a button showing where to test your change. "Super guided mode" (new) walks you through building an entire game from scratch, step by step: draw your character, build the floor, choose to add coins or an enemy (or both) — never without guidance, but at your own pace.',
          es: 'Tras recibir comentarios de que era difícil empezar con TrainCells siendo principiante, la pantalla de inicio ofrece ahora tres modos claros. "Modo en blanco" (el único modo anterior) para construir con total libertad. "Modo guiado" (nuevo) te sitúa en un juego de ejemplo ya terminado y jugable — pruébalo enseguida y luego te guían para cambiar el color del personaje, cambiar una ficha y añadir una estrella al nivel, con flechas claras que muestran exactamente dónde hacer clic y un botón que indica dónde probar tu cambio. "Modo súper guiado" (nuevo) te acompaña para construir un juego completo desde cero, paso a paso: dibuja tu personaje, construye el suelo, elige añadir monedas o un enemigo (o ambos) — nunca sin guía, pero a tu propio ritmo.',
          fr: 'Suite à des retours indiquant qu\'il était difficile de démarrer avec TrainCells en tant que débutant, l\'écran d\'accueil propose désormais trois modes clairs. Le « mode vierge » (l\'ancien mode unique) pour construire en toute liberté. Le « mode guidé » (nouveau) vous place dans un jeu d\'exemple déjà terminé et jouable — testez-le immédiatement, puis on vous guide pour changer la couleur du personnage, modifier une tuile et ajouter une étoile au niveau, avec des flèches claires montrant exactement où cliquer et un bouton indiquant où tester votre changement. Le « mode super guidé » (nouveau) vous accompagne pour construire un jeu entier depuis zéro, étape par étape : dessinez votre personnage, construisez le sol, choisissez d\'ajouter des pièces ou un ennemi (ou les deux) — jamais sans guidage, mais à votre propre rythme.',
          de: 'Nach Feedback, dass der Einstieg in TrainCells für Anfänger schwierig war, bietet der Startbildschirm jetzt drei klare Modi. „Leerer Modus" (der bisherige einzige Modus) zum völlig freien Bauen. „Angeleiteter Modus" (neu) startet in einem fertigen, spielbaren Beispielspiel — sofort ausprobieren, dann wirst du angeleitet, die Farbe der Figur zu ändern, eine Kachel zu ändern und einen Stern zur Bahn hinzuzufügen, mit klaren Pfeilen, die genau zeigen, worauf zu klicken ist, und einem Button, der zeigt, wo die Änderung getestet wird. „Super angeleiteter Modus" (neu) führt dich Schritt für Schritt durch den Bau eines ganzen Spiels von Grund auf: zeichne deine Figur, baue den Boden, entscheide dich für Münzen oder einen Gegner (oder beides) — nie ohne Anleitung, aber in deinem eigenen Tempo.',
          pt: 'Após feedback de que era difícil começar a usar o TrainCells como iniciante, o ecrã inicial oferece agora três modos claros. "Modo em branco" (o antigo modo único) para construir com total liberdade. "Modo guiado" (novo) coloca-te num jogo de exemplo já terminado e jogável — testa-o de imediato, depois és guiado para mudar a cor da personagem, mudar uma peça e adicionar uma estrela ao nível, com setas claras a mostrar exatamente onde clicar e um botão que mostra onde testar a tua alteração. "Modo super guiado" (novo) acompanha-te a construir um jogo completo do zero, passo a passo: desenha a tua personagem, constrói o chão, escolhe adicionar moedas ou um inimigo (ou ambos) — nunca sem orientação, mas ao teu próprio ritmo.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Sparade spel går nu att döpa om (✏️) direkt i listan, utöver att radera dem. Ett spel sparas heller aldrig längre i tysthet — du blir tillfrågad om du vill spara (och får döpa det) om du lämnar med osparade ändringar.',
          en: 'Saved games can now be renamed (✏️) right in the list, in addition to deleting them. A game is also never saved silently anymore — you\'re asked whether to save (and get to name it) if you leave with unsaved changes.',
          es: 'Ahora los juegos guardados se pueden renombrar (✏️) directamente en la lista, además de eliminarse. Tampoco se guarda nunca un juego en silencio — se te pregunta si quieres guardarlo (y puedes ponerle nombre) si sales con cambios sin guardar.',
          fr: 'Les jeux enregistrés peuvent désormais être renommés (✏️) directement dans la liste, en plus d\'être supprimés. Un jeu n\'est également plus jamais enregistré silencieusement — on vous demande si vous voulez l\'enregistrer (et vous pouvez le nommer) si vous quittez avec des modifications non enregistrées.',
          de: 'Gespeicherte Spiele lassen sich jetzt direkt in der Liste umbenennen (✏️), zusätzlich zum Löschen. Ein Spiel wird außerdem nie mehr stillschweigend gespeichert — du wirst gefragt, ob du speichern möchtest (und kannst es benennen), wenn du mit ungespeicherten Änderungen die Seite verlässt.',
          pt: 'Os jogos guardados agora podem ser renomeados (✏️) diretamente na lista, além de serem eliminados. Um jogo também nunca mais é guardado silenciosamente — é-te perguntado se queres guardar (e podes dar-lhe um nome) se saíres com alterações não guardadas.',
        },
      },
    ],
  },
  {
    version: '0.25.0',
    date: '2026-09-02',
    title: {
      sv: 'Mötestranskribering: tog bort Snabb-modellen (för dålig kvalitet)',
      en: 'Meeting Transcriber: removed the Fast model tier (quality too poor)',
      es: 'Transcriptor de reuniones: se eliminó el nivel Rápido (calidad insuficiente)',
      fr: 'Transcripteur de réunions : suppression du niveau Rapide (qualité insuffisante)',
      de: 'Besprechungs-Transkription: Stufe „Schnell" entfernt (zu schlechte Qualität)',
      pt: 'Transcritor de reuniões: nível Rápido removido (qualidade insuficiente)',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'whisper-tiny ("Snabb") gav ofta text som lät flytande men inte stämde med vad som sades — inte bara fel, utan rena påhitt. Tog bort den nivån helt. "Standard" (tidigare "Bättre", whisper-base) är nu golvet, och ett nytt "Stor"-alternativ (whisper-small, större nedladdning men klart bättre kvalitet) finns för svårare inspelningar.',
          en: 'whisper-tiny ("Fast") often produced fluent-sounding text that didn\'t match what was actually said — not just wrong, but invented. Removed that tier entirely. "Standard" (previously "Better", whisper-base) is now the floor, and a new "Large" option (whisper-small, bigger download but noticeably better quality) is available for harder recordings.',
          es: 'whisper-tiny ("Rápido") a menudo generaba texto que sonaba fluido pero no coincidía con lo dicho — no solo errores, sino invenciones. Se eliminó ese nivel por completo. "Estándar" (antes "Mejor", whisper-base) es ahora el mínimo, y hay una nueva opción "Grande" (whisper-small, descarga mayor pero calidad notablemente mejor) para grabaciones difíciles.',
          fr: 'whisper-tiny (« Rapide ») produisait souvent un texte à l\'apparence fluide mais qui ne correspondait pas à ce qui avait été dit — pas seulement des erreurs, mais de véritables inventions. Ce niveau a été entièrement supprimé. « Standard » (anciennement « Meilleure », whisper-base) est désormais le minimum, et une nouvelle option « Grand » (whisper-small, téléchargement plus lourd mais qualité nettement meilleure) est disponible pour les enregistrements difficiles.',
          de: 'whisper-tiny („Schnell") lieferte oft flüssig klingenden Text, der nicht dem Gesagten entsprach — nicht nur Fehler, sondern reine Erfindungen. Diese Stufe wurde komplett entfernt. „Standard" (vorher „Besser", whisper-base) ist jetzt die Untergrenze, und eine neue Option „Groß" (whisper-small, größerer Download, aber deutlich bessere Qualität) steht für schwierigere Aufnahmen zur Verfügung.',
          pt: 'O whisper-tiny ("Rápido") muitas vezes produzia texto que soava fluido mas não correspondia ao que foi dito — não só erros, mas invenções. Esse nível foi removido por completo. "Padrão" (antes "Melhor", whisper-base) é agora o mínimo, e uma nova opção "Grande" (whisper-small, download maior mas qualidade claramente melhor) está disponível para gravações difíceis.',
        },
      },
    ],
  },
  {
    version: '0.24.0',
    date: '2026-09-02',
    title: {
      sv: 'Mötestranskribering: mindre hallucination, flera filer på en gång',
      en: 'Meeting Transcriber: less hallucination, batch file upload',
      es: 'Transcriptor de reuniones: menos alucinaciones, varios archivos a la vez',
      fr: 'Transcripteur de réunions : moins d\'hallucinations, plusieurs fichiers à la fois',
      de: 'Besprechungs-Transkription: weniger Halluzination, mehrere Dateien auf einmal',
      pt: 'Transcritor de reuniões: menos alucinações, vários ficheiros de uma vez',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'Långa tysta partier i ljudet — vanligt vid mikrofoninspelning av digitala möten, eller bara tomgång i början/slutet av en inspelning — kunde få Whisper att både gissa fel språk och hitta på text som inte sades. Lade till en enkel tystnadstrimning som klipper bort sådana partier innan transkribering, med en notis när det händer.',
          en: 'Long silent stretches in the audio — common when a digital meeting is recorded via the microphone, or just dead air at the start/end of a recording — could make Whisper both guess the wrong language and invent text that was never said. Added a simple silence-trimming pass that cuts those stretches before transcribing, with a notice when it happens.',
          es: 'Los tramos largos de silencio en el audio — habituales al grabar una reunión digital con el micrófono, o simplemente aire muerto al principio/final de una grabación — podían hacer que Whisper adivinara mal el idioma e inventara texto que nunca se dijo. Se añadió un recorte de silencio sencillo que elimina esos tramos antes de transcribir, con un aviso cuando ocurre.',
          fr: 'De longs passages silencieux dans l\'audio — courants lorsqu\'une réunion en ligne est enregistrée via le micro, ou simplement un silence en début/fin d\'enregistrement — pouvaient amener Whisper à la fois à mal deviner la langue et à inventer du texte jamais prononcé. Ajout d\'un simple nettoyage des silences qui coupe ces passages avant la transcription, avec un avis quand cela se produit.',
          de: 'Lange stille Abschnitte im Audio — häufig bei Mikrofonaufnahmen digitaler Meetings oder einfach Totstille am Anfang/Ende einer Aufnahme — konnten dazu führen, dass Whisper sowohl die falsche Sprache erriet als auch nie gesagten Text erfand. Ein einfacher Stille-Trimm-Durchlauf wurde hinzugefügt, der solche Abschnitte vor der Transkription entfernt, mit einem Hinweis, wenn das passiert.',
          pt: 'Longos trechos de silêncio no áudio — comuns ao gravar uma reunião digital pelo microfone, ou apenas silêncio morto no início/fim de uma gravação — podiam fazer o Whisper adivinhar o idioma errado e inventar texto que nunca foi dito. Foi adicionado um corte simples de silêncio que remove esses trechos antes da transcrição, com um aviso quando isso acontece.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Språkvalet stod tidigare på "Upptäck automatiskt" som standard — det känner bara av språket en gång, från en kort ljudbit i början, och gissar det fel blir hela transkriptionen fel. Standardvärdet är nu sidans eget språk (fortfarande valbart till Auto), och en ny hint rekommenderar att ange språket direkt och välja Bättre-modellen för längre eller otydliga inspelningar.',
          en: 'The language picker used to default to "Auto-detect" — it only samples the language once, from a short stretch of audio at the start, and getting that guess wrong sends the whole transcript off in the wrong language. It now defaults to the site\'s own language (Auto is still selectable), and a new hint recommends setting the language directly and choosing the Better model for longer or unclear recordings.',
          es: 'El selector de idioma tenía como valor predeterminado "Detección automática" — solo detecta el idioma una vez, a partir de un breve tramo de audio al principio, y si acierta mal, toda la transcripción sale en el idioma equivocado. Ahora usa por defecto el idioma del propio sitio (Automático sigue siendo seleccionable), y una nueva sugerencia recomienda indicar el idioma directamente y elegir el modelo Mejor para grabaciones largas o poco claras.',
          fr: 'Le sélecteur de langue avait par défaut "Détection automatique" — il ne détecte la langue qu\'une fois, à partir d\'un court passage audio au début, et une erreur à ce moment-là fait basculer toute la transcription dans la mauvaise langue. Il utilise désormais par défaut la langue du site (Automatique reste sélectionnable), et une nouvelle astuce recommande d\'indiquer la langue directement et de choisir le modèle Meilleure pour les enregistrements longs ou peu clairs.',
          de: 'Die Sprachauswahl war standardmäßig auf "Automatisch erkennen" gesetzt — sie erkennt die Sprache nur einmal, anhand eines kurzen Audioausschnitts am Anfang, und ein Fehlgriff dabei schickt die gesamte Transkription in die falsche Sprache. Sie verwendet jetzt standardmäßig die Sprache der Seite selbst (Automatisch bleibt wählbar), und ein neuer Hinweis empfiehlt, die Sprache direkt anzugeben und für längere oder unklare Aufnahmen das Modell Besser zu wählen.',
          pt: 'O seletor de idioma tinha como padrão "Deteção automática" — só deteta o idioma uma vez, a partir de um breve trecho de áudio no início, e se essa suposição estiver errada, toda a transcrição sai no idioma errado. Agora usa por padrão o idioma do próprio site (Automático continua selecionável), e uma nova dica recomenda indicar o idioma diretamente e escolher o modelo Melhor para gravações longas ou pouco claras.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Går nu att välja flera ljudfiler i samma uppladdning — de köas och transkriberas en i taget, och läggs efter varandra i samma transkription (med filnamn som rubrik när det är fler än en fil).',
          en: 'You can now select several audio files in one upload — they\'re queued and transcribed one at a time, appended one after another into the same transcript (with the filename as a heading when there\'s more than one file).',
          es: 'Ahora puedes seleccionar varios archivos de audio en una sola subida — se ponen en cola y se transcriben uno a uno, añadiéndose uno tras otro en la misma transcripción (con el nombre del archivo como título cuando hay más de uno).',
          fr: 'Vous pouvez désormais sélectionner plusieurs fichiers audio en un seul import — ils sont mis en file d\'attente et transcrits un par un, ajoutés les uns après les autres dans la même transcription (avec le nom du fichier en titre s\'il y en a plusieurs).',
          de: 'Es lassen sich jetzt mehrere Audiodateien in einem Upload auswählen — sie werden nacheinander in eine Warteschlange gestellt und transkribiert und der gleichen Transkription hinzugefügt (mit dem Dateinamen als Überschrift, wenn es mehr als eine Datei gibt).',
          pt: 'Agora é possível selecionar vários ficheiros de áudio num único carregamento — são colocados em fila e transcritos um de cada vez, adicionados um a seguir ao outro na mesma transcrição (com o nome do ficheiro como título quando há mais do que um).',
        },
      },
    ],
  },
  {
    version: '0.23.1',
    date: '2026-08-27',
    title: {
      sv: 'Fyll i PDF: kräver ett extra klick innan ny skrivruta',
      en: 'Fill in PDF: requires an extra click before a new text box',
      es: 'Rellenar PDF: requiere un clic adicional antes de un cuadro nuevo',
      fr: 'Remplir un PDF : un clic supplémentaire est requis avant une nouvelle zone',
      de: 'PDF ausfüllen: erfordert einen zusätzlichen Klick vor einem neuen Feld',
      pt: 'Preencher PDF: exige um clique extra antes de uma nova caixa',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'Att klicka utanför en aktiv skrivruta skapade direkt en ny ruta på den platsen, vilket kändes för känsligt. Nu avmarkerar/committar det första klicket utanför bara den aktiva rutan — ett andra klick, med inget valt, placerar nästa ruta.',
          en: 'Clicking outside an active text box immediately created a new box at that spot, which felt too sensitive. Now the first click outside just deselects/commits the active box — a second click, with nothing selected, places the next box.',
          es: 'Hacer clic fuera de un cuadro de texto activo creaba de inmediato uno nuevo en ese lugar, lo cual resultaba demasiado sensible. Ahora el primer clic fuera solo deselecciona/confirma el cuadro activo — un segundo clic, sin nada seleccionado, coloca el siguiente cuadro.',
          fr: 'Cliquer en dehors d\'une zone de texte active créait immédiatement une nouvelle zone à cet endroit, ce qui était trop sensible. Désormais, le premier clic à l\'extérieur ne fait que désélectionner/valider la zone active — un second clic, sans rien de sélectionné, place la zone suivante.',
          de: 'Ein Klick außerhalb eines aktiven Textfelds erstellte sofort ein neues Feld an dieser Stelle, was zu empfindlich wirkte. Jetzt hebt der erste Klick außerhalb nur die Auswahl des aktiven Felds auf/bestätigt es — ein zweiter Klick, wenn nichts ausgewählt ist, platziert das nächste Feld.',
          pt: 'Clicar fora de uma caixa de texto ativa criava imediatamente uma nova caixa nesse local, o que parecia demasiado sensível. Agora o primeiro clique fora apenas desmarca/confirma a caixa ativa — um segundo clique, sem nada selecionado, coloca a próxima caixa.',
        },
      },
    ],
  },
  {
    version: '0.23.0',
    date: '2026-08-27',
    title: {
      sv: 'Nytt verktyg: Fyll i PDF',
      en: 'New tool: Fill in PDF',
      es: 'Nueva herramienta: Rellenar PDF',
      fr: 'Nouvel outil : Remplir un PDF',
      de: 'Neues Werkzeug: PDF ausfüllen',
      pt: 'Nova ferramenta: Preencher PDF',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'För PDF-blanketter som saknar ifyllnadsbara fält — klicka var som helst på dokumentet för att lägga till en textruta, dra den dit texten ska, justera storlek och fet stil, och spara som en ny PDF. Sidorna renderas med pdf.js direkt i webbläsaren; allt sker lokalt och originalfilen skrivs aldrig över. Kräver dator (exakt klickning och dragning).',
          en: 'For PDF forms without fillable fields — click anywhere on the document to add a text box, drag it where the text belongs, adjust size and boldness, then save as a new PDF. Pages are rendered with pdf.js right in the browser; everything happens locally and the original file is never overwritten. Requires a computer (needs precise clicking and dragging).',
          es: 'Para formularios PDF sin campos rellenables — haz clic en cualquier parte del documento para añadir un cuadro de texto, arrástralo hasta donde debe ir, ajusta el tamaño y la negrita, y guarda como un PDF nuevo. Las páginas se renderizan con pdf.js directamente en el navegador; todo ocurre localmente y el archivo original nunca se sobrescribe. Requiere un ordenador (clics y arrastres precisos).',
          fr: 'Pour les formulaires PDF sans champs remplissables — cliquez n\'importe où sur le document pour ajouter une zone de texte, faites-la glisser à l\'endroit voulu, ajustez la taille et le gras, puis enregistrez comme un nouveau PDF. Les pages sont rendues avec pdf.js directement dans le navigateur ; tout se passe en local et le fichier original n\'est jamais écrasé. Nécessite un ordinateur (clics et glissés précis).',
          de: 'Für PDF-Formulare ohne ausfüllbare Felder — klicke irgendwo auf das Dokument, um ein Textfeld hinzuzufügen, ziehe es an die richtige Stelle, passe Größe und Fettdruck an und speichere als neue PDF. Die Seiten werden mit pdf.js direkt im Browser gerendert; alles geschieht lokal, die Originaldatei wird nie überschrieben. Erfordert einen Computer (präzises Klicken und Ziehen).',
          pt: 'Para formulários PDF sem campos preenchíveis — clique em qualquer lugar do documento para adicionar uma caixa de texto, arraste-a até ao lugar certo, ajuste o tamanho e o negrito, e guarde como um novo PDF. As páginas são renderizadas com pdf.js diretamente no navegador; tudo acontece localmente e o ficheiro original nunca é substituído. Requer um computador (é necessário clicar e arrastar com precisão).',
        },
      },
    ],
  },
  {
    version: '0.22.1',
    date: '2026-08-24',
    title: {
      sv: 'Mötestranskribering: städar upprepningar, tydligare scenarier',
      en: 'Meeting Transcriber: cleans up repetition, clearer scenarios',
      es: 'Transcriptor de reuniones: limpia repeticiones, escenarios más claros',
      fr: 'Transcripteur de réunions : nettoie les répétitions, scénarios plus clairs',
      de: 'Besprechungs-Transkription: bereinigt Wiederholungen, klarere Szenarien',
      pt: 'Transcritor de reuniões: limpa repetições, cenários mais claros',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'Whisper kunde på tysta eller svårhörbara partier fastna och upprepa samma ord eller fras hundratals gånger — vanligast vid mikrofoninspelning av digitala möten, där mikrofonen bara hör din egen röst. Lade till skydd i transkriberingsanropet plus en efterstädning som upptäcker och tar bort kvarvarande upprepningar, med en notis när det händer.',
          en: 'Whisper could get stuck on quiet or hard-to-hear stretches and repeat the same word or phrase hundreds of times — most common when recording a digital meeting via the microphone, which only hears your own voice. Added a safeguard to the transcription call plus a cleanup pass that detects and removes remaining repetition, with a notice when it happens.',
          es: 'Whisper podía quedarse atascado en tramos silenciosos o difíciles de oír y repetir la misma palabra o frase cientos de veces — lo más común al grabar una reunión digital con el micrófono, que solo capta tu propia voz. Se añadió una protección en la llamada de transcripción y una limpieza que detecta y elimina las repeticiones restantes, con un aviso cuando ocurre.',
          fr: 'Whisper pouvait se bloquer sur des passages silencieux ou difficiles à entendre et répéter le même mot ou la même phrase des centaines de fois — surtout lors de l\'enregistrement d\'une réunion en ligne via le micro, qui ne capte que votre propre voix. Ajout d\'une protection dans l\'appel de transcription et d\'un nettoyage qui détecte et supprime les répétitions restantes, avec un avis quand cela se produit.',
          de: 'Whisper konnte bei leisen oder schwer verständlichen Abschnitten hängen bleiben und dasselbe Wort oder denselben Satz hunderte Male wiederholen — am häufigsten bei Mikrofonaufnahmen digitaler Meetings, bei denen das Mikrofon nur die eigene Stimme hört. Eine Absicherung im Transkriptionsaufruf sowie eine Bereinigung, die verbleibende Wiederholungen erkennt und entfernt, wurden hinzugefügt, mit einem Hinweis, wenn das passiert.',
          pt: 'O Whisper podia ficar preso em trechos silenciosos ou difíceis de ouvir e repetir a mesma palavra ou frase centenas de vezes — mais comum ao gravar uma reunião digital pelo microfone, que só capta a sua própria voz. Foi adicionada uma proteção na chamada de transcrição e uma limpeza que deteta e remove repetições remanescentes, com um aviso quando isso acontece.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Rutan som förklarar mikrofonbegränsningen är omskriven till tre tydliga scenarier (alla i samma rum, digitalt möte, redan inspelat), och en diskret samtyckespåminnelse visas nu ovanför inspelnings-/uppladdningsknapparna. Förtydligade också att själva ljudinspelningen aldrig sparas på disk.',
          en: 'The box explaining the microphone limitation has been rewritten into three clear scenarios (same room, digital meeting, already recorded), and a discreet consent reminder now appears above the record/upload buttons. Also clarified that the audio recording itself is never saved to disk.',
          es: 'El cuadro que explica la limitación del micrófono se ha reescrito en tres escenarios claros (misma sala, reunión digital, ya grabado), y ahora aparece un discreto recordatorio de consentimiento encima de los botones de grabar/subir. También se aclaró que la grabación de audio en sí nunca se guarda en el disco.',
          fr: 'L\'encadré expliquant la limitation du micro a été réécrit en trois scénarios clairs (même pièce, réunion en ligne, déjà enregistré), et un rappel discret sur le consentement apparaît désormais au-dessus des boutons d\'enregistrement/import. Précisé aussi que l\'enregistrement audio lui-même n\'est jamais sauvegardé sur le disque.',
          de: 'Der Kasten zur Erklärung der Mikrofon-Einschränkung wurde in drei klare Szenarien umgeschrieben (gleicher Raum, digitales Meeting, bereits aufgenommen), und ein dezenter Einwilligungshinweis erscheint jetzt über den Aufnahme-/Upload-Schaltflächen. Außerdem klargestellt, dass die Audioaufnahme selbst nie auf der Festplatte gespeichert wird.',
          pt: 'A caixa que explica a limitação do microfone foi reescrita em três cenários claros (mesma sala, reunião digital, já gravado), e agora aparece um discreto lembrete de consentimento acima dos botões de gravar/carregar. Também foi esclarecido que a gravação de áudio em si nunca é guardada no disco.',
        },
      },
    ],
  },
  {
    version: '0.22.0',
    date: '2026-08-20',
    title: {
      sv: 'Ny kategori "Skola" + Ordbehandlare',
      en: 'New "School" category + Word Processor',
      es: 'Nueva categoría "Escuela" + Procesador de textos',
      fr: 'Nouvelle catégorie « École » + Traitement de texte',
      de: 'Neue Kategorie „Schule" + Textverarbeitung',
      pt: 'Nova categoria "Escola" + Processador de texto',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Ny kategori: Skola. Första verktyget ute är Ordbehandlare — ett riktigt skrivverktyg med formatering (fet, kursiv, understruken, genomstruken, rubriker, listor, citat, länkar), autospara i webbläsaren, och export till PDF eller en riktig Word-fil (.docx). Kräver dator.',
          en: 'New category: School. The first tool out is Word Processor — a real writing tool with formatting (bold, italic, underline, strikethrough, headings, lists, quotes, links), browser autosave, and export to PDF or a real Word file (.docx). Requires a computer.',
          es: 'Nueva categoría: Escuela. La primera herramienta es Procesador de textos — una herramienta de escritura real con formato (negrita, cursiva, subrayado, tachado, encabezados, listas, citas, enlaces), autoguardado en el navegador, y exportación a PDF o a un archivo Word real (.docx). Requiere un ordenador.',
          fr: 'Nouvelle catégorie : École. Le premier outil disponible est Traitement de texte — un vrai outil d\'écriture avec mise en forme (gras, italique, souligné, barré, titres, listes, citations, liens), sauvegarde automatique dans le navigateur, et export en PDF ou en vrai fichier Word (.docx). Nécessite un ordinateur.',
          de: 'Neue Kategorie: Schule. Das erste Werkzeug ist die Textverarbeitung — ein echtes Schreibwerkzeug mit Formatierung (fett, kursiv, unterstrichen, durchgestrichen, Überschriften, Listen, Zitate, Links), automatischem Speichern im Browser und Export als PDF oder echte Word-Datei (.docx). Benötigt einen Computer.',
          pt: 'Nova categoria: Escola. A primeira ferramenta é o Processador de texto — uma ferramenta de escrita real com formatação (negrito, itálico, sublinhado, tachado, títulos, listas, citações, links), salvamento automático no navegador, e exportação para PDF ou um arquivo Word real (.docx). Requer um computador.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Anteckningsblock är borttaget. Testare tyckte det var för begränsat (ren textruta utan formatering) för att vara användbart. Ordbehandlaren ersätter det med ett verktyg man faktiskt kan skriva riktiga dokument i.',
          en: 'Notepad has been removed. Testers found it too limited (a plain text box with no formatting) to be useful. The Word Processor replaces it with a tool you can actually write real documents in.',
          es: 'Se ha eliminado el Bloc de notas. Los testers lo encontraron demasiado limitado (un simple cuadro de texto sin formato) para ser útil. El Procesador de textos lo sustituye por una herramienta en la que realmente se pueden escribir documentos.',
          fr: 'Le Bloc-notes a été supprimé. Les testeurs l\'ont trouvé trop limité (une simple zone de texte sans mise en forme) pour être utile. Le Traitement de texte le remplace par un outil permettant d\'écrire de vrais documents.',
          de: 'Der Notizblock wurde entfernt. Testern war er zu eingeschränkt (ein einfaches Textfeld ohne Formatierung), um nützlich zu sein. Die Textverarbeitung ersetzt ihn durch ein Werkzeug, mit dem sich tatsächlich richtige Dokumente schreiben lassen.',
          pt: 'O Bloco de notas foi removido. Os testadores acharam-no demasiado limitado (uma simples caixa de texto sem formatação) para ser útil. O Processador de texto substitui-o por uma ferramenta em que se pode realmente escrever documentos.',
        },
      },
    ],
  },
  {
    version: '0.21.4',
    date: '2026-08-10',
    title: {
      sv: 'Markdown-förhandsgranskning: rättad styling + formateringsverktygsrad',
      en: 'Markdown Preview: fixed styling + formatting toolbar',
      es: 'Vista previa de Markdown: estilo corregido + barra de formato',
      fr: 'Aperçu Markdown : mise en forme corrigée + barre d\'outils',
      de: 'Markdown-Vorschau: korrigiertes Styling + Formatierungsleiste',
      pt: 'Pré-visualização Markdown: estilo corrigido + barra de formatação',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'Rubriker, listor, citat och tabeller i förhandsgranskningen visades tidigare som helt ostylad text — ett saknat CSS-plugin gjorde att formateringen aldrig laddades in. Nu renderas de som de ska.',
          en: 'Headings, lists, quotes and tables in the preview pane used to render as completely unstyled text — a missing CSS plugin meant the formatting was never loaded. They now render correctly.',
          es: 'Los encabezados, listas, citas y tablas en la vista previa se mostraban antes como texto sin estilo — faltaba un plugin de CSS que nunca se cargó. Ahora se muestran correctamente.',
          fr: 'Les titres, listes, citations et tableaux dans l\'aperçu s\'affichaient auparavant comme du texte brut sans mise en forme — un plugin CSS manquant n\'était jamais chargé. Ils s\'affichent désormais correctement.',
          de: 'Überschriften, Listen, Zitate und Tabellen in der Vorschau wurden früher als völlig unformatierter Text angezeigt — ein fehlendes CSS-Plugin sorgte dafür, dass die Formatierung nie geladen wurde. Jetzt werden sie korrekt dargestellt.',
          pt: 'Títulos, listas, citações e tabelas na pré-visualização eram exibidos como texto sem estilo — um plugin CSS em falta significava que a formatação nunca era carregada. Agora são exibidos corretamente.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Ny formateringsverktygsrad i editorn: fet, kursiv, genomstruken, rubrik, citat, kod, länk, punktlista, numrerad lista och tabell. Markera text och klicka en knapp, eller använd kortkommandon (⌘B, ⌘I, ⌘K).',
          en: 'New formatting toolbar in the editor: bold, italic, strikethrough, heading, quote, code, link, bullet list, numbered list and table. Select text and click a button, or use keyboard shortcuts (⌘B, ⌘I, ⌘K).',
          es: 'Nueva barra de formato en el editor: negrita, cursiva, tachado, encabezado, cita, código, enlace, lista con viñetas, lista numerada y tabla. Selecciona texto y pulsa un botón, o usa atajos de teclado (⌘B, ⌘I, ⌘K).',
          fr: 'Nouvelle barre d\'outils de mise en forme dans l\'éditeur : gras, italique, barré, titre, citation, code, lien, liste à puces, liste numérotée et tableau. Sélectionnez du texte et cliquez sur un bouton, ou utilisez les raccourcis clavier (⌘B, ⌘I, ⌘K).',
          de: 'Neue Formatierungsleiste im Editor: fett, kursiv, durchgestrichen, Überschrift, Zitat, Code, Link, Aufzählung, nummerierte Liste und Tabelle. Text markieren und auf eine Schaltfläche klicken, oder Tastenkürzel nutzen (⌘B, ⌘I, ⌘K).',
          pt: 'Nova barra de formatação no editor: negrito, itálico, tachado, título, citação, código, link, lista com marcadores, lista numerada e tabela. Selecione o texto e clique num botão, ou use atalhos de teclado (⌘B, ⌘I, ⌘K).',
        },
      },
    ],
  },
  {
    version: '0.21.3',
    date: '2026-08-06',
    title: {
      sv: 'Tydliggör att inspelningen bara hör mikrofonen',
      en: 'Clarifies that recording only hears the microphone',
      es: 'Aclara que la grabación solo capta el micrófono',
      fr: 'Précise que l\'enregistrement ne capte que le micro',
      de: 'Klarstellung: Aufnahme erfasst nur das Mikrofon',
      pt: 'Esclarece que a gravação só capta o microfone',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Mötestranskriberingen visar nu en tydlig notis om att inspelningsknappen använder mikrofonen och därför bara hör det som sägs i rummet — inte ljudet från deltagare i digitala möten (Zoom, Teams m.fl.). För digitala möten: använd mötestjänstens egen inspelning och ladda upp filen efteråt.',
          en: 'The Meeting Transcriber now shows a clear notice that the record button uses the microphone and therefore only hears what is said in the room — not the audio from participants in digital meetings (Zoom, Teams, etc.). For digital meetings: use the meeting service\'s own recording and upload the file afterwards.',
          es: 'El Transcriptor de reuniones ahora muestra un aviso claro de que el botón de grabación usa el micrófono y por tanto solo capta lo que se dice en la sala — no el audio de los participantes en reuniones digitales (Zoom, Teams, etc.). Para reuniones digitales: usa la grabación propia del servicio y sube el archivo después.',
          fr: 'Le Transcripteur de réunions affiche désormais un avis clair indiquant que le bouton d\'enregistrement utilise le micro et ne capte donc que ce qui se dit dans la pièce — pas le son des participants aux réunions en ligne (Zoom, Teams, etc.). Pour les réunions en ligne : utilisez l\'enregistrement intégré du service, puis importez le fichier ensuite.',
          de: 'Die Besprechungs-Transkription zeigt jetzt einen deutlichen Hinweis, dass die Aufnahmetaste das Mikrofon nutzt und daher nur erfasst, was im Raum gesagt wird — nicht den Ton der Teilnehmer in digitalen Meetings (Zoom, Teams usw.). Für digitale Meetings: die eigene Aufnahmefunktion des Meeting-Dienstes nutzen und die Datei danach hochladen.',
          pt: 'O Transcritor de reuniões agora mostra um aviso claro de que o botão de gravação usa o microfone e por isso só capta o que é dito na sala — não o áudio dos participantes em reuniões digitais (Zoom, Teams, etc.). Para reuniões digitais: use a gravação do próprio serviço e carregue o ficheiro depois.',
        },
      },
    ],
  },
  {
    version: '0.21.2',
    date: '2026-08-03',
    title: {
      sv: 'Förklaring vid skärmspärr + tips om telefoninspelning',
      en: 'Explanation on the screen-size block + phone recording tip',
      es: 'Explicación en el bloqueo de tamaño de pantalla + consejo de grabación con el móvil',
      fr: 'Explication du blocage d\'écran + astuce d\'enregistrement au téléphone',
      de: 'Erklärung bei der Bildschirmgrößen-Sperre + Tipp zur Handy-Aufnahme',
      pt: 'Explicação no bloqueio por tamanho de ecrã + dica de gravação no telemóvel',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Sidan som visas när ett verktyg kräver större skärm (t.ex. Mötestranskribering på mobil) kan nu visa en kort förklaring till varför — inte bara att en större skärm krävs.',
          en: 'The page shown when a tool requires a bigger screen (e.g. Meeting Transcriber on mobile) can now show a short explanation of why — not just that a bigger screen is required.',
          es: 'La página que se muestra cuando una herramienta requiere una pantalla más grande (p. ej. el Transcriptor de reuniones en el móvil) ahora puede mostrar una breve explicación de por qué — no solo que se requiere una pantalla más grande.',
          fr: 'La page affichée lorsqu\'un outil nécessite un écran plus grand (par ex. le Transcripteur de réunions sur mobile) peut désormais afficher une brève explication du pourquoi — pas seulement qu\'un écran plus grand est nécessaire.',
          de: 'Die Seite, die angezeigt wird, wenn ein Werkzeug einen größeren Bildschirm benötigt (z. B. die Besprechungs-Transkription auf dem Handy), kann jetzt eine kurze Erklärung zeigen, warum — nicht nur, dass ein größerer Bildschirm nötig ist.',
          pt: 'A página exibida quando uma ferramenta requer um ecrã maior (por exemplo, o Transcritor de reuniões no telemóvel) agora pode mostrar uma breve explicação do motivo — não apenas que é necessário um ecrã maior.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Mötestranskriberingens hjälptext tipsar nu om att spela in mötet med telefonens röstmemo-app och ladda upp filen på en dator, eftersom verktyget kräver dator för själva transkriberingen.',
          en: 'The Meeting Transcriber\'s hint text now suggests recording the meeting with your phone\'s voice memo app and uploading the file on a computer, since the tool requires a computer for the transcription itself.',
          es: 'El texto de ayuda del Transcriptor de reuniones ahora sugiere grabar la reunión con la app de notas de voz del móvil y subir el archivo en un ordenador, ya que la herramienta requiere un ordenador para la transcripción en sí.',
          fr: 'Le texte d\'aide du Transcripteur de réunions suggère désormais d\'enregistrer la réunion avec l\'application dictaphone du téléphone et d\'importer le fichier sur un ordinateur, l\'outil nécessitant un ordinateur pour la transcription elle-même.',
          de: 'Der Hilfetext der Besprechungs-Transkription schlägt jetzt vor, die Besprechung mit der Sprachmemo-App des Handys aufzunehmen und die Datei auf einem Computer hochzuladen, da das Werkzeug für die eigentliche Transkription einen Computer benötigt.',
          pt: 'O texto de ajuda do Transcritor de reuniões agora sugere gravar a reunião com a app de notas de voz do telemóvel e carregar o ficheiro num computador, já que a ferramenta requer um computador para a transcrição em si.',
        },
      },
    ],
  },
  {
    version: '0.21.1',
    date: '2026-07-06',
    title: {
      sv: 'Mötestranskribering på alla språk',
      en: 'Meeting Transcriber in every language',
      es: 'Transcriptor de reuniones en todos los idiomas',
      fr: 'Transcripteur de réunions dans toutes les langues',
      de: 'Besprechungs-Transkription in allen Sprachen',
      pt: 'Transcritor de reuniões em todos os idiomas',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Alla knappar och texter i Mötestranskriberingen (kvalitet, språk, "Nytt möte", integritetsnotisen och felmeddelanden) är nu fullt översatta i alla 6 språk i stället för att falla tillbaka på svenska.',
          en: 'All buttons and texts in the Meeting Transcriber (quality, language, "New meeting", the privacy notice and error messages) are now fully translated in all 6 languages instead of falling back to Swedish.',
          es: 'Todos los botones y textos del Transcriptor de reuniones (calidad, idioma, "Nueva reunión", el aviso de privacidad y los mensajes de error) están ahora totalmente traducidos en los 6 idiomas en lugar de recurrir al sueco.',
          fr: 'Tous les boutons et textes du Transcripteur de réunions (qualité, langue, « Nouvelle réunion », l’avis de confidentialité et les messages d’erreur) sont désormais entièrement traduits dans les 6 langues au lieu de revenir au suédois.',
          de: 'Alle Schaltflächen und Texte in der Besprechungs-Transkription (Qualität, Sprache, „Neue Besprechung“, der Datenschutzhinweis und Fehlermeldungen) sind jetzt vollständig in allen 6 Sprachen übersetzt, statt auf Schwedisch zurückzufallen.',
          pt: 'Todos os botões e textos do Transcritor de reuniões (qualidade, idioma, "Nova reunião", o aviso de privacidade e as mensagens de erro) estão agora totalmente traduzidos nos 6 idiomas em vez de recorrer ao sueco.',
        },
      },
    ],
  },
  {
    version: '0.21.0',
    date: '2026-07-06',
    title: {
      sv: 'Mötestranskribering — helt lokal, ersätter Tal-till-text',
      en: 'Meeting Transcriber — fully local, replaces Speech-to-Text',
      es: 'Transcriptor de reuniones — totalmente local, sustituye Voz a texto',
      fr: 'Transcripteur de réunions — entièrement local, remplace Parole en texte',
      de: 'Besprechungs-Transkription — komplett lokal, ersetzt Sprache-zu-Text',
      pt: 'Transcritor de reuniões — totalmente local, substitui Fala para texto',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Nytt verktyg: Mötestranskribering. Spela in ett möte (eller ladda upp en ljudfil) och få det nedskrivet som text. Allt sker på din enhet med en Whisper-språkmodell som laddas ner en gång och sedan sparas i webbläsaren — ljudet lämnar aldrig datorn. Exportera som .txt eller .srt (undertexter med tidkoder).',
          en: 'New tool: Meeting Transcriber. Record a meeting (or upload an audio file) and get it written down as text. Everything happens on your device using a Whisper language model that is downloaded once and then cached in the browser — the audio never leaves your machine. Export as .txt or .srt (subtitles with timecodes).',
          es: 'Nueva herramienta: Transcriptor de reuniones. Graba una reunión (o sube un archivo de audio) y obtenla por escrito. Todo ocurre en tu dispositivo con un modelo de lenguaje Whisper que se descarga una vez y se guarda en el navegador — el audio nunca sale de tu equipo. Exporta como .txt o .srt (subtítulos con códigos de tiempo).',
          fr: 'Nouvel outil : Transcripteur de réunions. Enregistrez une réunion (ou importez un fichier audio) et obtenez-la à l’écrit. Tout se passe sur votre appareil grâce à un modèle Whisper téléchargé une seule fois puis mis en cache dans le navigateur — l’audio ne quitte jamais votre machine. Exportez en .txt ou .srt (sous-titres avec codes temporels).',
          de: 'Neues Werkzeug: Besprechungs-Transkription. Nimm eine Besprechung auf (oder lade eine Audiodatei hoch) und erhalte sie als Text. Alles läuft auf deinem Gerät mit einem Whisper-Sprachmodell, das einmal heruntergeladen und dann im Browser zwischengespeichert wird — das Audio verlässt dein Gerät nie. Exportiere als .txt oder .srt (Untertitel mit Zeitcodes).',
          pt: 'Nova ferramenta: Transcritor de reuniões. Grave uma reunião (ou carregue um ficheiro de áudio) e receba-a por escrito. Tudo acontece no seu dispositivo com um modelo Whisper que é descarregado uma vez e depois guardado no navegador — o áudio nunca sai da sua máquina. Exporte como .txt ou .srt (legendas com códigos de tempo).',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Tal-till-text tas bort och ersätts av Mötestranskribering. Varför: det gamla verktyget använde webbläsarens inbyggda taligenkänning, som i praktiken (särskilt i Chrome) skickade ljudet från din mikrofon till en molntjänst hos Google för att tolkas. Det var svårt att lova var ljudet tog vägen — olämpligt för känsliga möten. Den nya lösningen kör hela taligenkänningen lokalt på din enhet, så inget ljud skickas någonstans.',
          en: 'Speech-to-Text has been removed and replaced by Meeting Transcriber. Why: the old tool used the browser’s built-in speech recognition, which in practice (especially in Chrome) sent the audio from your microphone to a Google cloud service to be transcribed. There was no way to promise where the audio ended up — unsuitable for sensitive meetings. The new solution runs the entire speech recognition locally on your device, so no audio is sent anywhere.',
          es: 'Voz a texto se ha eliminado y sustituido por el Transcriptor de reuniones. Por qué: la herramienta antigua usaba el reconocimiento de voz integrado del navegador, que en la práctica (sobre todo en Chrome) enviaba el audio de tu micrófono a un servicio en la nube de Google para transcribirlo. No se podía garantizar dónde acababa ese audio — inadecuado para reuniones sensibles. La nueva solución ejecuta todo el reconocimiento de voz localmente en tu dispositivo, así que no se envía ningún audio.',
          fr: 'Parole en texte a été supprimé et remplacé par le Transcripteur de réunions. Pourquoi : l’ancien outil utilisait la reconnaissance vocale intégrée du navigateur, qui en pratique (surtout dans Chrome) envoyait l’audio de votre microphone à un service cloud de Google pour être transcrit. Impossible de garantir où finissait cet audio — inadapté aux réunions sensibles. La nouvelle solution effectue toute la reconnaissance vocale localement sur votre appareil, donc aucun audio n’est envoyé.',
          de: 'Sprache-zu-Text wurde entfernt und durch die Besprechungs-Transkription ersetzt. Warum: Das alte Werkzeug nutzte die eingebaute Spracherkennung des Browsers, die in der Praxis (besonders in Chrome) das Audio deines Mikrofons zur Verarbeitung an einen Google-Cloud-Dienst schickte. Es ließ sich nicht zusichern, wo das Audio landete — ungeeignet für vertrauliche Besprechungen. Die neue Lösung führt die gesamte Spracherkennung lokal auf deinem Gerät aus, es wird also kein Audio irgendwohin gesendet.',
          pt: 'Fala para texto foi removido e substituído pelo Transcritor de reuniões. Porquê: a ferramenta antiga usava o reconhecimento de voz integrado do navegador, que na prática (sobretudo no Chrome) enviava o áudio do seu microfone para um serviço na nuvem da Google para ser transcrito. Não era possível garantir onde o áudio acabava — inadequado para reuniões sensíveis. A nova solução executa todo o reconhecimento de voz localmente no seu dispositivo, por isso nenhum áudio é enviado.',
        },
      },
    ],
  },
  {
    version: '0.20.3',
    date: '2026-07-06',
    title: {
      sv: 'Fler begripliga beskrivningar',
      en: 'More understandable descriptions',
      es: 'Más descripciones comprensibles',
      fr: 'Plus de descriptions compréhensibles',
      de: 'Mehr verständliche Beschreibungen',
      pt: 'Mais descrições compreensíveis',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Fortsatte genomgången av verktygsbeskrivningarna i klarspråk: JSON, CSV, DNS, SSL, HTTP-headers, favicon, OCR, Markdown, ASCII, bas-omvandlare m.fl. Varje beskrivning förklarar nu vad man använder verktyget till — facktermen står kvar inom parentes för den som känner igen den.',
          en: 'Continued the plain-language pass over the tool descriptions: JSON, CSV, DNS, SSL, HTTP headers, favicon, OCR, Markdown, ASCII, base converter and more. Each description now explains what you use the tool for — the technical term stays in parentheses for those who recognise it.',
          es: 'Continuamos la revisión en lenguaje claro de las descripciones: JSON, CSV, DNS, SSL, cabeceras HTTP, favicon, OCR, Markdown, ASCII, conversor de bases y más. Cada descripción explica ahora para qué sirve la herramienta — el término técnico queda entre paréntesis para quien lo reconozca.',
          fr: 'Nous avons poursuivi la relecture en langage clair des descriptions : JSON, CSV, DNS, SSL, en-têtes HTTP, favicon, OCR, Markdown, ASCII, convertisseur de bases, etc. Chaque description explique désormais à quoi sert l’outil — le terme technique reste entre parenthèses pour ceux qui le connaissent.',
          de: 'Wir haben die Beschreibungen weiter in Klartext überarbeitet: JSON, CSV, DNS, SSL, HTTP-Header, Favicon, OCR, Markdown, ASCII, Basis-Umrechner u. a. Jede Beschreibung erklärt jetzt, wofür man das Werkzeug nutzt — der Fachbegriff bleibt in Klammern für alle, die ihn kennen.',
          pt: 'Continuámos a revisão em linguagem clara das descrições: JSON, CSV, DNS, SSL, cabeçalhos HTTP, favicon, OCR, Markdown, ASCII, conversor de bases e mais. Cada descrição explica agora para que serve a ferramenta — o termo técnico fica entre parênteses para quem o reconhece.',
        },
      },
    ],
  },
  {
    version: '0.20.2',
    date: '2026-07-05',
    title: {
      sv: 'Tydligare beskrivningar & integritet',
      en: 'Clearer descriptions & privacy',
      es: 'Descripciones más claras y privacidad',
      fr: 'Descriptions plus claires et confidentialité',
      de: 'Klarere Beschreibungen & Privatsphäre',
      pt: 'Descrições mais claras e privacidade',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Började skriva om verktygsbeskrivningarna så de blir begripliga även utan facktermer — först ut är kod-verktygen (UUID, JWT, cron m.fl.), som nu säger vad man använder dem till i klartext.',
          en: 'Started rewriting the tool descriptions to be understandable without jargon — first up are the code tools (UUID, JWT, cron and more), which now say what you use them for in plain words.',
          es: 'Empezamos a reescribir las descripciones de las herramientas para que se entiendan sin tecnicismos — primero las herramientas de código (UUID, JWT, cron y más), que ahora dicen para qué sirven en lenguaje claro.',
          fr: 'Nous avons commencé à réécrire les descriptions des outils pour qu’elles soient compréhensibles sans jargon — d’abord les outils de code (UUID, JWT, cron, etc.), qui disent maintenant à quoi ils servent en langage clair.',
          de: 'Wir haben begonnen, die Werkzeugbeschreibungen ohne Fachjargon verständlich zu machen — zuerst die Code-Werkzeuge (UUID, JWT, cron u. a.), die jetzt in Klartext sagen, wofür man sie nutzt.',
          pt: 'Começámos a reescrever as descrições das ferramentas para serem compreensíveis sem jargão — primeiro as ferramentas de código (UUID, JWT, cron e outras), que agora dizem para que servem em linguagem clara.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Text-till-tal har nu en tydlig integritetsnotis — i vissa webbläsare kan din text skickas till en molntjänst för vissa röster. Bytebox sparar ingenting själv.',
          en: 'Text-to-speech now has a clear privacy notice — in some browsers your text may be sent to a cloud service for certain voices. Bytebox itself stores nothing.',
          es: 'La conversión de texto a voz ahora tiene un aviso de privacidad claro — en algunos navegadores tu texto puede enviarse a un servicio en la nube para ciertas voces. Bytebox no guarda nada.',
          fr: 'La synthèse vocale a désormais un avis de confidentialité clair — dans certains navigateurs, votre texte peut être envoyé à un service cloud pour certaines voix. Bytebox ne stocke rien lui-même.',
          de: 'Die Sprachausgabe hat jetzt einen klaren Datenschutzhinweis — in manchen Browsern kann dein Text für bestimmte Stimmen an einen Cloud-Dienst gesendet werden. Bytebox selbst speichert nichts.',
          pt: 'A conversão de texto em voz tem agora um aviso de privacidade claro — em alguns navegadores o seu texto pode ser enviado para um serviço na nuvem para certas vozes. O Bytebox não guarda nada.',
        },
      },
    ],
  },
  {
    version: '0.20.1',
    date: '2026-07-04',
    title: {
      sv: '"Kategorier"-rubrik',
      en: '"Categories" heading',
      es: 'Encabezado "Categorías"',
      fr: 'Titre « Catégories »',
      de: 'Überschrift „Kategorien“',
      pt: 'Cabeçalho "Categorias"',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Kategorierna på startsidan har nu en egen rubrik "Kategorier", i samma stil som "Nytt", så gränsen mellan sektionerna blir tydlig.',
          en: 'The categories on the home page now have their own "Categories" heading, in the same style as "New", so the boundary between sections is clear.',
          es: 'Las categorías de la página de inicio ahora tienen su propio encabezado "Categorías", con el mismo estilo que "Nuevo", para que el límite entre secciones sea claro.',
          fr: 'Les catégories de la page d’accueil ont désormais leur propre titre « Catégories », dans le même style que « Nouveau », pour que la limite entre les sections soit claire.',
          de: 'Die Kategorien auf der Startseite haben jetzt eine eigene Überschrift „Kategorien“, im selben Stil wie „Neu“, sodass die Grenze zwischen den Abschnitten klar ist.',
          pt: 'As categorias na página inicial têm agora um cabeçalho próprio "Categorias", no mesmo estilo que "Novo", para que o limite entre as secções seja claro.',
        },
      },
    ],
  },
  {
    version: '0.20.0',
    date: '2026-07-04',
    title: {
      sv: 'Tydligare startsida',
      en: 'Clearer home page',
      es: 'Página de inicio más clara',
      fr: 'Page d’accueil plus claire',
      de: 'Übersichtlichere Startseite',
      pt: 'Página inicial mais clara',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: '"Nytt"-sektionen visar nu bara de sex senaste verktygen, och startsidan har en enda informationstext ovanför sökrutan.',
          en: 'The "New" section now shows only the six latest tools, and the home page has a single info text above the search box.',
          es: 'La sección "Nuevo" ahora muestra solo las seis herramientas más recientes, y la página de inicio tiene un único texto informativo sobre el buscador.',
          fr: 'La section « Nouveau » n’affiche désormais que les six derniers outils, et la page d’accueil a un seul texte d’information au-dessus de la barre de recherche.',
          de: 'Der Bereich „Neu“ zeigt jetzt nur die sechs neuesten Werkzeuge, und die Startseite hat einen einzigen Infotext über dem Suchfeld.',
          pt: 'A secção "Novo" mostra agora apenas as seis ferramentas mais recentes, e a página inicial tem um único texto informativo acima da caixa de pesquisa.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Bredvid Bytebox-logotypen visas nu hur många verktyg som finns just nu — siffran uppdateras automatiskt.',
          en: 'Next to the Bytebox logo you now see how many tools exist right now — the number updates automatically.',
          es: 'Junto al logotipo de Bytebox ahora se ve cuántas herramientas hay en este momento; el número se actualiza automáticamente.',
          fr: 'À côté du logo Bytebox, vous voyez maintenant combien d’outils existent — le nombre se met à jour automatiquement.',
          de: 'Neben dem Bytebox-Logo siehst du jetzt, wie viele Werkzeuge es gerade gibt — die Zahl aktualisiert sich automatisch.',
          pt: 'Ao lado do logótipo do Bytebox vê agora quantas ferramentas existem — o número atualiza-se automaticamente.',
        },
      },
    ],
  },
  {
    version: '0.19.1',
    date: '2026-07-04',
    title: {
      sv: 'Städning & optimering',
      en: 'Cleanup & optimization',
      es: 'Limpieza y optimización',
      fr: 'Nettoyage et optimisation',
      de: 'Aufräumen & Optimierung',
      pt: 'Limpeza e otimização',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Journalsidan laddas nu först när den öppnas, så startsidan blir lättare. Rensade bort död kod och verifierade att alla verktyg, rutter och översättningar är korrekta. Inga synliga ändringar.',
          en: 'The journal page now loads only when opened, making the home page lighter. Removed dead code and verified all tools, routes and translations are correct. No visible changes.',
          es: 'La página del diario ahora se carga solo al abrirla, aligerando la página de inicio. Se eliminó código muerto y se verificó que todas las herramientas, rutas y traducciones son correctas. Sin cambios visibles.',
          fr: 'La page du journal ne se charge désormais qu’à son ouverture, allégeant la page d’accueil. Code mort supprimé et vérification que tous les outils, routes et traductions sont corrects. Aucun changement visible.',
          de: 'Die Journalseite lädt jetzt erst beim Öffnen, wodurch die Startseite leichter wird. Toten Code entfernt und geprüft, dass alle Werkzeuge, Routen und Übersetzungen korrekt sind. Keine sichtbaren Änderungen.',
          pt: 'A página do diário agora carrega apenas quando aberta, tornando a página inicial mais leve. Removido código morto e verificado que todas as ferramentas, rotas e traduções estão corretas. Sem alterações visíveis.',
        },
      },
    ],
  },
  {
    version: '0.19.0',
    date: '2026-07-04',
    title: {
      sv: 'Video till GIF',
      en: 'Video to GIF',
      es: 'Vídeo a GIF',
      fr: 'Vidéo en GIF',
      de: 'Video zu GIF',
      pt: 'Vídeo para GIF',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Video till GIF: gör en animerad GIF av ett videoklipp (välj start, slut, bildrutor och storlek). Lätt GIF-kodare, videon laddas aldrig upp.',
          en: 'Video to GIF: turn a video clip into an animated GIF (choose start, end, frame rate and size). Lightweight GIF encoder, the video is never uploaded.',
          es: 'Vídeo a GIF: convierte un clip de vídeo en un GIF animado (elige inicio, fin, fotogramas y tamaño). Codificador GIF ligero, el vídeo nunca se sube.',
          fr: 'Vidéo en GIF : transformez un clip vidéo en GIF animé (choisissez début, fin, images par seconde et taille). Encodeur GIF léger, la vidéo n’est jamais envoyée.',
          de: 'Video zu GIF: verwandle einen Videoclip in ein animiertes GIF (Anfang, Ende, Bildrate und Größe wählen). Leichter GIF-Encoder, das Video wird nie hochgeladen.',
          pt: 'Vídeo para GIF: transforme um clipe de vídeo num GIF animado (escolha início, fim, fotogramas e tamanho). Codificador GIF leve, o vídeo nunca é enviado.',
        },
      },
    ],
  },
  {
    version: '0.18.1',
    date: '2026-07-04',
    title: {
      sv: 'Säkerhetsuppdatering av beroenden',
      en: 'Dependency security update',
      es: 'Actualización de seguridad de dependencias',
      fr: 'Mise à jour de sécurité des dépendances',
      de: 'Sicherheitsupdate der Abhängigkeiten',
      pt: 'Atualização de segurança de dependências',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'Uppdaterade alla beroenden med kända sårbarheter (12 → 0), inklusive react-router. Inga funktionsändringar.',
          en: 'Updated all dependencies with known vulnerabilities (12 → 0), including react-router. No functional changes.',
          es: 'Se actualizaron todas las dependencias con vulnerabilidades conocidas (12 → 0), incluida react-router. Sin cambios funcionales.',
          fr: 'Toutes les dépendances présentant des vulnérabilités connues ont été mises à jour (12 → 0), y compris react-router. Aucun changement fonctionnel.',
          de: 'Alle Abhängigkeiten mit bekannten Schwachstellen aktualisiert (12 → 0), einschließlich react-router. Keine funktionalen Änderungen.',
          pt: 'Todas as dependências com vulnerabilidades conhecidas foram atualizadas (12 → 0), incluindo react-router. Sem alterações funcionais.',
        },
      },
    ],
  },
  {
    version: '0.18.0',
    date: '2026-07-04',
    title: {
      sv: 'Ljudklipp, streckkod & PDF-signering',
      en: 'Audio trim, barcodes & PDF signing',
      es: 'Recorte de audio, códigos de barras y firma de PDF',
      fr: 'Découpe audio, codes-barres et signature PDF',
      de: 'Audioschnitt, Barcodes & PDF-Signatur',
      pt: 'Corte de áudio, códigos de barras e assinatura de PDF',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Ljudklippare: klipp och trimma ljudfiler (välj start/slut på vågformen, förlyssna, ladda ner WAV). Allt lokalt.',
          en: 'Audio trimmer: cut and trim audio files (pick start/end on the waveform, preview, download WAV). All local.',
          es: 'Recortador de audio: corta y recorta archivos de audio (elige inicio/fin en la forma de onda, previsualiza, descarga WAV). Todo local.',
          fr: 'Découpe audio : coupez et rognez des fichiers audio (choisissez début/fin sur la forme d’onde, écoutez, téléchargez un WAV). Tout en local.',
          de: 'Audio-Schneider: schneide und kürze Audiodateien (Anfang/Ende auf der Wellenform wählen, vorhören, WAV herunterladen). Alles lokal.',
          pt: 'Cortador de áudio: corte e apare ficheiros de áudio (escolha início/fim na forma de onda, pré-ouça, descarregue WAV). Tudo local.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Streckkodsgenerator: skapa streckkoder (CODE128, EAN, UPC, ITF14 m.fl.) och ladda ner som PNG eller SVG.',
          en: 'Barcode generator: create barcodes (CODE128, EAN, UPC, ITF14 and more) and download as PNG or SVG.',
          es: 'Generador de códigos de barras: crea códigos (CODE128, EAN, UPC, ITF14 y más) y descárgalos como PNG o SVG.',
          fr: 'Générateur de codes-barres : créez des codes-barres (CODE128, EAN, UPC, ITF14 et plus) et téléchargez-les en PNG ou SVG.',
          de: 'Barcode-Generator: erstelle Barcodes (CODE128, EAN, UPC, ITF14 u. a.) und lade sie als PNG oder SVG herunter.',
          pt: 'Gerador de códigos de barras: crie códigos (CODE128, EAN, UPC, ITF14 e outros) e descarregue como PNG ou SVG.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'PDF-signering: rita din namnteckning och placera den på valfri sida i ett PDF-dokument. Filen laddas aldrig upp.',
          en: 'PDF signing: draw your signature and place it on any page of a PDF document. Your file is never uploaded.',
          es: 'Firma de PDF: dibuja tu firma y colócala en cualquier página de un PDF. Tu archivo nunca se sube.',
          fr: 'Signature PDF : dessinez votre signature et placez-la sur n’importe quelle page d’un PDF. Votre fichier n’est jamais envoyé.',
          de: 'PDF-Signatur: zeichne deine Unterschrift und platziere sie auf jeder Seite eines PDF-Dokuments. Deine Datei wird nie hochgeladen.',
          pt: 'Assinatura de PDF: desenhe a sua assinatura e coloque-a em qualquer página de um PDF. O seu ficheiro nunca é enviado.',
        },
      },
    ],
  },
  {
    version: '0.17.0',
    date: '2026-07-04',
    title: {
      sv: 'Sex nya verktyg',
      en: 'Six new tools',
      es: 'Seis herramientas nuevas',
      fr: 'Six nouveaux outils',
      de: 'Sechs neue Werkzeuge',
      pt: 'Seis novas ferramentas',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'SVG-optimerare och SRT-redigerare: krymp/städa SVG-filer respektive redigera undertexter (text, tider, förskjutning) — allt lokalt.',
          en: 'SVG optimizer and SRT editor: shrink/clean SVG files and edit subtitles (text, timings, shift) — all local.',
          es: 'Optimizador SVG y editor de SRT: reduce/limpia archivos SVG y edita subtítulos (texto, tiempos, desplazamiento) — todo local.',
          fr: 'Optimiseur SVG et éditeur SRT : réduisez/nettoyez les fichiers SVG et modifiez les sous-titres (texte, temps, décalage) — tout en local.',
          de: 'SVG-Optimierer und SRT-Editor: SVG-Dateien verkleinern/bereinigen und Untertitel bearbeiten (Text, Zeiten, Verschiebung) — alles lokal.',
          pt: 'Otimizador SVG e editor de SRT: reduza/limpe ficheiros SVG e edite legendas (texto, tempos, deslocamento) — tudo local.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Namnbrickor: skapa utskrivbara namnbrickor på ett A4-ark, ett namn per rad, i 300 DPI.',
          en: 'Name badges: create printable name badges on an A4 sheet, one name per line, at 300 DPI.',
          es: 'Tarjetas de nombre: crea tarjetas imprimibles en una hoja A4, un nombre por línea, a 300 DPI.',
          fr: 'Badges nominatifs : créez des badges imprimables sur une feuille A4, un nom par ligne, en 300 DPI.',
          de: 'Namensschilder: erstelle druckbare Namensschilder auf einem A4-Blatt, ein Name pro Zeile, in 300 DPI.',
          pt: 'Crachás de nome: crie crachás imprimíveis numa folha A4, um nome por linha, a 300 DPI.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Utvecklarverktyg: UUID-generator (v4), Epoch-omvandlare (Unix-tid ↔ datum) och Bas-omvandlare (binärt/oktalt/decimalt/hex).',
          en: 'Developer tools: UUID generator (v4), Epoch converter (Unix time ↔ date) and Base converter (binary/octal/decimal/hex).',
          es: 'Herramientas para desarrolladores: generador de UUID (v4), conversor de epoch (tiempo Unix ↔ fecha) y conversor de bases (binario/octal/decimal/hex).',
          fr: 'Outils pour développeurs : générateur d’UUID (v4), convertisseur epoch (temps Unix ↔ date) et convertisseur de bases (binaire/octal/décimal/hex).',
          de: 'Entwicklerwerkzeuge: UUID-Generator (v4), Epoch-Umrechner (Unix-Zeit ↔ Datum) und Basis-Umrechner (binär/oktal/dezimal/hex).',
          pt: 'Ferramentas para programadores: gerador de UUID (v4), conversor de epoch (tempo Unix ↔ data) e conversor de bases (binário/octal/decimal/hex).',
        },
      },
    ],
  },
  {
    version: '0.16.0',
    date: '2026-07-04',
    title: {
      sv: 'Vad kan du göra på din enhet?',
      en: 'What can you do on your device?',
      es: '¿Qué puedes hacer en tu dispositivo?',
      fr: 'Que pouvez-vous faire sur votre appareil ?',
      de: 'Was kannst du auf deinem Gerät machen?',
      pt: 'O que pode fazer no seu dispositivo?',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Tre snabbknappar på startsidan — Mobil / Surfplatta / Dator — som visar vilka verktyg som fungerar på just din skärm. Plus en kort sammanfattning av vad Bytebox är.',
          en: 'Three quick buttons on the home page — Phone / Tablet / Computer — showing which tools work on your screen. Plus a short summary of what Bytebox is.',
          es: 'Tres botones rápidos en la página de inicio — Móvil / Tableta / Ordenador — que muestran qué herramientas funcionan en tu pantalla. Además de un breve resumen de qué es Bytebox.',
          fr: 'Trois boutons rapides sur la page d’accueil — Mobile / Tablette / Ordinateur — indiquant quels outils fonctionnent sur votre écran. Ainsi qu’un bref résumé de ce qu’est Bytebox.',
          de: 'Drei Schnellschaltflächen auf der Startseite — Handy / Tablet / Computer — die zeigen, welche Werkzeuge auf deinem Bildschirm funktionieren. Plus eine kurze Zusammenfassung, was Bytebox ist.',
          pt: 'Três botões rápidos na página inicial — Telemóvel / Tablet / Computador — que mostram quais ferramentas funcionam no seu ecrã. Mais um breve resumo do que é o Bytebox.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Alla verktyg är omklassade efter minsta skärm de faktiskt behöver. Telefonvänliga verktyg är nu fullt användbara på mobilen; större verktyg rekommenderar en surfplatta eller dator i stället för att bara blockeras.',
          en: 'Every tool is reclassified by the smallest screen it actually needs. Phone-friendly tools are now fully usable on mobile; bigger tools recommend a tablet or computer instead of just being blocked.',
          es: 'Todas las herramientas se han reclasificado según la pantalla más pequeña que realmente necesitan. Las herramientas aptas para el móvil ahora son totalmente utilizables; las más grandes recomiendan una tableta u ordenador en lugar de bloquearse.',
          fr: 'Chaque outil est reclassé selon le plus petit écran dont il a réellement besoin. Les outils adaptés au mobile sont désormais pleinement utilisables ; les plus grands recommandent une tablette ou un ordinateur au lieu d’être simplement bloqués.',
          de: 'Jedes Werkzeug ist nach dem kleinsten Bildschirm neu eingestuft, den es wirklich braucht. Handytaugliche Werkzeuge sind jetzt voll nutzbar; größere empfehlen ein Tablet oder einen Computer, statt einfach blockiert zu werden.',
          pt: 'Todas as ferramentas foram reclassificadas pelo menor ecrã de que realmente precisam. As ferramentas adequadas ao telemóvel são agora totalmente utilizáveis; as maiores recomendam um tablet ou computador em vez de serem simplesmente bloqueadas.',
        },
      },
    ],
  },
  {
    version: '0.15.0',
    date: '2026-07-04',
    title: {
      sv: 'Mobilanpassning',
      en: 'Mobile-friendly',
      es: 'Adaptación móvil',
      fr: 'Adapté au mobile',
      de: 'Mobil-Anpassung',
      pt: 'Adaptação móvel',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Menyn är nu responsiv: på mobil samlas språk, tema, journal och installera-knappen bakom en hamburgermeny. Flikarna fyller bredden och får plats på små skärmar.',
          en: 'The menu is now responsive: on mobile, language, theme, journal and the install button collapse into a hamburger menu. The tabs fill the width and fit on small screens.',
          es: 'El menú ahora es adaptable: en móvil, el idioma, el tema, el diario y el botón de instalar se agrupan en un menú hamburguesa. Las pestañas ocupan el ancho y caben en pantallas pequeñas.',
          fr: 'Le menu est désormais responsive : sur mobile, la langue, le thème, le journal et le bouton d’installation se regroupent dans un menu hamburger. Les onglets occupent toute la largeur et tiennent sur les petits écrans.',
          de: 'Das Menü ist jetzt responsiv: auf dem Handy werden Sprache, Thema, Journal und die Installieren-Schaltfläche in einem Hamburger-Menü zusammengefasst. Die Tabs füllen die Breite und passen auf kleine Bildschirme.',
          pt: 'O menu agora é responsivo: no telemóvel, o idioma, o tema, o diário e o botão de instalar juntam-se num menu de hambúrguer. Os separadores ocupam a largura e cabem em ecrãs pequenos.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Verktyg som inte passar på en telefon visar nu ett tydligt meddelande om att de kräver minst en surfplatta i skärmstorlek, med en väg tillbaka till listan.',
          en: 'Tools that do not suit a phone now show a clear message that they need at least a tablet-sized screen, with a way back to the list.',
          es: 'Las herramientas que no son aptas para un teléfono ahora muestran un mensaje claro de que necesitan al menos una pantalla del tamaño de una tableta, con una vuelta a la lista.',
          fr: 'Les outils qui ne conviennent pas à un téléphone affichent désormais un message clair indiquant qu’ils nécessitent au moins un écran de la taille d’une tablette, avec un retour vers la liste.',
          de: 'Werkzeuge, die nicht für ein Handy geeignet sind, zeigen jetzt eine klare Meldung, dass sie mindestens einen tabletgroßen Bildschirm benötigen, mit einem Weg zurück zur Liste.',
          pt: 'As ferramentas que não são adequadas para um telemóvel mostram agora uma mensagem clara de que precisam de pelo menos um ecrã do tamanho de um tablet, com um caminho de volta à lista.',
        },
      },
    ],
  },
  {
    version: '0.14.0',
    date: '2026-07-04',
    title: {
      sv: 'Tydlig integritet (GDPR-genomgång)',
      en: 'Clear privacy (GDPR review)',
      es: 'Privacidad clara (revisión RGPD)',
      fr: 'Confidentialité claire (revue RGPD)',
      de: 'Klare Privatsphäre (DSGVO-Prüfung)',
      pt: 'Privacidade clara (revisão RGPD)',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Verktyg som kommunicerar med en extern tjänst visar nu en tydlig notis om exakt vart data skickas. Bytebox lagrar aldrig något själv.',
          en: 'Tools that communicate with an external service now show a clear notice about exactly where data is sent. Bytebox itself never stores anything.',
          es: 'Las herramientas que se comunican con un servicio externo ahora muestran un aviso claro sobre a dónde se envían exactamente los datos. Bytebox nunca guarda nada.',
          fr: 'Les outils qui communiquent avec un service externe affichent désormais un avis clair indiquant exactement où les données sont envoyées. Bytebox ne stocke jamais rien lui-même.',
          de: 'Werkzeuge, die mit einem externen Dienst kommunizieren, zeigen jetzt einen klaren Hinweis, wohin genau Daten gesendet werden. Bytebox selbst speichert nie etwas.',
          pt: 'As ferramentas que comunicam com um serviço externo mostram agora um aviso claro sobre para onde os dados são enviados. O Bytebox nunca guarda nada.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Översättaren varnar särskilt för att texten kan sparas i MyMemorys publika översättningsminne — klistra inte in känsliga personuppgifter.',
          en: 'The translator specifically warns that text may be stored in MyMemory\'s public translation memory — do not paste sensitive personal data.',
          es: 'El traductor advierte específicamente de que el texto puede guardarse en la memoria de traducción pública de MyMemory — no pegues datos personales sensibles.',
          fr: 'Le traducteur avertit spécifiquement que le texte peut être stocké dans la mémoire de traduction publique de MyMemory — ne collez pas de données personnelles sensibles.',
          de: 'Der Übersetzer warnt ausdrücklich, dass der Text im öffentlichen Übersetzungsspeicher von MyMemory gespeichert werden kann — füge keine sensiblen personenbezogenen Daten ein.',
          pt: 'O tradutor avisa especificamente que o texto pode ser guardado na memória de tradução pública do MyMemory — não cole dados pessoais sensíveis.',
        },
      },
    ],
  },
  {
    version: '0.13.0',
    date: '2026-07-04',
    title: {
      sv: 'Tre nya verktyg & bättre upptäckbarhet',
      en: 'Three new tools & better discoverability',
      es: 'Tres herramientas nuevas y mejor visibilidad',
      fr: 'Trois nouveaux outils et une meilleure visibilité',
      de: 'Drei neue Werkzeuge & bessere Auffindbarkeit',
      pt: 'Três novas ferramentas e melhor visibilidade',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Passfoto: skapa pass- och ID-foto i exakta mm-mått (Sverige, USA-visum, EU-körkort eller egen storlek), beskär, zooma och skriv ut flera kopior på ett ark i 300 DPI. Allt lokalt.',
          en: 'Passport photo: create passport and ID photos at exact mm sizes (Sweden, US visa, EU licence or custom), crop, zoom and print multiple copies on one 300 DPI sheet. All local.',
          es: 'Foto de pasaporte: crea fotos de pasaporte e identidad con medidas exactas en mm (Suecia, visado EE. UU., carné UE o personalizado), recorta, amplía e imprime varias copias en una hoja a 300 DPI. Todo local.',
          fr: 'Photo d\'identité : créez des photos de passeport et d\'identité aux dimensions exactes en mm (Suède, visa US, permis UE ou personnalisé), recadrez, zoomez et imprimez plusieurs copies sur une feuille en 300 DPI. Tout en local.',
          de: 'Passfoto: erstelle Pass- und Ausweisfotos in exakten mm-Maßen (Schweden, US-Visum, EU-Führerschein oder eigene Größe), zuschneiden, zoomen und mehrere Kopien auf einem Blatt in 300 DPI drucken. Alles lokal.',
          pt: 'Foto de passaporte: crie fotos de passaporte e identificação com medidas exatas em mm (Suécia, visto EUA, carta UE ou personalizado), recorte, aproxime e imprima várias cópias numa folha a 300 DPI. Tudo local.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Etikettark: lägg ut flera kopior av en design på ett A4- eller Letter-ark för klistermärken och etiketter. Räknar ut hur många som får plats och exporterar utskriftsklar PNG i 300 DPI.',
          en: 'Sticker sheet: lay out multiple copies of a design on an A4 or Letter sheet for stickers and labels. Calculates how many fit and exports a print-ready 300 DPI PNG.',
          es: 'Hoja de pegatinas: coloca varias copias de un diseño en una hoja A4 o Letter para pegatinas y etiquetas. Calcula cuántas caben y exporta un PNG listo para imprimir a 300 DPI.',
          fr: 'Planche d\'autocollants : disposez plusieurs copies d\'un design sur une feuille A4 ou Letter pour autocollants et étiquettes. Calcule combien tiennent et exporte un PNG prêt à imprimer en 300 DPI.',
          de: 'Aufkleberbogen: ordne mehrere Kopien eines Designs auf einem A4- oder Letter-Blatt für Aufkleber und Etiketten an. Berechnet, wie viele passen, und exportiert ein druckfertiges PNG in 300 DPI.',
          pt: 'Folha de autocolantes: disponha várias cópias de um design numa folha A4 ou Letter para autocolantes e etiquetas. Calcula quantas cabem e exporta um PNG pronto a imprimir em 300 DPI.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Batch-QR: skapa många QR-koder på en gång från en lista eller CSV-fil och ladda ner alla som PNG. Allt sker lokalt — inget laddas upp.',
          en: 'Batch QR: generate many QR codes at once from a list or CSV file and download all as PNG. Everything runs locally — nothing is uploaded.',
          es: 'QR por lotes: genera muchos códigos QR a la vez desde una lista o archivo CSV y descárgalos todos como PNG. Todo se ejecuta localmente — no se sube nada.',
          fr: 'QR par lot : générez de nombreux codes QR à la fois depuis une liste ou un fichier CSV et téléchargez tout en PNG. Tout en local — rien n\'est envoyé.',
          de: 'Batch-QR: erzeuge viele QR-Codes auf einmal aus einer Liste oder CSV-Datei und lade alle als PNG herunter. Alles läuft lokal — nichts wird hochgeladen.',
          pt: 'QR em lote: crie muitos códigos QR de uma vez a partir de uma lista ou ficheiro CSV e descarregue todos como PNG. Tudo funciona localmente — nada é enviado.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Startsidan förklarar nu tydligt poängen med Bytebox och lyfter fram nya verktyg i en egen "Nytt"-sektion, med "Nytt"-etikett och en knapp för att visa alla verktyg på en gång.',
          en: 'The home page now clearly explains the point of Bytebox and highlights new tools in a dedicated "New" section, with a "New" badge and a button to show all tools at once.',
          es: 'La página de inicio ahora explica claramente el propósito de Bytebox y destaca las herramientas nuevas en una sección "Nuevo", con una etiqueta "Nuevo" y un botón para mostrar todas las herramientas a la vez.',
          fr: 'La page d\'accueil explique désormais clairement l\'intérêt de Bytebox et met en avant les nouveaux outils dans une section « Nouveau » dédiée, avec un badge « Nouveau » et un bouton pour afficher tous les outils d\'un coup.',
          de: 'Die Startseite erklärt jetzt klar den Sinn von Bytebox und hebt neue Werkzeuge in einem eigenen "Neu"-Bereich hervor, mit "Neu"-Etikett und einer Schaltfläche, um alle Werkzeuge auf einmal anzuzeigen.',
          pt: 'A página inicial agora explica claramente o objetivo do Bytebox e destaca as novas ferramentas numa secção "Novo" dedicada, com uma etiqueta "Novo" e um botão para mostrar todas as ferramentas de uma vez.',
        },
      },
    ],
  },
  {
    version: '0.12.0',
    date: '2026-07-04',
    title: {
      sv: 'Metadata-tvätt',
      en: 'Metadata cleaner',
      es: 'Limpiador de metadatos',
      fr: 'Nettoyeur de métadonnées',
      de: 'Metadaten-Reiniger',
      pt: 'Limpador de metadados',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'Metadata-tvätt: se dold metadata i bilder (GPS-position, datum, kamera) och ta bort allt med ett klick innan du delar. Allt sker lokalt — inget laddas upp.',
          en: 'Metadata cleaner: see hidden metadata in images (GPS location, date, camera) and strip it all with one click before sharing. Everything runs locally — nothing is uploaded.',
          es: 'Limpiador de metadatos: ve los metadatos ocultos en las imágenes (ubicación GPS, fecha, cámara) y elimínalos con un clic antes de compartir. Todo se ejecuta localmente — no se sube nada.',
          fr: 'Nettoyeur de métadonnées : voyez les métadonnées cachées dans les images (position GPS, date, appareil) et supprimez tout en un clic avant de partager. Tout en local — rien n\'est envoyé.',
          de: 'Metadaten-Reiniger: sieh versteckte Metadaten in Bildern (GPS-Standort, Datum, Kamera) und entferne alles mit einem Klick vor dem Teilen. Alles läuft lokal — nichts wird hochgeladen.',
          pt: 'Limpador de metadados: veja metadados ocultos nas imagens (localização GPS, data, câmara) e remova tudo com um clique antes de partilhar. Tudo funciona localmente — nada é enviado.',
        },
      },
    ],
  },
  {
    version: '0.11.0',
    date: '2026-07-03',
    title: {
      sv: 'HEIC-konverterare',
      en: 'HEIC converter',
      es: 'Conversor HEIC',
      fr: 'Convertisseur HEIC',
      de: 'HEIC-Konverter',
      pt: 'Conversor HEIC',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'HEIC till JPG: konvertera iPhone-bilder (HEIC/HEIF) till JPG eller PNG, flera samtidigt, med kvalitetsreglage. Allt sker lokalt — inget laddas upp.',
          en: 'HEIC to JPG: convert iPhone photos (HEIC/HEIF) to JPG or PNG, multiple at once, with a quality slider. Everything runs locally — nothing is uploaded.',
          es: 'HEIC a JPG: convierte fotos de iPhone (HEIC/HEIF) a JPG o PNG, varias a la vez, con control de calidad. Todo se ejecuta localmente — no se sube nada.',
          fr: 'HEIC vers JPG : convertissez des photos iPhone (HEIC/HEIF) en JPG ou PNG, plusieurs à la fois, avec un curseur de qualité. Tout en local — rien n\'est envoyé.',
          de: 'HEIC zu JPG: iPhone-Fotos (HEIC/HEIF) in JPG oder PNG umwandeln, mehrere gleichzeitig, mit Qualitätsregler. Alles läuft lokal — nichts wird hochgeladen.',
          pt: 'HEIC para JPG: converta fotos de iPhone (HEIC/HEIF) para JPG ou PNG, várias ao mesmo tempo, com controlo de qualidade. Tudo funciona localmente — nada é enviado.',
        },
      },
    ],
  },
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
