import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Home() {
  return (
    <div>
      <Link to="/shop">
        <img src={logo} width="25%"></img>
      </Link>
      <h1>Real Quality. Fake Products.</h1>
    </div>
  );
}

export default Home;
