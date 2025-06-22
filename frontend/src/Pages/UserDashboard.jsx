import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

const navDashStyle = {
  background: "#e0faf7", // soft card aqua
  color: "#007d6d", // muted teal
  padding: "20px",
  boxShadow: "inset 3px 3px 6px #c1ebe5, inset -3px -3px 6px #ffffff"
};

const arrngStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logoutBtnStyle = {
  background: "#e0faf7",
  color: "#00bfa5",
  border: "1px solid #00bfa5",
  padding: "10px 20px",
  borderRadius: "12px",
  boxShadow: "0 0 5px rgba(0,180,160,.3), 0 0 10px rgba(0,180,160,.2), 0 0 15px rgba(0,180,160,.1), 0 2px 0 #b2dfdb",
  cursor: "pointer",
  fontWeight: "bold"
};

const sectionStyle = {
  display: "flex",
  height: "calc(100vh - 80px)",
  background: "#f2fdfc", // very light background
  color: "#00695c" // dark teal
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
  background: "#f2fdfc",
  overflowY: "auto"
};

const ulStyle = {
  listStyle: "none",
  padding: 0
};

const liStyle = {
  padding: "12px 20px",
  margin: "12px 0",
  background: "#e0faf7",
  borderRadius: "10px",
  boxShadow: "4px 4px 8px #c1ebe5, -4px -4px 8px #ffffff",
  cursor: "pointer",
  transition: "all 0.3s ease",
  color: "#00bfa5"
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
          <h5>Welcome : User, {localStorage.getItem("username")}</h5>
          <button onClick={logout} style={logoutBtnStyle}>LOGOUT</button>
        </div>
      </div>

      <section id="divideDash" style={sectionStyle}>
        <div id="left" style={leftStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}><Link to="#" style={linkStyle}>User Overview</Link></li>
            <li style={liStyle}><Link to="task" style={linkStyle}>My Tasks</Link></li>
            <li style={liStyle}><Link to="#" style={linkStyle}>Projects</Link></li>
            <li style={liStyle}><Link to="#" style={linkStyle}>Reports</Link></li>
            <li style={liStyle}><Link to="#" style={linkStyle}>Services</Link></li>
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

export default UserDashboard;
