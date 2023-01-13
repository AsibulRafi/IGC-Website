import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../Components/GetStarted";
import TradingView from "../Components/TradingView";
import images from "../Constants/images";

const Home = () => {
  return (
    <>
      <section className="homeHero">
        <div className="homeHero__bg">
          <video width="100%" autoPlay loop muted>
            <source src={images.video} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="tradeProducts">
        <div className="tradeProducts__wrapper">
          <h2 className="tradeProducts__heading">
            Trade with the best.
            <br /> A world of Markets possibilities
          </h2>
          <div className="tradeProducts__content">
            <div className="tradeProducts__content-single">
              <div className="tradeProducts__content-single-heading">
                <img src={images.forex} alt="tradingIcons" />
                <h4>Forex</h4>
              </div>
              <p>
                Trade CFD's on 75+ Currency
                <br /> pairs and benefit from Ultra-low <br />
                spreads and Fast order execution
              </p>
            </div>
            <div className="tradeProducts__content-single">
              <div className="tradeProducts__content-single-heading">
                <img src={images.indices} alt="tradingIcons" />
                <h4>Indices</h4>
              </div>
              <p>
                Trade leading & popular global <br />
                indices, from all around the globe –<br /> Asia, Europe and
                America
              </p>
            </div>
            <div className="tradeProducts__content-single">
              <div className="tradeProducts__content-single-heading">
                <img src={images.future} alt="tradingIcons" />
                <h4>Futures</h4>
              </div>
              <p>
                Trade CFDs on worldwide futures,
                <br /> and explore endless trading
                <br /> opportunities of commodities like
                <br /> coffee & Grain
              </p>
            </div>
            <div className="tradeProducts__content-single">
              <div className="tradeProducts__content-single-heading">
                <img src={images.shares} alt="tradingIcons" />
                <h4>Shares</h4>
              </div>
              <p>
                Trade CFDs on shares of more
                <br /> than 200 global companies and
                <br /> corporations and enjoy long <br />
                positions dividend payments
              </p>
            </div>
            <div className="tradeProducts__content-single">
              <div className="tradeProducts__content-single-heading">
                <img src={images.energies} alt="tradingIcons" />
                <h4>Energies</h4>
              </div>
              <p>
                Trade energy CFDs on spot like
                <br /> Brent oil, Natural Gas & WTI with a <br /> diversified
                portfolio and profit <br />
                possibilities.
              </p>
            </div>
            <div className="tradeProducts__content-single">
              <div className="tradeProducts__content-single-heading">
                <img src={images.metal} alt="tradingIcons" />
                <h4>Metal</h4>
              </div>
              <p>
                Trade CFDs on spot Metals and
                <br /> reveal endless trading opportunities
                <br /> and global possibilities
              </p>
            </div>
          </div>
          <Link to="/" className="btn__global">
            View Product Online
          </Link>
        </div>
      </section>
      <div className="hrDot">
        <div className="dot"></div>
        <hr />
      </div>
      <section className="brokers">
        <div className="brokers__wrapper">
          <h2 className="brokers__heading">
            Let our leading brokers get you to
            <br /> trade like no other
          </h2>
          <div className="brokers__content">
            <div className="brokers__content-single">
              <div
                className="brokers__content-single-img"
                style={{ backgroundImage: `url(${images.brokersImg1})` }}
              ></div>
              <div className="brokers__content-single-info">
                <h4>We go back</h4>
                <hr />
                <p>
                  With Reputation and history of over twenty years, make us one
                  of the leading forces in the industry
                </p>
              </div>
            </div>
            <div className="brokers__content-single">
              <div
                className="brokers__content-single-img"
                style={{ backgroundImage: `url(${images.brokersImg2})` }}
              ></div>
              <div className="brokers__content-single-info">
                <h4>We see ahead</h4>
                <hr />
                <p>
                  Our use of advanced online-security technology and leading IT
                  teams, allows you to trade with the highest sense of security
                </p>
              </div>
            </div>
            <div className="brokers__content-single">
              <div
                className="brokers__content-single-img"
                style={{ backgroundImage: `url(${images.brokersImg3})` }}
              ></div>
              <div className="brokers__content-single-info">
                <h4>It's all about you</h4>
                <hr />
                <p>
                  Full transparency and Global support & service centers, all to
                  enable you the reliability to trade, make profits and monetize
                  it fast and efficiently.
                </p>
              </div>
            </div>
            <div className="brokers__content-single">
              <div
                className="brokers__content-single-img"
                style={{ backgroundImage: `url(${images.brokersImg4})` }}
              ></div>
              <div className="brokers__content-single-info">
                <h4>We're here for you</h4>
                <hr />
                <p>
                  Let's talk insurance – we got Uber-security for you, by
                  covering our client's funds for up to 4,500,000€ !!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hrDot">
        <div className="dot"></div>
        <hr />
      </div>
      <section className="markets">
        <div className="markets__heading">
          <h2>
            The world's financial markets are waiting for you, and our
            <br /> Platforms will help you do it your way, all the way.
          </h2>
          <p>
            The world's financial markets are waiting for you, and our Platforms
            will
            <br /> help you do it your way, all the way.
          </p>
        </div>
        <div
          className="markets__wrapper"
          style={{ backgroundImage: `url(${images.marketsBg})` }}
        >
          <img src={images.laptop} alt="laptop" />
        </div>
      </section>
      <TradingView />
      <GetStarted />
    </>
  );
};

export default Home;
