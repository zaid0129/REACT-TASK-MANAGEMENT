import { useState, useEffect } from "react";
import BackendUrl from "../Config/BackendUrl";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [input, setInput] = useState([]);
  const [show, setShow] = useState(false);
  const [userid, setUserid] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (uid) => {
    setUserid(uid);
    setShow(true);
  };

  const loadData = async () => {
    let api = `${BackendUrl}showUserData`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackendUrl}assignTask`;
    try {
      await axios.post(api, { ...input, userid });
      setShow(false);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

const containerStyle = {
  padding: "20px",
  background: "#f2fdfc", // light aqua background
  minHeight: "100vh",
  fontFamily: "Poppins, sans-serif",
  color: "#007d6d" // soft teal text
};

const cardStyle = {
  borderRadius: "20px",
  background: "#e0faf7", // light card background
  padding: "20px",
  boxShadow: "inset 4px 4px 8px #c1ebe5, inset -4px -4px 8px #ffffff"
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#00bfa5", // aqua highlight
  textShadow: "0 0 5px rgba(0,180,160,0.3)"
};

const modalBodyStyle = {
  background: "#dff6f3", // lighter aqua
  color: "#00695c" // darker teal for contrast
};

  



  let sno = 0;
  const ans = mydata.map((key) => {
    sno++;
    return (
      <tr key={key._id}>
        <td>{sno}</td>
        <td>{key.name}</td>
        <td>{key.email}</td>
        <td>{key.designation}</td>
        <td><button onClick={() => { handleShow(key._id) }} className="neon-login-btn">Assign Task</button></td>
      </tr>
    );
  });

  return (
    <>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Assign Task To User</h2>
        <div style={cardStyle}>
          <Table striped bordered hover responsive>
            <thead style={{ backgroundColor: "#ffcce5" }}>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Work</th>
              </tr>
            </thead>
            <tbody>
              {ans}
            </tbody>
          </Table>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ background: "#ffe9f3" }}>
            <Modal.Title style={headingStyle}>Assign Task</Modal.Title>
          </Modal.Header>
          <Modal.Body style={modalBodyStyle}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Enter Task Title:</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleInput}
                  className="neon-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  onChange={handleInput}
                  className="neon-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Completion Days:</Form.Label>
                <Form.Control
                  type="text"
                  name="complDay"
                  onChange={handleInput}
                  className="neon-input"
                />
              </Form.Group>
              <button type="submit" onClick={handleSubmit} className="neon-login-btn">
                Submit
              </button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AssignTask;
