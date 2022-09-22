export const market = [
  { time: "18:02:18", price: 47817.7, amount: 18372.99999, total: 18372.99999 },
  { time: "18:02:18", price: 47817.7, amount: 18372.99999, total: 18372.99999 },
  { time: "18:02:18", price: 317.7, amount: 18372.99999, total: 18372.99999 },
  { time: "18:02:18", price: 47817.7, amount: 18372.99999, total: 18372.99999 },
  { time: "18:02:18", price: 47817.7, amount: 18372.99999, total: 18372.99999 },
  { time: "18:02:18", price: 317.7, amount: 18372.99999, total: 18372.99999 },
  { time: "18:02:18", price: 47817.7, amount: 18372.99999, total: 18372.99999 },
  { time: "18:02:18", price: 47817.7, amount: 18372.99999, total: 18372.99999 },
  { time: "18:02:18", price: 317.7, amount: 18372.99999, total: 18372.99999 },
];
export const addTotalSums = (orders) => {
  const totalSums = [];
  return orders.map((order, idx) => {
    const size = order[1];
    const updatedLevel = [...order];
    const totalSum =
      idx === 0 ? Number(size) : Number(size) + Number(totalSums[idx - 1]);
    updatedLevel[0] = Number(updatedLevel[0]);
    updatedLevel[1] = Number(updatedLevel[1]);
    updatedLevel[2] = totalSum;
    totalSums.push(totalSum);
    return updatedLevel;
  });
};
export const getMaxTotalSum = (orders) => {
  const totalSums = orders.map((order) => order[0]);
  return Math.max.apply(Math, totalSums);
};
export const addDepths = (orders, maxTotal) => {
  return orders.map((order) => {
    const calculatedTotal = order[2];
    const depth = (calculatedTotal / maxTotal) * 100;
    const updatedOrder = [...order];
    updatedOrder[3] = depth;
    return updatedOrder;
  });
};
