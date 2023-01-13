import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../Components/GetStarted";
import images from "../Constants/images";

const Crypto = () => {
  return (
    <>
      <section className="trading">
        <div className="trading__content">
          <div className="trading__content-links">
            <h2>TRADING INFO</h2>
            <hr />
            <Link to="/forexTrading">FOREX</Link>
            <hr />
            <Link to="/cfdTrading">CFD</Link>
            <hr />
            <Link to="/crypto" className="link__active">
              CRYPTOCURRIENCES
            </Link>
            <hr />
          </div>
          <div className="trading__content-info">
            <h2 className="trading__content-info-heading">CRYPTOCURRIENCES</h2>
            <table>
              <tbody>
                <tr>
                  <td>BTCEURx</td>
                  <td>Bitcoin/Euro</td>
                </tr>
                <tr>
                  <td>BTCUSDx</td>
                  <td>Bitcoin/Dollars USA</td>
                </tr>
                <tr>
                  <td>XBTUSDx</td>
                  <td>XBitcoin/ Dollar USA</td>
                </tr>
                <tr>
                  <td>XBTGBPx</td>
                  <td>XBitcoin/ Pound sterling</td>
                </tr>
                <tr>
                  <td>XBTEURx</td>
                  <td>XBitcoin/ Euro</td>
                </tr>
                <tr>
                  <td>XMRUSDx</td>
                  <td>Monero/Dollar USA</td>
                </tr>
                <tr>
                  <td>XRPUSDx</td>
                  <td>Ripple/Dollar USA</td>
                </tr>
                <tr>
                  <td>XBTJPYx</td>
                  <td>XBitcoin/Japanese yen</td>
                </tr>
                <tr>
                  <td>LTCUSDx</td>
                  <td>Litecoin/Dollar USA</td>
                </tr>
                <tr>
                  <td>LTCEURx</td>
                  <td>Litecoin/Euro</td>
                </tr>
                <tr>
                  <td>DASUSDx</td>
                  <td>DAS/Dollar USA</td>
                </tr>
                <tr>
                  <td>NEOUSDx</td>
                  <td>NEO/Dollar USA</td>
                </tr>
                <tr>
                  <td>ETHEURx</td>
                  <td>Ethereum/Euro</td>
                </tr>
                <tr>
                  <td>ETHUSDx</td>
                  <td>Ethereum/Dollar USA</td>
                </tr>
                <tr>
                  <td>BCHUSDx</td>
                  <td>itcoin Cash/Dollar USA</td>
                </tr>
                <tr>
                  <td>ZECUSDx</td>
                  <td>Zcash/Dollar USA</td>
                </tr>
                <tr>
                  <td>EOSUSDx</td>
                  <td>EOS/Dollar USA</td>
                </tr>
                <tr>
                  <td>IOTUSDx</td>
                  <td>Miota/Dollar USA</td>
                </tr>
                <tr>
                  <td>OMGUSDx</td>
                  <td>OmiseGO/Dollar USA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr className="trading__hr" />
        <div className="trading__content-flex">
          <div className="trading__content-flex-info">
            <h2>INVEST AND EARN THANKS TO BITCOIN</h2>
            <p>
              Bitcoin, ever higher and stronger, has just passed a higher level.
              The cryptocurrency that was only a few dollars in 2013 and about $
              900 at the beginning of 2017 has never been as high a price as it
              is today. Bitcoin broke its last high yesterday and today reaches
              $ 4,700. Will the crypto-currency reach half a million dollars as
              John McAfee thinks?
            </p>
            <p className="trading__content-flex-info-quote">
              Cryptocurrencies are the
              <br /> future: take the chance!
            </p>
          </div>
          <div className="trading__content-flex-img">
            <img src={images.cryptoImg1} alt="cryptoImg" />
          </div>
        </div>
        <hr className="trading__hr" />
        <div className="trading__content-flex">
          <div className="trading__content-flex-img">
            <img src={images.cryptoImg2} alt="cryptoImg" />
          </div>
          <div className="trading__content-flex-info">
            <h2>
              Bitcoin breaks its last high and <br />
              broke the $ 4,700
            </h2>
            <p>
              Bitcoin was worth about $ 3,400 in early August, then
              progressively reached the next Bitcoin trading opportunities and
              as soon as we released the article in question it was starting to
              happen. This trading opportunity was clearly validated with the
              breaking of the last high at $ 4,500 and we reached $ 4,700, which
              knows how long the Bitcoin course will evolve in the coming days!
            </p>
            <p className="trading__content-flex-info-quote">
              Bitcoin explosion for $ 4,700, invest
              <br /> and enjoy the ongoing increase!
            </p>
          </div>
        </div>
        <hr className="trading__hr" />
      </section>
      <GetStarted />
    </>
  );
};

export default Crypto;
