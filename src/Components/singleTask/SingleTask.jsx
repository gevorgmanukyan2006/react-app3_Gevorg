import Styles from "./styles.module.css";
import { useLocation, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SingleTask = () => {
  const { state } = useLocation();

  return (
    <div className={Styles.container}>
      <p>Title: {state.title}</p>
      <p>Description: {state.description} </p>
      <p>Date: {state.date} </p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default SingleTask;
