import "./css/App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import polysvg from "./assets/svg/polygon.svg";

function App() {
  return (
    <div id="main-area">
      <Navbar />
      <div className="content-sections">
        <Section1 />
      </div>
      <div className="content-sections">
        <Section2 />
      </div>
      <img src={polysvg} id="poly-svg"/> 
      <div className="content-sections">
        <Section3 />
      </div>
      <div className="content-sections">
        <Section4 />
      </div>
    </div>
  );
}

export default App;
