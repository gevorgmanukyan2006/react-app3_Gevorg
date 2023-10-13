import Styles from "./styles.module.css";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";

const Task = (props) => {
  const { handleDeleteTask, task, handleOnChange, checkedTasks } = props;
  return (
    <div className={Styles.task}>
      <div>
        <input
          type="checkbox"
          onChange={() => handleOnChange(task.id)}
          checked={checkedTasks.has(task.id)}
        />
        <p>{task.name}</p>
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task.id)}
          disabled={checkedTasks.has(task.id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <button disabled={checkedTasks.has(task.id)}>
          <img src={editIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Task;
