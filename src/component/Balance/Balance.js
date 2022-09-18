import {
  BsArrowLeftRight,
  BsArrowUp,
  BsArrowDown,
  BsArrowRight,
} from "react-icons/bs";
import "./Balance.css";

export const Balance = () => {
  return (
    <div className="balance">
      <p>WALLET BALANCE</p>
      <div className="center">
        <p className="btc">BTC</p>
        <p className="float">0.2993029</p>
        <p className="amount">3,700 USD</p>
        <button className="btn">Withdraw</button>
      </div>
    </div>
  );
};

export const Activities = () => {
  return (
    <div>
      <h3 className="head">Latest Activities</h3>
      <div className="details">
        <BsArrowUp className="icon2" />
        <div>
          <p className="with">Withdrew USDT</p>
          <p className="com">Complete</p>
          <p className="price">992333.93USDT</p>
        </div>
        <p className="date">Dec 31, 2021</p>
      </div>
      <div className="details">
        <BsArrowLeftRight className="icon2" />
        <div>
          <p className="with">Exchanged BTC</p>
          <p className="com">Complete</p>
          <p className="price">992333.93USDT</p>
        </div>
        <p className="date">Dec 31, 2021</p>
      </div>
      <div className="details">
        <BsArrowDown className="icon2" />
        <div>
          <p className="with">Deposit ETH</p>
          <p className="com">Complete</p>
          <p className="price">992333.93USDT</p>
        </div>
        <p className="date">Dec 31, 2021</p>
      </div>
      <div className="view">
        <p className="price">View All Activity</p>
        <BsArrowRight className="icon3" />
      </div>
    </div>
  );
};
