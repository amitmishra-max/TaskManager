# firstapp (React + Vite)

A simple React task manager app built with Vite.

## 🚀 Overview

- React + Vite starter project
- task list CRUD (add, edit, toggle complete, delete, filter)
- due dates and category tags for each task
- local storage persistence via `src/hooks/useLocalStorage.js`
- components in `src/components`: `Dashboard`, `FilterBar`, `TaskForm`, `TaskList`, `TaskItem`
- custom hook in `src/hooks/useTaskManager.js`

## 🛠️ Prerequisites

- Node.js 18+ (recommended)
- npm (bundled with Node.js) or yarn

## 📦 Setup

1. Open terminal in project folder
2. Install dependencies:

```bash
npm install
# or
# yarn
```

## ▶️ Run locally

```bash
npm run dev
# or
# yarn dev
```

Open `http://localhost:5173` (or address shown in terminal).

## 🧪 Build for production

```bash
npm run build
# or
# yarn build
```

## 🔍 Lint

```bash
npm run lint
# or
# yarn lint
```

## 📁 Project structure

- `src/main.jsx` — app bootstrap
- `src/App.jsx` — top-level layout
- `src/components` — UI components for tasks and filters
- `src/hooks/useLocalStorage.js` — local storage helper
- `src/hooks/useTaskManager.js` — task state and actions

## ❤️ Notes

Tasks are persisted in `localStorage`, so browser refresh does not lose data.

Feel free to extend with features like edit task, due dates, and categories.
