import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [userage, setUserAge] = useState("");
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const userNameRef = useRef(null);
  const userAgeRef = useRef(null);

  const handleAddUser = () => {
    if (!username.trim() || !userage.trim() || userage <= 0 || isNaN(userage)) {
      setModalMessage(
        "Please enter a valid name and age (non-empty values and age > 0)."
      );
      setShowModal(true);
      userNameRef.current.value = "";
      userAgeRef.current.value = "";
    } else {
      const newUser = { username, userage };
      setUsers([...users, newUser]);
      setUsername("");
      setUserAge("");
      userNameRef.current.value = "";
      userAgeRef.current.value = "";
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="form-container">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        ref={userNameRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="userage">Age (in Years)</label>
      <input
        type="number"
        name="userage"
        id="userage"
        ref={userAgeRef}
        value={userage}
        onChange={(e) => setUserAge(e.target.value)}
      />
      <button type="button" onClick={handleAddUser} className="addbtn">
        Add User
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>

      {users.map((user, index) => (
        <div key={index} className="added-user-container">
          <p>Username: {user.username}</p>
          <p>Age: {user.userage}</p>
        </div>
      ))}
    </div>
  );
};

export default UserForm;
