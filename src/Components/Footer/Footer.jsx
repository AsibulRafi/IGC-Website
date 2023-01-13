import React from "react";
import { Link } from "react-router-dom";
import images from "../../Constants/images";

const Footer = () => {
  return (
    <section
      className="footer"
      style={{ backgroundImage: `url(${images.footerBg})` }}
    >
      <div className="footer__wrapper">
        <div className="footer__link">
          <div className="footer__link-single">
            <h2>About Us</h2>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer__link-single">
            <h2>Account</h2>
            <Link to="/accounts/lordknight">LORD KNIGHT</Link>
            <Link to="/accounts/royalhighness">ROYAL HIGHNESS</Link>
            <Link to="/accounts/promotions">Promotions</Link>
          </div>

          <div className="footer__link-single">
            <h2>Trading</h2>
            <Link to="/forexTrading">Forex Trading</Link>
            <Link to="/cfdTrading">CFD Trading</Link>
            <Link to="/crypto">CRYPTOCURRIENCES</Link>
          </div>
          <div className="footer__link-single">
            <h2>Education</h2>
            <Link to="/education">Webinars</Link>
          </div>
          <div className="footer__link-single">
            <h2>DOCUMENTATION</h2>
            <Link to="/documentation/regulation">Regulation</Link>
            <Link to="/documentation/webiste">Website T&Cs</Link>
            <Link to="/documentation/privacy">Privacy Policy</Link>
            <Link to="/documentation/risk">Risk Statement</Link>
            <Link to="/documentation/cookie">Cookie Policy</Link>
            <Link to="/documentation/trading">Trading Documents</Link>
          </div>
        </div>
        <div className="footer__info">
          <p>
            OQP-FX, is licensed and regulated by Jordan Securities Commission
            (JSC).OQP-FX is offering Forex and CFD trading on gold, oil, soft
            commodities, shares, indices and more.OQP-FX is committed to
            maintain the highest standards of ethical behavior, professionalism,
            integrity, as well as a high level of trust and confidence.Services
            and products offered by OQP-FX are not intended to be used by
            residents of the United States of America, Belize. OQP-FX (WB)
            Global Ltd is the EU registered company facilitating payment
            services to OQP-FX
          </p>
          <h4>Risk Warning</h4>
          <p>
            Contracts for Difference (CFD) are complex financial instruments
            carrying a substantial level of risk, and may not be suitable for
            all investors, as may result in a loss of all invested capital
            rapidly due to leverage. You should consider whether you understand
            how CFDs work, your investment objectives, level of experience, risk
            appetite and, if necessary, seek advice from an independent
            financial advisor. Please read the full Risk Statement
          </p>
        </div>
        <div className="footer__copyright">
          This website is owned and operated by OQP-FX. – All rights reserved ©
          2023
        </div>
      </div>
    </section>
  );
};

export default Footer;
