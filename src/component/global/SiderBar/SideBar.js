import { useNavigate, useLocation } from "react-router-dom";
import "./SideBar.css";
import { details } from "../../../utils/sidebar_details";

const SiderBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };
  console.log(location.pathname);
  return (
    <div className="pad">
      <div className="sidebar">
        <nav className="sidebar_nav">
          {details.map((data) => {
            if (typeof data.icon === "string") {
              return (
                <div
                  key={data.icon}
                  className={`list-group ${
                    location.pathname === data.path ? "active" : ""
                  }`}
                  onClick={() => handleNavigate(data.path)}
                >
                  <img src={data.icon} alt={data.icon} className="icon" />
                  <div className="text">{data.text}</div>
                </div>
              );
            } else {
              return (
                <div
                  key={data.icon}
                  className={`list-group ${
                    location.pathname === data.path ? "active" : ""
                  }`}
                  onClick={() => handleNavigate(data.path)}
                >
                  <div className="icon">{data.icon}</div>
                  <div className="text">{data.text}</div>
                </div>
              );
            }
          })}
        </nav>
      </div>
    </div>
  );
};

export default SiderBar;
