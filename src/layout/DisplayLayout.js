import Header from "../component/global/Header/Header";
import SiderBar from "../component/global/SiderBar/SideBar";
import "./DisplayLayout.css";

const DisplayLayout = ({ children }) => {
  return (
    <div>
      <Header/>
      <div className="body">
        <SiderBar />
        <div className="child">{children}</div>
      </div>
    </div>
  );
};

export default DisplayLayout;
