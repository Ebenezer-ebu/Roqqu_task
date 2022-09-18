import { BiChevronDown } from "react-icons/bi";
import "./Head.css";

const Head = () => {
  return (
    <div className="options">
      <div className="each">
        <p
          style={{
            color: "#6E97F5",
            fontWeight: "bold",
            borderBottom: "2px solid #6E97F5",
            height: "79%",
          }}
        >
          Core Assets
        </p>
        <p>Top Gainers</p> <p>Top Losers</p>
        <p>New</p>
      </div>
      <div className="mart-group">
        <p>Market Cap</p>
        <BiChevronDown />
      </div>
    </div>
  );
};

export default Head;
