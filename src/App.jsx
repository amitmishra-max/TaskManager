import { useMemo } from 'react';
import useTaskManager from './hooks/useTaskManager';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const {
    addTask,
    deleteTask,
    toggleTaskCompletion,
    updateTask,
    clearCompleted,
    filter,
    setFilter,
    categoryFilter,
    setCategoryFilter,
    searchTerm,
    setSearchTerm,
    getFilteredTasks,
    getStats,
    tasks,
  } = useTaskManager();

  const filteredTasks = useMemo(() => getFilteredTasks(), [getFilteredTasks]);
  const stats = useMemo(() => getStats(), [getStats]);
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1> Smart Task Manager</h1>
          <p className="header-subtitle">
            Master your productivity with organized task management
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {/* Dashboard Section */}
          <section className="section">
            <Dashboard stats={stats} />
          </section>

          {/* Add Task Form */}
          <section className="section">
            <TaskForm onAddTask={addTask} />
          </section>

          {/* Filter Bar */}
          <section className="section">
            <FilterBar
              filter={filter}
              onFilterChange={setFilter}
              categoryFilter={categoryFilter}
              onCategoryChange={setCategoryFilter}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onClearCompleted={clearCompleted}
              totalCompleted={completedCount}
            />
          </section>

          {/* Tasks List */}
          <section className="section">
            <TaskList
              tasks={filteredTasks}
              onToggleCompletion={toggleTaskCompletion}
              onDeleteTask={deleteTask}
              onUpdateTask={updateTask}
            />
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <p>
          Keep organizing, keep achieving!  | Built with React hooks for
          productivity
        </p>
      </footer>
    </div>
  );
}

export default App;
