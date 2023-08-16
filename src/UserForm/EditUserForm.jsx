import { useEffect, useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.firstname || !user.lastname)
          return alert("Enter your First and last name");
        props.updateUser(user.id, user);
      }}
    >
      <div className="form-flex">
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={user.firstname}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-flex">
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={handleInputChange}
        />
      </div>
      <div className="parent-btn">
        <button className="upd-btn">Update user</button>
        <button
          className="cancel-btn"
          onClick={() => {
            props.setEditing(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
