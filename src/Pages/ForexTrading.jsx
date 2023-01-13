import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../Components/GetStarted";

const ForexTrading = () => {
  return (
    <>
      <section className="trading">
        <div className="trading__content">
          <div className="trading__content-links">
            <h2>TRADING INFO</h2>
            <hr />
            <Link className="link__active" to="/forexTrading">
              FOREX
            </Link>
            <hr />
            <Link to="/cfdTrading">CFD</Link>
            <hr />
            <Link to="/crypto">CRYPTOCURRIENCES</Link>
            <hr />
          </div>
          <div className="trading__content-info">
            <h2 className="trading__content-info-heading">
              What is Forex
              <br /> Trading?
            </h2>
            <p>
              ‘Forex’ or ‘FX’ derives from ‘Foreign Exchange’. It is a
              decentralized global market where traders are able to buy and sell
              currencies. It is the largest and most liquid market in the world,
              with an average daily trading volume worth over $5 trillion.
            </p>
            <p>
              When a person travels from one country to another, it is usually
              required to convert money to the currency that is used in the
              country that they are travelling to. For example, when a resident
              of the United States travels to Italy, he/she is required to
              exchange their US dollars to the Euro currency.
            </p>
            <p>
              In the same way, an international firm is sometimes required to
              exchange currencies in order to pay employees that are located
              overseas. The exchange rate fluctuates continuously as it is based
              on supply and demand. Therefore, this determines how much of
              currency A will be required in order to obtain currency B.
              Depending on the price, it is sometimes advisable to wait for a
              more favorable rate as it can make a big difference when a large
              amount of exchange is concerned.
            </p>
            <p>
              In Forex, currency pairs can be traded without physically owning
              currencies. In addition, a profit or a loss can be made from both
              upward and downward market trends. Major currency pairs contain
              the US Dollar, generally have the lowest spreads and are the most
              liquid instruments. Cross currency pairs are traded against each
              other excluding the US dollar (ex: CADJPY, EURAUD…).
            </p>
          </div>
        </div>

        <div className="trading__table">
          <h2>Below are some examples of what we call major currencies:</h2>
          <table style={{ marginBottom: "13rem" }}>
            <tbody>
              <tr>
                <td>EUR/USD</td>
                <td>Euro Zone/United States</td>
              </tr>
              <tr>
                <td>USD/JPY</td>
                <td>United States/Japan</td>
              </tr>
              <tr>
                <td>GBP/USD</td>
                <td>United Kingdom/United States</td>
              </tr>
              <tr>
                <td>USD/CAD</td>
                <td>United States/Canada</td>
              </tr>
              <tr>
                <td>USD/CHF</td>
                <td>United States/Switzerland</td>
              </tr>
              <tr>
                <td>AUD/USD</td>
                <td>Australia/United States</td>
              </tr>
              <tr>
                <td>NZD/USD</td>
                <td>New Zealand/United States</td>
              </tr>
            </tbody>
          </table>
          <h2>In Forex, certain currency pairs have their own terminology:</h2>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Currency pair</th>
                <th>Terminology</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GBPUSD</td>
                <td>British Pound & US Dollar</td>
                <td>Cable</td>
              </tr>
              <tr>
                <td>EURUSD</td>
                <td>Euro & US Dollar</td>
                <td>Euro</td>
              </tr>
              <tr>
                <td>USDJPY</td>
                <td>US Dollar & Japanese Yen</td>
                <td>Dollar Yen</td>
              </tr>
              <tr>
                <td>USDCHF</td>
                <td>USDCHF US Dollar & Swiss Franc</td>
                <td>Dollar Swiss or Swissy</td>
              </tr>
              <tr>
                <td>USDCAD</td>
                <td>US Dollar & Canadian Dollar</td>
                <td>Dollar CAD or Loonie</td>
              </tr>
              <tr>
                <td>NZDUSD</td>
                <td>New Zealand Dollar & US Dollar</td>
                <td>Kiwi</td>
              </tr>
              <tr>
                <td>AUDUSD</td>
                <td>Australian Dollar & US Dollar</td>
                <td>Aussie Dollar</td>
              </tr>
              <tr>
                <td>EURGBP</td>
                <td>Euro & British Pound</td>
                <td>Euro Sterling</td>
              </tr>
              <tr>
                <td>EURJPY</td>
                <td>Euro & Japanese Yen</td>
                <td>Euro Yen</td>
              </tr>
            </tbody>
          </table>
          <p>
            When trading Forex (for example the EURUSD), the first currency EUR
            is called the ‘base currency’, which represents the direction and
            the <br />
            second currency is called ‘counter or quote currency’ which
            indicates the profit or loss.
          </p>
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
          <h2>Main features of trading Forex</h2>
          <p>
            Forex can be traded based on margin and is determined by the
            contract size, leverage, pip value and direction.
          </p>
          <p>
            For short positions, client opens a trade based on the ‘Bid’ price
            and closes the position based on the ‘Ask’ price. For long
            positions, client opens a trade based on the ‘Ask’ price and closes
            the position based on the ‘Bid’ price. Note: Trading of Forex may
            involve other fees.
          </p>
          <p>1 lot of EURUSD = 100,000 EUR Pip value of EURUSD = 10$</p>
          <p>
            Account leverage 1:50 / Margin requirement 2% Required margin to
            open 1 lot of EURUSD is 2% x 100,000 = 2000$
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

export default ForexTrading;
