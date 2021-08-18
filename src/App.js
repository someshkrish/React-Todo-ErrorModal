import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const onNewUser = (uName, uAge) => {
    setUsersList(prevList => [...prevList, {name: uName, age: uAge, id: Math.random().toString()}]);
  }

  return (
    <div>
      <AddUser onAddNewUser={onNewUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
