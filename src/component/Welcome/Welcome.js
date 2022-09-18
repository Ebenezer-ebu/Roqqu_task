import { BsArrowRight } from "react-icons/bs";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="box">
      <div className="welcome-text">
        <p className="day">JANUARY 2, 2022</p>
        <p className="desc">Welcome to Roqqu’s Decentralized Exchange</p>
        <p className="desc2">
          With an easy-to-use interface, we provide industry-leading <br />
          security and deep liquidity
        </p>
        <button className="btn2">
          Learn More <BsArrowRight className="arrow-right" />
        </button>
      </div>
      <img src="./images/Group 13045.svg" alt="group" />
    </div>
  );
};

export default Welcome;
