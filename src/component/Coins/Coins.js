import "./Coins.css";

const Coins = () => {
  return (
    <div className="coins-grid">
      <div className="card">
        <div className="left">
          <img
            src="./images/Layer_x0020_1.svg"
            alt="bitcoin"
            className="image"
          />
          <div>
            <p className="coin">Bitcoin</p>
            <p className="term">BTC</p>
          </div>
        </div>
        <div className="right-tap">
          <p className="cash">54372.94USD</p>
          <p className="percent">+2.43%</p>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <img
            src="./images/tether-usdt-logo.svg"
            alt="tether"
            className="image"
          />
          <div>
            <p className="coin">Tether</p>
            <p className="term">USDT</p>
          </div>
        </div>
        <div className="right-tap">
          <p className="cash">1.02 USD</p>
          <p className="percent">+2.43%</p>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <img
            src="./images/Layer_x0020_1-1.svg"
            alt="tether"
            className="image"
          />
          <div>
            <p className="coin">Ethereum</p>
            <p className="term">ETH</p>
          </div>
        </div>
        <div className="right-tap">
          <p className="cash">54372.94USD</p>
          <p className="percent">+2.43%</p>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <img src="./images/Layer 2.svg" alt="tether" className="image" />
          <div>
            <p className="coin">Binance Coin</p>
            <p className="term">BNB</p>
          </div>
        </div>
        <div className="right-tap">
          <p className="cash">54372.94USD</p>
          <p className="percent">+2.43%</p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
