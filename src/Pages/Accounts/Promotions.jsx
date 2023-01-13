import React from "react";
import GetStarted from "../../Components/GetStarted";
import Hero from "../../Components/Hero";
import images from "../../Constants/images";

const Promotions = () => {
  return (
    <>
      <Hero
        heading="PROMOTIONS"
        text="Put your trader skills to the test"
        quote="Current Promotions
        $30 Free Account"
        bgImg={images.promotionBg}
      />
      <section className="accounts__promotion">
        <div className="accounts__promotion-box">
          <h2>Put your trader skills to the test</h2>
          <div className="accounts__promotion-box-hr">
            <h4>Current Promotions</h4>
            <hr />
          </div>
          <div className="accounts__promotion-box-account">
            <h1>30$</h1>
            <h3>
              Free
              <br /> Account
            </h3>
          </div>
        </div>
        <h2 className="promotion__heading">Previous Promotions</h2>
        <div className="accounts__promotion-content">
          <div className="accounts__promotion-content-single">
            <div className="accounts__promotion-content-single-wrapper">
              <img src={images.promotionIcon1} alt="promotionIcon" />
              <h4>
                Prediction <br />
                Contest
              </h4>
            </div>
          </div>
          <div className="accounts__promotion-content-single">
            <div className="accounts__promotion-content-single-wrapper">
              <img src={images.promotionIcon2} alt="promotionIcon" />
              <h4>
                Guess the
                <br /> Score
              </h4>
            </div>
          </div>
          <div className="accounts__promotion-content-single">
            <div className="accounts__promotion-content-single-wrapper">
              <img src={images.promotionIcon3} alt="promotionIcon" />
              <h4>
                Demo <br />
                Contest
              </h4>
            </div>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Promotions;
