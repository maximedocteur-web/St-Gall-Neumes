window.mesZones = window.mesZones || [];

document.querySelectorAll('.interactive-container, [id^="interactive-container-carre"]').forEach(container => {
    const oldOverlay = container.querySelector('.draw-overlay');
    if (oldOverlay) oldOverlay.remove();

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
            // On te demande maintenant LE CODE du fichier audio
            let codeNote = prompt("Entrez le code de la note (ex: do1a, re2e, sibou...) - Laissez vide pour annuler :");
            
            if (codeNote) {
                codeNote = codeNote.toLowerCase().trim();
                
                // Le script déduit automatiquement le joli nom à afficher
                let nomAffiche = "";
                if (codeNote.startsWith("do")) nomAffiche = "Do";
                else if (codeNote.startsWith("re")) nomAffiche = "Ré";
                else if (codeNote.startsWith("mi")) nomAffiche = "Mi";
                else if (codeNote.startsWith("fa")) nomAffiche = "Fa";
                else if (codeNote.startsWith("sol")) nomAffiche = "Sol";
                else if (codeNote.startsWith("sib")) nomAffiche = "Sib";
                else if (codeNote.startsWith("si")) nomAffiche = "Si";
                else if (codeNote.startsWith("la")) nomAffiche = "La";
                else nomAffiche = codeNote; // Sécurité si tu tapes autre chose
                
                // Il génère la ligne prête à être copiée avec le bon nom ET le bon fichier
                window.mesZones.push(`        { nom: "${nomAffiche}", x: ${centerX.toFixed(1)}, y: ${centerY.toFixed(1)}, w: ${pctW.toFixed(1)}, h: ${pctH.toFixed(1)}, audio: "audio/notes/${codeNote}.mp3" }`);
                
                console.clear();
                console.log("    zones: [\n" + window.mesZones.join(",\n") + "\n    ]");
            } else {
                currentBox.remove();
            }
        }, 10);
    });
});
console.log("✅ OUTIL DE CADRAGE DES NOTES ACTIVÉ !");
