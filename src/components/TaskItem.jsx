import { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggleCompletion, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(task.title);
  const [editingPriority, setEditingPriority] = useState(task.priority);
  const [editingCategory, setEditingCategory] = useState(task.category);
  const [editingDueDate, setEditingDueDate] = useState(
    task.dueDate ? task.dueDate.split('T')[0] : ''
  );

  const getPriorityEmoji = (priority) => {
    switch (priority) {
      case 'high':
        return '🔴';
      case 'medium':
        return '🟡';
      case 'low':
        return '🟢';
      default:
        return '⚪';
    }
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      work: '💼',
      personal: '👤',
      shopping: '🛒',
      health: '❤️',
      other: '📌',
    };
    return emojis[category] || '📌';
  };

  const formattedDate = new Date(task.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  const dueDateLabel = task.dueDate
    ? new Date(task.dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  const isOverdue = task.dueDate && !task.completed && new Date(task.dueDate) < new Date();

  const handleSave = () => {
    if (!editingTitle.trim()) return;

    onUpdate(task.id, {
      title: editingTitle.trim(),
      priority: editingPriority,
      category: editingCategory,
      dueDate: editingDueDate ? new Date(editingDueDate).toISOString() : null,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingTitle(task.title);
    setEditingPriority(task.priority);
    setEditingCategory(task.category);
    setEditingDueDate(task.dueDate ? task.dueDate.split('T')[0] : '');
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          className="checkbox-input"
        />
      </div>

      <div className="task-content">
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              value={editingTitle}
              onChange={(e) => setEditingTitle(e.target.value)}
              className="task-input"
              maxLength={100}
            />
            <div className="edit-controls">
              <select
                value={editingPriority}
                onChange={(e) => setEditingPriority(e.target.value)}
                className="form-select"
              >
                <option value="low">🟢 Low</option>
                <option value="medium">🟡 Medium</option>
                <option value="high">🔴 High</option>
              </select>
              <select
                value={editingCategory}
                onChange={(e) => setEditingCategory(e.target.value)}
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
                value={editingDueDate}
                onChange={(e) => setEditingDueDate(e.target.value)}
                className="form-select date"
              />
              <button className="btn-save" onClick={handleSave}>
                💾
              </button>
              <button className="btn-cancel" onClick={handleCancel}>
                ❌
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="task-title">{task.title}</div>
            <div className="task-meta">
              <span className="task-badge">
                {getCategoryEmoji(task.category)} {task.category}
              </span>
              <span className="task-badge priority">
                {getPriorityEmoji(task.priority)} {task.priority}
              </span>
              <span className="task-date">Created: {formattedDate}</span>
              {dueDateLabel && (
                <span className={`task-badge ${isOverdue ? 'overdue' : 'due'}`}>
                  ⏰ Due: {dueDateLabel}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {!isEditing && (
        <button
          className="btn-edit"
          onClick={() => setIsEditing(true)}
          title="Edit task"
        >
          ✏️
        </button>
      )}

      <button
        className="btn-delete"
        onClick={() => onDelete(task.id)}
        title="Delete task"
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;
