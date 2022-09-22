import { useState, useEffect } from "react";
import {
  market,
  addTotalSums,
  getMaxTotalSum,
  addDepths,
} from "../../utils/table_details";
import { getOrdersBook } from "../../utils/api";
import "./Tables.css";
export const OrderBook = () => {
  const [orderBook, setOrderBook] = useState({
    rawBids: [],
    bids: [],
    maxTotalBids: 0,
    rawAsks: [],
    asks: [],
    maxTotalAsks: 0,
  });
  useEffect(() => {
    const orderBooks = async () => {
      const orBook = await getOrdersBook();
      let bids = addTotalSums(orBook.bids).sort((a, b) => b[0] - a[0]);
      let asks = addTotalSums(orBook.asks).sort((a, b) => b[0] - a[0]);
      const maxTotalBids = getMaxTotalSum(bids);
      const maxTotalAsks = getMaxTotalSum(asks);
      bids = addDepths(bids, maxTotalBids);
      asks = addDepths(asks, maxTotalAsks);
      setOrderBook((prev) => ({
        ...prev,
        bids,
        asks,
        maxTotalBids,
        maxTotalAsks,
      }));
    };
    orderBooks();
  }, []);
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
          {orderBook.asks.map((item, i) => (
            <tr key={i}>
              <td className="red">{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2].toFixed(6)}</td>
            </tr>
          ))}
          <tr>
            <th colSpan="3" scope="colgroup" className="next-head">
              {`${orderBook.maxTotalBids} USDT`}
            </th>
          </tr>
          {orderBook.bids.map((item, i) => (
            <tr key={i}>
              <td className="green2">{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2].toFixed(6)}</td>
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
