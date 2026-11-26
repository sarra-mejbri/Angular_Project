# ConfEvents – Atelier Angular 21 : Composants & Signals

Application Angular 21 + Bootstrap 5 qui affiche une liste statique de conférences.

## Aperçu

![Page Home](docs/capture-home.jpeg)

## Objectifs de l'atelier

- Créer un composant **Home** et l'appeler dans le composant racine
- Afficher une liste statique de conférences (`picture`, `title`, `date`, `adress`, `available_Places`)
- Choisir un template et un design basés sur **Bootstrap**
- Finaliser le **footer**

## Notions du cours utilisées

| Notion | Où |
|---|---|
| Composants standalone (`ng g c`) | `header`, `footer`, `home` |
| Signals (`signal()`) | liste des conférences, année du footer |
| Interpolation `{{ }}` | titre, adresse, nombre de places |
| Property binding `[src]`, `[alt]`, `[class.x]` | images, couleur des badges |
| Control Flow `@for`, `@if / @else`, `@empty` | affichage des cartes |
| Pipe `date` (locale fr-FR) | dates des conférences |

## Structure

```
src/app/
├── models/
│   └── conference.ts        # interface Conference
├── pages/
│   └── home/                # liste des conférences
├── shared/
│   ├── header/              # barre de navigation
│   └── footer/              # pied de page
├── app.ts / app.html        # composant racine
└── app.config.ts            # locale française
```

## Technologies

- Angular 21
- Bootstrap 5.3
- TypeScript

## Lancer le projet

```bash
npm install
ng serve
```

Puis ouvrir http://localhost:4200/