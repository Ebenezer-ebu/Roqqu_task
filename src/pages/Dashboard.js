import DisplayLayout from "../layout/DisplayLayout";
import Welcome from "../component/Welcome/Welcome";
import Head from "../component/Head/Head";
import Coins from "../component/Coins/Coins";
import { Balance, Activities } from "../component/Balance/Balance";
import "./DashBoard.css";

const Dashboard = () => {
  return (
    <DisplayLayout>
      <div className="dashboard-container">
        <div>
          <Welcome />
          <Head />
          <Coins />
        </div>
        <div className="right">
          <Balance />
          <Activities />
        </div>
      </div>
    </DisplayLayout>
  );
};

export default Dashboard;
