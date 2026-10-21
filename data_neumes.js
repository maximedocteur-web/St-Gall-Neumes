// On remplit le tiroir "neumes" du grand sac siteData
siteData.neumes = [
    {
        nom: "Punctum",
        categorie: "simples",
        description: "<strong>1 note</strong>. Il est normalement employé en composition,"+
        "c'est-à-dire qu'on le trouve dans d'autres neumes plus complexes. Il n'est, me semble-t-il jamais utilisé seul,"+
        "c'est à dire que l'on est sensé le trouver uniquement dans d'autres neumes mais jamais tout seul,"+
        "il n'a pas d'autonomie en tant que neume. Il ne possède pas de forme avec épisème car en cas d'alongement"+
        "de la note dans un neume en composition, on lui préférera le tractulus, voire le tractulus épisémé.",
        image: "images/punctum.png"
    },
    {
            nom: "Tractulus",
            categorie: "simples",
            description: "<strong>1 note</strong>. Il est employé seul ou en composition,"+
            " c'est-à-dire qu'on peut aussi le trouver dans d'autres neumes plus complexes. Il possède une forme"+
            " épisémée qui allonge sa valeur du simple au double. La dernière graphie où il est en forme de C renversé"+
            " est la forme qu'il prend lorqu'il est liquescent.",
            images: [
                "images/tractulus.png",
                "images/tractulus_episeme.png",
                "images/tractulus_liquescent.png"
                ]
        },
        {
            nom: "Virga",
            categorie: "simples",
            description: "<strong>1 note</strong>. Elle peut être employée seule ou en composition. "+
            "Sa première graphie est sa forme de base, la seconde est la version épisémée et la troisième version sa graphie liquescente."+
            " Sa version épisémée allonge sa valeur du simple au double.",
            images: [ "images/virga.png",
                     "images/virga_episemee.png",
                     "images/virga_liquescente.png"
                     ]
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
            description: `<strong>3 notes</strong>, mouvement : ascendant/ascendant. Ce neume représente trois notes, la seconde étant plus élevée (plus aigue) que la première
            et la troisième plus elevée (plus aigue) que la deuxième mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ? rien ne l'indique 
            dans sa graphie). La première image est sa graphie standard (mais assez peu usitée sous cette forme), la seconde représente le même neume mais avec trois punctums au lieu de deux.`,
            images:[ 
                "images/scandicus_1.png",
                "images/scandicus_2.png"
                    ]
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
]
