import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../Components/GetStarted";

const CFDTrading = () => {
  return (
    <>
      <section className="trading">
        <div className="trading__content">
          <div className="trading__content-links">
            <h2>TRADING INFO</h2>
            <hr />
            <Link to="/forexTrading">FOREX</Link>
            <hr />
            <Link to="/cfdTrading" className="link__active">
              CFD
            </Link>
            <hr />
            <Link to="/crypto">CRYPTOCURRIENCES</Link>
            <hr />
          </div>
          <div className="trading__content-info">
            <h2 className="trading__content-info-heading">
              What is CFD
              <br /> Trading?
            </h2>
            <p>
              Contract for differences (CFDs) are contracts that are tradable
              between clients and a broker. When trading a CFD, there is an
              exchange of the difference in value (current value and value at
              the end of the contract) of a certain instrument.
            </p>
            <p>
              These can be CFD shares, indices, commodities, currencies,
              treasuries, precious metals etc.
            </p>
            <p>
              One of the biggest advantages of trading CFDs is that traders may
              speculate on price movements without the need to physically own
              the underlying assets. Traders will usually buy or sell a number
              of units depending on whether they think that the price of the
              financial instrument will increase or decrease.
            </p>
            <p>Noname offers a variety of CFD instruments.</p>
          </div>
        </div>
        <div className="trading__table">
          <h2>Examples provided below</h2>
          <table>
            <tbody>
              <tr>
                <td>CFD Currencies</td>
                <td>
                  Australian Dollar, Swiss Franc, Euro Dollar, British Pound
                </td>
              </tr>
              <tr>
                <td>CFD Shares</td>
                <td>Apple, Ebay, Microsoft, Facebook</td>
              </tr>
              <tr>
                <td>CFD Indices</td>
                <td>
                  Dow Jones, Germany 30, Japan 225, Mini Nasdaq, Mini S&P 500,
                  UK 100
                </td>
              </tr>
              <tr>
                <td>CFD Energies</td>
                <td>UK Crude, US Crude, Natural Gas, Heating Oil</td>
              </tr>
              <tr>
                <td>CFD Commodities</td>
                <td>Sugar, Soybean, Wheat, Coffee, Corn</td>
              </tr>
              <tr>
                <td>CFD Treasuries</td>
                <td>German Bund Futures, 2 YR/ 5YR/ 10 YR US Treasury</td>
              </tr>
              <tr>
                <td>CFD Metals</td>
                <td>Gold, Silver</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="trading__hr" />
        <ul className="trading__list">
          <li>Market is open 24/5</li>
          <li>High liquidity</li>
          <li>More trading capacity thanks to leverage</li>
          <li>
            Possibility to profit/lose whichever way the market moves (upwards
            or downwards)
          </li>
          <li>
            More chances of limiting risks by the use of stop loss orders and
            risk management strategies
          </li>
          <li>
            Forex can be more predictable with the study of technical and
            fundamental analysis
          </li>
          <li>
            Trading is available via several trading platforms; desktop, mobile,
            web.
          </li>
          <li>Trades can be automated or semi-automatic (EA)</li>
        </ul>
        <hr className="trading__hr" />
        <div className="trading__info">
          <h2>How to Trade Cfds?</h2>
          <p>
            CFDs can be traded based on margin % and are determined by the
            contract size, leverage, pip value and direction.
          </p>
          <p>
            For short positions, client opens a trade based on the ‘Bid’ price
            and closes the position based on the ‘Ask’ price. For long
            positions, client opens a trade based on the ‘Ask’ price and closes
            the position based on the ‘Bid’ price.
          </p>
          <p>Note: Trading of CFDs may involve may involve other fees.</p>
          <p>
            Example: Microsoft (Symbol: MSFT) contract size: 1,000 shares Margin
            requirement: 5% Account leverage: 1:20
          </p>
          <p>
            i.e. Client trades 1 lot of MSFT = 1,000 shares Required margin for
            1 lot = 1,000 x 96.85 x 5% = $4,842.59
          </p>
        </div>
        <hr className="trading__hr" />
        <div className="trading__info-content">
          <div className="trading__info-content-single">
            <h2>Positive outcome</h2>
            <p>Client decides to go long on EURUSD:</p>
            <p>
              Opening of position based on ‘Ask’ Price: 1.17200 Closing of
              position based on ‘Bid’ Price: 1.17500
            </p>
            <p>Difference in price = 1.17500 – 1.17200 = 0.003</p>
            <p>100,000 x 0.003 = + 300$ (profit)</p>
          </div>
          <div className="trading__info-content-single">
            <h2>Negative outcome</h2>
            <p>Client decides to go short on EURUSD:</p>
            <p>
              Opening of position based on ‘Bid’ Price: 1.17200 Closing of
              position based on ‘Ask’ Price: 1.17500
            </p>
            <p>Difference in price = 1.17200 – 1.17500 = – 0.003</p>
            <p>100,000 x – 0.003 = – 300$ (loss)</p>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default CFDTrading;
