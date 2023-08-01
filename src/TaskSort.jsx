import React from "react";

const TaskSort = ({ setSortCat, sortCat }) => {
  const handleChange = (e) => {
    setSortCat(e.target.value);
  };

  return (
    <div className="tasksort">
      <label
        className="side1label"
        title="Categorized according to Eisenhower Matrix"
      >
        Category
      </label>
      <select className="cat_goal_view" onChange={handleChange} value={sortCat}>
        <option value="All Goals">All Goals</option>
        <option value="Urgent And Important">Urgent And Important</option>
        <option value="Urgent But Not-Important">
          Urgent But Not-Important
        </option>
        <option value="Not-Urgent But Important">
          Not-Urgent But Important
        </option>
        <option value="Not-Urgent And Not-Important">
          Not-Urgent And Not-Important
        </option>
      </select>
    </div>
  );
};

export default TaskSort;
