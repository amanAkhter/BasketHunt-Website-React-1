import "../css/section1.css";
import png1 from "../assets/images/png1.png";

function Section1() {
  return (
    <div className="section-one">
      {/* Left-Area */}
      <div className="left-section-one">
        <h1>ABOVE</h1>
        <h1>BEYOND</h1>
        <h1>TOGETHER</h1>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quo tenetur molestias.
        </p>

        <button>Instant Assistance</button>
      </div>
      {/* Right-Area */}
      <div className="right-section-one">
        <img src={png1} alt="Png-1" className="section-one-img" />
      </div>
    </div>
  );
}

export default Section1;
