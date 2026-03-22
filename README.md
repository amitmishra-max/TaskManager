# TaskManager (React + Vite)

A polished React task manager app built with Vite.

## 🚀 Overview

This project is a fully-featured smart task manager that includes:

- Add new tasks (Title, Priority, Category, optional Due Date)
- Edit task title/priority/category/due date inline
- Toggle completion status (Pending / Completed)
- Delete tasks one-by-one
- Bulk clear completed tasks
- Search tasks by title
- Filter tasks by status (All / Pending / Completed)
- Filter tasks by category (All / Work / Personal / Shopping / Health / Other)
- Dashboard stats (total, completed, pending, high priority, completion rate)
- Dark mode / Light mode toggle with localStorage persistence
- Task persistence in localStorage via custom hook (`useLocalStorage`)

## 🧩 Features

- `src/hooks/useTaskManager.js` - all task CRUD and filter logic
- `src/components/TaskForm.jsx` - add task form
- `src/components/TaskList.jsx` + `TaskItem.jsx` - task display + edits
- `src/components/FilterBar.jsx` - search + status + category + clear button
- `src/components/Dashboard.jsx` - quick summary cards & progress bar
- `src/components/ThemeToggle.jsx` - light/dark theme switch
- `src/hooks/useTheme.js` - theme state + localStorage and root CSS attribute update

## 🛠️ Prerequisites

- Node.js 18+ (recommended)
- npm (bundled with Node.js) or yarn

## 📦 Setup

1. Navigate into the project folder.
2. Install dependencies:

```bash
npm install
# or
# yarn install
```

## ▶️ Run locally

```bash
npm run dev
# or
# yarn dev
```

Open the URL shown in terminal (default `http://localhost:5173`).

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

- `src/main.jsx` — App entry point
- `src/App.jsx` — layout with dashboard, filters, form, list + theme hook
- `src/App.css` — root theme design and layout
- `src/components` — modular UI components
- `src/hooks/useLocalStorage.js` — local storage helper
- `src/hooks/useTaskManager.js` — task state management
- `src/hooks/useTheme.js` — theme toggle logic

## 💡 Notes

- Theme is stored in localStorage as `theme`, so preference persists between refreshes.
- Tasks are stored under `tasks` in localStorage.
- Edit and filter state are fully reactive with React hooks.

## 🛠️ Extend

Ideas to keep building:
- due-date reminders and overdue highlighting
- task priority sorting and custom order drag-and-drop
- user authentication and multi-user data
- API-backed persistence with Node/Express + database

