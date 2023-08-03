import "../css/navbar.css";
import logo from "../assets/svg/logo.svg"

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-heading">
          <img src={logo } alt="Logo"/>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-items">Home</a>
          <a href="#" className="nav-items">Hustle Services</a>
          <a href="#" className="nav-items">Who are you?</a>
          <a href="#" className="nav-items">Accelerate assistance</a>
          <a href="#" className="nav-items">Our Vibes</a>
          <a href="#" className="nav-items">Get in touch</a>
        </div>
        <div className="nav-login">
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
