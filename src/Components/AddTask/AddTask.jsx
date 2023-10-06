import Styles from "./styles.module.css";

const AddTask = (props) => {
  return (
    <div className={Styles.addTask}>
      <input type="text" onChange={props.onChange} />
      <button onClick={props.submit}>Add Task</button>
    </div>
  );
};

export default AddTask;
