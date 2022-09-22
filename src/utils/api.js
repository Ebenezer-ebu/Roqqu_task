export const getPreviousKlines = async () => {
  const response = await fetch(
    "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=3m" +
      "&limit=500"
  );
  return await response.json();
};
export const getOrdersBook = async () => {
  const response = await fetch(
    "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10"
  );
  return await response.json();
};
