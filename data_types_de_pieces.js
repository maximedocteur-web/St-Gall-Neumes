siteData.types_de_pieces = [
    { 
  type: "sommaire", 
  items: [
    { niveau: 1, label: "GRADUEL", id: "graduel1" },
    { niveau: 2, label: "Introït (Propre)", id: "introït" },
    { niveau: 2, label: "Graduel (Propre)", id: "graduel2" },
    { niveau: 2, label: "Alléluia (Propre)", id: "alleluia" },
    { niveau: 2, label: "Offertoire (Propre)", id: "offertoire" },
    { niveau: 2, label: "Communion (Propre)", id: "communion" },
    { niveau: 2, label: "Kyrie (Ordinaire)", id: "kyrie" },
    { niveau: 2, label: "Gloria (Ordinaire)", id: "gloria" },
    { niveau: 2, label: "Credo (Ordinaire)", id: "credo" },
    { niveau: 2, label: "Sanctus (Ordinaire)", id: "sanctus" },
    { niveau: 2, label: "Agnus Dei (Ordinaire)", id: "agnus_dei" },
    
    { niveau: 1, label: "ANTIPHONAIRE", id: "antiphonaire" },
    { niveau: 2, label: "Antienne", id: "antienne" },
    { niveau: 2, label: "Répons", id: "repons" },

    { niveau: 1, label: "AUTRES", id: "autres" },
    { niveau: 2, label: "Prose", id: "prose" }
          ] 
    },
    {
        type:"text",
        content:`Dans le chant grégorien, il existe plusieurs types de chant (qu'on appelle aussi <em>pièce</em>). On les regroupe pour simplifier en deux catégories et ces catégories diffèrent
        par le moment liturgique où ces pièces sont chantées : il y des pièces chantées durant la messe et des pièces chantées durant les offices. Les pièces qui sont chantées pendant la messe sont
        regroupées dans un livre de chants liturgiques appelé le <strong>GRADUEL</strong>, celles pour les offices sont réparties dans l'<strong>ANTIPHONAIRE</strong>. Je tiens à préciser qu'il 
        existe beaucoup d'autres livres de chants liturgiques comme l'hymnaire (où sont conservées les hymnes), le processional (où sont conservés les chants de procession), les tropaires et
        séquentiaires (où sont conservés les tropes et les séquences), le prosaire (où sont conservées les proses) etc. chacun avec un but spécifique et un rite associé.<br><br>
        Intéressons nous maintenant aux types de pièces que ces manuscrits renferment.<br><br>`
    },
    {
        type:"separateur",
        id:"graduel1",
        content:"GRADUEL"
    },
    {
        type:"text",
        content:`Comme dit précédemment, le graduel est le livre de chants liturgiques qui contient le détail des pièces chantées pendant la messe.
        Pour nous aider dans le détail des pièces présentes durant la messe, nous allons nous aider du graduel <a href="https://www.e-codices.unifr.ch/fr/sbe/0121/30" target="_blanck" class="underline text-amber-700 hover:text-amber-700"><em>Einsiedeln 121</em></a>
        qui est un graduel de la fin du Xe siècle. Dans ce graduel, on trouve régulièrement les mêmes lettres rouges et/ou abrégées au début des chants.`
    },
    {
        type: "galerie",
        images: [
            "images/psaume.png",
            "images/repons.png",
            "images/alleluia.png",
            "images/trait.png",
            "images/verset.png",
            "images/offertoire.png",
            "images/communion.png"
        ]
    },
    {
        type:"text",
        content:`Toutes ces rubriques sont en fait des abréviations permettant d'indiquer qu'à cet endroit un chant commence et selon la rubrique, on sait quel type de chant. 
        Ces indications s'éclairent lorsque l'on connaît l'organisation des pièces chantées durant la messe :<br><br>
        <strong>Introït</strong><br><br>
        <strong>Kyrie</strong><br><br>
        <strong>Gloria</strong><br><br>
        <strong>Graduel</strong><br><br>
        <strong>Alleluia</strong><br><br>
        <strong>Credo</strong><br><br>
        <strong>Offertoire</strong><br><br>
        <strong>Sanctus</strong><br><br>
        <strong>Agnus</strong><br><br>
        <strong>Communion</strong><br><br>
        Toutes ces pièces sont divisées en deux catégories : les pièces de l'<em>Ordinaire</em> et du <em>Propre</em>.<br><br>
        <strong>ORDINAIRE</strong><br>
        Les pièces de l'Ordinaire sont des chants dont le texte n'est jamais modifié (mis à part une légère exception pour l'Agnus Dei mais ne rentrons pas dans les détails...). Les chants qui font
        partie de l'Ordinaire sont le <strong>Kyrie</strong>, le <strong>Gloria</strong>, le <strong>Credo</strong>, le <strong>Sanctus</strong> et l'<strong>Agnus Dei</strong>. Ces chants ne sont
        présents dans les manuscrits que de façon marginale puisqu'ils ne changent pas d'un jour à l'autre. Toutefois, comme leur mélodies peuvent parfois varier, on leur réserve un petit bout de 
        graduel que l'on appelle le <em>Kyriale</em>.<br><br>
        <strong>PROPRE</strong><br>
        Les pièces du Propre sont des chants dont le texte est modifié d'une messe à l'autre. Les chants du Propre sont l'<strong>Introït</strong>, le <strong>Graduel</strong>,
        l'<strong>Alleluia</strong>, l'<strong>Offertoire</strong> et la <strong>Communion</strong>. Donc, d'une messe à l'autre les textes de ces chants ne seront pas les mêmes même si ces
        chants occupent une fonction liturgique semblable lors de la célébration (voir dans le détail des pièces).
        `
    },
    {
        type:"separateur",
        id:"introït",
        content:"Introït (Propre)"
    },
    {
        type:"text",
        content :`L'introït est la première pièce chantée de la messe mais il faut se méfier car il peut aussi être appelé "<em>antiphona ad introitum</em>" car c'est en fait une antienne et ce n'est que
        plus tardivement que l'on emploiera le terme <em>introït</em> de façon autonome. Ce chant a pour but de débuter le temps de la messe et de faire entrer les fidèles dans la célébration.
        C'est sur cette pièce qu'entre le clergé dans l'église en traversant la nef jusqu'à l'autel. L'introït est donc une antienne accompagnée d'au moins un verset de psaume mais selon le
        temps que mets le clergé à traverser la nef (temps qui diffère si la célébration se passe dans une église de 20 mètres ou dans une cathédrale de 150 mètres), on peut mettre plusieurs
        versets de psaume pour faire durer le chant. Dans le graduel Einsiedeln 121, il n'y a pas de rubrique mentionnant le début de l'introït par ce que sa position est assez explicite. En effet,
        il est placé juste après la rubrique indiquant le début de la célébration, ce qui en fait, <em>de facto</em>, l'introït, première pièce chantée de la messe. Par contre, à la fin de la pièce,
        vous devriez trouver une indication abrégée <strong>PS.</strong> qui signifie le début du psaume associé à l'antienne qui se trouve juste avant.`
    },
    {
        type:"imageCompare",
        original:"images/adorate.png",
        annotee:"images/adorate2.png",
        legende:"passez votre souris sur l'image pour voir où se situent les différentes parties."
    },
    {
        type:"separateur",
        id:"graduel2",
        content:"Graduel (Propre)"
    },
    {
        type:"text",
        content:`Le graduel, appelé aussi <em>Répons graduel</em>, est formé d'une première partie appelée le <em>Répons</em> et d'une seconde qui est le <em>Verset</em>. Son nom vient du fait
        que les chantres montaient sur les marches de l'ambon pour exécuter ce chant. Au début du chant, vous pouvez voir la rubrique [icone=images/repons.png] qui est l'abréviation (latine) 
        de <strong>[couleur=#d96e28]R[/couleur]épons [couleur=#d96e28]G[/couleur]raduel</strong>.`
    },
    {
        type:"imageCompare",
        original:"images/suscepimus.png",
        annotee:"images/suscepimus2.png",
        legende:"passez votre souris sur l'image pour voir où se situent les différentes parties."
    },
    {
        type:"separateur",
        id:"alleluia",
        content:"Alléluia (Propre)"
    },
    {
        type:"text",
        content:`L'alléluia est un type de chant dont la structure diffère un peu des autres pièces. Il y a dans un premier temps l'<em>Alléluia</em> proprement dit, c'est-à-dire juste le mot
        qui est chanté puis un <em>verset alléluiatique</em>. Durant la messe, un soliste chante l'intonation du mot Alléluia puis le choeur rechante le mot entier en y ajoutant la
        longue guirlande de notes (qu'on appelle "<em>Mélisme</em>" ou "<em>Jubilus</em>) qui se fait sur le A final (Alléluiaaaaaaaaaaaaaaaaaaaa...). Ensuite, un soliste chante le <em>verset 
        alléluiatique</em> et à la fin de ce même verset, se trouve une portion de la mélodie déjà chantée dans le mélisme précédemment. Ce bout de mélisme est lui chanté par le soliste et 
        le choeur. Pour conclure, le choeur reprend le mot <em>Alléluia</em> en entier.<br><br>
        Ce mélisme qui est composé d'une longue série de notes a eu un rôle capital dans le développement de nouvelles parties [lexique=Logo- le Verbe, -gène qui crée, donc 
        qui invente du texte]logogènes[/lexique] et [lexique=Mélo- la mélodie, -gène qui crée, donc 
        qui invente de la mélodie]mélogènes[/lexique] dans la liturgie. En effet, les longs mélismes de l'Alléluia, normalement chanté sur un "aaa" vont se voir imposer des nouvelles portions
        de texte qui sont évidemment en rapport avec le sujet de l'Alleluia de cette messe.`
    },
    {
        type:"imageCompare",
        original:"images/confitebuntur.png",
        annotee:"images/confitebuntur2.png",
        legende:"passez votre souris sur l'image pour voir où se situent les différentes parties."
    },
    {
        type:"separateur",
        id:"offertoire",
        content:"Offertoire (Propre)"
    },
    {
        type:"text",
        content:`L'offertoire est une des pièces les plus virtuoses du chant grégorien. C'est un chant assez long puisqu'il exécuté pendant que l'on prépare le pain et les hosties avant
        la consécration et la communion même si départ, la pièce était chantée pendant que les fidèles venaient apporter des offrandes (nourritures, argent, cierge...), rituel qui fut  
        remplacé par la quête. L'offertoire est composé d'une antienne qui peut-être assez longue mais surtout de deux versets chantés par le chantre soliste. Ces deux versets
        sont d'une composition virtuose, raffinée et expressive qui demande un savoir-faire très technique. Toutefois, les siècles passant, on a supprimé un verset puis les deux mais
        dans les manuscrits du Moyen Âge vous en trouverez encore deux (comme ici dans le graduel <em>Einsiedeln 121</em>). À la fin de chaque verset, le choeur doit reprendre la fin 
        de l'antienne et pour ça, les notateurs ont placé un mot qui nous dit à quel endroit reprendre dans l'antienne quand on finit le verset. Dans les graduels, il est reconnaissable 
        facilement par l'abréviation [icone=images/offertoire.png] qui sont les premières lettres du mot <strong>[couleur=#d96e28]Of[/couleur]fertoire</strong>.
        `
    },
    {
        type:"imageCompare",
        original:"images/iubilate.png",
        annotee:"images/iubilate2.png",
        legende:"passez votre souris sur l'image pour voir où se situent les différentes parties."
    },
    {
        type:"separateur",
        id:"communion",
        content:"Communion (Propre)"
    },
    {
        type:"text",
        content:`La communion est la dernière pièce du propre à être chantée. Elle est à géométrie variable car elle doit s'étendre sur tout le long de la distribution des hosties aux communiants.
        Elle est composée d'une antienne et de versets de psaumes. L'antienne sera répétée comme un refrain après chaque verset et il y aura autant de versets que la distribution 
        des hosties l'exige. Quand la distribution touche à sa fin, on répète une dernière fois l'antienne. Cet type de pièce est facilement reconnaissable par l'abréviation
        [icone=images/communion.png] qui représentent les deux lettres du mot <strong>[couleur=#d96e28]Co[/couleur]mmunion</strong>.
        `
    },
    {
        type:"imageCompare",
        original:"images/domine_quinque.png",
        annotee:"images/domine_quinque2.png",
        legende:"passez votre souris sur l'image pour voir où se situent les différentes parties."
    },
    {
        type:"separateur",
        id:"kyrie",
        content:"Kyrie (Ordinaire)"
    },
    {
        type:"text",
        content:`Le Kyrie est un des rares chants non pas en latin mais en grec (avec les Impropères).
        `
    },
    {
        type:"bilingue",
        latin:`Kyrie eleison<br>Kyrie eleison<br>Kyrie eleison<br>
            Christe eleison<br>Christe eleison<br>Christe eleison<br>
            Kyrie eleison<br>Kyrie eleison<br>Kyrie eleison.`,
        francais:`Seigneur prends pitié (x3)<br>
        Christ prends pitié (x3)<br>
        Seigneur prends pitié (x3)`
    },
    {
        type:"imageCompare",
        original:"images/kyrie.png",
        annotee:"images/kyrie2.png",
        legende:"passez votre souris sur l'image pour voir où se situent les différentes parties."
    },
    {
        type:"separateur",
        id:"gloria",
        content:"Gloria (Ordinaire)"
    },
    {
        type:"text",
        content:`Le gloria est la seconde pièce de l'Ordinaire. 
        `
    },
    {
        type:"bilingue",
        latin:`Glória in excélsis Deo
et in terra pax homínibus bonae voluntátis.
Laudámus te,
benedícimus te,
adorámus te,
glorificámus te,
grátias ágimus tibi propter magnam glóriam tuam,
Dómine Deus, Rex cæléstis,
Deus Pater omnípotens.
Dómine Fili Unigénite, Iesu Christe,
Dómine Deus, Agnus Dei, Fílius Patris,
qui tollis peccáta mundi, miserére nobis;
qui tollis peccáta mundi
súscipe deprecatiónem nostram,
Qui sedes ad déxteram Patris,
miserere nobis.
Quóniam tu solus Sanctus,
tu solus Dóminus,
tu solus Altíssimus,
Iesu Christe,
cum Sancto Spíritu,
in glória Dei Patris.
Amen.`,
        francais:`Gloire à Dieu au plus haut des cieux.
Et sur terre, paix aux hommes de bonne volonté.
Nous te louons.
Nous te bénissons.
Nous t'adorons.
Nous te glorifions.
Nous te rendons grâces pour ta grande gloire.
Seigneur Dieu, Roi du Ciel,
Dieu le Père tout-puissant.
Seigneur, Fils unique, Jésus-Christ.
Seigneur Dieu, Agneau de Dieu, Fils du Père.
Toi qui enleve les péchés du monde, ait pitié de nous.
Toi qui enleve les péchés du monde, agrée notre prière.
Toi qui siége à la droite du Père, ait pitié de nous.
Car toi seul est saint.
Tu es seul es Seigneur.
Vous êtes le seul
Très Haut, Jésus-Christ.
Avec le Saint-Esprit,
dans la gloire de Dieu le Père.
Amen.`
    },
    {
        type:"image",
        src:"images/gloria.png",
        legende:"Un des <em>Gloria</em> avec des neumes de Saint-Gall. (Saint-Gall 381, p.312)"
    },
    {
        type:"separateur",
        id:"credo",
        content:"Credo (Ordinaire)"
    },
    {
        type:"text",
        content:`Le Credo possède un statut particulier puisqu'il est la profession de foi du catholicisme. Chanté à l'époque médiévale, il ne l'est plus aujourd'hui que dans certains cas assez
        marginaux. 
        `
    },
    {
        type:"bilingue",
        latin:`Credo in unum Deum, Patrem omnipoténtem, factόrem cæli et terræ, visibílium όmnium, et invisibílium.
Et in unum Dόminum Iesum Christum, Fílium Dei unigénitum. Et ex Patre natum ante όmnia sæcula. Deum de Deo, lumen de lúmine, Deum verum de Deo vero. Génitum, non factum, 
consubstantiálem Patri : per quem όmnia facta sunt. Qui propter nos hόmines, et propter nostram salútem descéndit de cælis. Et incarnátus est de Spíritu Sancto ex María Vírgine : 
et homo factus est. Crucifíxus étiam pro nobis : sub Pόntio Piláto passus, et sepúltus est. Et resurréxit tértia die, secúndum Scriptúras. Et ascéndit in cælum : sedet ad déxteram 
Patris. Et íterum ventúrus est cum glόria iudicáre vivos, et mόrtuos : cuius regni non erit finis.
Et in Spíritum Sanctum, Dόminum, et vivificántem : qui ex Patre, Filiόque procédit. Qui cum Patre, et Filio simul adorátur, et conglorificátur : qui locútus est per Prophétas.
Et unam, sanctam, cathόlicam et apostόlicam Ecclésiam. Confíteor unum baptísma in remissiόnem peccatόrum. Et expécto resurrectiόnem mortuόrum. Et vitam ventúri sǽculi. Amen.`,
        francais:`Je crois en un seul Dieu, le Père tout-puissant, créateur du ciel et de la terre, de l'univers visible et invisible.
Je crois en un seul Seigneur, Jésus-Christ, le Fils unique de Dieu, né du Père avant tous les siècles ; il est Dieu, né de Dieu, lumière, née de la lumière, vrai Dieu, né du vrai Dieu. 
Engendré, non pas créé, consubstantiel au Père, et par lui tout a été fait. Pour nous les hommes, et pour notre salut, il descendit du ciel ; par l'Esprit-Saint, il a pris chair de la 
Vierge Marie, et s'est fait homme. Crucifié pour nous sous Ponce Pilate, il souffrit sa passion et fut mis au tombeau. Il ressuscita le troisième jour, conformément aux Écritures, et 
il monta au ciel ; il est assis à la droite du Père. Il reviendra dans la gloire, pour juger les vivants et les morts; et son règne n'aura pas de fin.
Je crois en l'Esprit Saint, qui est Seigneur et qui donne la vie ; il procède du Père et du Fils. Avec le Père et le Fils, il reçoit même adoration et même gloire ; il a parlé par les prophètes.
Je crois en l'Église, Une, sainte, catholique et apostolique. Je reconnais un seul baptême pour le pardon des péchés. J'attends la résurrection des morts, et la vie du monde à venir. Amen.`
    },
    {
        type:"separateur",
        id:"sanctus",
        content:"Sanctus (Ordinaire)"
    },
    {
        type:"text",
        content:`Le Sanctus est le quatrième chant de l'Ordinaire.
        `
    },
    {
      type:"bilingue",
        latin:`Sanctus, Sanctus, Sanctus Dóminus Deus Sábaoth.
Pleni sunt caeli et terra glória tua.
Hosánna in excélsis.
Benedíctus qui venit in nómine Dómini.
Hosánna in excélsis.`,
        francais:`Saint ! Saint ! Saint, le Seigneur, Dieu de l'univers !
Le ciel et la terre sont remplis de ta gloire.
Hosanna au plus haut des cieux !
Béni soit celui qui vient au nom du Seigneur.
Hosanna au plus haut des cieux !`
    },
    {
        type:"image",
        src:"images/sanctus.png",
        legende:"Saint-Gall, cod. 388, p.473. XIIe-XIVe s."
    },
    {
        type:"separateur",
        id:"agnus_dei",
        content:"Agnus Dei (Ordinaire)"
    },
    {
        type:"text",
        content:`L'Agnus Dei est le dernier chant de l'Ordinaire.
        `
    },
    {
        type:"bilingue",
        latin:`Agnus Dei, qui tollis peccata mundi, parce nobis Domine.
Agnus Dei, qui tollis peccata mundi, exaudi nos Domine.
Agnus Dei, qui tollis peccata mundi, miserere nobis.`,
        francais:`Agneau de Dieu, qui enlèves les péchés du monde, prends pitié de nous.
Agneau de Dieu, qui enlèves les péchés du monde, prends pitié de nous.
Agneau de Dieu, qui enlèves les péchés du monde, donne-nous la paix.`
    },
    {
        type:"image",
        src:"images/agnus_dei.png",
        legende:"Saint-Gall, cod. 380, p.101. Milieu XIe s."
    },
    {
        type:"separateur",
        id:"antiphonaire",
        content:"ANTIPHONAIRE"
    },
    {
        type:"text",
        content:`L'antiphonaire est le livre de chants liturgiques qui contient le détail des pièces chantées pendant les offices.
        Pour nous aider dans le détail des pièces présentes durant les offices, nous allons nous aider d'un antiphonaire de Saint-Gall dit 
        "<em>antiphonaire de Hartker</em>" copié vers l'an 1000 et divisé en deux manuscrits 
        (<a href="https://www.e-codices.ch/en/csg/0390/156/0/" target="_blanck" class="underline text-amber-700 hover:text-amber-700"><em>390</em></a> et 
        <a href="https://www.e-codices.ch/en/csg/0391/33/0/" target="_blanck" class="underline text-amber-700 hover:text-amber-700"><em>391</em></a>).
        `
    },
    {
        type:"separateur",
        id:"antienne",
        content:"Antienne"
    },
    {
        type:"text",
        content:`L'Antienne est une pièce fondamentale dans le chant grégorien. L'organisation repose sur la psalmodie d'un ou de plusieurs psaumes. Or, on a créé une petite
        portions de chant supplémentaire qui encadre la récitation du psaume. Donc une antienne, c'est une portion de chant (plus ou moins courte); la récitation d'un psaume,
        puis à nouveau la même portion de chant que l'on a au début. Il arrive qu'à certaines occasions, on  récite pas tout le psaume avant de revenir à la partie du début,
        mais que l'on rechante la première portion tous les deux ou trois versets du psaume. Pour la psalmodie, allez voir dans la salle [lien=psalmodies]Psalmodies[/lien]. Dans
        les manuscrits (et les imprimés), les antiennes sont notées dans leur forme complète mais le psaume n'est jamais noté en entier, juste les premiers mots pour savoir duquel
        il s'agit. Normalement, on connaît les psaumes de tête mais sinon, on peut toujours trouver les psaumes en entier dans un  livre de chant liturgique que l'on appelle le "Psautier".
        `
    },
    {
        type:"image",
        src:"images/beatus_quem.png",
        legende:"Saint-Gall, cod. 380, p.101. Milieu XIe s."
    },
    {
        type:"separateur",
        id:"repons",
        content:"Répons"
    },
    {
        type:"text",
        content:`Le répons est un des types de pièces fondamentaux dans le chant grégorien.
        `
    },
    {
        type:"image",
        src:"images/agnus_dei.png",
        legende:"Saint-Gall, cod. 380, p.101. Milieu XIe s."
    }/*,
    {
        type:"separateur",
        id:"autres",
        content:"AUTRES"
    },
    {
        type:"text",
        content:`En dehors de ces pièces, il existe d'autres compositions qui font aussi partie des liturgies de l'église catholique.
        `
    }*/
]
