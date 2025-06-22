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
  padding: "20px",
  boxShadow: "inset 2px 2px 6px #c1ebe5, inset -2px -2px 6px #ffffff"
};

const arrngStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logoutBtnStyle = {
  background: "#00c9a7",
  color: "#ffffff",
  border: "1px solid #00b3a1",
  padding: "10px 20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,180,160,0.2), 0 2px 0 rgba(0,150,130,0.4)",
  cursor: "pointer",
  fontWeight: "bold"
};

const sectionStyle = {
  display: "flex",
  height: "calc(100vh - 80px)",
  background: "#f2fdfc",
  color: "#007d6d"
};

const leftStyle = {
  width: "250px",
  background: "#dff6f3",
  padding: "20px",
  boxShadow: "inset 4px 4px 8px #c1ebe5, inset -4px -4px 8px #ffffff"
};

const rightStyle = {
  flex: 1,
  padding: "20px",
  background: "#ffffff",
  overflowY: "auto"
};

const ulStyle = {
  listStyle: "none",
  padding: 0
};

const liStyle = {
  padding: "12px 20px",
  margin: "12px 0",
  background: "#f6fffd",
  textDecoration: "none",
  borderRadius: "10px",
  boxShadow: "2px 2px 6px #d4f2ee, -2px -2px 6px #ffffff",
  cursor: "pointer",
  transition: "all 0.3s ease",
  color: "#009688",
  fontWeight: "500"
};

const linkStyle = {
  textDecoration: "none",
  color: "#007d6d",
  display: "block"
};

  return (
    <>
      <div className="navDash" style={navDashStyle}>
        <div className="arrng" style={arrngStyle}>
          <h5>Welcome : Admin , {localStorage.getItem("adminUsr")}</h5>
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