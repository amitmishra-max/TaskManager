import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onToggleCompletion, onDeleteTask, onUpdateTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📭</div>
        <h3>No tasks found</h3>
        <p>Try adjusting your filters or add a new task to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2>📝 Tasks ({tasks.length})</h2>
      </div>
      <div className="tasks-container">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleCompletion={onToggleCompletion}
            onDelete={onDeleteTask}
            onUpdate={onUpdateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
