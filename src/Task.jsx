import React from "react";
import { ImCross } from "react-icons/im";
import { LiaEdit } from "react-icons/lia";
const Task = ({ goalObj, taskDel, taskEdit }) => {
  return (
    <li className="task_list_li">
      {goalObj.goal}
      <div className="task_action_btns">
        <span
          className="edit_icon"
          title="Edit"
          onClick={() => {
            taskEdit(goalObj.id);
          }}
        >
          <LiaEdit size={20} className="liaedit" />
        </span>
        <span
          className="cross"
          title="Delete"
          onClick={() => {
            taskDel(goalObj.id);
          }}
        >
          <ImCross size={10} className="imcross" />
        </span>
      </div>
    </li>
  );
};

export default Task;
