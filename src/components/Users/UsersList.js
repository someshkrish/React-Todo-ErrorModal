import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {

    if(props.users.length <= 0){
        return null;
    }
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
