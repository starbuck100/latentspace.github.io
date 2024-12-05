# Retro Portfolio Website

Eine statische Portfolio-Website im Retro-Bit-Style, gehostet auf GitHub Pages.

## Setup-Anleitung für GitHub Pages

1. Erstellen Sie ein neues Repository auf GitHub:
   - Gehen Sie zu [GitHub](https://github.com)
   - Klicken Sie auf "New Repository"
   - Nennen Sie das Repository `[IhrUsername].github.io`
   - Setzen Sie es auf "Public"
   - Erstellen Sie das Repository

2. Lokales Repository einrichten:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[IhrUsername]/[IhrUsername].github.io.git
   git push -u origin main
   ```

3. GitHub Pages aktivieren:
   - Gehen Sie zu den Repository-Einstellungen
   - Scrollen Sie zu "GitHub Pages"
   - Wählen Sie unter "Source" den "main" Branch
   - Klicken Sie auf "Save"

Ihre Website wird nun unter `https://[IhrUsername].github.io` verfügbar sein.

## Anpassung der Website

1. Bearbeiten Sie die `index.html`:
   - Aktualisieren Sie den Inhalt im "Über Mich" Bereich
   - Fügen Sie Ihre eigenen Projekte hinzu
   - Aktualisieren Sie die Kontaktinformationen

2. Passen Sie das Design in `styles.css` an:
   - Ändern Sie die Farbvariablen im `:root` Selektor
   - Passen Sie die Schriftarten und Größen an
   - Modifizieren Sie die Animationen und Effekte

## Lokale Entwicklung

Um die Website lokal zu testen, öffnen Sie einfach die `index.html` in Ihrem Browser.

## Aktualisierungen veröffentlichen

Nach jeder Änderung:
```bash
git add .
git commit -m "Beschreibung der Änderungen"
git push
```

Die Änderungen werden automatisch auf GitHub Pages aktualisiert (kann einige Minuten dauern).
