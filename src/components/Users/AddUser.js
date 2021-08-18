import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title: "Invalid Input", message: "Please Fill Both The Fields."});
      return;
    }
    if(+enteredAge < 1){
        setError({title: "Invalid Input", message: "Please Enter An Age > 0"});
        return;
    }

    props.onAddNewUser(enteredName, enteredAge);
    setName("");
    setAge("");
  };

  const ErrorHandler = () => {
    // null evaluates to false  
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onAcknowledge={ErrorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={nameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
