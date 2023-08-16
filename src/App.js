import "./styles.css";
import { useState } from "react";
import UserTable from "./table/UserTable";
import AddUserForm from "./UserForm/AddUserForm";
import EditUserForm from "./UserForm/EditUserForm";

export default function App() {
  const usersData = [];

  const [users, setUsers] = useState(usersData);

  // -----------ADD USER function start-------------
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  // -----------ADD USER function end-------------

  // -----------EDITING USER function start-------------

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, firstname: "", lastname: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname
    });
  };

  // -----------EDITING USER function End-------------

  // -----------Update USER function Start-------------
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(
      users.map((user) => {
        return user.id === id ? updatedUser : user;
      })
    );
  };
  // -----------Update USER function End-------------

  // -----------DELETE USER function start-------------
  //                 (user.id)
  const deleteUser = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };
  // -----------DELETE USER function end-------------

  return (
    <div className="App">
      <div className="container">
        <h1>CRUD Operation with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing === true ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="flex-large">
            <h2>View Users</h2>
            <UserTable
              users={users}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
