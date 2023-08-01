import React, { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { AiOutlineClear } from "react-icons/ai";

const TaskInput = ({ goalSet, editValues, setSelectedForEdit }) => {
  const [goalInput, setGoalInput] = useState("");
  const [catInput, setCatInput] = useState("Urgent And Important");

  useEffect(() => {
    if (editValues && editValues.length === 1) {
      const { goal, category } = editValues[0];
      setGoalInput(goal);
      setCatInput(category);
    }
  }, [editValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goalInput) return;
    const id =
      editValues && editValues.length === 1
        ? editValues[0].id
        : crypto.randomUUID();
    const newGoal = {
      id,
      goal: goalInput,
      category: catInput,
    };
    goalSet(newGoal);
    setGoalInput("");
    setCatInput("Urgent And Important");
  };

  const handleReset = () => {
    setGoalInput("");
    setCatInput("Urgent And Important");
    setSelectedForEdit(null);
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <label>What Is Your Goal?</label>
      <input
        value={goalInput}
        type="text"
        className="goal_inp"
        placeholder="Enter your goal here"
        onChange={(e) => {
          setGoalInput(e.target.value);
        }}
      />
      <label>Which Category Does The Goal Fit In?</label>
      <select
        value={catInput}
        className="cat_goal"
        onChange={(e) => {
          setCatInput(e.target.value);
        }}
      >
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
      <div className="buttons">
        <button className="submit" type="submit">
          Set Goal
          <BiPlusMedical size={16} />
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
          <AiOutlineClear size={18} />
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
