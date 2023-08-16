import "../styles.css";

const UserTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <div>
                <button
                  className="btn btn-edit"
                  onClick={() => props.editUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No user</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
