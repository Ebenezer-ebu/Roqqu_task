import DisplayLayout from "../layout/DisplayLayout";
import HighLow from "../component/HighLow/HighLow";
import Graph from "../component/Graph/Graph";
import { OrderBook, PlaceOrder, MarkeTrades } from "../component/Tables/Tables";
import "./Metrics.css";

const Metrics = () => {
  return (
    <DisplayLayout>
      <HighLow />
      <div className="flexed">
        <div>
          <Graph />
          <MarkeTrades />
        </div>
        <div>
          <OrderBook />
          <PlaceOrder />
        </div>
      </div>
    </DisplayLayout>
  );
};

export default Metrics;
