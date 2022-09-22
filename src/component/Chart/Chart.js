import { useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { getPreviousKlines } from "../../utils/api";
import "./Chart.css";

const MyChart = () => {
  const chartContainerRef = useRef();
  const chart = useRef();
  useEffect(() => {
    const setCanvas = async () => {
      chart.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 350,
        layout: {
          backgroundColor: "#04091c",
          textColor: "#a0a0a7",
        },
        grid: {
          vertLines: {
            color: "#111628",
          },
          horzLines: {
            color: "#111628",
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        priceScale: {
          borderColor: "#485c7b",
        },
        timeScale: {
          borderColor: "#485c7b",
        },
      });
      const candleSeries = chart.current.addCandlestickSeries({
        upColor: "#8cc176",
        downColor: "#b82c0c",
        borderDownColor: "#b82c0c",
        borderUpColor: "#8cc176",
        wickDownColor: "#202535",
        wickUpColor: "#202535",
      });
      const previousKlines = await getPreviousKlines();
      let priceData = [];
      previousKlines.forEach((item) => {
        priceData.push({
          time: item[0] / 1000,
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        });
      });
      candleSeries.setData(priceData);
      const bnSocket = new WebSocket(
        "wss://stream.binance.com:9443/ws/btcusdt@kline_3m"
      );
      bnSocket.onmessage = function (event) {
        let res = JSON.parse(event.data);
        const time = res.k.t / 1000;
        const open = res.k.o;
        const high = res.k.h;
        const low = res.k.l;
        const close = res.k.c;
        candleSeries.update({ time, open, high, low, close });
      };
    };
    setCanvas();
  }, []);
  return (
    <div className="App">
      <div ref={chartContainerRef} className="chart-container" />
    </div>
  );
};
export default MyChart;
