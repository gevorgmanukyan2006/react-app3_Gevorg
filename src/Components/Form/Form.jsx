import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Styles from "./styles.module.css";

const Form_func = () => {
  return (
    <>
      <form className={Styles.form} action="">
        <h1>Contact Us</h1>
        <label htmlFor="">First Name</label>
        <Form.Control type="text" placeholder="First Name" required />
        <br />
        <label htmlFor="">Last Name</label>
        <Form.Control type="text" placeholder="Last Name" required />
        <br />
        <label htmlFor="">E-mail</label>
        <Form.Control type="email" placeholder="E-mail" required />
        <br />
        <label htmlFor="">Phone</label>
        <Form.Control type="tel" placeholder="Phone" />
        <br />
        <Button variant="primary" type="submit">
          Contact Us
        </Button>
      </form>
    </>
  );
};

export default Form_func;
