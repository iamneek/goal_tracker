import React from "react";
import Task from "./Task";
import { BiPlusMedical } from "react-icons/bi";

const Tasklist = ({ goals, sortCat, taskDel, taskEdit }) => {
  return (
    <ul className="task-list">
      {goals.length === 0 ? (
        <h3 className="emptyString">
          Please Add Goals First <BiPlusMedical size={20} />
        </h3>
      ) : null}
      {goals
        .filter((goal) => {
          if (sortCat === "All Goals") {
            return true;
          } else {
            return goal.category === sortCat;
          }
        })
        .map((goal) => (
          <Task
            goalObj={goal}
            key={goal.id}
            taskDel={taskDel}
            taskEdit={taskEdit}
          />
        ))}
    </ul>
  );
};

export default Tasklist;
