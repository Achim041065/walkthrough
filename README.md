
## 📦 Repositories
[Youtube Video UI5 zum Lernen](https://www.youtube.com/watch?v=C9cK2Z2JDLg)

[GitHub Repositories fürs den Kurs](https://github.com/brandoncaulfield/sap-ui5-walkthrough/commits/main?before=26f804cea86ce1fd92e22d9f287fec7f273ca46f+35&branch=main)

GitHub Repository: (https://github.com/Achim041065/walkthrough.git)

Start Chrome in VSC console: 
```code
Start-Process "chrome" "http://localhost:8080/index.html"
```
```code
Start-Process "msedge" "http://localhost:8080/index.html"
```
## GIT Befehle

Welche Dateien wurden verändert: 
```code 
git status
```
[Link zur Syntax zn Dateien zu ignorieren - wird in gitignore geschrieben](https://github.com/github/gitignore)


## 🛠️ GIT Initialisierung in VSCode
```bash
git init
git remote add origin https://github.com/Achim041065/walkthrough.git
git branch -M main && git push -u origin main

================================================================================================================================
PS C:\UI5\SAP-UI5-WALKTHROUGH> git init
Initialized empty Git repository in C:/UI5/SAP-UI5-WALKTHROUGH/.git/
PS C:\UI5\SAP-UI5-WALKTHROUGH> git config user.name "Local User"
PS C:\UI5\SAP-UI5-WALKTHROUGH> git config user.email "a.fork@t-online.de"
PS C:\UI5\SAP-UI5-WALKTHROUGH> git add -A && git commit -m "Initial commit: add project files and .gitignore"
PS C:\UI5\SAP-UI5-WALKTHROUGH> git config user.email "a.fork@t-online.de"
PS C:\UI5\SAP-UI5-WALKTHROUGH> git add -A && git commit -m "Initial commit: add project files and .gitignore"
PS C:\UI5\SAP-UI5-WALKTHROUGH> git add -A && git commit -m "Initial commit: add project files and .gitignore"
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'ui5.yaml', LF will be replaced by CRLF the next time Git touches it
[main (root-commit) 0d0db19] Initial commit: add project files and .gitignore
warning: in the working copy of 'ui5.yaml', LF will be replaced by CRLF the next time Git touches it
[main (root-commit) 0d0db19] Initial commit: add project files and .gitignore
[main (root-commit) 0d0db19] Initial commit: add project files and .gitignore
 10 files changed, 254 insertions(+)
 10 files changed, 254 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 package.json
 create mode 100644 ui5.yaml
 create mode 100644 webapp/component.js
 create mode 100644 webapp/controller/App.controller.js
 create mode 100644 webapp/i18n/i18n.properties
 create mode 100644 webapp/index.html
 create mode 100644 webapp/index.js
 create mode 100644 webapp/manifest.json
 create mode 100644 webapp/view/App.view.xml
PS C:\UI5\SAP-UI5-WALKTHROUGH> git remote add origin https://github.com/Achim041065/walkthrough.git
PS C:\UI5\SAP-UI5-WALKTHROUGH> git branch -M main && git push -u origin main
info: please complete authentication in your browser...
fatal: Die Anforderung wird nicht unterstützt
Enumerating objects: 16, done.
Counting objects: 100% (16/16), done.
Delta compression using up to 12 threads
Compressing objects: 100% (13/13), done.
Writing objects: 100% (16/16), 3.53 KiB | 722.00 KiB/s, done.
Total 16 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Achim041065/walkthrough.git
 * [new branch]      main -> main

================================================================================================================================

```

# Überschrift im Codeblock
[Repository](https://github.com/Achim041065/walkthrough.git)

## Projektstruktur
```Code
walkthrough/
├─ .gitignore
├─ package.json
├─ ui5.yaml
├─ README.md
└─ webapp/
   ├─ index.html
   ├─ index.js
   ├─ manifest.json
   ├─ Component.js
   ├─ controller/
   │  └─ App.controller.js
   ├─ view/
   │  └─ App.view.xml
   ├─ model/
   │  └─ models.js
   ├─ i18n/
   │  └─ i18n.properties
   ├─ css/
   │  └─ style.css
   └─ images/
      └─ logo.png

```

Als Markdown:

## Projektstruktur

### webapp/ 
  - controller/ → Controller-Logik
  - view/ → XML/JS Views
  - model/ → Modelle und Mock-Daten
  - i18n/ → Übersetzungen
  - css/, images/ → Assets
- ui5.yaml → UI5 Build-Konfiguration
- package.json → npm-Skripte und Abhängigkeiten
