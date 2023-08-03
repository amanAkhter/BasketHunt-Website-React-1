import "../css/section2.css";
import png2 from "../assets/images/png2.png";

function Section2() {
  return (
    <div className="section-two">
      {/* Left-Area */}
      <div className="left-section-two">
        <h1>
          Welcome to Business with <br />
          <span>BasketHunt</span>
        </h1>

        <h2>Where we build your Visions</h2>

        <p>
          Welcome to the enriching world of Business With Baskethunt, where
          entrepreneurial aspirations are nurtured, and business intellect
          thrives. Our platform is a haven for aspiring entrepreneurs seeking
          the wisdom of seasoned experts, comprehensive education, and access to
          funding opportunities. For accomplished business leaders, we offer a
          sanctuary of innovation, marketing prowess, and team development,
          enabling ventures to scale new heights. Retail luminaries find solace
          in our inventory acumen, customer retention strategies, and pricing
          artistry.
        </p>

        <p>
          Join us, and let&apos;s embark on an intellectual journey of growth and
          success.
        </p>

        <p>Visit our parent Site <br/>
        <a href="https://www.baskethunt.com/">https://www.baskethunt.com/</a>
        </p>
      </div>
      {/* Right-Area */}
      <div className="right-section-two">
        <img src={png2} alt="Png-2" />
      </div>
    </div>
  );
}

export default Section2;
