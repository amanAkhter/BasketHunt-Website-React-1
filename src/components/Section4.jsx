import "../css/section4.css";
import { useEffect } from "react";
import png3 from "../assets/images/png3.png";

function Section2() {

  // Using the useEffect hook with IntersectionObserver to observer when the porgress bar section comes in viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // if entry is intersecting the view play the animation | else remove the animation class -> this will help in playing the animation each time it is scrolled
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    // Querying through elements with progress-bar class and observing 
    const elements = document.querySelectorAll(".progress-bar");
    elements.forEach((element) => {
      observer.observe(element);
    });

    // cleaning up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className="section-four">
      {/* Left-Area */}
      <div className="left-section-four">
        <img src={png3} alt="Png-3" />
      </div>

      {/* Right-Area */}
      <div className="right-section-four">
        <h1>Increase your client for better business </h1>
        <hr />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;
        </p>

        {/* Progress Bar Section */}
        <div className="progress-bar-section">

          <h2>Quarterly Average Traffic</h2>
          <div className="progress-bar-container" >
            <div className="progress-bar" id="progress-bar-quarterly"></div>
          </div>

          <h2>Monthly Average Traffic</h2>
          <div className="progress-bar-container" >
            <div className="progress-bar" id="progress-bar-monthly"></div>
          </div>

          <h2>Daily Average Traffic</h2>
          <div className="progress-bar-container" >
            <div className="progress-bar" id="progress-bar-daily"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
