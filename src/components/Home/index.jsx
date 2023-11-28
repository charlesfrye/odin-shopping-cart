import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <Link to="/shop">
          <img src={logo} className="logo-image"></img>
        </Link>
        <h1 className="slogan">Real Quality. Fake Products.</h1>
      </div>
    </div>
  );
}

export default Home;
