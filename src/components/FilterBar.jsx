import './FilterBar.css';

function FilterBar({
  filter,
  onFilterChange,
  categoryFilter,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  onClearCompleted,
  totalCompleted,
}) {
  return (
    <div className="filter-bar">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
          onClick={() => onFilterChange('pending')}
        >
          ⏳ Pending
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          ✅ Completed
        </button>
      </div>

      <select
        className="category-filter"
        value={categoryFilter}
        onChange={(e) => onCategoryChange(e.target.value)}
        title="Filter by category"
      >
        <option value="all">All Categories</option>
        <option value="work">💼 Work</option>
        <option value="personal">👤 Personal</option>
        <option value="shopping">🛒 Shopping</option>
        <option value="health">❤️ Health</option>
        <option value="other">📌 Other</option>
      </select>

      {totalCompleted > 0 && (
        <button
          className="btn-clear-completed"
          onClick={onClearCompleted}
          title="Delete all completed tasks"
        >
          Clear Completed ({totalCompleted})
        </button>
      )}
    </div>
  );
}

export default FilterBar;
