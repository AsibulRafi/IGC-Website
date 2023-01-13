import React from "react";
import GetStarted from "../../Components/GetStarted";
import Hero from "../../Components/Hero";
import images from "../../Constants/images";

const RoyalHighness = () => {
  return (
    <>
      <Hero
        heading="ROYAL HIGHNESS"
        text="FX account for the exclusive trader, who want it tailor-made & designed for high net worth."
        bgImg={images.royalBg}
      />
      <section className="accounts__royal">
        <div className="accounts__royal-content">
          <div className="accounts__royal-content-border">
            <h2>Main Features</h2>
            <ul className="accounts__royal-content-list">
              <li>Dedicated Personal Account Manager</li>
              <li>1 on 1 sessions with an experienced, leading broker</li>
              <li>
                Personal sessions with a professional trading market analyst
              </li>
              <li>Lowest possible round turn commission</li>
            </ul>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default RoyalHighness;
