import React from "react";
import GetStarted from "../Components/GetStarted";
import Hero from "../Components/Hero";
import images from "../Constants/images";

const Contact = () => {
  return (
    <>
      <Hero
        heading="contact us"
        text="we're here to help"
        bgImg={images.ContactBg}
      />
      <section className="contact">
        <h2 className="contact__heading">Get in Touch</h2>
        <div className="contact__content">
          <div className="contact__content-info">
            <div className="contact__content-info-phone">
              <div className="contact__content-info-phone-icon">
                <img src={images.phone} alt="phoneIcon" />
              </div>
              <p>+0000000000</p>
            </div>
            <div className="contact__content-info-email">
              <div className="contact__content-info-email-icon">
                <img src={images.message} alt="emailIcon" />
              </div>
              <p>support@oqp-fx.com</p>
            </div>
          </div>
          <div className="contact__content-social">
            <h2>We're Social</h2>
            <div className="contact__content-social-icon">
              <img src={images.facebook} alt="socialIcon" />
              <img src={images.youtube} alt="socialIcon" />
              <img src={images.twitter} alt="socialIcon" />
              <img src={images.linkedin} alt="socialIcon" />
            </div>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Contact;
