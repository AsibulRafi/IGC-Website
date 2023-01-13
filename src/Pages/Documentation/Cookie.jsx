import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../../Components/GetStarted";

const Cookie = () => {
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
            <Link to="/documentation/cookie" className="link__active">
              Cookie Policy
            </Link>
            <hr />
            <Link to="/documentation/trading">Trading Documents</Link>
            <hr />
          </div>
          <div className="documentation__content-info">
            <h1 className="documentation__content-info-heading">
              COOKIE POLICY
            </h1>
            <p>
              OQP-FX and the Group of Companies within OQP-FX, (collectively as
              “OQP-FX”, “we” and “us”) has prepared this “cookie policy” which
              provides overview and explanation related to the online use of the
              website: www.OQP-FX.com
            </p>
            <p>
              OQP-FX is committed to delivering the best possible service to
              you, and we provide clear information about how we use and store
              cookies from our website on your device(s).
            </p>
            <p>
              By continuing to use the OQP-FX website, you confirm that you are
              of legal age, and expressly agree and consent to OQP-FX’s cookie
              policy and privacy policy.
            </p>
            <p>
              As an overview, OQP-FX’s website uses cookies for statistical
              purposes, improving the quality of services to the user, verifying
              your identity and detecting which country you are located in,
              checking browser type and device, may be used to track which site
              the user was referred from, allows customization of content
              accordingly.
            </p>
            <h2>WHAT ARE COOKIES?</h2>
            <p>
              Cookies are small files that are placed on your device via your
              web browser when you visit OQP-FX’s website. Information is
              stored, such as the specific preferences when using the website.
              It is to be noted that you can configure your browser not to save
              any or only certain cookies on your device. Cookies can also help
              ensure the marketing you see online is more relevant to you and
              your interests, and assists with your navigation.
            </p>
            <h2>TYPES OF COOKIES AND LENGTH OF STORING COOKIES:</h2>
            <p>
              There are different types of cookies such as ID cookies which does
              not expire when you close your browser, and persistent cookies
              with remains on your hard drive for a period of time, Analytical
              cookies which collect information about past visits in order to
              determine visits to the website, add-ons, and other information
              that assist us in improving the services offered by OQP-FX, and
              Third Party Service Cookies which is related to social sharing,
              video and other services OQP-FX may offer run by other companies,
              for example: Facebook, YouTube, etc.
            </p>
            <h2>YOUR CHOICE WITH RESPECT TO COOKIES:</h2>
            <p>
              If you do not wish to receive cookies, you may be able to change
              the settings of your browser to refuse all cookies or to have your
              device notify you each time a cookie is sent to it, and thereby
              the choice to accept it or not. It is strongly recommended that
              you allow cookies on our website to ensure you have best possible
              experience. Disabling the cookies may result in reduced
              performance of the website and trading platform, and may also
              impair the quality of the services that we provide you in relation
              to your account with us.
            </p>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Cookie;
