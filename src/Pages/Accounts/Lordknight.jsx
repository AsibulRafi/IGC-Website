import React from "react";
import GetStarted from "../../Components/GetStarted";
import Hero from "../../Components/Hero";
import images from "../../Constants/images";

const Lordknight = () => {
  return (
    <>
      <Hero
        heading="Lord & Knight Accounts"
        text="Tailor made your account, Trade your way!"
        quote="Find what fits you the best, and get busy with the best broker around"
        bgImg={images.lordBg}
      />
      <section className="accounts__lord">
        <div className="accounts__lord-table">
          <table>
            <thead>
              <tr>
                <th>LORD</th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td>
                  Trading Account
                  <br />
                  <span>for the heavy trader</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minimum Deposit:</td>
                <td>250$</td>
              </tr>
              <tr>
                <td>Spreads:</td>
                <td>1.1 pips on Majors</td>
              </tr>
              <tr>
                <td>Max Leverage:</td>
                <td>1:800</td>
              </tr>
              <tr>
                <td>Commission:</td>
                <td>No commissions</td>
              </tr>
              <tr>
                <td>Minimum trade volume:</td>
                <td>0.01</td>
              </tr>
              <tr>
                <td>Lot restriction per ticket (FX):</td>
                <td>55</td>
              </tr>
              <tr>
                <td>Hedging:</td>
                <td>Allowed</td>
              </tr>
              <tr>
                <td>Islamic / SWAP:</td>
                <td>Available (Free)</td>
              </tr>
              <tr>
                <td>Negative Balance Protection:</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Personal Account Manager:</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Training:</td>
                <td>Provided</td>
              </tr>
              <tr>
                <td>Step out:</td>
                <td>18%</td>
              </tr>
              <tr>
                <td>Margin call:</td>
                <td>at 100%</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="/" className="btn__global">
                    Try Our Product
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="accounts__lord-table">
          <table>
            <thead>
              <tr>
                <th>KNIGHT</th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td>
                  Trading Account
                  <br />
                  <span>for the heavy trader</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minimum Deposit:</td>
                <td>$3000</td>
              </tr>
              <tr>
                <td>Spreads:</td>
                <td>0 pips on Majors</td>
              </tr>
              <tr>
                <td>Max Leverage:</td>
                <td>1:400</td>
              </tr>
              <tr>
                <td>Commission:</td>
                <td> 10$ round turn</td>
              </tr>
              <tr>
                <td>Minimum trade volume:</td>
                <td>0.02</td>
              </tr>
              <tr>
                <td>Lot restriction per ticket (FX):</td>
                <td>55</td>
              </tr>
              <tr>
                <td>Hedging:</td>
                <td>Allowed</td>
              </tr>
              <tr>
                <td>Islamic / SWAP:</td>
                <td>Available (Free)</td>
              </tr>
              <tr>
                <td>Negative Balance Protection:</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Personal Account Manager:</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Training:</td>
                <td>Some Provided</td>
              </tr>
              <tr>
                <td>Stop out:</td>
                <td>18%</td>
              </tr>
              <tr>
                <td>Margin call:</td>
                <td>at 100%</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="/" className="btn__global">
                    Try Our Product
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Lordknight;
