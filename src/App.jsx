import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskSort from "./TaskSort";
import Tasklist from "./Tasklist";

const App = () => {
  const initialTask = [
    {
      id: 1,
      goal: "Design Web App",
      category: "Urgent But Not-Important",
    },
    {
      id: 2,
      goal: "Code Web App",
      category: "Urgent And Important",
    },
    {
      id: 3,
      goal: "Analyze Web App",
      category: "Not-Urgent But Important",
    },
    {
      id: 4,
      goal: "Hangout With Friends",
      category: "Not-Urgent And Not-Important",
    },
  ];

  const [goals, setGoals] = useState(initialTask);
  const [sortCat, setSortCat] = useState("All Goals");
  const [selectedForEdit, setSelectedForEdit] = useState(null);

  const deleteGoal = (id) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== id);

      const goalsInCurrentCategory = updatedGoals.filter(
        (goal) => goal.category === sortCat
      );

      if (goalsInCurrentCategory.length === 0) {
        setSortCat("All Goals");
      }

      return updatedGoals;
    });
  };

  const editGoal = (id) => {
    setSelectedForEdit(
      goals.filter((g) => {
        return g.id === id;
      })
    );
  };

  const addGoal = (goal) => {
    const existingGoalIndex = goals.findIndex((g) => g.id === goal.id);
    if (existingGoalIndex !== -1) {
      const updatedGoals = [...goals];
      updatedGoals[existingGoalIndex] = goal;
      setGoals(updatedGoals);
      setSelectedForEdit(null);
    } else {
      setGoals((goalss) => [...goalss, goal]);
    }
  };

  return (
    <div className="app">
      <h4 className="heading">
        <div
          className={goals.length != 0 ? "circleheadgreen" : "circleheadred"}
        ></div>
        Goal Tracker
      </h4>
      <div className="side1">
        <TaskSort setSortCat={setSortCat} sortCat={sortCat} />
        <Tasklist
          goals={goals}
          sortCat={sortCat}
          taskDel={deleteGoal}
          taskEdit={editGoal}
        />
      </div>
      <div className="side2">
        <TaskInput
          goalSet={addGoal}
          editValues={selectedForEdit}
          setSelectedForEdit={setSelectedForEdit}
          deleteGoal={deleteGoal}
        />
      </div>
    </div>
  );
};

export default App;
