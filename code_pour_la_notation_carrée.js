window.mesZones = window.mesZones || [];

document.querySelectorAll('.interactive-container').forEach(container => {
    // Si tu relances le script, on enlève l'ancien calque pour ne pas faire de doublons
    const oldOverlay = container.querySelector('.draw-overlay');
    if (oldOverlay) oldOverlay.remove();

    // On crée un calque transparent par-dessus l'image pour dessiner
    const overlay = document.createElement('div');
    overlay.className = 'draw-overlay';
    overlay.style.position = 'absolute';
    overlay.style.inset = '0';
    overlay.style.cursor = 'crosshair';
    overlay.style.zIndex = '100';
    container.appendChild(overlay);

    let isDrawing = false;
    let startX = 0, startY = 0;
    let currentBox = null;

    overlay.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isDrawing = true;
        const rect = overlay.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;

        currentBox = document.createElement('div');
        currentBox.style.position = 'absolute';
        currentBox.style.border = '2px solid red';
        currentBox.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        currentBox.style.pointerEvents = 'none';
        
        container.appendChild(currentBox);
    });

    overlay.addEventListener('mousemove', function(e) {
        if (!isDrawing) return;
        const rect = overlay.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;

        const minX = Math.min(startX, currentX);
        const minY = Math.min(startY, currentY);
        const w = Math.abs(currentX - startX);
        const h = Math.abs(currentY - startY);

        currentBox.style.left = (minX / rect.width * 100) + '%';
        currentBox.style.top = (minY / rect.height * 100) + '%';
        currentBox.style.width = (w / rect.width * 100) + '%';
        currentBox.style.height = (h / rect.height * 100) + '%';
    });

    overlay.addEventListener('mouseup', function(e) {
        if (!isDrawing) return;
        isDrawing = false;
        
        const rect = overlay.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;

        const minX = Math.min(startX, currentX);
        const minY = Math.min(startY, currentY);
        const w = Math.abs(currentX - startX);
        const h = Math.abs(currentY - startY);

        const pctW = (w / rect.width) * 100;
        const pctH = (h / rect.height) * 100;
        const pctMinX = (minX / rect.width) * 100;
        const pctMinY = (minY / rect.height) * 100;

        const centerX = pctMinX + (pctW / 2);
        const centerY = pctMinY + (pctH / 2);

        if (pctW < 0.5 || pctH < 0.5) {
            currentBox.remove();
            return;
        }

        setTimeout(() => {
            let nom = prompt("Nom de la note ? (ex: Do, Ré, Mi, Sib... - Laissez vide pour annuler)");
            
            if (nom) {
                // On formate le nom de fichier audio automatiquement en minuscules (ex: "sib" -> "sib.mp3")
                let audioNom = nom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                
                window.mesZones.push(`        { nom: "${nom}", x: ${centerX.toFixed(1)}, y: ${centerY.toFixed(1)}, w: ${pctW.toFixed(1)}, h: ${pctH.toFixed(1)}, audio: "audio/notes/${audioNom}.mp3" }`);
                console.clear();
                console.log("    zones: [\n" + window.mesZones.join(",\n") + "\n    ]");
            } else {
                currentBox.remove();
            }
        }, 10);
    });
});
console.log("✅ OUTIL DE CADRAGE DES NOTES ACTIVÉ ! Glissez-déposez sur les notes de la partition.");
