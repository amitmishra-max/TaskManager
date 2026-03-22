import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useTaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Add a new task
  const addTask = useCallback((title, priority = 'medium', category = 'work', dueDate = null) => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      priority,
      category,
      createdAt: new Date().toISOString(),
      dueDate: dueDate ? new Date(dueDate).toISOString() : null,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    return newTask;
  }, [setTasks]);

  // Delete a task
  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, [setTasks]);

  // Toggle task completion
  const toggleTaskCompletion = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  // Update a task
  const updateTask = useCallback((id, updates) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      )
    );
  }, [setTasks]);

  // Clear all completed tasks
  const clearCompleted = useCallback(() => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }, [setTasks]);

  // Filter and search tasks
  const getFilteredTasks = useCallback(() => {
    let filtered = tasks;

    // Apply status filter
    if (filter === 'completed') {
      filtered = filtered.filter((task) => task.completed);
    } else if (filter === 'pending') {
      filtered = filtered.filter((task) => !task.completed);
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((task) => task.category === categoryFilter);
    }

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [tasks, filter, categoryFilter, searchTerm]);

  // Get dashboard statistics
  const getStats = useCallback(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;
    const highPriority = tasks.filter(
      (task) => task.priority === 'high' && !task.completed
    ).length;

    return {
      total,
      completed,
      pending,
      completionRate: total === 0 ? 0 : Math.round((completed / total) * 100),
      highPriority,
    };
  }, [tasks]);

  return {
    tasks,
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
  };
};

export default useTaskManager;
