import { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('work');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, priority, category, dueDate || null);
      setTitle('');
      setPriority('medium');
      setCategory('work');
      setDueDate('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-content">
        <div className="form-input-section">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-input"
            maxLength={100}
            autoFocus
          />
          <span className="char-count">{title.length}/100</span>
        </div>

        <div className="form-controls">
          <div className="form-selects">
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="form-select"
            >
              <option value="low">🟢 Low</option>
              <option value="medium">🟡 Medium</option>
              <option value="high">🔴 High</option>
            </select>

            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="work">💼 Work</option>
              <option value="personal">👤 Personal</option>
              <option value="shopping">🛒 Shopping</option>
              <option value="health">❤️ Health</option>
              <option value="other">📌 Other</option>
            </select>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-select date"
              title="Optional due date"
            />
          </div>

          <button type="submit" className="btn-add" disabled={!title.trim()}>
            <span className="btn-add-icon">+</span>
            <span className="btn-add-text">Add</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
