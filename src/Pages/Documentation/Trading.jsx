import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../../Components/GetStarted";
import images from "../../Constants/images";

const Trading = () => {
  return (
    <>
      <section className="documentation">
        <div className="documentation__content">
          <div className="documentation__content-links">
            <h2>Documentation</h2>
            <hr />
            <Link to="/documentation/regulation">Regulation</Link>
            <hr />
            <Link to="/documentation/webiste">Website</Link>
            <hr />
            <Link to="/documentation/privacy">Privacy Policy</Link>
            <hr />
            <Link to="/documentation/risk">Risk Statement</Link>
            <hr />
            <Link to="/documentation/cookie">Cookie Policy</Link>
            <hr />
            <Link to="/documentation/trading" className="link__active">
              Trading Documents
            </Link>
            <hr />
          </div>
          <div className="documentation__content-info">
            <h1 className="documentation__content-info-heading">
              TRADING DOCUMENTS
            </h1>
            <div className="documentation__content-info-content">
              <div className="documentation__content-info-content-single">
                <div className="documentation__content-info-content-single-dot"></div>
                <div className="documentation__content-info-content-single-heading">
                  <img src={images.docs} alt="docsIcon" />
                  <h2>
                    Account Opening
                    <br /> Documents (AOD)
                  </h2>
                </div>
                <p>
                  These are the terms and conditions by which NONAME LTD agrees
                  to open and maintain trading accounts for the client and the
                  client agrees to comply with. Included within are: Client
                  Account Agreement, Online Access Agreement, Mobile Trading
                  Agreement and Risk Disclosure Statement.
                </p>
              </div>
              <div className="documentation__content-info-content-single">
                <div className="documentation__content-info-content-single-dot"></div>
                <div className="documentation__content-info-content-single-heading">
                  <img src={images.docs} alt="docsIcon" />
                  <h2>
                    Trading <br />
                    Conditions (TC)
                  </h2>
                </div>
                <p>
                  This document that provides an overview in regards to trading
                  conditions related to financial instruments such as: margin
                  required for trading, leverage, costs etc., prior to clients’
                  trading. The document should be read in conjunction with the
                  AOD.
                </p>
              </div>
              <div className="documentation__content-info-content-single">
                <div className="documentation__content-info-content-single-dot"></div>
                <div className="documentation__content-info-content-single-heading">
                  <img src={images.docs} alt="docsIcon" />
                  <h2>
                    Order Execution <br />
                    Policy (OEP)
                  </h2>
                </div>
                <p>
                  This document that provides information to clients regarding
                  to the execution of clients’ transaction(s) performed by the
                  Company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Trading;
