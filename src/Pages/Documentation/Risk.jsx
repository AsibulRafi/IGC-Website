import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../../Components/GetStarted";

const Risk = () => {
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
            <Link to="/documentation/risk" className="link__active">
              Risk Statement
            </Link>
            <hr />
            <Link to="/documentation/cookie">Cookie Policy</Link>
            <hr />
            <Link to="/documentation/trading">Trading Documents</Link>
            <hr />
          </div>
          <div className="documentation__content-info">
            <h1 className="documentation__content-info-heading">
              RISK STATEMENT
            </h1>
            <p>
              Trading in financial instruments is not suitable for many members
              of the public. The possibility exists that funds used for such
              trading in financial instruments sustain a loss of some or all of
              your investment. It is advisable to carefully consider whether
              trading in financial instrument(s) is appropriate for you in light
              of the experience, objectives, financial resources and any other
              relevant circumstances. You should understand all risks involved
              with trading in financial instruments and if necessary, seek for
              an independent advice.
            </p>
            <p>
              Entering into any transactions in financial instruments is carried
              out voluntarily and at your own risk. There are high risks
              involved in trading and profit(s) from trading are not guaranteed
              whereas the past result(s)/historical performance do not
              assure/represent the future results.
            </p>
            <p>
              The risk is high that you can sustain losses/damages to all or
              some of the capital/monies invested. An investment in any
              financial instrument carries a high degree of risk and the money
              that is invested might not remain the same, whereas you undertake
              the risk of sustaining a loss/damage, whilst, at the same time,
              the possibility exists that a profit/return can materialize.
            </p>
            <p>
              Trading on the electronic trading system(s) carries a high risk
              since there is a large exposure to risks associated to the online
              system, including but not limited to the failure of hardware
              and/or software. The result of any system failure may be that your
              request is not executed according to instructions or not executed
              at all. All transactions effected are at your sole risk and you
              shall be solely liable under all circumstances. NONAME and the
              NONAME Group of Companies, will not be held responsible for any
              delays in transmission, delivery or execution of your request(s)
              due to malfunctions of communications facilities or other causes.
            </p>
            <p>
              The market conditions and the operation of the rules of certain
              markets, trading hours, dealing room hours and so forth, may
              increase the risk of loss because of the difficulty to effect
              transactions or liquidate/offset open positions. The Company may
              be unable to execute your instructions at the requested level.
            </p>
            <p>
              Trading with Financial instruments on margin carries a high level
              of risk which can work both, to your advantage and disadvantage
            </p>
            <p>
              In certain cases, the protection of your money transferred for
              purposes of trading in Financial instruments, may have an impact
              in the event of the specific firm/company going
              insolvent/bankrupt. Specific legislation or local rules may govern
              the extent to which you may recover money. In some jurisdictions,
              property/money which has been specifically identifiable as your
              own property/money, will be appropriated in the same manner as
              cash for purposes of distribution in the event of a shortfall.
            </p>
            <p>
              You understand that commissions, fees and other charges may be
              applicable, and as such these charges will affect/reduce the
              profit (if any), or increase the loss. Before trading in financial
              instruments, you should make yourself aware of all charges for
              which you will be liable, whether such charges are at
              predetermined amount or variable.
            </p>
            <p>
              You understand that the profit or loss for transactions in foreign
              currency-denominated contracts will be affected by the
              fluctuations in currency rates when there is a need to convert
              from the currency denomination of the contract into another
              currency.
            </p>
            <p>
              You understand that NONAME nor the NONAME Group of Companies does
              not guarantee access to the Website and/or any of the products
              and/or services to be available at all times, or in any given
              location at any specific time.
            </p>
            <p>
              All transactions effected for your account(s) are at your sole
              risk and you shall be solely liable under all circumstances.
              NONAME and the NONAME Group of Companies will not be held
              responsible for any delays in transmission, delivery or execution
              of your request(s) due to malfunctions of communications
              facilities or other causes.
            </p>
            <p>
              The Company may, in its reasonable opinion, determine that an
              emergency or an exceptional market condition exists (a “Force
              Majeure Event”). A Force Majeure Event shall include, but is not
              limited to the following – “any act, event or occurrence
              (including without limitation any strike, riot or commotion,
              interruption or power supply or electronic or communication
              equipment failure).
            </p>
            <p>
              You understand that there is the risk that the Financial
              instruments may be or become the subject to tax and/or any other
              applicable due amount(s) as per legislation, which will become
              your responsibility to carry out.
            </p>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default Risk;
