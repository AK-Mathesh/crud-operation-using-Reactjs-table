import { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, firstname: "", lastname: "" };

  const [user, setUser] = useState(initialFormState);

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
        props.addUser(user);
        setUser(initialFormState);
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
      <button className="addbtn">Add new user</button>
    </form>
  );
};

export default AddUserForm;
