import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="getStarted">
      <hr />
      <div className="getStarted__content">
        <h2>Let's Get Started</h2>
        <Link to="/" className="btn__global">
          Open Account
        </Link>
      </div>
      <hr />
    </section>
  );
};

export default GetStarted;
