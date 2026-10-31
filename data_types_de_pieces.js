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
    { niveau: 2, label: "Répons", id: "répons" },
    { niveau: 2, label: "Prose", id: "prose" }
          ] 
    },
    {
        type:"text",
        content:`Dans le chant grégorien, il exite plusieurs types de chant (qu'on appelle aussi <em>pièce</em>). On les regroupe pour simplifier en deux catégories et ces catégories différent
        par le moment liturgique où ces pièces sont chantées : il y des pièces chantées durant la messe et des pièces chantées durant les offices. Les pièces qui sont chantées pendant la messe sont
        regroupées dans un livre de chants liturgiques appellé le <strong>GRADUEL</strong>, celles pour les offices sont réparties dans l'<strong>ANTIPHONAIRE</strong>. Je tiens à préciser qu'il 
        existe beaucoup d'autres livres de chants liturgiques comme l'hymnaire (où sont conservées les hymnes), le processional (où sont conservés les chants de procession), les tropaires et
        séquentiaires (où sont conservés les tropes et les séquences), le prosaire (où sont conservées les proses) etc. chacun avec un but spécifique et un rite associé.<br><br>
        Intéréssons nous maintenant aux types de pièces que ces manuscrits renferment.<br><br>`
    },
    {
        type:"separateur",
        id:"graduel1",
        content:"GRADUEL"
    },
    {
        type:"text",
        content:`Comme dit précédemment, le graduel est le livre de chants liturgiques qui contient le détail des pièces chantées pendant la messe.
        Pour nous aider dans le détail des pièces présentes durant la messe, nous allons nous aider du graduel <a href="https://www.e-codices.unifr.ch/fr/sbe/0121/30" target-_blanck"><em>Einsiedeln 121</em></a>
        qui est un graduel de la fin du Xe siècle. Dans ce graduel, on trouve régulièrement les mêmes lettres rouges au début des chants.`
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
        content:`Toutes ces rubriques sont en fait des abbréviations permettant d'indiquer qu'à cet endroit un chant commence et selon la rubrique, on sait quel type de chant. 
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
        Toutes ces pièce sont divisées en deux catégories : les pièces de l'<em>Ordinaire</em> et du <em>Propre</em>.<br><br>
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
        content :`L'introït est la première pièce chantée de la messe mais il faut se méfier car il peut aussi être appelé "<em>antiphona ad introïtum</em>" car c'est en fait une antienne et ce n'est que
        plus tardivement que l'on enploiera le terme <em>introït</em> defaçon autonome. Ce chant a pour but de débuter le temps de la messe et de faire entrer les fidèle dans la célébration.
        C'est sur cette pièce qu'entre le clergé dans l'église en traversant la nef jusqu'à l'autel. L'introït est donc une antienne accompagnée d'au moins un verset de psaume mais selon le
        temps que mets le clergé à traverser la nef (temps qui diffère si la célébration se passe dans une église de 20 mètres ou dans une catédrale de 150 mètres), on peut mettre plusieurs
        versets de psaume pour faire durer le chant. Dans le graduel Einsiedeln 121, il n'y a pas de rubrique mentionnant le début de l'introït par ce que sa position est assez explicite. En effet,
        il est placé juste après la rubrique indiquant le début de la célébration, ce qui en fait, <em>de facto</em>, l'introït, première pièce chantée de la messe. Par contre, à la fin de la pièce,
        vous devriez trouver une idication abrégée <strong>PS.</strong> qui signifie le début du psaume associé à l'antienne qui se trouve juste avant.`
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
        que les chantres montaient sur les marches de l'ambon pour éxécuter ce chant. Au début du chant, vous pouvez voir la rubrique [icone=images/repons.png] qui est l'abbréviation (latine) 
        de <strong>[couleur=#d96e28]R[/couleur]</strong>épons <strong>[couleur=#d96e28]G[/couleur]</strong>raduel.`
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
        content:`L'alléluia, est un type de chant dont la structure diffère un peu des autes pièces. Il y a dans un premier temps l'<em>Alléluia</em> proprement dit, c'est à dire juste le mot
        qui est chanté puis un <em>verset alléluiatique</em>. Durant la messe, un soliste chante l'intonation du mot Alléluia puis le choeur rechante le mot entier en y ajoutant la
        longue guirlande de notes (qu'on apelle "<em>Mélisme</em>" ou "<em>Jubilus</em>) qui se fait sur le A final (Alléluiaaaaaaaaaaaaaaaaaaaa...). Ensuite, un soliste chante le <em>verset 
        alléluiatique</em> et à la fin de ce même verset, se trouve une portion de la mélodie déjà chantée dans le mélisme précédemment. Ce bout de mélisme est lui chanté par le solist et 
        le choeur. Pour conclure, le choeur reprend le mot <em>Alléluia</em> en entier.<br><br>
        Ce mélisme qui est composé d'une longue série de notes a eu un rôle capital dans le développement de nouvelles parties [lexique=Logo- le Verbe, -gène qui crée, donc 
        qui invente du texte]logogènes[/lexique] et [lexique=Mélo- la mélodie, -gène qui crée, donc 
        qui invente de la mélodie]mélogènes[/lexique] dans la liturgie. En effet, les longs mélismes de l'Alléluia, normalement chanté sur un "aaa" vont se voir imposer des nouvelles portions
        de texte qui sont évidemment en rapport avec le sujet de l'Alleluia de ce messe. Cette nouvelel création `
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
        content:`L'offertoire est une des pièces les plus virtuoses du chant grégorien. C'est un chant assez long puisqu'il exécuté pendant que l'on prépare le pain et les osties avant
        la consécration et la communion même si départ, la pièce était chantée pendant que les fidèles venaient apporter des offrandes (nourritures, argent, cierge...), rituel qui fut  
        remplacé par la quête. L'offertoire est composé d'une antienne qui peut-être assez longue mais surtout de deux versets chantés par le chantre soliste. Ces deux versets
        sont d'une composition virtuose, raffinée et expressive qui demande un savoir-faire très technique. Toutefois, les siècles passant, on a supprimé un verset puis les deux mais
        dans les manuscrits du Moyen Âge vous en trouverez encore deux (comme ici dans le graduel <em>Einsiedeln 121</em>). À la fin de chaque verset, le choeur doit reprendre la fin 
        de l'antienne et pour ça, les notateurs ont placé un mot qui nous dit à quel endroit reprendre dans l'antienne quand on finit le verset.
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
        content:`La communion est la dernière pièce du propre à être chantée. Elle est à gémétrie variable car elle doit s'étendre sur tout le long de la distribution des hosties aux communiants.
        Elle est composée d'une antienne et de versets de psaumes. L'antienne sera répétée comme un refrain après chaque verset et il y aura autant de verset que la distribution 
        des hosties l'exige. Quand la distribution touche à sa fin, on répète une dernière fois l'antienne.
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
        content:`La communion est la dernière pièce du propre à être chantée. Elle est à gémétrie variable car elle doit s'étendre sur tout le long de la distribution des hosties aux communiants.
        Elle est composée d'une antienne et de versets de psaumes. L'antienne sera répétée comme un refrain après chaque verset et il y aura autant de verset que la distribution 
        des hosties l'exige. Quand la distribution touche à sa fin, on répète une dernière fois l'antienne.
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
        id:"credo",
        content:"Credo (Ordinaire)"
    },
    {
        type:"text",
        content:`La communion est la dernière pièce du propre à être chantée. Elle est à gémétrie variable car elle doit s'étendre sur tout le long de la distribution des hosties aux communiants.
        Elle est composée d'une antienne et de versets de psaumes. L'antienne sera répétée comme un refrain après chaque verset et il y aura autant de verset que la distribution 
        des hosties l'exige. Quand la distribution touche à sa fin, on répète une dernière fois l'antienne.
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
        id:"sanctus",
        content:"Sanctus (Ordinaire)"
    },
    {
        type:"text",
        content:`La communion est la dernière pièce du propre à être chantée. Elle est à gémétrie variable car elle doit s'étendre sur tout le long de la distribution des hosties aux communiants.
        Elle est composée d'une antienne et de versets de psaumes. L'antienne sera répétée comme un refrain après chaque verset et il y aura autant de verset que la distribution 
        des hosties l'exige. Quand la distribution touche à sa fin, on répète une dernière fois l'antienne.
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
        id:"agnus_dei",
        content:"Agnus Dei (Ordinaire)"
    },
    {
        type:"text",
        content:`La communion est la dernière pièce du propre à être chantée. Elle est à gémétrie variable car elle doit s'étendre sur tout le long de la distribution des hosties aux communiants.
        Elle est composée d'une antienne et de versets de psaumes. L'antienne sera répétée comme un refrain après chaque verset et il y aura autant de verset que la distribution 
        des hosties l'exige. Quand la distribution touche à sa fin, on répète une dernière fois l'antienne.
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
        id:"antiphonaire",
        content:"ANTIPHONAIRE"
    },
    {
        type:"text",
        content:`L'antiphonaire est le livre de chants liturgiques qui contient le détail des pièces chantées pendant les offices.
        Pour nous aider dans le détail des pièces présentes durant les offices, nous allons nous aider d'un antiphonaire de Saint-Gall dit 
        "antiphonaire de Hartker" copié vers l'an 1000 et divisé en deux manuscrits 
        (<a href="https://www.e-codices.ch/en/csg/0390/156/0/" target-_blanck">390</a> et 
        <a href="https://www.e-codices.ch/en/csg/0391/33/0/" target-_blanck">391</a>).
        `
    },
]
