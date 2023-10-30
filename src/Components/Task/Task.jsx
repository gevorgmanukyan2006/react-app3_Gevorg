import Styles from "./styles.module.css";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";
import { Link, Navigate } from "react-router-dom";

const Task = (props) => {
  const {
    handleDeleteTask,
    task,
    handleOnChange,
    checkedTasks,
    handleEditTask,
  } = props;
  return (
    <div className={Styles.task}>
      <div>
        <input
          type="checkbox"
          onChange={() => handleOnChange(task.id)}
          checked={checkedTasks.has(task.id)}
        />
        <Link to={`/singleTask/${task.id}`} state={task}>
          <p>Title: {task.title}</p>
        </Link>
        <p>Description: {task.description}</p>
        <p>Date: {task.date}</p>
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task.id)}
          disabled={checkedTasks.has(task.id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <button
          disabled={checkedTasks.has(task.id)}
          onClick={() => handleEditTask(task)}
        >
          <img src={editIcon} alt="edit" />
        </button>
      </div>
    </div>
  );
};

export default Task;
