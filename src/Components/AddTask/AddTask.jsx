import Styles from "./styles.module.css";

const AddTask = (props) => {
  const { inputValue, onChange, submit } = props;
  return (
    <div className={Styles.addTask}>
      <input type="text" onChange={onChange} value={inputValue} />
      <button onClick={submit}>Add Task</button>
    </div>
  );
};

export default AddTask;
