import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../../Components/GetStarted";

const Regulation = () => {
  return (
    <>
      <section className="documentation">
        <div className="documentation__content">
          <div className="documentation__content-links">
            <h2>Documentation</h2>
            <hr />
            <Link className="link__active" to="/documentation/regulation">
              Regulation
            </Link>
            <hr />
            <Link to="/documentation/webiste">Website</Link>
            <hr />
            <Link to="/documentation/privacy">Privacy Policy</Link>
            <hr />
            <Link to="/documentation/risk">Risk Statement</Link>
            <hr />
            <Link to="/documentation/cookie">Cookie Policy</Link>
            <hr />
            <Link to="/documentation/trading">Trading Documents</Link>
            <hr />
          </div>
          <div className="documentation__content-info">
            <h1 className="documentation__content-info-heading">Regulation</h1>
            <p>
              NONAME - NONAME LTD is a leading Group of Companies offering
              investment services and activities to its clients since 1987.
              “NONAME LTD” is a brand name used by the following companies:
            </p>
            <div className="documentation__content-info-content">
              <div className="documentation__content-info-content-single">
                <div className="documentation__content-info-content-single-dot"></div>
                <h2>No Name</h2>
                <p>
                  Licensed by the International Financial Service Commission of
                  Belize for providing Brokerage, Consultancy, Advisory
                  Services, as well as trading in securities.
                </p>
              </div>
              <div className="documentation__content-info-content-single">
                <div className="documentation__content-info-content-single-dot"></div>
                <h2>No Name</h2>
                <p>
                  Authorised and regulated by the Cyprus Securities and Exchange
                  Commission (licence number 030/04), the supervisory and
                  regulatory authority for investment services in Cyprus. CySEC
                  is a member of the European Securities and Markets
                  Authorities.
                </p>
              </div>
              <div className="documentation__content-info-content-single">
                <div className="documentation__content-info-content-single-dot"></div>
                <h2>Seldon Investments (Jordan) Ltd</h2>
                <p>
                  Authorised and regulated by the Jordan Securities Commission
                  (JSC) which was established in 1997 as a public institution
                  with financial and administrative autonomy to develop,
                  regulate and monitor Jordan’s capital market to maintain a
                  sound investment environment and protect investors. The JSC is
                  entrusted with developing the capital market in accordance
                  with international standards to secure fairness, safety and
                  attract domestic and foreign investors.
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

export default Regulation;
