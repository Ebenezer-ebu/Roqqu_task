import { TbChartCandle } from "react-icons/tb";
import { FcComboChart } from "react-icons/fc";
import { FaBalanceScale } from "react-icons/fa";
import {
  IoArrowUndoOutline,
  IoArrowRedoOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import MyChart from "../Chart/Chart";

import "./Graph.css";

const Graph = () => {
  return (
    <div className="graph-container">
      <div className="top">
        <h4>Charts</h4>
        <div className="top-right">
          <p className="price-tag">Price</p>
          <p className="price-tag2">Depth</p>
        </div>
      </div>
      <div className="next">
        <div className="next-left">
          <p className="para">4h</p>
          <TbChartCandle className="para" />
          <FaBalanceScale className="para" />
          <FcComboChart className="para" />
          <IoArrowUndoOutline className="para2" />
          <IoArrowRedoOutline className="para2" />
        </div>
        <div className="next-right">
          <p className="para">Save</p>
          <AiOutlineCamera className="para" />
          <IoSettingsOutline className="para" />
          <HiOutlineArrowsExpand className="para" />
        </div>
      </div>
      <MyChart />
    </div>
  );
};

export default Graph;
