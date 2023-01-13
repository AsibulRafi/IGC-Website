import React from "react";
import GetStarted from "../Components/GetStarted";
import Hero from "../Components/Hero";
import images from "../Constants/images";

const About = () => {
  return (
    <>
      <Hero
        heading="OQP-FX"
        text="Your Broker for all Forex & CFD need: About us."
        quote="The Trading Market is big. Our aspirations are bigger."
        bgImg={images.aboutBg}
      />
      <div className="about__text">
        <p>
          When we established OQP-FX (PSF Brokers), 30+ years ago, we had one
          goal in mind: to make the opportunities of investing in the world's
          financial markets available for anyone, anywhere, anytime.
        </p>
        <p>
          But as we progressed, we understood that our mission statement must
          broad itself. Our obligation to the clients could not stop at the
          possibility of an advanced & available worldwide trading platform, but
          also to do it in the most fair, transparent, efficient and safe
          manner, and therefore, become a beacon of investor's security,
          insurance and safety in a sometimes dark industry.
        </p>
        <p>
          We set our mind, as we still do on a daily base, to the
          interdisciplinary of both facilitating our investors access to the
          global markets, and protecting their funds from extreme market
          conditions (whether by a global impact or by the investors own doing),
          at the same time.
        </p>
        <p>
          As part of this Modus operandi, and the company's mission statement,
          we have established branches at key points around the world, where we
          provide our investors with personal service and solutions that enable
          them to enjoy endless & real-time possibilities of trading with an
          experienced, leading broker. Our investors can consult, learn and
          improve daily, and the advanced ones can enjoy unique technologies and
          innovative trading options).
        </p>
        <p>
          The last decade was characterized by a considerable crisis in the
          financial trading industry. Many companies were gone, including
          publicly listed with a large client base ones; There were several
          reasons for their collapse - from the inability to offer investors a
          wide range of investments and higher awareness of virtual currencies
          to the absence of online reliable and safe controls - but the main
          one, was always the lack of placing the investor interests first, way
          ahead of any other interest, or quick gain.
        </p>
      </div>
      <div
        className="about__info"
        style={{ backgroundImage: `url(${images.aboutImg})` }}
      >
        <div className="about__info__wrapper">
          <h4>
            “Trading doesn't just reveal your character, it also builds <br />
            it if you stay in the game long enough.”
          </h4>
          <h1>YVAN BYEAJEE</h1>
        </div>
      </div>

      <section className="about__content">
        <hr />
        <h2>
          Paradigm Shift: <br />
          How to cultivate equanimity in the face of market uncertainty
        </h2>
        <div className="about__content-boxs">
          <div className="about__content-flex-box">
            <div className="about__content-flex-box-border">
              <h1>€ 100.000.000</h1>
              <p>
                Company capital
                <br />
                (Actual Tier 1)
              </p>
            </div>
          </div>
          <div className="about__content-flex-box">
            <div className="about__content-flex-box-border">
              <h1>15+</h1>
              <p>
                Successful years in
                <br />
                the industry
              </p>
            </div>
          </div>
          <div className="about__content-flex-box">
            <div className="about__content-flex-box-border">
              <h1>60+</h1>
              <p>
                International
                <br />
                awards
              </p>
            </div>
          </div>
          <div className="about__content-flex-box">
            <div className="about__content-flex-box-border">
              <h1>7</h1>
              <p>
                Global
                <br />
                sponsorships
              </p>
            </div>
          </div>
          <div className="about__content-flex-box">
            <div className="about__content-flex-box-border">
              <h1>4</h1>
              <p>
                Trading <br />
                platforms
              </p>
            </div>
          </div>
          <div className="about__content-flex-box">
            <div className="about__content-flex-box-border">
              <h1>6</h1>
              <p>
                Asset <br />
                classes
              </p>
            </div>
          </div>
          <div className="about__content-flex-box">
            <div className="about__content-flex-box-border">
              <h1>&lt;11.06 ms</h1>
              <p>
                Average execution
                <br /> time
              </p>
            </div>
          </div>
          <div className="about__content-flex-box">
            <div className="about__content-flex-box-border">
              <h1> &lt;7000</h1>
              <p>
                Orders executed
                <br /> per second
              </p>
            </div>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default About;
