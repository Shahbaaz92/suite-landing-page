import curve1 from "../assets/pattern-curved-line-1.svg";
function Hero() {
  return (
    <section className="Hero-Container">
      <div className="Hero">
        <h1>
          <span>A</span> super&nbsp;
          <span className="Hero-Check">
            <img
              src={curve1}
              alt="curved line design in hero"
              className="Hero-Curve"
            />
            solution
          </span>{" "}
          <span>for your</span> business.
        </h1>
        <p className="Hero-about">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <button className="Hero-Btn">Request Beta Access</button>
      </div>
    </section>
  );
}
export default Hero;
