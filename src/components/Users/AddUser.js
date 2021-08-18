import { useState, useRef, Fragment } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title: "Invalid Input", message: "Please Fill Both The Fields."});
      return;
    }
    if(+enteredAge < 1){
        setError({title: "Invalid Input", message: "Please Enter An Age > 0"});
        return;
    }

    props.onAddNewUser(enteredName, enteredAge);
    //This is not the preferred means to change the value
    // State should be used
    // But as far as the class and styles are not modified, this trivial change is okay.
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';    
  };

  const ErrorHandler = () => {
    // null evaluates to false  
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onAcknowledge={ErrorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
