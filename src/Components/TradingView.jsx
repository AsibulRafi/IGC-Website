import React, { useEffect, useRef } from "react";

const TradingView = () => {
  const _ref = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR/USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
      ],
      colorTheme: "dark",
      isTransparent: false,
      showSymbolLogo: true,
      locale: "en",
    });
    _ref.current.appendChild(script);
  }, []);
  return (
    <div
      className="tradingview-widget-container"
      style={{ margin: "auto" }}
      ref={_ref}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingView;
