import { BiChevronDown } from "react-icons/bi";
import "./HighLow.css"

const HighLow = () => {
  return (
    <div className="highlow-content">
      <div className="rate">
        <img src="./images/Layer_x0020_1.svg" alt="bitcoin" className="image" />
        <div>
          <p className="main-para">
            BTC/USDT <BiChevronDown />
          </p>
          <p className="fade">Bitcoin</p>
        </div>
      </div>
      <div className="set">
        <p className="fade">Last Price</p>
        <p className="main-para green">18372.99 USDT</p>
      </div>
      <div className="set">
        <p className="fade">High</p>
        <p className="main-para">18372.99 USDT</p>
      </div>
      <div className="set">
        <p className="fade">Low</p>
        <p className="main-para">18372.99 USDT</p>
      </div>
      <div className="set">
        <p className="fade">Volume</p>
        <p className="main-para">18372.99 USDT</p>
      </div>
      <div className="set">
        <p className="fade">24h Change</p>
        <p className="main-para green">+3.04%</p>
      </div>
    </div>
  );
};

export default HighLow;
