import Styles from "./styles.module.css";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";

const Task = (props) => {
  const { handleDeleteTask, task } = props;
  return (
    <div className={Styles.task}>
      <p>{task.name}</p>
      <div className={Styles.iconsContainer}>
        <button onClick={() => handleDeleteTask(task.id)}>
          <img src={deleteIcon} alt="delete" />
        </button>
        <button>
          <img src={editIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Task;
