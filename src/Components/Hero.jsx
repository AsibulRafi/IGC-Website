import React from "react";

const Hero = ({ heading, text, quote, bgImg }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="hero__wrapper">
        <div className="hero__content">
          <h2>{heading}</h2>
          {text && <p className="hero__content-text">{text}</p>}
          {quote && <p className="hero__content-quote">{quote}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
