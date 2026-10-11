const siteData = {
    // Neumes (simples ou ornementaux)
    neumes: [
        {
            nom: "Punctum",
            categorie: "simples",
            description: `1 note. Il est normalement employé en composition,
            c'est-à-dire qu'on le trouve dans d'autres neumes plus complexes. Il n'est, me semble-t-il jamais utilisé seul, 
            c'est à dire que l'on est sensé le trouver uniquement dans d'autres neumes mais jamais tout seul, 
            il n'a pas d'autonomie en tant que neume. Il ne possède pas de forme avec épisème car en cas d'alongement
            de la note dans un neume en composition, on lui préférera le tractulus, voire le tractulus épisémé.`,
            image: "images/punctum.png"
        },
        {
            nom: "Clivis",
            categorie: "simples",
            description: `2 notes, mouvement : descendant. Ce neume représente deux notes, la seconde étant plus basse (plus grave) que la première
            mais on ne sait pas de combien elle est plus basse (une tierce ? une quarte ? une octave ? rien ne l'indique)
            dans sa graphie. Vous pouvez voir dans la seconde image, sa forme épisémée qui revient très souvent. Le petit
            chapeau posé sur le neume indique que la première note est plus longue que la seconde.`,
            images: [
                {image: "images/clivis.png"},
                {image: "images/clivis_episeme.png"}
            ]
        },
        {
            nom: "Pes",
            categorie: "simples",
            description: `2 notes, mouvement : ascendant. Ce neume représente deux notes, la seconde étant plus élevée (plus aigue) que la première
            mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ? rien ne l'indique 
            dans sa graphie). La première image est sa graphie standard, les trois autres images représentent ses graphies épisémées : la seconde image
            montre la version "court-long", la troisième "long-court, la quatrième "long-long".`,
            images: [
                {image: "images/pes.png"},
                {image: "images/pes_episeme1.png"}
            ]
        },
        {
            nom: "torculus",
            categorie: "simples",
            description: `3 notes, mouvement : ascendant/descendant. Ce neume représente trois notes, la deuxième étant plus élevée (plus aigue) que la première
            et la troisième plus basse (grave) que la deuxième mais on ne sait pas de combien elles sont plus élevées/basses (une tierce ? une quarte ? une octave ? rien ne l'indique 
            dans sa graphie). La première image est sa graphie standard,`,
            image: "images/torculus.png"
        },
        {
            nom: "porrectus",
            categorie: "simples",
            description: `3 notes, mouvement : descendant/ascendant. Ce neume représente trois notes, la seconde étant plus basse (plus grave) que la première
            et la troisième plus elevée (plus aigue) que la deuxième mais on ne sait pas de combien elle est plus élevée (une tierce ? une quarte ? une octave ? rien ne l'indique 
            dans sa graphie). La première image est sa graphie standard,`,
            image: "images/podatus.png"
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
        }
    ],

    // Lettres significatives
    lettres: [
        { sigle: "c (Celeriter)", texte: "Rapidité, exécuter le neume plus vite." },
        { sigle: "t (Tarditer)", texte: "Lenteur, allonger la durée du neume." },
        { sigle: "m (Mediocriter)", texte: "Nuance modérée." },
        { sigle: "e (Equaliter)", texte: "Égalité stricte des notes." }
    ],

    // Analyse d'un chant complet
    analyseChant: {
        titre: "Incipit d'antienne type",
        description: "Observez la succession des signes de gauche à droite, comme l'œil doit le faire en lisant le manuscrit.",
        imageGlobale: "images/chant-exemple.png", // Mets ton image globale de partition ici si tu en as une
        audioGlobal: "audio/chant-exemple.mp3",   // Mets ton fichier audio global ici si tu en as un
        etapes: [
            { signe: "1. Virga + Punctum", explications: "Le chant s'ouvre sur un élan vers le haut (Virga) immédiatement stabilisé par un point de repos (Punctum)." },
            { signe: "2. Clivis avec lettre 't'", explications: "Descente mélodique ralentie par la lettre significative tarditer pour marquer une inflexion." },
            { signe: "3. Quilisma + Podatus", explications: "Frémissement ascendant du quilisma qui débouche sur un saut net vers l'aigu avec le podatus." }
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
    ]
};
