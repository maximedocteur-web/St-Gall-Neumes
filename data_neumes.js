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
            description: "<strong>2 notes</strong>, mouvement : descendant. Ce neume représente deux notes, la seconde étant plus basse (plus grave) que la première "+
            "mais on ne sait pas de combien elle est plus basse (une tierce ? une quarte ? une octave ?), rien ne l'indique "+
            "dans sa graphie. Vous pouvez voir dans la seconde image, sa forme épisémée qui revient très souvent. Ce petit "+
            "chapeau posé sur le neume indique que la première note est deux fois plus longue que la seconde.",
            images: [
                "images/clivis.png",
                "images/clivis_episeme.png"
                ]
        },
        {
            nom: "Pes",
            categorie: "simples",
            description: "<strong>2 notes</strong>, mouvement : ascendant. Ce neume représente deux notes, la seconde étant plus élevée (plus aigue) que la première"+
            " mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ?), rien ne l'indique"+
            " dans sa graphie. La première image est sa graphie standard, les trois autres images représentent ses graphies épisémées : la seconde image"+
            " montre la version <strong>long-court</strong>, la troisième <strong>court-long</strong>, la quatrième <strong>long-long</strong>.",
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
            description: "<strong>3 notes</strong>, mouvement : ascendant/descendant. Ce neume représente trois notes, "+
            "la deuxième étant plus élevée (plus aigue) que la première et la troisième plus basse (grave) que la deuxième "+
            "mais on ne sait pas de combien elles sont plus élevées/basses (une tierce ? une quarte ? une octave ? rien ne l'indique "+ 
            "dans sa graphie). La première image est sa graphie standard, la seconde image représente sa version épisémée où les trois "+
            "notes sont longues.",
            images: [
                "images/torculus.png",
                "images/torculus_episeme.png"
                ]
        },
        {
            nom: "Porrectus",
            categorie: "simples",
            description: "<strong>3 notes</strong>, mouvement : descendant/ascendant. Ce neume représente trois notes, la seconde étant plus basse (plus grave) que la première "+
            "et la troisième plus elevée (plus aigue) que la deuxième mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ? rien ne l'indique "+
            "dans sa graphie). Son image ici présente est sa graphie standard. Il arrive que la dernière note soit épisémée, dans ce cas, la virga finale porte un trait horizontal "+
            "à son sommet. Dans notre lecture actuelle des neumes, les deux première notes sont plus rapides que la dernière selon le schéma : <strong>1/2</strong> ; <strong>1/2</strong> ; <strong>1</strong> .",
            image: "images/porrectus.png"
        },
        {
            nom: "Scandicus",
            categorie: "simples",
            description: "<strong>3 notes</strong>, mouvement : ascendant/ascendant. Ce neume représente trois notes, la seconde étant plus élevée (plus aigue) que la première "+
            "et la troisième plus elevée (plus aigue) que la deuxième mais on ne sait pas de combien elles sont plus élevées (une tierce ? une quarte ? une octave ? rien ne l'indique "+
            "dans sa graphie). Les deux images sont des graphies standard, une a deux punctums et une à trois. Il existe une grande variété de graphies où l'on peut remplacer un ou des punctums "+
            "par des tractulus (voire des tractulus épisémés) et où la virga finale peut être sous toutes les formes indiquées précédemment (voir VIRGA)",
            images:[ 
                "images/scandicus_1.png",
                "images/scandicus_2.png"
                    ]
        },
        {
            nom: "Climacus",
            categorie: "simples",
            description: "<strong>3 notes</strong>, mouvement : descendant/ascendant. Ce neume représente trois notes (si il y en a plus, c'est simplement des punctums rajoutés après la virga),"+
            " toutes les notes après la virga étant à chaque fois plus basses les unes par rapport aux autres mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? "+
            "une octave ? rien ne l'indique dans sa graphie). Il existe une grande variété de graphies où l'on peut remplacer un ou des punctums "+
            "par des tractulus (voire des tractulus épisémés) et où la virga finale peut être sous toutes les formes indiquées précédemment (voir VIRGA).",
            images: [
                "images/climacus_2p.png",
                "images/climacus_3p.png"
                ]
        },
        {
            nom: "Torculus resupinus",
            categorie: "simples",
            description: "<strong>4 notes</strong>, mouvement : ascendant/descendant/ascendant. Ce neume représente quatre notes, c'est simplement un torculus avec une virga finale qui est placée"+
            " plus aigue par rapport à la dernière note du torculus (donc 4e note plus élevée que la 3e note).",
            image: "images/torculus_resupinus.png"
        },
        {
            nom: "Porrectus flexus",
            categorie: "simples",
            description: "<strong>4 notes</strong>, mouvement : descendant/ascendant/descendant. Ce neume représente quatre notes, c'est simplement un porrectus avec une quatrième note qui est placée"+
            " plus graves par rapport à la dernière note du porrectus (donc 4e note plus grave que la 3e note)",
            image: "images/porrectus_flexus.png"
        },
        {
            nom: "Pes sub-bipunctis",
            categorie: "simples",
            description: "<strong>4 notes</strong>, mouvement : ascendant/descendant/descendant. Ce neume représente quatre notes, c'est simplement un pes suivi de deux punctums qui sont plus"+
            " graves par rapport à la deuxième note (3e note plus basse que la 2e et 4e plus basse que la 3e)",
            image: "images/pes_sub_bipunctis.png"
        },
        {
            nom: "Scandicus flexus",
            categorie: "simples",
            description: "<strong>4 notes</strong>, mouvement : ascendant/ascendant/descendant. Ce neume représente quatre notes, c'est simplement une clivis précédée de deux punctums (ou plus)"+ 
            "mais son nom a voulu conserver le scandicus, ainsi, on peut aussi le comprendre comme un scandicus avec une note qui redescend après celui-ci.",
            image: "images/scandicus_flexus.png"
        },
        {
            nom: "Quilisma",
            categorie: "ornementaux",
            description: "C'est un neume ornementé qui peut avoir deux ou trois boucles.",
            images: [
                "images/quilisma.png",
                "images/quilisma3.png"
                ]
        },
        {
            nom: "Salicus",
            categorie: "ornementaux",
            description: "Neume ornementé en trois partie, un punctum, le signe ornemental et une virga.",
            image: "images/salicus.png"
        },
        {
            nom: "oriscus",
            categorie: "ornementaux",
            description: "C'est un ornement à lui tout seul qui peut se présenter seul ou en composition lorsqu'il se toruve accolé à d'autres neumes. Par exemple, lorsqu'on le fait suivre"+
            "par une virga (image2), on l'apelle <strong>pes quassus</strong> ou on peut aussi bien le trouver collé à une clivis (épisémée dans le cas ici présenté dans l'image3).",
            images: [
                "images/oriscus.png",
                "images/pes_quassus.png",
                "images/oriscus2.png"
                ]
        },
        {
            nom: "Pressus",
            categorie: "ornementaux",
            description: "Neume ornementé qui peut avoir deux graphies. Pour faire TRÈS simple, on peut découper ce neume en trois parties, une virga, une vague et un punctum. Quand ces trois"+
            " éléments sont réunis, le pressus est dit <strong>maior</strong> (grand) et si il manque la virga au début, il est dit <strong>minor</strong> (petit). Dans la première image, vous"+
            " avez un pressus minor et dans la seconde image un pressus maior. La virga et le punctum ont tous deux leur rôle habituel et l'ornemente st en fait cette vague. Quand le pressus est"+
            " minor, on enchaîne l'ornement directement à la fin du neume qui le précède et on fait le punctum."+
            "Quand il est maior, on prend le temps de bien faire la virga puis l'ornement et le punctum.",
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
        },
        {
            nom: "apostropha",
            categorie: "ornementaux",
            description: "Neume ornementé en trois partie, un punctum, le signe ornemental et une virga.",
            images: [
                "images/apostropha.png",
                "images/distropha.png",
                "images/distropha_episemee.png",
                "images/tristropha.png",
                "images/tristropha_liquescente.png"
            ]
        }
]
