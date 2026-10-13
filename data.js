//pour mettre en gras c'est "<strong>texte</strong>
//pour mettre en italique c'est <em>texte</em>
//pour les deux en mm temps c'est <strong><em>texte</em></strong>
//pour metrte des caractères en couleur c'est <span style="color: #eeb354;">le texte à coloriser</span> (#eeb354 c'est la couleur en hexadécimal qu'on a choisie)
//et pour mettre en plus en gras c'est <strong><span style="color: #eeb354;">le texte à coloriser</span></strong>
const siteData = {
    // Neumes (simples ou ornementaux)
    neumes: [
        {
            nom: "Punctum",
            categorie: "simples",
            description: `<strong>1 note</strong>. Il est normalement employé en composition,
            c'est-à-dire qu'on le trouve dans d'autres neumes plus complexes. Il n'est, me semble-t-il jamais utilisé seul,
            c'est à dire que l'on est sensé le trouver uniquement dans d'autres neumes mais jamais tout seul,
            il n'a pas d'autonomie en tant que neume. Il ne possède pas de forme avec épisème car en cas d'alongement
            de la note dans un neume en composition, on lui préférera le tractulus, voire le tractulus épisémé.`,
            image: "images/punctum.png"
        },
        {
            nom: "Tractulus",
            categorie: "simples",
            description: `<strong>1 note</strong>. Il est normalement employé en composition,
            c'est-à-dire qu'on le trouve dans d'autres neumes plus complexes. Il n'est, me semble-t-il jamais utilisé seul, 
            c'est à dire que l'on est sensé le trouver uniquement dans d'autres neumes mais jamais tout seul, 
            il n'a pas d'autonomie en tant que neume. Il ne possède pas de forme avec épisème car en cas d'alongement
            de la note dans un neume en composition, on lui préférera le tractulus, voire le tractulus épisémé.`,
            images: [
                "images/tractulus.png",
                "images/tractulus_episeme.png"
                ]
        },
        {
            nom: "Virga",
            categorie: "simples",
            description: "<strong>1 note</strong>. Il est normalement employé en composition,"+
            "c'est-à-dire qu'on le trouve dans d'autres neumes plus complexes. Il n'est, me semble-t-il jamais utilisé seul,"+ 
            "c'est à dire que l'on est sensé le trouver uniquement dans d'autres neumes mais jamais tout seul,"+ 
            "il n'a pas d'autonomie en tant que neume. Il ne possède pas de forme avec épisème car en cas d'alongement"+
            "de la note dans un neume en composition, on lui préférera le tractulus, voire le tractulus épisémé.",
            image: "images/punctum.png"
        },
        {
            nom: "Clivis",
            categorie: "simples",
            description: "<strong>2 notes</strong>, mouvement : descendant. Ce neume représente deux notes, la seconde étant plus basse (plus grave) que la première"+
            "mais on ne sait pas de combien elle est plus basse (une tierce ? une quarte ? une octave ? rien ne l'indique)"+
            "dans sa graphie. Vous pouvez voir dans la seconde image, sa forme épisémée qui revient très souvent. Le petit"+
            "chapeau posé sur le neume indique que la première note est plus longue que la seconde.",
            images: [
                "images/clivis.png",
                "images/clivis_episeme.png"
                ]
        },
        {
            nom: "Pes",
            categorie: "simples",
            description: "<strong>2 notes</strong>, mouvement : ascendant. Ce neume représente deux notes, la seconde étant plus élevée (plus aigue) que la première"+
            "mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ? rien ne l'indique"+
            "dans sa graphie). La première image est sa graphie standard, les trois autres images représentent ses graphies épisémées : la seconde image"+
            "montre la version (long-court), la troisième (court-long), la quatrième (long-long).",
            images: [
                "images/pes.png",
                "images/pes_episeme1.png",
                "images/pes_episeme2.png",
                "images/pes_episeme3.png"
                ]
        },
        {
            nom: "Torculus",
            categorie: "simples",
            description: `<strong>3 notes</strong>, mouvement : ascendant/descendant. Ce neume représente trois notes, la deuxième étant plus élevée (plus aigue) que la première
            et la troisième plus basse (grave) que la deuxième mais on ne sait pas de combien elles sont plus élevées/basses (une tierce ? une quarte ? une octave ? rien ne l'indique 
            dans sa graphie). La première image est sa graphie standard,`,
            images: [
                "images/torculus.png",
                "images/torculus_episeme.png"
                ]
        },
        {
            nom: "Porrectus",
            categorie: "simples",
            description: `<strong>3 notes</strong>, mouvement : descendant/ascendant. Ce neume représente trois notes, la seconde étant plus basse (plus grave) que la première
            et la troisième plus elevée (plus aigue) que la deuxième mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ? rien ne l'indique 
            dans sa graphie). La première image est sa graphie standard,`,
            image: "images/porrectus.png"
        },
        {
            nom: "Scandicus",
            categorie: "simples",
            description: `<strong>3 notes</strong>, mouvement : descendant/ascendant. Ce neume représente trois notes, la seconde étant plus basse (plus grave) que la première
            et la troisième plus elevée (plus aigue) que la deuxième mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ? rien ne l'indique 
            dans sa graphie). La première image est sa graphie standard,`,
            image: "images/scandicus.png"
        },
        {
            nom: "Climacus",
            categorie: "simples",
            description: `<strong>3 notes</strong>, mouvement : descendant/ascendant. Ce neume représente trois notes, la seconde étant plus basse (plus grave) que la première
            et la troisième plus elevée (plus aigue) que la deuxième mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ? rien ne l'indique 
            dans sa graphie). La première image est sa graphie standard,`,
            images: [
                "images/climacus_2p.png",
                "images/climacus_3p.png",
                "images/climacus_episeme1.png"
                ]
        },
        {
            nom: "Torculus resupinus",
            categorie: "simples",
            description: `<strong>4 notes</strong>, mouvement : descendant/ascendant. Ce neume représente quatre notes, `,
            image: "images/torculus_resupinus.png"
        },
        {
            nom: "Porrectus flexus",
            categorie: "simples",
            description: `<strong>4 notes</strong>, mouvement : descendant/ascendant. Ce neume représente quatre notes, `,
            image: "images/porrectus_flexus.png"
        },
        {
            nom: "Pes sub-bipunctis",
            categorie: "simples",
            description: `<strong>4 notes</strong>, mouvement : descendant/ascendant. Ce neume représente quatre notes, `,
            image: "images/pes_sub_bipunctis.png"
        },
        {
            nom: "Scandicus flexus",
            categorie: "simples",
            description: `<strong>4 notes</strong>, mouvement : descendant/ascendant. Ce neume représente quatre notes, `,
            image: "images/scandicus_flexus.png"
        },
        {
            nom: "Quilisma",
            categorie: "ornementaux",
            description: "Neume dentelé en forme de crémaillère. Indique une vocalise légère, un frémissement.",
            image: "images/quilisma.png"
        },
        {
            nom: "Salicus",
            categorie: "ornementaux",
            description: "Ascension de trois notes ou plus, comportant une pression sur l'avant-dernière note.",
            image: "images/salicus.png"
        },
        {
            nom: "Pes quassus",
            categorie: "ornementaux",
            description: "Ascension de trois notes ou plus, comportant une pression sur l'avant-dernière note.",
            image: "images/pes_quassus.png"
        },
        {
            nom: "Pressus",
            categorie: "ornementaux",
            description: "Ascension de trois notes ou plus, comportant une pression sur l'avant-dernière note.",
            images: [
                "images/pressus_minor.png",
                "images/pressus_maior.png"
                ]
        },
        {
            nom: "Virga strata",
            categorie: "ornementaux",
            description: "Ascension de trois notes ou plus, comportant une pression sur l'avant-dernière note.",
            image: "images/virga_strata.png"
        }
    ],

    // Lettres significatives
    lettres: [
        { 
            sigle: "c (Celeriter)", 
            texte: `<strong>"C. Ut cito vel celeriter dicatur certificat.</strong>"<br>
                    Rapidité, exécuter le neume plus vite.`,
            image: "images/c.png"
        },
        { 
            sigle: "t (Tenete)",
            texte: "Lenteur, allonger la durée du neume.",
            image: "images/t.png"
        },
        { 
            sigle: "m (Mediocriter)",
            texte: "Nuance modérée.",
            image: "images/m.png"
        },
        { 
            sigle: "e (Equaliter)",
            texte: `La note sur laquelle est posée cette lettre est à la même hauteur que la précédente.
            Exemple : si la note précédente est un Ré, cette note sera aussi un Ré, si la note
            précédente ést un La, cette note sera aussi un La.`,
            image: "images/e.png"
        },
        { 
            sigle: "st (STatim)",
            texte: "???.",
            image: "images/st.png"
        },
        { 
            sigle: "i (Inferius)",
            texte: "???.",
            image: "images/i.png"
        },
        { 
            sigle: "s (Sursum)",
            texte: "???.",
            image: "images/s.png"
        },
        { 
            sigle: "x ((e)Xpectare)",
            texte: "???.",
            image: "images/x.png"
        }
    ],

    // Analyse d'un chant complet
    analyseChant: {
        titre: "Graduel. Si ambulem (messe des morts)",
        texte: `Si ambulem in medio umbrae mortis non timebo mala quoniam tu mecum es domine`,
        texte: `TRADUCTION : Même si je marche au milieu de l'ombre de la mort, je ne craindrai aucun mal, car tu es avec moi, Seigneur.`,
        imageGlobale: "images/si_ambulem.png", // Mets ton image globale de partition ici si tu en as une
        audioGlobal: "audio/si_ambulem.mp3",   // Mets ton fichier audio global ici si tu en as un
        etapes: [
            { signe: "Virga + Punctum", explications: "Le chant s'ouvre sur un élan vers le haut (Virga) immédiatement stabilisé par un point de repos (Punctum)." },
            { signe: "Clivis avec lettre 't'", explications: "Descente mélodique ralentie par la lettre significative tarditer pour marquer une inflexion." },
            { signe: "Quilisma + Podatus", explications: "Frémissement ascendant du quilisma qui débouche sur un saut net vers l'aigu avec le podatus." }
        ]
    },

    // Quiz
    quiz: [
        {
            question: "Que signifie la lettre significative « c » (Celeriter) placée au-dessus d'un neume ?",
            options: [
                { texte: "De manière lourde et appuyée", correct: false },
                { texte: "Plus rapidement / avec légèreté", correct: true },
                { texte: "En maintenant la note à l'unisson", correct: false }
            ]
        }
    ],
    // Section "En apprendre plus sur les lettres significatives" (dynamique)
    lettresApprendre: [
        {
            type: "text",
            content: `En plus des neumes, les premiers manuscrits musicaux de St-Gall contiennent
            aussi des lettres ajoutées autour des neumes. Ces lettres expriment des nuances dont
            l'exécution est nécessaire dans le chant. Malheureusement, à part une ou deux lettres,
            la majorité de leurs significations vocales restent opaques. Pourtant, dans le <a href="https://www.e-codices.unifr.ch/de/csg/0381/6" target="_blank" class="underline text-amber-700 hover:text-amber-900">codex 381</a> de
            l'Abbaye de St-Gall, Notker "le
            bègue" (ca.840 - 912), moine de St-Gall, nous explique ligne après ligne les fonctions
            de ces lettres. Il crée donc pour chaque lettre une phrase sensée "expliquer" sa fonction.
            Or, en dehors d'une compréhension sémantique des mots qu'il utilise, il rédige ces notices
            sous forme poétique avec des allitérations et des consonances en rapport avec la lettre
            qu'elles illustrent (ex: <strong><span style="color: #eeb354;">M</span></strong>.
            <strong><span style="color: #eeb354;">m</span></strong>ediocriter <strong><span style="color: #eeb354;">m</span></strong>elodia<strong><span style="color: #eeb354;">m</span></strong> 
            <strong><span style="color: #eeb354;">m</span></strong>oderari 
            <strong><span style="color: #eeb354;">m</span></strong>endicando <strong><span style="color: #eeb354;">m</span></strong>e<strong><span style="color: #eeb354;">m</span></strong>orat).`
        },
        {
            type: "image",
            src: "images/Notkerlettre.png",
            legende: `les instructions de Notker. Les lettres <span style="color: #e60004;">a</span>,<span style="color: #e60004;">b</span>,<span style="color: #e60004;">c</span>,<span style="color: #e60004;">d</span> à gauche et leur descriptif ensuite`
        },
        {
            type: "text",
            content: `Ce qui donne pour toutes les lettres significatives :<br>
                    <span style="color: #e60004;">a</span>. <strong>Ut altius elevetur admonet.</strong><br>
                    <span style="color: #e60004;">b</span>. <strong>Sedem litteras quibus adiungitur ut bene idest multum extollatur vel gravetur sive teneatur belgicat.</strong><br>
                    <span style="color: #e60004;">c</span>. <strong>Ut cito vel celeriter dicatur certificat.</strong><br>
                    <span style="color: #e60004;">d</span>. <strong>Ut deprimatur demonstrat.</strong><br>
                    <span style="color: #e60004;">e</span>. <strong>Ut equaliter sonetur eloquitur.</strong><br>
                    <span style="color: #e60004;">f</span>. <strong>Ut cum fragore seu frendore feriatur efflagitat.</strong><br>
                    <span style="color: #e60004;">g</span>. <strong>Ut in gutture gradatim garruletur genuine gratulatur.</strong><br>
                    <span style="color: #e60004;">h</span>. <strong>Ut tantum in scriptura aspirat. Ita et in nota idipsum habitat.</strong><br>
                    <span style="color: #e60004;">i</span>. <strong>Iusum vel inferius insinuat, gravitudinemque pro g. interdum indicat.</strong><br>
                    <span style="color: #e60004;">k</span>. <strong>Licet apud latinos nihil valeat, apud nos tamen alemannos pro. x. greca positum, chlenche id est clange clamitat.</strong><br>
                    <span style="color: #e60004;">l</span>. <strong>Levare laetatur.</strong><br>
                    <span style="color: #e60004;">m</span>. <strong>Mediocriter melodiam moderari mendicando memorat.</strong><br>
                    <span style="color: #e60004;">n</span>. <strong>Notare hoc est noscitare notificat.</strong><br>
                    <span style="color: #e60004;">o</span>. <strong>Figuram sui Inore cantantis ordinat.</strong><br>
                    <span style="color: #e60004;">p</span>. <strong>Pressionem vel prensionem predicat.</strong><br>
                    <span style="color: #e60004;">q</span>. <strong>Insignificationibus notarum cur queratur ? Cum etiam in verbis ad nihil aliud scribatur nisi ut sequens .v. vim suam amittere queritur.</strong><br>
                    <span style="color: #e60004;">r</span>. <strong>Rectitudinem vel rasuram non abolitionis sed crispationis rogitat.</strong><br>
                    <span style="color: #e60004;">s</span>. <strong>Susum vel sursum scandere sibilat.</strong><br>
                    <span style="color: #e60004;">t</span>. <strong>Trahere vel tenere debere testatur.</strong><br>
                    <span style="color: #e60004;">u</span>. <strong>Licet amissa visua valde veluti vau greca vel hebrea velificat.</strong><br>
                    <span style="color: #e60004;">x</span>. <strong>Quamvis latina perse verba non inchoet, tamen expectare expetit.</strong><br>
                    <span style="color: #e60004;">y</span>. <strong>Apud latinos nihil ymnizat.</strong><br>
                    <span style="color: #e60004;">z</span>. <strong>Vero licet et ipsa mere greca, et ob id haut necessaria romanis, propter predictam tamen r. litter(a)e occupationem ad alia requirere in sua lingua "zitise". Ubicumque autem due vel tres aut plures littere ponuntur in uno loco, ex superiori interpretatione, maximeque illa quam de .b. dixi, quid sibi velint facile poterit adverti. Salutant te ellinici fratres, monentes sollicitum te fieri deratione embolismi triennis, ut absque errore gnarus esse valeas biennis, contempto precio divitiarum xerxis.</strong>`
        },
        {
            type: "imageCompare",
            original: "images/test_lettre1.png",
            annotee: "images/test_lettre2.png",
            legende: "Survolez l'image avec votre souris pour révéler l'emplacement des lettres significatives."
        },
        {
            type: "text",
            content: `Il faut donc aujourd'hui essayer de comprendre quel geste vocal Notker a voulu
            transcrire par ces phrases si ce n'est hermétiques, au moins mystérieuses. La tradition
            monastique nous transmet une grille de lecture progressive, mais de nombreuses zones d'ombre
            subsistent quant au phrasé exact et à l'articulation vocale recherchée au IXe siècle.`
        }
    ]
};
