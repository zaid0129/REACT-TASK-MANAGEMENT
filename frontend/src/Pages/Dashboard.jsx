import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

const navDashStyle = {
  background: "#e0faf7",
  color: "#007d6d",
  padding: "16px 24px",
  fontFamily: "'Segoe UI', sans-serif",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  borderBottom: "2px solid #b3e5dc"
};

const arrngStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "'Segoe UI', sans-serif"
};

const logoutBtnStyle = {
  background: "#00c9a7",
  color: "#ffffff",
  border: "none",
  padding: "10px 24px",
  borderRadius: "8px",
  fontFamily: "'Segoe UI', sans-serif",
  fontWeight: "bold",
  boxShadow: "0 4px 8px rgba(0, 201, 167, 0.3)",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

logoutBtnStyle[':hover'] = {
  background: "#00b3a1"
};

const sectionStyle = {
  display: "flex",
  height: "calc(100vh - 70px)",
  background: "#f2fdfc",
  color: "#007d6d",
  fontFamily: "'Segoe UI', sans-serif"
};

const leftStyle = {
  width: "240px",
  background: "#dff6f3",
  padding: "24px",
  boxShadow: "inset 3px 3px 6px #c1ebe5, inset -3px -3px 6px #ffffff",
  fontFamily: "'Segoe UI', sans-serif"
};

const rightStyle = {
  flex: 1,
  padding: "24px",
  background: "#ffffff",
  overflowY: "auto",
  fontFamily: "'Segoe UI', sans-serif"
};

const ulStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0
};

const liStyle = {
  padding: "12px 18px",
  margin: "10px 0",
  background: "#f6fffd",
  borderRadius: "8px",
  fontFamily: "'Segoe UI', sans-serif",
  boxShadow: "2px 2px 4px #d4f2ee, -2px -2px 4px #ffffff",
  color: "#009688",
  fontWeight: "500",
  transition: "all 0.3s ease",
  cursor: "pointer"
};

liStyle[':hover'] = {
  background: "#e0faf7",
  transform: "translateY(-1px)"
};

const linkStyle = {
  textDecoration: "none",
  color: "#007d6d",
  display: "block",
  fontFamily: "'Segoe UI', sans-serif"
};


  return (
    <>
      <div className="navDash" style={navDashStyle}>
        <div className="arrng" style={arrngStyle}>
          <h5>Welcome : {localStorage.getItem("adminUsr")}</h5>
          <button onClick={logout} style={logoutBtnStyle} className="neon-login-btn logout">
            Logout
          </button>
        </div>
      </div>
      <section id="divideDash" style={sectionStyle}>
        <div id="left" style={leftStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>Overview</li>
            <li style={liStyle}><Link to="createUser" style={linkStyle}>Create User</Link></li>
            <li style={liStyle}><Link to="assignTask" style={linkStyle}>Assign Task</Link></li>
            <li style={liStyle}><Link to="allTasks" style={linkStyle}>Projects</Link></li>
            <li style={liStyle}>Services</li>
            <li style={liStyle} onClick={logout}>Logout</li>
          </ul>
        </div>
        <div id="right" style={rightStyle}>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Dashboard;