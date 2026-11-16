siteData.lecture_notation_carree = [
    {
        titre: "Exemple 1 : Kyrie de la messe VIII",
        description: "Cliquez ou survolez les notes de la partition ci-dessous pour entendre leur hauteur et afficher leur nom.",
        audioGlobal: "audio/kyrie_global.mp3", // Optionnel : un audio global de la pièce
        imageGlobale: "images/partition_carree_1.png", // Ton image de partition en notation carrée
        zones: [
            // C'est ici que tu colleras les zones générées par ton script de découpage :
            { nom: "Do", x: 15.2, y: 42.5, w: 4.0, h: 5.0, audio: "audio/notes/do.mp3" },
            { nom: "Ré", x: 22.5, y: 38.0, w: 4.0, h: 5.0, audio: "audio/notes/re.mp3" },
            { nom: "Mi", x: 30.1, y: 33.5, w: 4.0, h: 5.0, audio: "audio/notes/mi.mp3" }
        ]
    }
];
