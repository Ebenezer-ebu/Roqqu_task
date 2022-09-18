import { order, market } from "../../utils/table_details";
import "./Tables.css";

export const OrderBook = () => {
  return (
    <div className="order-container">
      <h4>Order Book</h4>
      <table className="table-content">
        <colgroup span="3"></colgroup>
        <thead>
          <tr>
            <th className="head2">PRICE(USDT)</th>
            <th className="head2">AMOUNT(BTC)</th>
            <th className="head2">TOTAL(USDT)</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, i) => (
            <tr key={i}>
              <td className="red">{item.price}</td>
              <td>{item.amount}</td>
              <td>{item.total}</td>
            </tr>
          ))}
          <tr>
            <th colSpan="3" scope="colgroup" className="next-head">
              128299.304781 USDT
            </th>
          </tr>
          {order.map((item, i) => (
            <tr key={i}>
              <td className="green2">{item.price}</td>
              <td>{item.amount}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const PlaceOrder = () => {
  return (
    <div className="placeorder">
      <h4>Place Order</h4>
      <h4 className="tag">
        Sign In or Create Account <br /> to Continue
      </h4>
    </div>
  );
};

export const MarkeTrades = () => {
  return (
    <div className="market">
      <h4 className="stick-head">Market Trades</h4>
      <table className="table-content2">
        <thead className="thead">
          <tr className="trhead">
            <th className="head2">TIME(USDT)</th>
            <th className="head2">PRICE(USDT)</th>
            <th className="head2">AMOUNT(BTC)</th>
            <th className="head2">TOTAL USDT</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {market.map((item, i) => (
            <tr key={i} className="trbody">
              <td>{item.time}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
