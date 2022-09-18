import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-container">
      <div>
        <img
          src="./images/logo_white.4f91a3a0.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="noti">
        <p className={`${location.pathname === "/metrics" ? "show" : "hide"}`}>
          Deposit
        </p>
        <p className={`${location.pathname === "/metrics" ? "show" : "hide"}`}>
          Sell Crypto
        </p>
        <p className={`${location.pathname === "/metrics" ? "show" : "hide"}`}>
          Transfer
        </p>
        <div className="img-noti">
          <img src="./images/Notification.svg" alt="notifications" />
        </div>
        <div>
          <img src="./images/circle.png" alt="circle" className="img-noti2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
