import Styles from "./styles.module.css";

const Task = (props) => {
  return (
    <div className={Styles.task}>
      <p>{props.name}</p>
    </div>
  );
};

export default Task;
