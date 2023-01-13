import React from "react";
import GetStarted from "../Components/GetStarted";
import Hero from "../Components/Hero";
import images from "../Constants/images";

const Education = () => {
  return (
    <>
      <Hero heading="Forex Webinars" bgImg={images.webniarsBg} />
      <section className="education__box">
        <div className="education__box-wrapper">
          <div className="education__box-content">
            <h2>
              How to Join our
              <br /> webinars
            </h2>
            <ul>
              <li>Sign in to our Personal User area</li>
              <li>
                Locate the "webinars button" in the Personal area and click it
              </li>
              <li>Register the Webinar of your choice ang get started!</li>
            </ul>
          </div>
          <div className="education__box-info">
            <div className="education__box-info-content">
              <h2>
                Not registered to the <br />
                Personal area yet?
              </h2>
              <a href="/" className="btn__global">
                Click Here
              </a>
            </div>
            <p>
              Keep in mind – Registering to one of our Webinars, doesn’t mean
              registering <br />
              to all of our Webinars. So if you got more you want to be a part
              of – hurry up,
              <br /> because seats are limited
            </p>
          </div>
        </div>
      </section>
      <section
        className="webinars"
        style={{ backgroundImage: `url(${images.webniarsImg})` }}
      >
        <div className="webinars__wrapper">
          <h4>29 April</h4>
          <div className="webinars__content">
            <div className="webinars__content-heading">
              <h1>
                Introducing <br />
                "High risk
                <br /> trading"
              </h1>
              <p>
                Join and see how to adapt <br />
                your character and volumes <br />
                to a high risk trading.
              </p>
            </div>
            <div className="webinars__content-info">
              <h2 className="webinars__content-info-single">
                SATURDAY
                <br /> at 19:00 (EET)
              </h2>
              <h2 className="webinars__content-info-single">
                Webinar Duration:
                <br /> up to 50 min
              </h2>
              <h2 className="webinars__content-info-single">
                Instructor: <br />
                Adam Mackey
              </h2>
              <h2 className="webinars__content-info-single">
                Language:
                <br /> English
              </h2>
            </div>
          </div>
          <a href="/" className="btn__global">
            Register Now
          </a>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Education;
