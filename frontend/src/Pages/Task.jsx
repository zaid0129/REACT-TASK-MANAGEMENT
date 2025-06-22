import axios from "axios";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import UserUrl from "../Config/UserUrl";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const Task = () => {
  const [mydata, setMydata] = useState([]);
  const [timeTaken, setTimeTaken] = useState("");
  const [show, setShow] = useState(false);
  const [selectedTask, setSelectedtask] = useState(null);

  const loadData = async () => {
    let api = `${UserUrl}task/?id=${localStorage.getItem("userid")}`;
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

  const submitTask = (task) => {
    setSelectedtask(task);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedtask(null);
    setTimeTaken("");
  };

  const FinalSubmit = async () => {
    let api = `${UserUrl}taskAddOn`;
    const response = await axios.post(api, {
      task: {
        taskId: selectedTask._id,
        timeTaken: timeTaken,
        userid: localStorage.getItem("userid"),
        status: "complete",
      },
    });

    setMydata((prev) =>
      prev.map((task) =>
        task._id === selectedTask._id ? { ...task, status: "complete" } : task
      )
    );
    handleClose();
  };

const containerStyle = {
  padding: "20px",
  background: "#f2fdfc", // very light aqua background
  minHeight: "100vh",
  fontFamily: "Poppins, sans-serif",
  color: "#007d6d" // premium teal text
};

const cardStyle = {
  borderRadius: "20px",
  background: "#e0faf7", // soft aqua card
  padding: "20px",
  boxShadow: "inset 4px 4px 8px #c1ebe5, inset -4px -4px 8px #ffffff"
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#00bfa5", // strong accent teal
  textShadow: "0 0 5px rgba(0,180,160,0.3)"
};

const modalBodyStyle = {
  background: "#dff6f3", // soft modal background
  color: "#00695c" // darker teal for contrast
};


  const ans = mydata.map((key) => {
    return (
      <tr key={key._id}>
        <td>{key.title}</td>
        <td>{key.description}</td>
        <td>{key.complDay}</td>
        <td style={{ color: key.status === "complete" ? "#33cc99" : "red" }}>{key.status}</td>
        <td>
          {key.status === "complete" ? (
            <span style={{ color: "#33cc99" }}>Submitted</span>
          ) : (
            <button onClick={() => submitTask(key)} className="neon-login-btn subTaskBtn">
              Submit Task
            </button>
          )}
        </td>
      </tr>
    );
  });

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Task List Assigned by Admin</h2>
      <div style={cardStyle}>
        <Table striped bordered hover responsive>
          <thead style={{ backgroundColor: '#ffdaf0' }}>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Completion Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ background: "#ffe9f3" }}>
            <Modal.Title style={headingStyle}>Task Submission</Modal.Title>
          </Modal.Header>
          <Modal.Body style={modalBodyStyle}>
            {selectedTask && (
              <>
                <p><strong>Title:</strong> {selectedTask.title}</p>
                <p><strong>Description:</strong> {selectedTask.description}</p>
                <p><strong>Completion Day:</strong> {selectedTask.complDay}</p>

                <Form.Group className="mb-3" controlId="formBasicTime">
                  <Form.Label>Time Taken (in hours):</Form.Label>
                  <Form.Control
                    type="number"
                    value={timeTaken}
                    onChange={(e) => setTimeTaken(e.target.value)}
                    className="neon-input"
                  />
                </Form.Group>
              </>
            )}
          </Modal.Body>
          <Modal.Footer style={{ background: "#fff0f6" }}>
            <button onClick={FinalSubmit} className="neon-login-btn">
              Submit Task
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Task;
